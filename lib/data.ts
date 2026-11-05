// =============================================================================
// data.ts — Re-exports config values for use across components.
//
// This file bridges the central config (config.ts) with the components.
// Users should edit config.ts — NOT this file.
// =============================================================================

import { siteConfig } from "./config";

export const profile = siteConfig.profile;
export const nav = siteConfig.nav;
export const brands = siteConfig.brands;
export const stats = siteConfig.about.stats;
export const services = siteConfig.services;
export const tools = siteConfig.tools;
export const projects = siteConfig.projects;
export const steps = siteConfig.steps;
export const testimonials = siteConfig.testimonials;
export const hero = siteConfig.hero;
export const about = siteConfig.about;
export const socials = siteConfig.socials;
export const footer = siteConfig.footer;
