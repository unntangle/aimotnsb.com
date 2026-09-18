import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, CalendarDays, MapPin } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import EventLinks from "@/components/events/EventLinks";
import Newsletter from "@/components/home/Newsletter";
import Img from "@/components/ui/Img";
import { featuredEvent, img, jobFair } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events",
  description:
    "AIMO TNSB's calendar of conclaves, credit clinics, export workshops, factory visits and award nights, held across India's states.",
};

export default function EventsPage() {
  const jobFairOpenings = jobFair.companies.reduce((sum, c) => sum + c.total, 0);

  return (
    <>
      <PageHero
        eyebrow="AIMO Calendar"
        title="Upcoming Event"
        intro="Conclaves, clinics, workshops and factory visits, deliberately held across the states rather than only in the metros."
        image={img.lectureHall}
        crumb="Events"
      />

      <section className="bg-mist py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Coming Up"
            title="Upcoming events"
            intro="Select an event to see the full programme, job fair details and registration."
          />

          <Link
            href={featuredEvent.href}
            className="card group mt-14 grid overflow-hidden lg:grid-cols-[1fr_1.15fr]"
          >
            {/* Image */}
            <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[380px]">
              <Img
                src={featuredEvent.image}
                alt="Delegates at an AIMO TNSB TECHKNOW event"
                sizes="(max-width: 1024px) 100vw, 50vw"
                seed="techknow-card"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute left-5 top-5 bg-brand px-4 py-2.5 text-center text-white shadow-lg">
                <span className="block font-display text-2xl font-extrabold leading-none">
                  {featuredEvent.dayBadge.day}
                </span>
                <span className="mt-1 block text-[11.5px] font-medium uppercase tracking-widest">
                  {featuredEvent.dayBadge.month}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col p-7 sm:p-9">
              <p className="eyebrow">Conference · Panel Discussions · Job Fair</p>
              <h2 className="mt-3 text-2xl transition-colors group-hover:text-brand sm:text-3xl">
                {featuredEvent.title}
              </h2>

              <div className="mt-4 space-y-2 text-[14.5px] font-medium text-navy">
                <p className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 shrink-0 text-brand" />
                  {featuredEvent.dateLabel}
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {featuredEvent.venue}
                </p>
              </div>

              <p className="mt-5 text-[15px] leading-relaxed text-slatey">{featuredEvent.body}</p>

              {/* Job fair callout */}
              <div className="mt-6 flex items-start gap-3 rounded-lg border border-hairline bg-brand-soft/60 px-4 py-3.5">
                <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <p className="text-[14px] leading-snug text-navy">
                  <span className="font-semibold">Mega Job Fair · 19 September 2026</span>
                  <span className="text-slatey">
                    {" "}
                    · {jobFair.companies.length} companies · {jobFairOpenings.toLocaleString("en-IN")}{" "}
                    openings
                  </span>
                </p>
              </div>

              <span className="mt-7 inline-flex items-center gap-2 self-start font-display text-[15px] font-semibold text-brand">
                View event details
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <EventLinks />

      <Newsletter />
    </>
  );
}
