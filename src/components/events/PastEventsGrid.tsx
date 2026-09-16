"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

type Poster = { src: string; title?: string; meta?: string };

/**
 * Grid of past-event posters. Clicking a tile expands it into a full-screen
 * lightbox with keyboard and arrow navigation.
 */
export default function PastEventsGrid({ posters }: { posters: Poster[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const many = posters.length > 1;

  const close = useCallback(() => setOpen(null), []);

  const step = useCallback(
    (dir: -1 | 1) =>
      setOpen((i) =>
        i === null ? i : (i + dir + posters.length) % posters.length
      ),
    [posters.length]
  );

  useEffect(() => {
    if (open === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  const active = open === null ? null : posters[open];

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posters.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setOpen(i)}
            aria-label={`Expand ${p.title ?? "event poster"}`}
            className="card group block overflow-hidden p-0 text-left"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-mist">
              <Image
                src={p.src}
                alt={p.title ?? "AIMO past event"}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <span className="absolute inset-0 bg-navy/0 transition-colors duration-300 group-hover:bg-navy/25" />
              <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-brand opacity-0 shadow transition-opacity duration-300 group-hover:opacity-100">
                <Maximize2 className="h-4 w-4" />
              </span>
            </div>

            {(p.title || p.meta) && (
              <div className="border-t border-hairline p-5">
                {p.title && (
                  <h3 className="text-[17px] transition-colors group-hover:text-brand">
                    {p.title}
                  </h3>
                )}
                {p.meta && (
                  <p className="mt-1 text-[13.5px] text-slatey">{p.meta}</p>
                )}
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title ?? "Event poster"}
          onClick={close}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-navy/90 p-4 backdrop-blur-sm sm:p-8"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand sm:right-6 sm:top-6"
          >
            <X className="h-5 w-5" />
          </button>

          {many && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Previous"
                className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand sm:left-6"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Next"
                className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand sm:right-6"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          <figure
            onClick={(e) => e.stopPropagation()}
            className="fade-in max-h-full w-full max-w-4xl overflow-y-auto"
          >
            <Image
              src={active.src}
              alt={active.title ?? "AIMO past event"}
              width={1600}
              height={1200}
              sizes="(max-width: 1024px) 100vw, 900px"
              className="mx-auto h-auto w-full rounded-lg bg-white"
            />
            {(active.title || active.meta) && (
              <figcaption className="mt-4 text-center text-[14.5px] text-white/75">
                {active.title}
                {active.title && active.meta && " · "}
                {active.meta}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </>
  );
}
