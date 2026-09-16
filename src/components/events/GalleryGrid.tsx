"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

type Photo = { src: string; caption?: string };

/**
 * Photo grid for a single event album. Clicking a tile expands it into a
 * full-screen lightbox with keyboard and arrow navigation.
 */
export default function GalleryGrid({ photos }: { photos: Photo[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const many = photos.length > 1;

  const close = useCallback(() => setOpen(null), []);

  const step = useCallback(
    (dir: -1 | 1) =>
      setOpen((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    [photos.length]
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

  const active = open === null ? null : photos[open];

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setOpen(i)}
            aria-label={p.caption ? `Expand: ${p.caption}` : "Expand photograph"}
            className="group relative block aspect-[4/3] overflow-hidden rounded-xl bg-mist"
          >
            <Image
              src={p.src}
              alt={p.caption ?? "AIMO event photograph"}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <span className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-brand opacity-0 shadow transition-opacity duration-300 group-hover:opacity-100">
              <Maximize2 className="h-4 w-4" />
            </span>

            {p.caption && (
              <span className="absolute inset-x-0 bottom-0 translate-y-3 p-5 text-left text-[14px] font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {p.caption}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption ?? "Photograph"}
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
            className="fade-in w-full max-w-5xl"
          >
            <Image
              src={active.src}
              alt={active.caption ?? "AIMO event photograph"}
              width={1600}
              height={1200}
              sizes="(max-width: 1024px) 100vw, 1000px"
              className="mx-auto h-auto max-h-[78vh] w-auto max-w-full rounded-lg"
            />
            {(active.caption || many) && (
              <figcaption className="mt-4 text-center text-[14.5px] text-white/75">
                {active.caption}
                {many && (
                  <span className={active.caption ? "ml-2 text-white/45" : "text-white/45"}>
                    {(open ?? 0) + 1} / {photos.length}
                  </span>
                )}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </>
  );
}
