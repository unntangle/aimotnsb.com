import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";
import Img from "@/components/ui/Img";
import { contact, img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach AIMO TNSB at the Tamil Nadu State Board office in Nungambakkam, Chennai, for membership, partnership and event enquiries.",
};

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    contact.mapQuery
  )}&output=embed`;

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        intro="Membership, partnership or events: write to the Tamil Nadu State Board and we will route your enquiry to the right desk."
        image={img.aimoHall}
        crumb="Contact"
      />

      {/* Cards */}
      <section className="py-20 lg:py-24">
        <div className="shell">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="eyebrow mb-3">Write To</p>
            <h2 className="text-3xl">{contact.attn}</h2>
            <p className="mt-3 text-[15.5px] leading-relaxed text-slatey">
              {contact.org}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: MapPin,
                title: "Office",
                lines: contact.addressLines,
              },
              {
                icon: Phone,
                title: "Telephone",
                lines: contact.phones,
                hrefPrefix: "tel:",
                labels: contact.phoneLabels,
              },
              {
                icon: Mail,
                title: "Email",
                lines: contact.emails,
                hrefPrefix: "mailto:",
              },
            ].map((c) => (
              <div key={c.title} className="card group p-8 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-xl bg-brand-soft text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <c.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl">{c.title}</h3>
                <div className="mt-3 space-y-1 text-[14.5px] text-slatey">
                  {c.lines.map((l, i) =>
                    c.hrefPrefix ? (
                      <a
                        key={l}
                        href={`${c.hrefPrefix}${l.replace(/\s/g, "")}`}
                        className="block break-all hover:text-brand"
                      >
                        {c.labels ? `${c.labels[i]}: ${l}` : l}
                      </a>
                    ) : (
                      <span key={l} className="block">
                        {l}
                      </span>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 flex items-center justify-center gap-2 text-[14px] text-slatey">
            <Clock className="h-4 w-4 text-brand" />
            {contact.hours}
          </p>
        </div>
      </section>

      {/* Partner + form */}
      <section id="enquiry" className="scroll-mt-24 bg-mist py-20 lg:py-24">
        <div className="shell grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow mb-3">Partnership</p>
            <h2 className="text-3xl">Partner with AIMO TNSB</h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-slatey">
              AIMO TNSB is ready to partner with organisations that share our values, to
              jointly develop programmes that benefit the business fraternity. We work
              through cross-promotion, and the arrangement is designed so that smaller
              organisations get a louder voice by partnering with us.
            </p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-slatey">
              If you believe your organisation could partner AIMO TNSB in a mutually
              beneficial association, write to{" "}
              <a
                href={`mailto:${contact.emails[0]}`}
                className="font-medium text-brand link-underline"
              >
                {contact.emails[0]}
              </a>{" "}
              and we will arrange a follow-up meeting.
            </p>

            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-xl">
              <Img
                src={img.handshake}
                alt="AIMO TNSB partnership discussion"
                sizes="(max-width: 1024px) 100vw, 40vw"
                seed="contact-partner"
                className="object-cover"
              />
            </div>

            <Link href="/membership" className="btn btn-primary mt-8">
              Membership instead?
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* ContactForm reads ?email= and ?subject= from the URL, so it needs
              a boundary for the build to prerender the rest of this page. */}
          <Suspense fallback={<div className="card min-h-[640px] p-8 sm:p-10" />}>
            <ContactForm />
          </Suspense>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Find Us"
            title="Round Table House, Nungambakkam, Chennai"
            intro="The State Board office is on Nungambakkam High Road, a short distance from Loyola College and Sterling Road."
          />
          <div className="mt-12 overflow-hidden rounded-xl border border-hairline">
            <iframe
              title="AIMO TNSB office location"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
