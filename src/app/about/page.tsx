import type { Metadata } from "next";
import Image from "next/image";
import { Award, BookOpen, ExternalLink, Landmark, Quote } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import AboutNav from "@/components/about/AboutNav";
import Newsletter from "@/components/home/Newsletter";
import {
  aboutOverview,
  founder,
  governmentRelations,
  img,
  industryRepresentation,
  tnsbProfile,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "About AIMO (TNSB)",
  description:
    "AIMO was founded by Bharat Ratna Sir M. Visvesvaraya over 75 years ago, with the motto 'Prosperity through Industry'. Our founder, the Tamil Nadu State Board, and the sectors we represent.",
};

const milestones = [
  {
    year: "1861",
    title: "Born at Muddenahalli",
    body: "Born on 15 September in Muddenahalli, in present-day Chikkaballapur district, Karnataka. His birthday is observed across India as Engineers' Day.",
  },
  {
    year: "1883",
    title: "Engineering at Pune",
    body: "Graduated from the College of Science, Pune, and entered the Bombay Presidency's public works service.",
  },
  {
    year: "1903",
    title: "Automatic sluice gates",
    body: "Designed and patented a system of automatic floodgates, first installed at the Khadakvasla reservoir near Pune, raising storage without raising the dam.",
  },
  {
    year: "1912",
    title: "Diwan of Mysore",
    body: "Appointed Diwan of the princely state of Mysore, where he pursued industrialisation and education with unusual single-mindedness.",
  },
  {
    year: "1932",
    title: "Krishna Raja Sagara",
    body: "The KRS dam across the Cauvery, whose construction he led as chief engineer, transformed irrigation across the Mysore region.",
  },
  {
    year: "1941",
    title: "AIMO is founded",
    body: "He established the All India Manufacturers' Organisation to give India's industrialists a single, credible, national voice.",
  },
  {
    year: "1955",
    title: "Bharat Ratna",
    body: "Conferred the Bharat Ratna, India's highest civilian honour, for his contribution to the nation's engineering and industry.",
  },
];

/* Local section header. The About page stacks several sections in one column. */
function SectionTitle({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mb-10">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="text-3xl sm:text-[2.15rem]">{title}</h2>
      <span className="mt-5 block h-[3px] w-14 rounded-full bg-brand" />
      {intro && (
        <p className="mt-5 text-[15.5px] leading-relaxed text-slatey">{intro}</p>
      )}
    </div>
  );
}

