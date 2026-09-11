"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  return (
    <section className="relative isolate overflow-hidden bg-navy-700 py-14">
      <span className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-brand/20 blur-3xl" />
      <span className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-brand/15 blur-3xl" />

      <div className="shell flex flex-col items-center justify-between gap-8 lg:flex-row">
        <div className="max-w-lg text-center lg:text-left">
          <p className="eyebrow mb-2">Enquiries</p>
          <h2 className="text-2xl text-white sm:text-3xl">
            Have a question for the State Board?
          </h2>
          <p className="mt-3 text-[14.5px] text-white/60">
            Membership, an upcoming event, a scheme you are trying to make sense of, or a
            partnership proposal. Leave your address here and the next screen takes your
            name and a line of detail. It reaches the Secretariat desk directly.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const value = email.trim();
            if (!value) return;

            // Hand the reader over to the contact form; the address they typed
            // is carried across so they do not retype it. The subject is left
            // for them to choose, since this strip is not topic-specific.
            router.push(`/contact?email=${encodeURIComponent(value)}#enquiry`);
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
            Start enquiry
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
