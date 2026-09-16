import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import GalleryGrid from "@/components/events/GalleryGrid";
import SectionNav from "@/components/ui/SectionNav";
import BecomeMemberCTA from "@/components/ui/BecomeMemberCTA";
import { galleryEvents, img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Glimpses of AIMO events: photographs from TECHKNOW 2022 at Anna University, conferences, celebrations and chapter gatherings.",
};

export default function GalleryPage() {
  const sections = galleryEvents.map((e) => ({ id: e.id, label: e.title }));

  return (
    <>
      <PageHero
        eyebrow="Photographs"
        title="Glimpses of AIMO Events"
        intro="Select any photograph to view it full size."
        image={img.networking}
        crumb="Gallery"
      />

      <div className="shell grid gap-8 py-12 lg:grid-cols-[248px_1fr] lg:gap-14 lg:py-16">
        <SectionNav sections={sections} ariaLabel="Gallery events" />

        <div className="min-w-0 space-y-20 lg:space-y-28">
          {galleryEvents.map((event) => (
            <section key={event.id} id={event.id} className="scroll-mt-32">
              <h2 className="text-3xl sm:text-[2.15rem]">{event.title}</h2>
              <span className="mt-5 block h-[3px] w-14 rounded-full bg-brand" />
              {event.meta && (
                <p className="mt-5 font-display text-[14px] font-semibold text-brand">
                  {event.meta}
                </p>
              )}
              {event.blurb && (
                <p className="mt-2 max-w-3xl text-[15.5px] leading-relaxed text-slatey">
                  {event.blurb}
                </p>
              )}

              {event.albums.map((album) => (
                <div key={album.title || event.id} className="mt-12 first:mt-10">
                  {album.title && (
                    <h3 className="mb-6 font-display text-[13px] font-bold uppercase tracking-widest text-navy">
                      {album.title}
                    </h3>
                  )}
                  <GalleryGrid photos={album.photos} />
                </div>
              ))}
            </section>
          ))}
        </div>
      </div>

      <BecomeMemberCTA blurb="Join the manufacturers who meet at gatherings like these: policy representation, credit clinics, research access and industry recognition, since 1941." />
    </>
  );
}
