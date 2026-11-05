"use client";
import { useState } from "react";
import { siteConfig } from "@/lib/config";

/**
 * Portrait — Displays your profile picture in the hero section.
 *
 * How it works:
 *  1. Tries to load the image at the path set in config (default: /dp.jpeg).
 *  2. Falls back to showing your initials if the image can't be loaded.
 *
 * To change your photo:
 *  → Replace the image file in /public and update `portraitPath` in config.ts
 */
export default function Portrait() {
  const [failed, setFailed] = useState(false);
  const { name, initials, portraitPath } = siteConfig.profile;

  if (failed) {
    return (
      <div className="portrait-fallback" role="img" aria-label="Portrait placeholder">
        <span>{initials}</span>
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      className="portrait-img"
      src={portraitPath}
      alt={name}
      loading="eager"
      onError={() => setFailed(true)}
    />
  );
}
