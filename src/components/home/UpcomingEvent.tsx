"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Download, MapPin } from "lucide-react";
import Img from "@/components/ui/Img";
import { featuredEvent } from "@/lib/site";

const UNITS = ["Days", "Hours", "Minutes", "Seconds"] as const;

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return [
    Math.floor(ms / 86_400_000),
    Math.floor(ms / 3_600_000) % 24,
    Math.floor(ms / 60_000) % 60,
    Math.floor(ms / 1000) % 60,
  ];
}

export default function UpcomingEvent() {
  const target = new Date(featuredEvent.date).getTime();
  // Start at zero so server and client markup match, then hydrate live values.
  const [time, setTime] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    setTime(diff(target));
    const id = setInterval(() => setTime(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <section className="relative overflow-hidden bg-mist py-20 lg:py-24">
      <div className="shell grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        {/* ------------------------- Angled image ------------------------- */}
        <div className="relative">
          {/* dotted accent, sitting outside the photo on the left */}
          <span className="dot-grid absolute -left-4 top-1/3 hidden h-28 w-24 lg:block" />

          <div
            className="relative aspect-[4/3] w-full"
            style={{ clipPath: "polygon(0 0, 100% 12%, 100% 88%, 0 100%)" }}
          >
            <Img
              src={featuredEvent.image}
              alt="Speaker addressing an AIMO convention"
              sizes="(max-width: 1024px) 100vw, 55vw"
              seed="event"
              className="object-cover"
            />
          </div>

          {/* date badge, tucked into the notch created by the slant */}
          <div className="absolute right-0 top-2 z-10 bg-brand px-5 py-3 text-center text-white shadow-lg sm:right-2">
            <span className="block font-display text-2xl font-extrabold leading-none">
              {featuredEvent.dayBadge.day}
            </span>
            <span className="mt-1 block text-[12px] font-medium uppercase tracking-widest">
              {featuredEvent.dayBadge.month}
            </span>
          </div>
        </div>

        {/* --------------------------- Content --------------------------- */}
        <div>
          <p className="font-display text-[15px] font-medium text-brand">
            {featuredEvent.eyebrow}
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl">{featuredEvent.title}</h2>

          <p className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14.5px] font-medium text-navy">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand" />
              {featuredEvent.venue}
            </span>
            <span className="text-slatey">{featuredEvent.dateLabel}</span>
          </p>

          <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-slatey">
            {featuredEvent.body}
          </p>

          {/* ------------------------- Countdown ------------------------- */}
          <div
            className="mt-9 flex max-w-xl items-stretch"
            suppressHydrationWarning
          >
            {UNITS.map((unit, i) => (
              <div key={unit} className="flex flex-1 items-center">
                <div className="flex-1 bg-white px-2 py-6 text-center shadow-[0_10px_30px_-22px_rgba(15,27,61,0.5)]">
                  <span
                    className="block font-display text-3xl font-extrabold leading-none text-brand"
                    suppressHydrationWarning
                  >
                    {String(time[i]).padStart(2, "0")}
                  </span>
                  <span className="mt-2 block text-[13px] text-slatey">{unit}</span>
                </div>

                {i < UNITS.length - 1 && (
                  <span
                    aria-hidden
                    className="flex shrink-0 flex-col gap-1.5 px-2 sm:px-3"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <a
              href={featuredEvent.registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Register Now
            </a>
            <a
              href={featuredEvent.brochure}
              download={featuredEvent.brochureFilename}
              className="btn btn-outline"
            >
              <Download className="h-4 w-4" />
              Download Brochure
            </a>
            <Link
              href="/events#sponsor"
              className="link-underline font-display text-[14.5px] font-semibold text-navy"
            >
              Sponsor the Summit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
