import type { Metadata } from "next";
import { Check, Clock, Mail, MapPin, Maximize, Phone, Users } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Img from "@/components/ui/Img";
import HallEnquiryForm from "@/components/ui/HallEnquiryForm";
import { hallBooking, img, venues } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Hall & Board Room",
  description:
    "Hire the Sir Visvesvaraya Hall or the AIMO Board Room in Nungambakkam, Chennai for seminars, workshops, meetings, conferences and training programmes. Member and non-member rates available.",
};

export default function BookHallPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Book Hall & Board Room"
        intro="Looking for a state-of-the-art venue in Chennai? The Sir Visvesvaraya Hall and the AIMO Board Room at Nungambakkam are available to members and non-members."
        image={img.aimoHall}
        crumb="Book Hall & Board Room"
      />

      {/* Lead + why this venue */}
      <section className="py-16 lg:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <p className="text-[17px] font-medium leading-relaxed text-navy">
              {hallBooking.lead}
            </p>

            <div className="mt-7 space-y-5">
              {hallBooking.spaces.map((s) => (
                <div key={s.name} className="border-l-2 border-brand pl-5">
                  <p className="font-display text-[15.5px] font-semibold text-navy">
                    {s.name}
                  </p>
                  <p className="mt-1 text-[14.5px] leading-relaxed text-slatey">{s.note}</p>
                </div>
              ))}
            </div>
          </div>

          <ul className="grid content-start gap-3 rounded-2xl bg-mist p-7">
            {hallBooking.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-[14.5px] text-navy">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Venues */}
      <section id="spaces" className="scroll-mt-28 bg-mist py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Our Spaces"
            title="Two rooms, two purposes"
            intro="Both spaces are air-conditioned, carry Wi-Fi, and allow external food catering. Rates are charged per hour, with a minimum rent of one hour."
          />

          <div className="mt-14 space-y-8">
            {venues.map((v, i) => (
              <article
                key={v.name}
                className={`card grid gap-0 overflow-hidden lg:grid-cols-2 ${
                  i % 2 ? "lg:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[340px]">
                  <Img
                    src={v.image}
                    alt={v.name}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    seed={`venue-${i}`}
                    className="object-cover"
                  />
                </figure>

                <div className="p-8 lg:p-10">
                  <h3 className="text-2xl">{v.name}</h3>

                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-slatey">
                    <span className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-brand" />
                      {v.capacity}
                    </span>
                    <span className="flex items-center gap-2">
                      <Maximize className="h-4 w-4 text-brand" />
                      {v.area}
                    </span>
                  </div>

                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {v.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[14.5px] text-navy">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 rounded-lg bg-mist px-5 py-3.5 text-[14px] font-medium text-navy">
                    {v.rates}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & tariff */}
      <section className="py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Facilities & Tariff"
            title="What each space includes"
            intro="A side-by-side comparison of the two rooms, followed by the current hourly tariff."
          />

          <div className="card mt-12 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="px-6 py-4 font-display text-[14px] font-semibold">
                      Facilities
                    </th>
                    <th className="px-6 py-4 font-display text-[14px] font-semibold">
                      Sir Visvesvaraya Hall
                    </th>
                    <th className="px-6 py-4 font-display text-[14px] font-semibold">
                      Board Room
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {hallBooking.facilities.map((f, i) => (
                    <tr
                      key={f.label}
                      className={`border-t border-hairline ${i % 2 ? "bg-mist/60" : ""}`}
                    >
                      <td className="px-6 py-3.5 text-[14.5px] font-medium text-navy">
                        {f.label}
                      </td>
                      <td className="px-6 py-3.5 text-[14.5px] text-slatey">{f.hall}</td>
                      <td className="px-6 py-3.5 text-[14.5px] text-slatey">{f.board}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card mt-8 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="px-6 py-4 font-display text-[14px] font-semibold">
                      Hall charges
                    </th>
                    <th className="px-6 py-4 font-display text-[14px] font-semibold">
                      Members
                    </th>
                    <th className="px-6 py-4 font-display text-[14px] font-semibold">
                      Non-members
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {hallBooking.rates.map((r, i) => (
                    <tr
                      key={r.space}
                      className={`border-t border-hairline ${i % 2 ? "bg-mist/60" : ""}`}
                    >
                      <td className="px-6 py-4 text-[14.5px] font-medium text-navy">
                        {r.space}
                      </td>
                      <td className="px-6 py-4 text-[14.5px] text-slatey">{r.members}</td>
                      <td className="px-6 py-4 text-[14.5px] text-slatey">
                        {r.nonMembers}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-4 text-[13.5px] text-slatey">{hallBooking.ratesNote}.</p>
        </div>
      </section>
      <section className="bg-mist py-20 lg:py-24">
        <div className="shell grid items-start gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12">
          <HallEnquiryForm />

          <aside className="space-y-6 lg:sticky lg:top-28">
            <div className="card p-7">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-brand">
                <MapPin className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[18px]">Where the venue is</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-slatey">
                {hallBooking.bookingContact.addressLines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </p>
              <p className="mt-3 text-[13.5px] text-slatey">
                In the heart of Chennai at Nungambakkam, and easily accessible.
              </p>
            </div>

            <div className="card p-7">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-brand">
                <Clock className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[18px]">For booking, contact</h3>
              <p className="mt-3 text-[14.5px] font-medium text-navy">
                {hallBooking.bookingContact.attn}
              </p>
              <p className="mt-1 text-[14px] leading-relaxed text-slatey">
                {hallBooking.bookingContact.org}
              </p>
              <div className="mt-4 space-y-2.5">
                {hallBooking.bookingContact.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="flex items-center gap-2.5 text-[14px] text-slatey hover:text-brand"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-brand" />
                    {p}
                  </a>
                ))}
                <a
                  href={`mailto:${hallBooking.bookingContact.email}`}
                  className="flex items-center gap-2.5 text-[14px] text-slatey hover:text-brand"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand" />
                  {hallBooking.bookingContact.email}
                </a>
              </div>
            </div>

            <div className="card bg-navy p-7 text-white">
              <h3 className="text-[18px] text-white">Members save on every booking</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-white/65">
                AIMO members book the Board Room at a reduced hourly rate, and members get
                first call on dates.
              </p>
              <a href="/membership" className="btn btn-ghost mt-5 w-full">
                About membership
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
