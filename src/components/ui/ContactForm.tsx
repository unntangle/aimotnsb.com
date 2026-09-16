"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Check, Send } from "lucide-react";

const subjects = [
  "Membership enquiry",
  "Partnership proposal",
  "Media / press",
  "Event registration",
  "Something else",
];

export default function ContactForm() {
  const params = useSearchParams();

  // Values handed over from elsewhere on the site, e.g. the newsletter strip.
  const prefillEmail = params.get("email")?.trim() ?? "";
  const prefillSubject = params.get("subject")?.trim() ?? "";

  const nameRef = useRef<HTMLInputElement>(null);

  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: prefillEmail,
    phone: "",
    company: "",
    subject: subjects.includes(prefillSubject) ? prefillSubject : subjects[0],
    message: "",
  });

  // Arriving with the email already filled in, the next thing needed is the
  // name, so put the cursor there instead of at the top of the form.
  useEffect(() => {
    if (prefillEmail) nameRef.current?.focus({ preventScroll: true });
  }, [prefillEmail]);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  if (sent) {
    return (
      <div className="card flex flex-col items-center justify-center p-12 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-soft text-brand">
          <Check className="h-7 w-7" strokeWidth={2.5} />
        </span>
        <h3 className="mt-5 text-2xl">Message ready to send</h3>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-slatey">
          This demo form is not yet wired to a mail service. Connect it to your preferred
          handler, or write to us directly at{" "}
          <a href="mailto:gs@aimoindia.com" className="font-medium text-brand">
            gs@aimoindia.com
          </a>
          .
        </p>
        <button onClick={() => setSent(false)} className="btn btn-outline mt-7">
          Write another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="card p-8 sm:p-10"
    >
      <h3 className="text-2xl">Send us a message</h3>
      <p className="mt-2 text-[14.5px] text-slatey">
        Fields marked with an asterisk are required.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field label="Your name *" id="name">
          <input
            id="name"
            ref={nameRef}
            required
            value={form.name}
            onChange={set("name")}
            className={inputCls}
            placeholder="R. Sundaram"
          />
        </Field>

        <Field label="Email address *" id="email">
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={set("email")}
            className={inputCls}
            placeholder="you@company.in"
          />
        </Field>

        <Field label="Phone" id="phone">
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={set("phone")}
            className={inputCls}
            placeholder="+91 98xxx xxxxx"
          />
        </Field>

        <Field label="Enterprise / organisation" id="company">
          <input
            id="company"
            value={form.company}
            onChange={set("company")}
            className={inputCls}
            placeholder="Company name"
          />
        </Field>

        <div className="sm:col-span-2">
          <Field label="Subject" id="subject">
            <select id="subject" value={form.subject} onChange={set("subject")} className={inputCls}>
              {subjects.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field label="Message *" id="message">
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={set("message")}
              className={`${inputCls} resize-y`}
              placeholder="Tell us briefly what you need. The more specific, the faster we can route it."
            />
          </Field>
        </div>
      </div>

      <button type="submit" className="btn btn-primary mt-8 w-full sm:w-auto">
        Send message
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}

const inputCls =
  "w-full rounded-md border border-hairline bg-white px-4 py-3 text-[15px] text-navy outline-none transition-colors placeholder:text-slatey/60 focus:border-brand";

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block font-display text-[13.5px] font-semibold text-navy"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
