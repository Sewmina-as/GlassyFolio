"use client";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import { nav, profile } from "@/lib/data";

/**
 * Navbar — Sticky navigation bar with scroll-aware active section highlighting.
 * Uses IntersectionObserver to track which section is currently in view.
 */
export default function Navbar() {
  const [active, setActive] = useState<string>("Home");

  useEffect(() => {
    const ids = nav.map((n) => n.toLowerCase());
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(nav[ids.indexOf(e.target.id)]);
        }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className="nav glass">
      <a href="#home" className="brand">
        <span className="logo">{profile.initials[0]}</span>
        <span>
          <strong>{profile.name}</strong>
          <small>{profile.role}</small>
        </span>
      </a>
      <nav aria-label="Primary">
        {nav.map((n) => (
          <a
            key={n}
            href={`#${n.toLowerCase()}`}
            className={active === n ? "active" : ""}
          >
            {n}
          </a>
        ))}
      </nav>
      <a href="#contact" className="btn btn-light">
        Let&apos;s Talk <Icon name="arrow" size={15} />
      </a>
    </header>
  );
}
