import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Img from "@/components/ui/Img";
import SectionHeading from "@/components/ui/SectionHeading";
import { eventGallery } from "@/lib/site";

export default function EventsSchedule() {
  return (
    <section className="bg-navy py-20 lg:py-24">
      <div className="shell">
        <SectionHeading
          eyebrow="AIMO Calendar"
          tone="dark"
          title="Where the membership meets"
          intro="Conclaves, clinics, factory visits and award nights, held across the states rather than only in the metros."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {eventGallery.map((e, i) => (
            <article
              key={e.title}
              className="group relative aspect-[16/9] overflow-hidden rounded-xl"
            >
              <Img
                src={e.image}
                alt={e.title}
                sizes="(max-width: 640px) 100vw, 50vw"
                seed={`ev-${i}`}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-90 transition-opacity group-hover:opacity-95" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-[12.5px] font-semibold uppercase tracking-widest text-brand-light">
                  {e.meta}
                </p>
                <h3 className="mt-1.5 text-xl text-white">{e.title}</h3>
              </div>

              <span className="absolute right-5 top-5 grid h-10 w-10 translate-y-2 place-items-center rounded-md bg-brand text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowRight className="h-4 w-4" />
              </span>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/events" className="btn btn-primary">
            View All Events
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
