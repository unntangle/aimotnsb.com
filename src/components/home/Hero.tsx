"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Img from "@/components/ui/Img";
import { heroSlides } from "@/lib/site";

const INTERVAL = 2000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    setIndex((next + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(index + 1), INTERVAL);
    return () => clearTimeout(t);
  }, [index, paused, go]);

  return (
    <section
      className="relative isolate overflow-hidden bg-navy"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {/* ---------------------------- Slides ---------------------------- */}
      {heroSlides.map((slide, i) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <div className={`absolute inset-0 ${i === index ? "ken" : ""}`}>
            <Img
              src={slide.image}
              alt={slide.alt}
              sizes="100vw"
              seed={`hero-${i}`}
              priority={i === 0}
              className="object-cover"
            />
          </div>

          {/* Navy wash: opaque behind the copy, clearing to reveal the photo */}
          <div className="absolute inset-0 bg-navy/60 lg:hidden" />
          <div className="absolute inset-0 hidden bg-gradient-to-r from-navy from-15% via-navy/75 via-50% to-transparent to-85% lg:block" />
        </div>
      ))}

      {/* Organic brand shape anchored to the bottom-right corner */}
      <span className="pointer-events-none absolute bottom-0 right-0 hidden h-[26%] w-[16%] rounded-tl-[100%] bg-brand md:block" />

      {/* ----------------------------- Copy ----------------------------- */}
      <div className="shell relative z-10 flex min-h-[600px] items-center py-24 lg:min-h-[720px]">
        <div className="max-w-2xl">
          {heroSlides.map((slide, i) =>
            i === index ? (
              <div key={slide.title}>
                <p className="eyebrow mb-4 fade-up text-brand-light">{slide.eyebrow}</p>

                <h1 className="fade-up delay-1 text-4xl italic text-white sm:text-5xl lg:text-[3.9rem] lg:leading-[1.1]">
                  {slide.title}
                </h1>

                <p className="mt-7 max-w-xl text-[16.5px] leading-relaxed text-white/75 fade-up delay-2">
                  {slide.body}
                </p>

                <div className="mt-10 flex flex-wrap gap-4 fade-up delay-3">
                  <Link href={slide.cta.href} className="btn btn-primary">
                    {slide.cta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  {slide.cta2 && (
                    <Link href={slide.cta2.href} className="btn btn-ghost">
                      {slide.cta2.label}
                    </Link>
                  )}
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>

      {/* --------------------------- Pagination --------------------------- */}
      <div className="absolute bottom-9 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {heroSlides.map((s, i) => (
          <button
            key={s.title}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={`h-[6px] rounded-full transition-all duration-300 ${
              i === index
                ? "w-9 bg-brand"
                : "w-5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
