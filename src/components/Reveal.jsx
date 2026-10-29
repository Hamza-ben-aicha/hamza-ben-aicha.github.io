import { m, useReducedMotion } from "motion/react";

const ease = [0.22, 1, 0.36, 1];

// Section heading: the text slides up from behind a mask when it scrolls into view.
export function Heading({ as: Tag = "h2", id, children, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <Tag id={id} className={`heading ${className}`}>
      <span className="heading__mask">
        <m.span
          className="heading__text"
          initial={reduce ? false : { y: "110%" }}
          whileInView={{ y: "0%" }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 0.9, ease }}
        >
          {children}
        </m.span>
      </span>
    </Tag>
  );
}

// Gentle rise-in for blocks of content.
export function Reveal({ children, delay = 0, y = 22, className = "", as = "div", ...rest }) {
  const reduce = useReducedMotion();
  const M = m[as];
  return (
    <M
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, ease, delay }}
      {...rest}
    >
      {children}
    </M>
  );
}
