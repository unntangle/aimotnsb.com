import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Newsletter from "@/components/home/Newsletter";
import { committeeMembers, img, stateOfficeBearers } from "@/lib/site";

export const metadata: Metadata = {
  title: "Members",
  description:
    "Office bearers and committee members of the All India Manufacturers' Organisation, Tamil Nadu State Board.",
};

const tints = [
  "from-brand to-brand-dark",
  "from-navy to-navy-600",
  "from-brand-light to-brand",
  "from-navy-600 to-navy-700",
];

/** Initials for the avatar disc, ignoring honorifics. */
function initials(name: string) {
  return name
    .replace(/^(Dr|Mr|Mrs|Ms|Shri|Smt)\.?\s+/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function MembersPage() {
  return (
    <>
      <PageHero
        eyebrow="Know AIMO"
        title="Members"
        intro="The office bearers and committee members of the AIMO Tamil Nadu State Board, elected by the membership to carry the work of the Board."
        image={img.boardroom}
        crumb="Members"
      />

      {/* ---------------------------- Office bearers ---------------------------- */}
      <section className="py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Tamil Nadu State Board"
            title="Office Bearers"
            intro="Working promoters who hold the elected offices of the Board."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stateOfficeBearers.map((o, i) => (
              <article key={`${o.role}-${o.name}`} className="card group p-7 text-center">
                <span
                  className={`mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br font-display text-lg font-extrabold text-white transition-transform duration-500 group-hover:scale-110 ${
                    tints[i % tints.length]
                  }`}
                >
                  {initials(o.name)}
                </span>

                <p className="mt-5 font-display text-[12.5px] font-semibold uppercase tracking-widest text-brand">
                  {o.role}
                </p>
                <h3 className="mt-1.5 text-[18px]">{o.name}</h3>
                <p className="mt-3 border-t border-hairline pt-3 text-[14px] leading-relaxed text-slatey">
                  {o.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------- Committee members --------------------------- */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow={`${committeeMembers.length} Members`}
            title="Committee Members"
            intro="Senior executives drawn from member companies, who study legislative and other matters of concern to industry and guide the work of the Board."
          />

          <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {committeeMembers.map((name, i) => (
              <li
                key={name}
                className="flex items-center gap-3.5 rounded-lg border border-hairline border-l-2 border-l-brand bg-white px-5 py-4 transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-18px_rgba(15,27,61,0.5)]"
              >
                <span className="font-display text-[13px] font-bold tabular-nums text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[14.5px] font-medium leading-snug text-navy">
                  {name}
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-14 rounded-xl border border-hairline bg-white p-8 text-center sm:p-10">
            <h3 className="text-2xl">Want a say in what the Board takes up?</h3>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-slatey">
              Committee seats are filled from the membership. Joining the Tamil Nadu State
              Board is the first step.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link href="/membership/apply" className="btn btn-primary">
                Become a Member
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Contact the Board
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
