"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Icon from "./Icon";
import type { Testimonial } from "@/lib/config";

interface TestimonialsSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSlider({
  testimonials,
}: TestimonialsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const total = testimonials.length;

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.children;
    const target = cards[index] as HTMLElement;
    if (target) {
      track.scrollTo({
        left: target.offsetLeft - track.offsetLeft,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  }, []);

  const handlePrev = () => {
    const prev = currentIndex > 0 ? currentIndex - 1 : total - 1;
    scrollTo(prev);
  };

  const handleNext = () => {
    const next = currentIndex < total - 1 ? currentIndex + 1 : 0;
    scrollTo(next);
  };

  // Sync index on manual touch / scroll swipe
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const scrollLeft = track.scrollLeft;
        const width = track.clientWidth;
        const newIndex = Math.round(scrollLeft / (width * 0.85));
        if (newIndex >= 0 && newIndex < total) {
          setCurrentIndex(newIndex);
        }
      }, 50);
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      track.removeEventListener("scroll", handleScroll);
    };
  }, [total]);

  return (
    <div className="slider">
      <div className="testimonial-track" ref={trackRef}>
        {testimonials.map((t, idx) => (
          <figure
            key={t.name}
            className={`card quote testimonial-card ${
              idx === currentIndex ? "active-card" : ""
            }`}
          >
            <blockquote>{t.quote}</blockquote>
            <figcaption>
              <span className="avatar">
                {t.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}
              </span>
              <span>
                <b>{t.name}</b>
                <small>{t.role}</small>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="slider-controls">
        {/* Dot Indicators */}
        <div className="slider-dots" role="tablist" aria-label="Testimonial slides">
          {testimonials.map((t, idx) => (
            <button
              key={t.name}
              type="button"
              role="tab"
              aria-selected={idx === currentIndex}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`slider-dot ${idx === currentIndex ? "active" : ""}`}
              onClick={() => scrollTo(idx)}
            />
          ))}
        </div>

        {/* Prev / Next Buttons */}
        <div className="arrows">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={handlePrev}
            className="arrow-btn"
          >
            <Icon name="chevL" size={16} />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={handleNext}
            className="arrow-btn"
          >
            <Icon name="chevR" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
