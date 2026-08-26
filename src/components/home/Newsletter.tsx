"use client";

import { useState } from "react";
import { Check, Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="relative isolate overflow-hidden bg-navy-700 py-14">
      <span className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-brand/20 blur-3xl" />
      <span className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-brand/15 blur-3xl" />

      <div className="shell flex flex-col items-center justify-between gap-8 lg:flex-row">
        <div className="max-w-lg text-center lg:text-left">
          <p className="eyebrow mb-2">Get the latest updates</p>
          <h2 className="text-2xl text-white sm:text-3xl">
            The AIMO TNSB policy digest, once a month
          </h2>
          <p className="mt-3 text-[14.5px] text-white/60">
            Submissions filed, schemes worth reading, and what changed for MSMEs. No
            marketing.
          </p>
        </div>

        {done ? (
          <p className="flex items-center gap-3 rounded-lg bg-white/10 px-6 py-4 text-[15px] text-white">
            <Check className="h-5 w-5 text-brand-light" />
            Thank you. Please confirm via the email we just sent.
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email.trim()) setDone(true);
            }}
            className="flex w-full max-w-md overflow-hidden rounded-lg bg-white p-1.5 shadow-lg"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Your email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.name@company.in"
              className="min-w-0 flex-1 bg-transparent px-4 text-[15px] text-navy outline-none placeholder:text-slatey/70"
            />
            <button type="submit" className="btn btn-primary shrink-0">
              Subscribe
              <Send className="h-4 w-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
