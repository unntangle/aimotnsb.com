"use client";

import { useState } from "react";
import { Check, Download, Send } from "lucide-react";
import { membershipFormFile, membershipTiers, stateBoards } from "@/lib/site";

const sectorOptions = [
  "Engineering & Machine Tools",
  "Chemicals & Petrochemicals",
  "Pharmaceuticals",
  "Food Processing",
  "Textiles & Apparel",
  "Auto Components",
  "Electronics & Electricals",
  "Services MSME",
  "Other",
];

const scaleOptions = ["Micro", "Small", "Medium", "Large"];

const empty = {
  category: membershipTiers[1].name,
  board:
    stateBoards.find((b) => b.state === "Tamil Nadu")?.state ?? stateBoards[0].state,
  enterprise: "",
  gstin: "",
  udyam: "",
  sector: sectorOptions[0],
  scale: scaleOptions[1],
  established: "",
  employees: "",
  contactName: "",
  designation: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  pincode: "",
  website: "",
  notes: "",
  consent: false,
};

export default function MembershipForm() {
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState(false);

  /** Pull the printed application down as soon as the form is submitted. */
  const downloadForm = () => {
    const a = document.createElement("a");
    a.href = membershipFormFile.href;
    a.download = membershipFormFile.filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const set =
    (k: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const target = e.target as HTMLInputElement;
      setForm({
        ...form,
        [k]: target.type === "checkbox" ? target.checked : target.value,
      });
    };

  if (sent) {
    return (
      <div className="card flex flex-col items-center justify-center p-12 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-soft text-brand">
          <Check className="h-7 w-7" strokeWidth={2.5} />
        </span>
        <h3 className="mt-5 text-2xl">Application submitted</h3>
        <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-slatey">
          Thank you, {form.contactName || "and welcome"}. Your application for{" "}
          <strong className="text-navy">{form.category}</strong> membership under the{" "}
          <strong className="text-navy">{form.board}</strong> board has been recorded.
        </p>
        <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-slatey">
          The printed AIMO TNSB membership form has started downloading. Sign it and send
          the hard copy to your State Board along with proof of payment.
        </p>

        <a
          href={membershipFormFile.href}
          download={membershipFormFile.filename}
          className="btn btn-primary mt-7"
        >
          <Download className="h-4 w-4" />
          Download didn&rsquo;t start? Get the form
        </a>

        <p className="mt-6 max-w-lg text-[13.5px] leading-relaxed text-slatey">
          This demo form is not yet connected to a mail service or payment gateway. Wire it
          to your handler, or send the same details to{" "}
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
          className="btn btn-outline mt-6"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        downloadForm();
      }}
      className="card p-8 sm:p-10"
    >
      {/* Section 1 */}
      <Legend n="01" title="Membership" note="Which category and board you are applying under." />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Membership category *" id="category">
          <select id="category" value={form.category} onChange={set("category")} className={input}>
            {membershipTiers.map((t) => (
              <option key={t.name}>{t.name}</option>
            ))}
          </select>
        </Field>
        <Field label="State Board / chapter *" id="board">
          <select id="board" value={form.board} onChange={set("board")} className={input}>
            {stateBoards.map((b) => (
              <option key={b.state}>{b.state}</option>
            ))}
          </select>
        </Field>
      </div>

      {/* Section 2 */}
      <Legend n="02" title="Enterprise details" note="As registered. These are verified before approval." />
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Field label="Registered name of enterprise *" id="enterprise">
            <input id="enterprise" required value={form.enterprise} onChange={set("enterprise")} className={input} placeholder="Ramesh Precision Works Pvt Ltd" />
          </Field>
        </div>
        <Field label="GSTIN" id="gstin">
          <input id="gstin" value={form.gstin} onChange={set("gstin")} className={input} placeholder="33AAAAA0000A1Z5" />
        </Field>
        <Field label="Udyam registration number" id="udyam">
          <input id="udyam" value={form.udyam} onChange={set("udyam")} className={input} placeholder="UDYAM-TN-00-0000000" />
        </Field>
        <Field label="Primary sector *" id="sector">
          <select id="sector" value={form.sector} onChange={set("sector")} className={input}>
            {sectorOptions.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>
        <Field label="Classification *" id="scale">
          <select id="scale" value={form.scale} onChange={set("scale")} className={input}>
            {scaleOptions.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>
        <Field label="Year established" id="established">
          <input id="established" type="number" min="1850" max="2100" value={form.established} onChange={set("established")} className={input} placeholder="1998" />
        </Field>
        <Field label="Number of employees" id="employees">
          <input id="employees" type="number" min="0" value={form.employees} onChange={set("employees")} className={input} placeholder="42" />
        </Field>
      </div>

      {/* Section 3 */}
      <Legend n="03" title="Contact person" note="Who we correspond with about this membership." />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name *" id="contactName">
          <input id="contactName" required value={form.contactName} onChange={set("contactName")} className={input} placeholder="R. Sundaram" />
        </Field>
        <Field label="Designation *" id="designation">
          <input id="designation" required value={form.designation} onChange={set("designation")} className={input} placeholder="Managing Director" />
        </Field>
        <Field label="Email address *" id="email">
          <input id="email" type="email" required value={form.email} onChange={set("email")} className={input} placeholder="you@company.in" />
        </Field>
        <Field label="Mobile number *" id="phone">
          <input id="phone" type="tel" required value={form.phone} onChange={set("phone")} className={input} placeholder="+91 98xxx xxxxx" />
        </Field>
      </div>

      {/* Section 4 */}
      <Legend n="04" title="Address" note="Location of your principal unit or registered office." />
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Field label="Street address *" id="address">
            <textarea id="address" required rows={2} value={form.address} onChange={set("address")} className={`${input} resize-y`} placeholder="Plot 14, SIDCO Industrial Estate, Ambattur" />
          </Field>
        </div>
        <Field label="City / district *" id="city">
          <input id="city" required value={form.city} onChange={set("city")} className={input} placeholder="Chennai" />
        </Field>
        <Field label="PIN code *" id="pincode">
          <input id="pincode" required inputMode="numeric" pattern="[0-9]{6}" value={form.pincode} onChange={set("pincode")} className={input} placeholder="600058" />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Website" id="website">
            <input id="website" type="url" value={form.website} onChange={set("website")} className={input} placeholder="https://www.example.in" />
          </Field>
        </div>
      </div>

      {/* Section 5 */}
      <Legend n="05" title="Anything else" note="Optional. What you are hoping to get out of membership." />
      <Field label="Notes for the Secretariat" id="notes">
        <textarea id="notes" rows={4} value={form.notes} onChange={set("notes")} className={`${input} resize-y`} placeholder="We export to two markets and would value help with certification requirements." />
      </Field>

      <label className="mt-7 flex cursor-pointer items-start gap-3 rounded-lg border border-hairline bg-mist p-4 text-[14px] text-slatey">
        <input
          type="checkbox"
          required
          checked={form.consent}
          onChange={set("consent")}
          className="mt-0.5 h-4 w-4 shrink-0 accent-[#ee4b3e]"
        />
        <span>
          I confirm the details above are accurate, and I agree that this application is
          subject to approval by the State Board and the National Governing Council. *
        </span>
      </label>

      <button type="submit" className="btn btn-primary mt-8 w-full sm:w-auto">
        Submit &amp; download membership form
        <Send className="h-4 w-4" />
      </button>
      <p className="mt-4 text-[13px] text-slatey">
        The printed application downloads automatically once you submit. Payment
        instructions are sent by email, so do not transfer any fee before you receive them.
      </p>
    </form>
  );
}

const input =
  "w-full rounded-md border border-hairline bg-white px-4 py-3 text-[15px] text-navy outline-none transition-colors placeholder:text-slatey/60 focus:border-brand";

function Legend({ n, title, note }: { n: string; title: string; note: string }) {
  return (
    <div className="mb-6 mt-10 flex items-start gap-4 border-b border-hairline pb-5 first:mt-0">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand font-display text-[13px] font-bold text-white">
        {n}
      </span>
      <div>
        <h3 className="text-[18px]">{title}</h3>
        <p className="text-[13.5px] text-slatey">{note}</p>
      </div>
    </div>
  );
}

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
