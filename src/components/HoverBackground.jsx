import { useEffect, useRef } from "react";

// Full-page dot grid behind the content. Dots near the pointer light up in the
// accent colour and drift away from it, with a soft glow following the cursor.
// Static (no animation) on touch screens and when reduced motion is preferred.
const GAP = 30;
const RADIUS = 170;
const PUSH = 9;

function readColors() {
  const cs = getComputedStyle(document.documentElement);
  return {
    dot: cs.getPropertyValue("--bg-dot").trim() || "rgba(232,236,243,.08)",
    accent: cs.getPropertyValue("--accent").trim() || "#f5b83d",
    glow: cs.getPropertyValue("--bg-glow").trim() || "rgba(245,184,61,.07)",
  };
}

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export default function HoverBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const still =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(hover: none)").matches;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let colors = readColors();
    let rgb = hexToRgb(colors.accent);
    const target = { x: -9999, y: -9999 };
    const cur = { x: -9999, y: -9999 };
    let strength = 0; // fades the effect in/out when the pointer enters/leaves
    let targetStrength = 0;
    let raf = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      // cursor glow
      if (strength > 0.01) {
        const g = ctx.createRadialGradient(cur.x, cur.y, 0, cur.x, cur.y, RADIUS * 2.2);
        g.addColorStop(0, colors.glow);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.globalAlpha = strength;
        ctx.fillStyle = g;
        ctx.fillRect(cur.x - RADIUS * 2.2, cur.y - RADIUS * 2.2, RADIUS * 4.4, RADIUS * 4.4);
        ctx.globalAlpha = 1;
      }
      // dots
      const ox = (w % GAP) / 2;
      ctx.fillStyle = colors.dot;
      const lit = [];
      for (let x = ox; x < w + GAP; x += GAP) {
        for (let y = GAP / 2; y < h + GAP; y += GAP) {
          const dx = x - cur.x;
          const dy = y - cur.y;
          const d2 = dx * dx + dy * dy;
          if (strength > 0.01 && d2 < RADIUS * RADIUS) {
            const d = Math.sqrt(d2) || 1;
            const f = (1 - d / RADIUS) ** 2 * strength;
            lit.push([x + (dx / d) * PUSH * f, y + (dy / d) * PUSH * f, f]);
          } else {
            ctx.fillRect(x - 0.9, y - 0.9, 1.8, 1.8);
          }
        }
      }
      for (const [x, y, f] of lit) {
        ctx.fillStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${0.18 + f * 0.82})`;
        const r = 1 + f * 1.6;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const tick = () => {
      cur.x += (target.x - cur.x) * 0.18;
      cur.y += (target.y - cur.y) * 0.18;
      strength += (targetStrength - strength) * 0.12;
      draw();
      const settled =
        Math.abs(target.x - cur.x) < 0.3 &&
        Math.abs(target.y - cur.y) < 0.3 &&
        Math.abs(targetStrength - strength) < 0.01;
      raf = settled ? 0 : requestAnimationFrame(tick);
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      if (e.pointerType === "touch") return;
      if (cur.x < -1000) {
        cur.x = e.clientX;
        cur.y = e.clientY;
      }
      target.x = e.clientX;
      target.y = e.clientY;
      targetStrength = 1;
      kick();
    };
    const onLeave = () => {
      targetStrength = 0;
      kick();
    };

    const themeObs = new MutationObserver(() => {
      colors = readColors();
      rgb = hexToRgb(colors.accent);
      draw();
    });
    themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    resize();
    window.addEventListener("resize", resize);
    if (!still) {
      window.addEventListener("pointermove", onMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onLeave);
      window.addEventListener("blur", onLeave);
    }
    return () => {
      cancelAnimationFrame(raf);
      themeObs.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
    };
  }, []);

  return <canvas ref={ref} className="hover-bg" aria-hidden />;
}
