import { useState, type FormEvent } from "react";
import { Arrow } from "./Shared";

interface FormState {
  name: string;
  email: string;
  organisation: string;
  message: string;
  honeypot: string; // hidden spam trap
}

const initialState: FormState = {
  name: "",
  email: "",
  organisation: "",
  message: "",
  honeypot: "",
};

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Silently drop bot submissions that fill the honeypot field.
    if (form.honeypot) return;

    setStatus("submitting");
    try {
      // Replace with your real endpoint (Formspree, Resend, your own API, etc.)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          organisation: form.organisation,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <form
      onSubmit={submit}
      className="rounded-2xl border border-black/10 bg-white p-8 shadow-xl"
    >
      <h3 className="mb-6 text-2xl font-semibold tracking-[-.05em]">
        Send us a message
      </h3>

      {/* Honeypot — hidden from real users, visible to bots that auto-fill all fields */}
      <input
        type="text"
        name="company_website"
        value={form.honeypot}
        onChange={(e) => update("honeypot", e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid gap-5">
        <label htmlFor="contact-name" className="grid gap-2 text-sm font-bold">
          Name
          <input
            id="contact-name"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="rounded-lg border border-black/20 bg-white px-4 py-3 text-base font-normal outline-none transition-all duration-300 focus:border-[#8C1E2D] focus:ring-2 focus:ring-[#8C1E2D]/10"
            placeholder="Your name"
          />
        </label>

        <label htmlFor="contact-email" className="grid gap-2 text-sm font-bold">
          Email
          <input
            id="contact-email"
            required
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="rounded-lg border border-black/20 bg-white px-4 py-3 text-base font-normal outline-none transition-all duration-300 focus:border-[#8C1E2D] focus:ring-2 focus:ring-[#8C1E2D]/10"
            placeholder="your@email.com"
          />
        </label>

        <label htmlFor="contact-org" className="grid gap-2 text-sm font-bold">
          Organisation
          <input
            id="contact-org"
            value={form.organisation}
            onChange={(e) => update("organisation", e.target.value)}
            className="rounded-lg border border-black/20 bg-white px-4 py-3 text-base font-normal outline-none transition-all duration-300 focus:border-[#8C1E2D] focus:ring-2 focus:ring-[#8C1E2D]/10"
            placeholder="Company or organization name"
          />
        </label>

        <label htmlFor="contact-message" className="grid gap-2 text-sm font-bold">
          How can we help?
          <textarea
            id="contact-message"
            required
            rows={4}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            className="resize-none rounded-lg border border-black/20 bg-white px-4 py-3 text-base font-normal outline-none transition-all duration-300 focus:border-[#8C1E2D] focus:ring-2 focus:ring-[#8C1E2D]/10"
            placeholder="Tell us about your project or inquiry"
          />
        </label>

        <button
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#8C1E2D] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#6f1724] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending…" : (
            <>
              Send inquiry <Arrow />
            </>
          )}
        </button>

        <div aria-live="polite">
          {status === "success" && (
            <p className="text-sm font-medium text-[#8C1E2D]">
              Thank you — we've received your message and will be in touch shortly.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm font-medium text-red-600">
              Something went wrong sending your message. Please try again, or
              email us directly at info@2mlconsulting.com.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
