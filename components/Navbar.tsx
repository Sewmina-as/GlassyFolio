"use client";
import { useEffect, useState, useRef } from "react";
import Icon from "./Icon";
import { nav, profile } from "@/lib/data";

/**
 * Navbar — Sticky navigation bar with mobile responsive drawer
 * and scroll-aware active section highlighting.
 */
export default function Navbar() {
  const [active, setActive] = useState<string>("Home");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

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

  // Close mobile menu on Escape key or outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside, { passive: true });

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="nav-wrapper" ref={wrapperRef}>
      <header className="nav glass">
        <a href="#home" className="brand" onClick={handleLinkClick}>
          <span className="logo">{profile.initials[0]}</span>
          <span className="brand-text">
            <strong>{profile.name}</strong>
            <small>{profile.role}</small>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Primary" className="nav-desktop">
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

        <div className="nav-actions">
          <a href="#contact" className="btn btn-light nav-cta-desktop">
            Let&apos;s Talk <Icon name="arrow" size={15} />
          </a>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-drawer"
          >
            <Icon name={isOpen ? "close" : "menu"} size={19} />
          </button>
        </div>
      </header>

      {/* Frosted Glass Mobile Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`mobile-menu glass ${isOpen ? "open" : ""}`}
        aria-hidden={!isOpen}
      >
        <nav aria-label="Mobile Navigation" className="mobile-nav-links">
          {nav.map((n) => (
            <a
              key={n}
              href={`#${n.toLowerCase()}`}
              className={`mobile-nav-item ${active === n ? "active" : ""}`}
              onClick={handleLinkClick}
            >
              <span>{n}</span>
              <Icon name="arrow" size={14} />
            </a>
          ))}
        </nav>
        <div className="mobile-menu-cta">
          <a
            href="#contact"
            className="btn btn-dark wide"
            onClick={handleLinkClick}
          >
            Let&apos;s Talk <Icon name="arrow" size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
