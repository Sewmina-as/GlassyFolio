"use client";
import { useEffect, useRef, type ReactNode } from "react";

/**
 * Reveal — Wrapper component that animates sections into view on scroll.
 *
 * Uses IntersectionObserver to add an "in" class when the element enters
 * the viewport. The animation is disabled when the user prefers reduced
 * motion (handled via CSS).
 */
export default function Reveal({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id={id} className={`panel reveal ${className}`}>
      {children}
    </section>
  );
}
