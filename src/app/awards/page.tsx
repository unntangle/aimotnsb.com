import type { Metadata } from "next";
import { Trophy } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import BecomeMemberCTA from "@/components/ui/BecomeMemberCTA";
import { img, visvesvarayaAward } from "@/lib/site";

export const metadata: Metadata = {
  title: "Awards",
  description:
    "The Sir Visvesvaraya Industrial Award, offered each year by AIMO TNSB to an industry registered in Tamil Nadu or Pondicherry, with past recipients and presentation ceremonies.",
};

export default function AwardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Recognition"
        title="Awards"
        intro="Every year we identify an industry registered in Tamil Nadu or Pondicherry based on its excellence in performance."
        image={img.awards}
        crumb="Awards"
      />

      {/* --------------------- Sir Visvesvaraya Industrial Award -------------------- */}
      <section className="py-20 lg:py-24">
        <div className="shell">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-white">
            <Trophy className="h-5 w-5" />
          </span>
          <h2 className="mt-5 text-3xl uppercase sm:text-4xl">
            {visvesvarayaAward.title}
          </h2>
          <span className="mt-5 block h-[3px] w-14 rounded-full bg-brand" />

          {/* Pulled-out opening statement */}
          <blockquote className="mt-8 border-l-[3px] border-brand bg-mist p-7">
            <p className="text-[15.5px] leading-relaxed text-slatey">
              {visvesvarayaAward.lead}
            </p>
          </blockquote>

          {visvesvarayaAward.intro.map((p) => (
            <p
              key={p.slice(0, 24)}
              className="mt-5 max-w-4xl text-[15.5px] leading-relaxed text-slatey"
            >
              {p}
            </p>
          ))}

          {/* Recipients */}
          <h3 className="mt-12 text-2xl">Recipients of the Award</h3>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visvesvarayaAward.recipients.map((r) => (
              <div
                key={r}
                className="flex items-start gap-3 rounded-lg border border-hairline bg-white px-4 py-3.5 transition-all hover:border-brand hover:bg-brand-soft"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                <span className="text-[14.5px] leading-snug text-navy">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------ Presentation ceremonies ------------------------ */}
      <section className="border-y border-hairline bg-mist py-20 lg:py-24">
        <div className="shell">
          <p className="eyebrow mb-3">Presented By</p>
          <h2 className="text-3xl sm:text-4xl">Award Presentation Ceremonies</h2>
          <span className="mt-5 block h-[3px] w-14 rounded-full bg-brand" />
          <p className="mt-5 max-w-3xl text-[15.5px] leading-relaxed text-slatey">
            The award is presented at a function in the presence of renowned
            personalities, among them Governors of Tamil Nadu and Union Ministers.
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {visvesvarayaAward.ceremonies.map((c) => (
              <article key={c.year} className="card border-l-2 border-l-brand p-7">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-display text-[22px] font-extrabold text-brand">
                    {c.year}
                  </span>
                  <h3 className="text-[18px] leading-snug">{c.recipients}</h3>
                </div>
                <p className="mt-3 border-t border-hairline pt-3 text-[14.5px] leading-relaxed text-slatey">
                  {c.presenter}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BecomeMemberCTA blurb="Recognition through the AIMO TNSB Awards is one of the benefits open to performing and active members." />
    </>
  );
}
