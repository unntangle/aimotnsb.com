"use client";

import { useState } from "react";
import { Check, Send } from "lucide-react";
import { venues } from "@/lib/site";

const slots = ["Morning (9 AM – 1 PM)", "Afternoon (2 PM – 6 PM)", "Full day", "Evening"];
const layouts = ["Theatre", "Boardroom", "Classroom", "U-shape", "Open / standing"];

const empty = {
  venue: venues[0].name,
  name: "",
  organisation: "",
  memberNo: "",
  email: "",
  phone: "",
  date: "",
  slot: slots[0],
  attendees: "",
  layout: layouts[0],
  needs: [] as string[],
  notes: "",
};

const extras = [
  "Projector & screen",
  "PA system / microphones",
  "Video conferencing",
  "Tea & coffee service",
  "Working lunch",
  "Registration desk",
  "Parking assistance",
  "Livestream support",
];

export default function HallEnquiryForm() {
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState(false);

  const set =
    (k: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm({ ...form, [k]: e.target.value });

  const toggleNeed = (n: string) =>
    setForm({
      ...form,
      needs: form.needs.includes(n)
        ? form.needs.filter((x) => x !== n)
        : [...form.needs, n],
    });

  if (sent) {
    return (
      <div className="card flex flex-col items-center justify-center p-12 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-soft text-brand">
          <Check className="h-7 w-7" strokeWidth={2.5} />
        </span>
        <h3 className="mt-5 text-2xl">Enquiry recorded</h3>
        <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-slatey">
          Thank you. We have noted your interest in the{" "}
          <strong className="text-navy">{form.venue}</strong>
          {form.date ? (
            <>
              {" "}
              on <strong className="text-navy">{form.date}</strong>
            </>
          ) : null}
          . Availability is confirmed by the Secretariat, usually within one working day.
        </p>
        <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-slatey">
          This demo form is not yet connected to a booking system. Wire it to your handler,
          or send the same details to{" "}
          <a href="mailto:gs@aimoindia.com" className="font-medium text-brand">
            gs@aimoindia.com
          </a>
          .
        </p>
        <button
          onClick={() => {
            setForm(empty);
            setSent(false);
          }}
          className="btn btn-outline mt-7"
        >
          Make another enquiry
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
      <h3 className="text-2xl">Enquiry form</h3>
      <p className="mt-2 text-[14.5px] text-slatey">
        Tell us what you need. Nothing is confirmed or charged at this stage.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Field label="Which space? *" id="venue">
            <select id="venue" value={form.venue} onChange={set("venue")} className={input}>
              {venues.map((v) => (
                <option key={v.name}>{v.name}</option>
              ))}
            </select>
          </Field>
        </div>

        <Field label="Your name *" id="name">
          <input id="name" required value={form.name} onChange={set("name")} className={input} placeholder="R. Sundaram" />
        </Field>
        <Field label="Organisation *" id="organisation">
          <input id="organisation" required value={form.organisation} onChange={set("organisation")} className={input} placeholder="Company or association" />
        </Field>

        <Field label="Email address *" id="email">
          <input id="email" type="email" required value={form.email} onChange={set("email")} className={input} placeholder="you@company.in" />
        </Field>
        <Field label="Mobile number *" id="phone">
          <input id="phone" type="tel" required value={form.phone} onChange={set("phone")} className={input} placeholder="+91 98xxx xxxxx" />
        </Field>

        <Field label="AIMO membership number" id="memberNo">
          <input id="memberNo" value={form.memberNo} onChange={set("memberNo")} className={input} placeholder="Leave blank if not a member" />
        </Field>
        <Field label="Expected attendees *" id="attendees">
          <input id="attendees" type="number" min="1" required value={form.attendees} onChange={set("attendees")} className={input} placeholder="60" />
        </Field>

        <Field label="Preferred date *" id="date">
          <input id="date" type="date" required value={form.date} onChange={set("date")} className={input} />
        </Field>
        <Field label="Time slot *" id="slot">
          <select id="slot" value={form.slot} onChange={set("slot")} className={input}>
            {slots.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>

        <div className="sm:col-span-2">
          <Field label="Seating layout" id="layout">
            <select id="layout" value={form.layout} onChange={set("layout")} className={input}>
              {layouts.map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
          </Field>
        </div>
      </div>

      <fieldset className="mt-7">
        <legend className="mb-3 font-display text-[13.5px] font-semibold text-navy">
          What else do you need?
        </legend>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {extras.map((x) => {
            const on = form.needs.includes(x);
            return (
              <label
                key={x}
                className={`flex cursor-pointer items-center gap-3 rounded-md border px-4 py-2.5 text-[14px] transition-colors ${
                  on
                    ? "border-brand bg-brand-soft text-navy"
                    : "border-hairline bg-white text-slatey hover:border-brand/40"
                }`}
              >
                <input
                  type="checkbox"
                  checked={on}
                  onChange={() => toggleNeed(x)}
                  className="h-4 w-4 accent-[#ee4b3e]"
                />
                {x}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-7">
        <Field label="Anything else we should know?" id="notes">
          <textarea id="notes" rows={4} value={form.notes} onChange={set("notes")} className={`${input} resize-y`} placeholder="Setup access needed from 8 AM; two speakers joining remotely." />
        </Field>
      </div>

      <button type="submit" className="btn btn-primary mt-8 w-full sm:w-auto">
        Send enquiry
        <Send className="h-4 w-4" />
      </button>
      <p className="mt-4 text-[13px] text-slatey">
        Availability is confirmed by the Secretariat before any payment is requested.
      </p>
    </form>
  );
}

const input =
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
