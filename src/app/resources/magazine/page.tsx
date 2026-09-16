import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Check, Mail, PenLine } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Img from "@/components/ui/Img";
import Newsletter from "@/components/home/Newsletter";
import { contact, img, magazine } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Magazine",
  description:
    "AIMO Industry Review, a quarterly journal written by members, for members. Case notes from the shop floor, scheme explainers and policy analysis.",
};

export default function MagazinePage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={magazine.name}
        intro={magazine.intro}
        image={img.notes}
        crumb="Our Magazine"
      />

      {/* What's in it */}
      <section className="py-20 lg:py-24">
        <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow mb-3">{magazine.cadence}</p>
            <h2 className="text-3xl sm:text-4xl">
              Written by people who run factories, not by people who write about them
            </h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-slatey">
              Most trade publications describe the sector from outside. The Industry Review
              is assembled from the other direction: a member works through a problem, and
              the write-up is the record of how it went, including the parts that did not
              work.
            </p>

            <h3 className="mt-9 text-xl">In every issue</h3>
            <ul className="mt-5 space-y-3">
              {magazine.sections.map((s) => (
                <li key={s} className="flex items-start gap-3 text-[15px] text-navy">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {s}
                </li>
              ))}
            </ul>

            <p className="mt-8 rounded-lg border border-hairline bg-mist px-6 py-4 text-[14.5px] text-slatey">
              The Review is circulated free to all members in print and PDF. Non-members can
              subscribe or request a sample issue from the Secretariat.
            </p>
          </div>

          <div className="relative">
            <span className="dot-grid absolute -right-6 -top-6 hidden h-32 w-32 lg:block" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-[0_30px_70px_-32px_rgba(15,27,61,0.6)]">
              <Img
                src={img.dataScreen}
                alt="AIMO Industry Review editorial desk"
                sizes="(max-width: 1024px) 100vw, 45vw"
                seed="magazine-hero"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <BookOpen className="h-7 w-7 text-brand" />
                <p className="mt-3 font-display text-2xl font-bold text-white">
                  {magazine.name}
                </p>
                <p className="mt-1 text-[13.5px] text-white/70">
                  {magazine.cadence} · Print and digital
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Issues */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Recent Issues"
            title="What we have been examining"
            intro="Back issues are archived and available to members in full."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {magazine.issues.map((iss, i) => (
              <article key={iss.title} className="card group overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Img
                    src={iss.image}
                    alt={iss.title}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    seed={`issue-${i}`}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-md bg-brand px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-widest text-white">
                    Cover story
                  </span>
                </div>

                <div className="p-6">
                  <p className="font-display text-[12.5px] font-semibold uppercase tracking-wide text-brand">
                    {iss.issue}
                  </p>
                  <h3 className="mt-2 text-[18px] leading-snug transition-colors group-hover:text-brand">
                    {iss.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-slatey">
                    {iss.blurb}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-1.5 font-display text-[14px] font-semibold text-navy transition-colors hover:text-brand"
                  >
                    Request this issue
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contribute / advertise */}
      <section className="py-20 lg:py-24">
        <div className="shell grid gap-6 md:grid-cols-2">
          <div className="card p-8 sm:p-10">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand">
              <PenLine className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-2xl">Write for the Review</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-slatey">
              If you have solved something on your shop floor, whether a quality problem, an
              energy bill, or a certification you thought was out of reach, that is exactly
              the material we want. You do not need to be a writer; the editorial committee
              will work with you on the draft.
            </p>
            <p className="mt-3 text-[14px] text-slatey">
              Typical length 900–1,400 words. Photographs from your unit are welcome.
            </p>
            <Link href="/contact" className="btn btn-primary mt-7">
              Pitch an article
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="card bg-navy p-8 text-white sm:p-10">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-brand">
              <Mail className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-2xl text-white">Advertise or subscribe</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-white/65">
              The Review reaches promoters and decision-makers across the AIMO network in
              print and digital. Rate cards for full page, half page and inside cover
              placements are available on request, with member discounts.
            </p>
            <p className="mt-4 text-[14px] text-white/65">
              Non-member subscriptions and sample issues: write to{" "}
              <a href={`mailto:${contact.emails[0]}`} className="font-medium text-brand">
                {contact.emails[0]}
              </a>
            </p>
            <Link href="/contact" className="btn btn-ghost mt-7">
              Request the rate card
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
