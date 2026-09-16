import Image from "next/image";
import { Calendar, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { mediaCoverage } from "@/lib/site";

export default function LatestNews() {
  const featured = mediaCoverage.slice(0, 3);

  return (
    <section className="bg-mist py-20 lg:py-24">
      <div className="shell">
        <SectionHeading
          eyebrow="Press & Media"
          title="AIMO in the media"
          intro="Where AIMO and the concerns of Indian MSMEs have been reported."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {featured.map((m) => (
            <article key={m.url} className="card group flex flex-col overflow-hidden">
              <a
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open the ${m.outlet} article`}
                className="relative block aspect-[16/10] overflow-hidden bg-white"
              >
                <Image
                  src={m.image}
                  alt={m.headline ? `${m.outlet}: ${m.headline}` : m.outlet}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-md bg-brand px-3 py-1 font-display text-[11.5px] font-semibold uppercase tracking-widest text-white">
                  {m.outlet}
                </span>
              </a>

              <div className="flex flex-1 flex-col p-6">
                <span className="flex items-center gap-1.5 text-[12.5px] text-slatey">
                  <Calendar className="h-3.5 w-3.5 text-brand" />
                  {m.date ?? "2020"}
                </span>

                {m.headline && (
                  <h3 className="mt-3 text-[18px] leading-snug transition-colors group-hover:text-brand">
                    {m.headline}
                  </h3>
                )}

                <a
                  href={m.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 pt-5 font-display text-[14px] font-semibold text-navy transition-colors hover:text-brand"
                >
                  Read the article
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
