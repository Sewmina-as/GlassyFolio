"use client";
import { useState, type FormEvent } from "react";
import Icon from "./Icon";
import { services } from "@/lib/data";

/**
 * ContactForm — Client-side contact form with validation and feedback.
 *
 * Currently uses a client-side mock submission. To connect to a real backend:
 *  1. Create an API route at app/api/contact/route.ts
 *  2. Replace the TODO below with a fetch() call to your API
 *  3. Add your email service API key to .env.local
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);

    // TODO: Replace with actual API call
    // const formData = new FormData(form);
    // await fetch("/api/contact", { method: "POST", body: formData });

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 600));

    setSent(true);
    setSending(false);
    form.reset();
  };

  return (
    <form className="form glass" onSubmit={onSubmit}>
      <div className="row">
        <input
          name="name"
          placeholder="Your Name"
          aria-label="Your name"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          aria-label="Your email"
          required
        />
      </div>
      <select name="project" aria-label="Project type" defaultValue="">
        <option value="" disabled>
          Select Project Type
        </option>
        {services.map((s) => (
          <option key={s.title} value={s.title}>
            {s.title}
          </option>
        ))}
      </select>
      <textarea
        name="message"
        rows={4}
        placeholder="Your Message"
        aria-label="Your message"
        required
      />
      <button
        className="btn btn-dark wide"
        type="submit"
        disabled={sending}
      >
        {sending ? "Sending..." : "Send Message"}{" "}
        <Icon name="send" size={15} />
      </button>
      <p className="sent" role="status">
        {sent
          ? "Thanks — your message is in. I'll reply within two working days."
          : ""}
      </p>
    </form>
  );
}
