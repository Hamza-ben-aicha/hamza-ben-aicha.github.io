import { useRef } from "react";
import { m, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";

// A layered portrait that tilts in 3D with the pointer: back panel, halo,
// the cut-out photo popping out of the frame, a name plate and floating tags.
export default function Portrait3D({ role }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 140, damping: 18, mass: 0.6 });
  const sy = useSpring(py, { stiffness: 140, damping: 18, mass: 0.6 });
  const rotateY = useTransform(sx, [0, 1], [-16, 16]);
  const rotateX = useTransform(sy, [0, 1], [12, -12]);
  const glareX = useTransform(sx, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(sy, [0, 1], ["0%", "100%"]);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,.22), transparent 55%)`;

  const onMove = (e) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <div className="p3d" ref={ref} onPointerMove={onMove} onPointerLeave={onLeave}>
      <m.div className="p3d__card" style={reduce ? undefined : { rotateX, rotateY }}>
        <div className="p3d__back" aria-hidden>
          <span className="p3d__grid" />
        </div>
        <span className="p3d__halo" aria-hidden />
        <img
          className="p3d__person"
          src="me-cutout.webp"
          alt="Portrait of Hamza Ben Aicha"
          width="720"
          height="877"
          loading="lazy"
        />
        <div className="p3d__plate">
          <strong>Hamza Ben Aicha</strong>
          <span>{role}</span>
        </div>
        <span className="p3d__tag p3d__tag--a" aria-hidden>
          NestJS
        </span>
        <span className="p3d__tag p3d__tag--b" aria-hidden>
          Flutter
        </span>
        <span className="p3d__tag p3d__tag--c" aria-hidden>
          Spring Boot
        </span>
        {!reduce && <m.span className="p3d__glare" style={{ background: glare }} aria-hidden />}
      </m.div>
    </div>
  );
}
