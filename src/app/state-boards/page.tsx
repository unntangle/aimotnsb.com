import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Phone } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { img, stateBoards, stateBoardsIntro } from "@/lib/site";

export const metadata: Metadata = {
  title: "State Boards",
  description:
    "AIMO has created boards at State level to be closer to the industry in each region. Chairmen and General Secretaries of the Assam, Delhi, Gujarat, Karnataka, Maharashtra, Punjab, Tamil Nadu and Telangana State Boards.",
};

export default function StateBoardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Network"
        title="State Boards"
        intro="AIMO is federal by design. Your membership relationship sits with the board closest to your unit, not with a distant head office."
        image={img.india}
        crumb="State Boards"
      />

      {/* Intro */}
      <section className="py-16 lg:py-20">
        <div className="shell max-w-4xl">
          {stateBoardsIntro.map((p, i) => (
            <p
              key={p.slice(0, 24)}
              className={`text-[15.5px] leading-relaxed text-slatey ${i > 0 ? "mt-4" : ""}`}
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Boards */}
      <section className="bg-mist py-16 lg:py-20">
        <div className="shell">
          <SectionHeading
            eyebrow="Find Your Chapter"
            title="Boards across the country"
            intro="Each board is elected annually by its own members and runs its own secretariat, event calendar and scheme clinics."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stateBoards.map((b) => (
              <article key={b.state} className="card group flex flex-col p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Building2 className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-mist px-3 py-1 text-[12px] font-medium text-slatey">
                    Elected annually
                  </span>
                </div>

                <h3 className="mt-5 text-[19px]">{b.state} State Board</h3>

                <ul className="mt-5 space-y-4 border-t border-hairline pt-5">
                  {b.officers.map((o) => (
                    <li key={o.role}>
                      <p className="font-display text-[12px] font-semibold uppercase tracking-widest text-brand">
                        {o.role}
                      </p>
                      <p className="mt-1 text-[15px] font-medium text-navy">{o.name}</p>
                      <a
                        href={`tel:${o.phone.replace(/\s/g, "")}`}
                        className="mt-1 inline-flex items-center gap-2 text-[13.5px] text-slatey hover:text-brand"
                      >
                        <Phone className="h-3.5 w-3.5 text-brand" />
                        {o.phone}
                      </a>
                    </li>
                  ))}
                </ul>

                <Link
                  href={b.href ?? "/contact"}
                  className="mt-auto inline-flex items-center gap-1.5 pt-6 font-display text-[14px] font-semibold text-navy transition-colors group-hover:text-brand"
                >
                  {b.href ? "About this board" : "Contact this board"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-xl border border-hairline bg-white p-8 text-center sm:p-10">
            <h3 className="text-2xl">Not sure which board covers you?</h3>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-slatey">
              Boards are organised by the state in which your principal unit is registered.
              If you operate across several states, or your region is not listed above, the
              National Secretariat will point you to the right chapter.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn btn-primary">
                Ask the Secretariat
              </Link>
              <Link href="/membership" className="btn btn-outline">
                About membership
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
