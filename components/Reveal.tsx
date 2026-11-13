"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * Fades a block in the first time it reaches the viewport.
 *
 * `stagger` makes the children arrive one after another instead of together;
 * the delays live in globals.css so the timing is a design decision, not a
 * number buried in a component.
 *
 * Anyone who asks for reduced motion gets the content with no animation at
 * all — globals.css handles that, and the observer still marks it visible so
 * nothing can be left hidden.
 */

type Props = {
  children: ReactNode;
  as?: ElementType;
  stagger?: boolean;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
};

export function Reveal({
  children,
  as: Tag = "div",
  stagger = false,
  className,
  style,
  id,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      // nothing to observe with, so just show it on the next frame
      const id = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(id);
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const base = stagger ? "reveal-stagger" : "reveal";
  const classes = [base, shown ? "is-in" : "", className].filter(Boolean).join(" ");

  return (
    <Tag ref={ref} className={classes} style={style} id={id}>
      {children}
    </Tag>
  );
}
