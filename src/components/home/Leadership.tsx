"use client";

import Link from "next/link";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { stateOfficeBearers } from "@/lib/site";

const tints = [
  "from-brand to-brand-dark",
  "from-navy to-navy-600",
  "from-brand-light to-brand",
  "from-navy-600 to-navy-700",
];

function initials(name: string) {
  return name
    .replace(/^(Shri|Smt\.?|Mr\.?|Mrs\.?|Ms\.?|Dr\.?)\s+/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function Leadership() {
  const track = useRef<HTMLDivElement>(null);

  const scroll = (dir: -1 | 1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : 300;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden py-20 lg:py-24">
      {/* Heading */}
      <div className="shell text-center">
        <p className="font-display text-[15px] font-medium text-brand">
          Office Bearers
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem]">
          The people who carry the mandate
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative mt-14">
        <button
          onClick={() => scroll(-1)}
          aria-label="Previous"
          className="absolute left-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-brand-soft text-brand transition-colors hover:bg-brand hover:text-white lg:left-6"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={() => scroll(1)}
          aria-label="Next"
          className="absolute right-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-brand-soft text-brand transition-colors hover:bg-brand hover:text-white lg:right-6"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div
          ref={track}
          className="flex snap-x snap-mandatory items-start justify-start gap-6 overflow-x-auto px-16 pb-8 pt-10 [scrollbar-width:none] lg:justify-center [&::-webkit-scrollbar]:hidden"
        >
          {stateOfficeBearers.map((l, i) => (
            <article
              key={l.name}
              data-card
              className={`member-card w-[264px] shrink-0 snap-center bg-white shadow-[0_18px_40px_-28px_rgba(15,27,61,0.55)] transition-transform duration-300 hover:-translate-y-1 sm:w-[280px] ${
                i % 2 === 1 ? "lg:-mt-10" : "lg:mt-10"
              }`}
            >
              {/* Portrait block */}
              <div
                className={`relative flex aspect-[5/4] items-center justify-center bg-gradient-to-br ${tints[i % tints.length]}`}
              >
                <span className="absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(255,255,255,0.5)_1.2px,transparent_1.2px)] [background-size:12px_12px]" />
                <span className="relative grid h-20 w-20 place-items-center rounded-full border-2 border-white/50 font-display text-2xl font-extrabold text-white">
                  {initials(l.name)}
                </span>
              </div>

              {/* Caption */}
              <div className="px-6 py-6">
                <h3 className="min-h-[3.4rem] text-[19px] leading-snug">{l.name}</h3>
                <p className="mt-1.5 font-display text-[14.5px] font-medium text-brand">
                  {l.role}
                </p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-slatey">
                  {l.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="shell mt-6 text-center">
        <Link href="/about/office-bearers" className="btn btn-outline">
          Office bearers &amp; committee members
        </Link>
      </div>
    </section>
  );
}
