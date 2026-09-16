import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import GalleryGrid from "@/components/events/GalleryGrid";
import SectionNav from "@/components/ui/SectionNav";
import { img, pastEventAlbums } from "@/lib/site";

export const metadata: Metadata = {
  title: "Past Events",
  description:
    "An archive of past events held by the All India Manufacturers' Organisation.",
};

export default function PastEventsPage() {
  const sections = pastEventAlbums.map((event) => ({
    id: event.id,
    label: event.title,
  }));

  return (
    <>
      <PageHero
        eyebrow="Archive"
        title="Past Events"
        intro="Select an event to view it in full."
        image={img.lectureHall}
        crumb="Past Events"
      />

      <div className="shell grid gap-8 py-12 lg:grid-cols-[248px_1fr] lg:gap-14 lg:py-16">
        <SectionNav sections={sections} ariaLabel="Past events" />

        <div className="min-w-0 space-y-20 lg:space-y-28">
          {pastEventAlbums.map((event) => (
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

              <div className="mt-12 first:mt-10">
                <GalleryGrid photos={event.photos} />
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
