import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Camera, Store, Tag, Trophy, Users } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import UpcomingEvent from "@/components/home/UpcomingEvent";
import PanelProgramme from "@/components/events/PanelProgramme";
import Newsletter from "@/components/home/Newsletter";
import { img, sponsorTiers } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events",
  description:
    "AIMO TNSB's calendar of conclaves, credit clinics, export workshops, factory visits and award nights, held across India's states.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="AIMO Calendar"
        title="Upcoming Event"
        intro="Conclaves, clinics, workshops and factory visits, deliberately held across the states rather than only in the metros."
        image={img.lectureHall}
        crumb="Events"
      />

      <UpcomingEvent />

      <PanelProgramme />

      {/* Sponsorship */}
      <section id="sponsor" className="scroll-mt-28 bg-mist py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Partner With Us"
            title="Sponsorship categories & privileges"
            intro="Five tiers, each carrying complimentary delegate passes, exhibition stalls and branding across the event."
          />

          <div className="mt-14 space-y-4">
            {sponsorTiers.map((t) => (
              <article
                key={t.name}
                className="grid overflow-hidden rounded-xl border border-hairline md:grid-cols-[minmax(190px,230px)_1fr]"
                style={{ backgroundColor: t.tint }}
              >
                {/* Tier name & amount */}
                <div
                  className="flex flex-col items-center justify-center gap-3 px-6 py-6 text-center"
                  style={{ backgroundColor: t.accent }}
                >
                  <h3 className="font-display text-[15px] font-bold uppercase tracking-wider text-white">
                    {t.name}
                  </h3>
                  <span className="rounded-full bg-navy/85 px-4 py-1.5 font-display text-[14px] font-semibold text-white">
                    {t.amount}
                  </span>
                </div>

                {/* Privileges */}
                <div className="grid gap-5 p-6 sm:grid-cols-3 sm:gap-0">
                  {[
                    { icon: Users, text: t.passes },
                    { icon: Store, text: t.stalls },
                    { icon: Tag, text: t.branding },
                  ].map(({ icon: Icon, text }, i) => (
                    <div
                      key={text}
                      className={`flex items-center gap-3.5 sm:px-5 ${
                        i > 0 ? "sm:border-l sm:border-hairline" : ""
                      }`}
                    >
                      <span
                        className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 bg-white"
                        style={{ borderColor: t.accent, color: t.accent }}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-[14.5px] leading-snug text-navy">{text}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link href="/contact" className="btn btn-primary">
              Enquire about sponsorship
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="text-[14px] text-slatey">
              Stall sizes are quoted in feet. All amounts are exclusive of applicable taxes.
            </p>
          </div>
        </div>
      </section>

      {/* Links onward */}
      <section className="py-20 lg:py-24">
        <div className="shell grid gap-6 md:grid-cols-3">
          {[
            {
              href: "/events/past",
              icon: CalendarDays,
              title: "Past Events",
              body: "Conclaves, clinics and conventions already held, with summary notes available to members.",
            },
            {
              href: "/gallery",
              icon: Camera,
              title: "Photo Gallery",
              body: "Photographs from council sessions, factory visits, workshops and award nights.",
            },
            {
              href: "/awards",
              icon: Trophy,
              title: "Awards",
              body: "Six categories recognising members who set the standard, judged on evidence and verified on site.",
            },
          ].map((c) => (
            <Link key={c.href} href={c.href} className="card group p-8">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl transition-colors group-hover:text-brand">
                {c.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-slatey">{c.body}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-display text-[14px] font-semibold text-brand">
                Open <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  );
}
