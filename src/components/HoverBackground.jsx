import { useEffect, useRef } from "react";

// 3D floor behind the hero: an isometric grid of squares.
// Squares near the mouse rise up as little blocks and sink back when it moves on.
const TW = 64; // tile width on screen
const TH = TW / 2; // tile height (isometric)
const RADIUS = 3.2; // in tiles
const MAX_H = 46; // max block height in px

function readColors() {
  const cs = getComputedStyle(document.documentElement);
  const v = (name, fb) => cs.getPropertyValue(name).trim() || fb;
  return {
    line: v("--floor-line", "rgba(232,236,243,.06)"),
    top: v("--floor-top", "245,184,61"),
    left: v("--floor-left", "196,138,28"),
    right: v("--floor-right", "150,104,18"),
    edge: v("--floor-edge", "255,214,130"),
  };
}

export default function HoverBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const touchOnly = window.matchMedia("(hover: none)").matches;

    let w = 0;
    let h = 0;
    let colors = readColors();
    let raf = 0;
    let mouse = null; // {x, y} in viewport px, null when outside
    const heights = new Map(); // "i,j" -> current height

    const origin = () => ({ ox: w / 2, oy: -h });
    const toScreen = (i, j, o) => [o.ox + (i - j) * (TW / 2), o.oy + (i + j) * (TH / 2)];
    const toGrid = (x, y, o) => {
      const u = (x - o.ox) / (TW / 2);
      const v = (y - o.oy) / (TH / 2);
      return [(u + v) / 2, (v - u) / 2];
    };

    const host = canvas.parentElement;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = host.clientWidth;
      h = host.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };

    const drawFloor = (o) => {
      const corners = [
        toGrid(0, 0, o),
        toGrid(w, 0, o),
        toGrid(0, h + MAX_H, o),
        toGrid(w, h + MAX_H, o),
      ];
      const is = corners.map((c) => c[0]);
      const js = corners.map((c) => c[1]);
      const i0 = Math.floor(Math.min(...is)) - 1;
      const i1 = Math.ceil(Math.max(...is)) + 1;
      const j0 = Math.floor(Math.min(...js)) - 1;
      const j1 = Math.ceil(Math.max(...js)) + 1;
      ctx.strokeStyle = colors.line;
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = i0; i <= i1; i++) {
        const [ax, ay] = toScreen(i, j0, o);
        const [bx, by] = toScreen(i, j1, o);
        ctx.moveTo(ax, ay);
        ctx.lineTo(bx, by);
      }
      for (let j = j0; j <= j1; j++) {
        const [ax, ay] = toScreen(i0, j, o);
        const [bx, by] = toScreen(i1, j, o);
        ctx.moveTo(ax, ay);
        ctx.lineTo(bx, by);
      }
      ctx.stroke();
    };

    const poly = (pts, fill) => {
      ctx.beginPath();
      ctx.moveTo(pts[0][0], pts[0][1]);
      for (let k = 1; k < pts.length; k++) ctx.lineTo(pts[k][0], pts[k][1]);
      ctx.closePath();
      ctx.fillStyle = fill;
      ctx.fill();
    };

    const drawBlock = (i, j, z, o) => {
      const f = Math.min(z / MAX_H, 1);
      const [ax, ay] = toScreen(i, j, o); // back
      const [bx, by] = toScreen(i + 1, j, o); // right
      const [cx, cy] = toScreen(i + 1, j + 1, o); // front
      const [dx, dy] = toScreen(i, j + 1, o); // left
      const a = 0.6 + f * 0.4;
      // left and right side faces
      poly([[dx, dy - z], [cx, cy - z], [cx, cy], [dx, dy]], `rgba(${colors.left},${a})`);
      poly([[cx, cy - z], [bx, by - z], [bx, by], [cx, cy]], `rgba(${colors.right},${a})`);
      // top face
      poly([[ax, ay - z], [bx, by - z], [cx, cy - z], [dx, dy - z]], `rgba(${colors.top},${0.45 + f * 0.55})`);
      // highlight on the top edges
      ctx.strokeStyle = `rgba(${colors.edge},${0.2 + f * 0.6})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(dx, dy - z);
      ctx.lineTo(ax, ay - z);
      ctx.lineTo(bx, by - z);
      ctx.stroke();
    };

    function draw() {
      const o = origin();
      ctx.clearRect(0, 0, w, h);
      drawFloor(o);
      // draw blocks back to front so nearer ones cover farther ones
      const blocks = [];
      heights.forEach((z, key) => {
        if (z < 0.4) return;
        const [i, j] = key.split(",").map(Number);
        blocks.push([i, j, z]);
      });
      blocks.sort((p, q) => p[0] + p[1] - (q[0] + q[1]) || p[0] - q[0]);
      for (const [i, j, z] of blocks) drawBlock(i, j, z, o);
    }

    const tick = () => {
      const o = origin();
      const targets = new Map();
      if (mouse) {
        const [mi, mj] = toGrid(mouse.x, mouse.y, o);
        const r = Math.ceil(RADIUS) + 1;
        for (let i = Math.floor(mi) - r; i <= Math.floor(mi) + r; i++) {
          for (let j = Math.floor(mj) - r; j <= Math.floor(mj) + r; j++) {
            const d = Math.hypot(i + 0.5 - mi, j + 0.5 - mj);
            if (d < RADIUS) {
              // step the heights so the blocks look like stairs rising to the cursor
              const t = 1 - d / RADIUS;
              targets.set(`${i},${j}`, Math.round(t * t * 4) * (MAX_H / 4));
            }
          }
        }
      }
      let moving = false;
      targets.forEach((_, key) => {
        if (!heights.has(key)) heights.set(key, 0);
      });
      heights.forEach((z, key) => {
        const t = targets.get(key) || 0;
        const nz = z + (t - z) * 0.16;
        if (Math.abs(t - nz) > 0.3) moving = true;
        if (t === 0 && nz < 0.3) heights.delete(key);
        else heights.set(key, Math.abs(t - nz) <= 0.3 ? t : nz);
      });
      draw();
      raf = moving ? requestAnimationFrame(tick) : 0;
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      if (e.pointerType === "touch") return;
      const r = host.getBoundingClientRect();
      mouse = { x: e.clientX - r.left, y: e.clientY - r.top };
      kick();
    };
    const onLeave = () => {
      mouse = null;
      kick();
    };

    const themeObs = new MutationObserver(() => {
      colors = readColors();
      draw();
    });
    themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    const ro = new ResizeObserver(resize);
    ro.observe(host);
    resize();
    if (!touchOnly) {
      host.addEventListener("pointermove", onMove, { passive: true });
      host.addEventListener("pointerleave", onLeave);
      window.addEventListener("blur", onLeave);
    }
    return () => {
      cancelAnimationFrame(raf);
      themeObs.disconnect();
      ro.disconnect();
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
    };
  }, []);

  return <canvas ref={ref} className="hover-bg" aria-hidden />;
}