/** Bold lead-in label followed by the paragraph, as published by TNSB. */
function LabelledPara({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <p className="text-[15.5px] leading-relaxed text-slatey">
      <strong className="font-display font-semibold uppercase tracking-wide text-brand">
        {label}
      </strong>
      <span className="text-brand"> : </span>
      {children}
    </p>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Prosperity Through Industry"
        title="About AIMO (TNSB)"
        intro="The All India Manufacturers' Organisation, Tamil Nadu State Board."
        image={img.boardroom}
        crumb="About AIMO TNSB"
      />

      <div className="shell grid gap-8 py-12 lg:grid-cols-[248px_1fr] lg:gap-14 lg:py-16">
        <AboutNav />

        <div className="min-w-0 space-y-20 lg:space-y-28">
          {/* ------------------------------ Overview ------------------------------ */}
          <section id="overview" className="scroll-mt-32">
            <p className="text-[15.5px] leading-relaxed text-slatey">
              AIMO was founded by{" "}
              <strong className="text-navy">Bharat Ratna Sir M. Visvesvaraya</strong> over
              75 years ago. The Organisation has established itself as a body committed to
              industrial progress with the motto{" "}
              <strong className="text-navy">
                &ldquo;Prosperity through Industry&rdquo;
              </strong>
              . It has been recognised by Government as an apex Organisation of industry
              and given representation on most of the policy making bodies of the Central
              and State Governments.
            </p>

            <p className="mt-4 text-[15.5px] leading-relaxed text-slatey">
              {aboutOverview.bodiesLead}
            </p>

            {/* Government / Quasi Government bodies */}
            <ul className="mt-8 grid gap-x-10 gap-y-3.5 rounded-xl border border-hairline bg-mist p-8 sm:grid-cols-2">
              {governmentRelations.bodies.map((b) => (
                <li key={b} className="flex gap-3 text-[14.5px] leading-relaxed text-navy">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {b}
                </li>
              ))}
            </ul>

            {/* Structure · Co-operation · Operation */}
            <div className="mt-10 space-y-6 border-t border-hairline pt-10">
              <LabelledPara label="Structure">{aboutOverview.structure.body}</LabelledPara>

              <p className="text-[15.5px] leading-relaxed text-slatey">
                <strong className="font-display font-semibold text-brand">AIMO</strong>{" "}
                {aboutOverview.cooperation.replace(/^AIMO\s+/, "")}
              </p>

              <LabelledPara label="Operation">{aboutOverview.operation.body}</LabelledPara>
            </div>

            {/* Tamil Nadu State Board */}
            <div className="mt-12 rounded-2xl bg-navy p-8 text-white sm:p-10">
              <h3 className="text-2xl text-white">{tnsbProfile.name}</h3>
              <span className="mt-4 block h-[3px] w-14 rounded-full bg-brand" />

              <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-white/75">
                <p>{tnsbProfile.intro}</p>
                <p>{tnsbProfile.trust}</p>
                <p>{tnsbProfile.exhibition}</p>
                <p>{tnsbProfile.milestonesLead}</p>
              </div>

              <ul className="mt-8 space-y-5 border-l-2 border-brand/40 pl-6">
                {tnsbProfile.milestones.map((m) => (
                  <li key={m.title}>
                    <p className="font-display text-[13px] font-bold tracking-widest text-brand">
                      {m.year}
                    </p>
                    <p className="mt-1 font-display text-[16px] font-semibold text-white">
                      {m.title}
                    </p>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-white/70">
                      {m.body}
                    </p>
                  </li>
                ))}
              </ul>

              <p className="mt-9 border-t border-white/15 pt-8 text-[15px] leading-relaxed text-white/75">
                {tnsbProfile.incubation}
              </p>
            </div>
          </section>

          {/* ----------------------------- Our Founder ---------------------------- */}
          <section id="our-founder" className="scroll-mt-32">
            <SectionTitle
              eyebrow="Our Founder"
              title="Bharat Ratna Sir M. Visvesvaraya"
            />

            <div className="grid items-start gap-10 lg:grid-cols-[0.7fr_1.3fr]">
              <div className="card overflow-hidden">
                <div className="relative flex h-72 items-center justify-center bg-mist p-6">
                  <span className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(var(--color-navy)_1.2px,transparent_1.2px)] [background-size:12px_12px]" />
                  <Image
                    src="/SirMVTN.png"
                    alt="Portrait of Bharat Ratna Sir Mokshagundam Visvesvaraya, founder of the All India Manufacturers' Organisation"
                    width={600}
                    height={700}
                    className="relative h-full w-auto object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-[19px]">{founder.name}</h3>
                  <p className="mt-1 text-[13.5px] text-brand">
                    {founder.born} – {founder.died}
                  </p>
                  <dl className="mt-5 space-y-3 border-t border-hairline pt-5 text-[14px]">
                    {[
                      ["Honours", "Bharat Ratna (1955), KCIE"],
                      ["Office", "Diwan of Mysore, 1912–1918"],
                      ["Legacy", "Engineers' Day, 15 September"],
                      ["Founded", "AIMO, 1941"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-4">
                        <dt className="text-slatey">{k}</dt>
                        <dd className="text-right font-medium text-navy">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              <div>
                {founder.bio.map((para) => (
                  <p
                    key={para.slice(0, 24)}
                    className="mb-4 text-[15.5px] leading-relaxed text-slatey"
                  >
                    {para}
                  </p>
                ))}

                <p className="mt-4 text-[15.5px] leading-relaxed text-slatey">
                  By the time he founded AIMO in 1941 he was eighty years old and had spent
                  six decades observing what actually stopped Indian enterprise: not a
                  shortage of ambition, but fragmentation. Individual manufacturers had
                  grievances; nobody had a hearing. The organisation he created was a
                  remedy for that specific problem, and its motto,{" "}
                  <strong className="text-navy">Prosperity through Industry</strong>, is a
                  compressed version of the argument he had been making his whole working
                  life.
                </p>

                <figure className="my-8 border-l-[3px] border-brand bg-mist p-7">
                  <Quote className="h-7 w-7 text-brand" />
                  <blockquote className="mt-3 font-display text-xl font-semibold leading-snug text-navy">
                    Industrialise or perish.
                  </blockquote>
                  <figcaption className="mt-3 text-[14px] text-slatey">
                    The phrase most associated with him, and, in substance, the founding
                    brief of this organisation.
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* Timeline */}
            <h3 className="mt-12 text-2xl">A working life, in brief</h3>
            <ol className="mt-7">
              {milestones.map((m, i) => (
                <li key={m.year} className="relative flex gap-6 pb-9 last:pb-0">
                  <div className="flex flex-col items-center">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand font-display text-[12.5px] font-bold text-white">
                      {m.year}
                    </span>
                    {i < milestones.length - 1 && (
                      <span className="mt-1 w-px flex-1 bg-hairline" />
                    )}
                  </div>
                  <div className="pt-1.5">
                    <h4 className="text-[17px]">{m.title}</h4>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-slatey">
                      {m.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Honours */}
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="card p-7">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-brand">
                  <Award className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-xl">Honours &amp; distinctions</h3>
                <ul className="mt-5 space-y-3.5">
                  {founder.honours.map((h) => (
                    <li
                      key={h}
                      className="flex gap-3 text-[14.5px] leading-relaxed text-slatey"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-7">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-brand">
                  <Landmark className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-xl">Named in his honour</h3>
                <ul className="mt-5 space-y-4">
                  {founder.namedInHisHonour.map((n) => (
                    <li key={n.name} className="border-l-2 border-hairline pl-4">
                      <p className="font-display text-[14.5px] font-semibold text-navy">
                        {n.name}
                      </p>
                      <p className="mt-0.5 text-[13.5px] leading-relaxed text-slatey">
                        {n.note}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Works */}
            <h3 className="mt-12 text-2xl">Works of Sir M. Visvesvaraya</h3>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slatey">
              He argued his case in print as well as in concrete. His published writing on
              planning, industry and unemployment remains in library catalogues worldwide.
            </p>
            <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {founder.works.map((w) => (
                <article key={w.title} className="card flex h-full flex-col p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
                      <BookOpen className="h-5 w-5" />
                    </span>
                    <span className="font-display text-[13px] font-bold tracking-widest text-brand">
                      {w.year}
                    </span>
                  </div>
                  <h4 className="mt-4 text-[17px] italic">{w.title}</h4>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-slatey">
                    Visvesvaraya, M &middot; {w.publisher}
                  </p>
                  {w.oclc && (
                    <a
                      href={`https://search.worldcat.org/oclc/${w.oclc}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-1.5 pt-5 font-display text-[13px] font-semibold text-brand"
                    >
                      OCLC {w.oclc}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </section>

          {/* ------------------------ Industry representation ---------------------- */}
          <section id="industry-representation" className="scroll-mt-32">
            <SectionTitle
              eyebrow="Make in India"
              title="Industry Representation"
              intro={industryRepresentation.intro}
            />

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {industryRepresentation.sectors.map((s) => (
                <div
                  key={s}
                  className="group flex items-center gap-3 rounded-lg border border-hairline bg-white px-4 py-3.5 transition-all hover:border-brand hover:bg-brand-soft"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span className="font-display text-[14.5px] font-medium text-navy">
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <Newsletter />
    </>
  );
}
