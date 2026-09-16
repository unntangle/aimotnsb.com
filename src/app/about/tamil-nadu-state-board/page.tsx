import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Factory, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Img from "@/components/ui/Img";
import Newsletter from "@/components/home/Newsletter";
import { contact, img, tnBoard } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the Tamil Nadu State Board",
  description:
    "The AIMO Tamil Nadu State Board serves members across Chennai, Coimbatore, Tiruppur, Hosur, Salem, Madurai and Trichy with policy representation, scheme clinics and skill development.",
};

export default function TamilNaduBoardPage() {
  return (
    <>
      <PageHero
        eyebrow="Know AIMO"
        title="About the Tamil Nadu State Board"
        intro={tnBoard.intro}
        image={img.factoryFloor}
        crumb="Tamil Nadu State Board"
      />

      {/* Overview */}
      <section className="py-20 lg:py-24">
        <div className="shell grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="eyebrow mb-3">The Chapter</p>
            <h2 className="text-3xl sm:text-4xl">
              A manufacturing state needs a working board, not a letterhead
            </h2>

            <p className="mt-6 text-[15.5px] leading-relaxed text-slatey">
              Tamil Nadu carries one of the densest concentrations of small and medium
              manufacturing in the country. Auto ancillaries in Hosur, pumps and foundries
              in Coimbatore, knitwear in Tiruppur, light engineering across the Ambattur
              and Chennai belts. Each cluster has its own supply chain, its own buyers and
              its own version of the same three problems.
            </p>

            <p className="mt-4 text-[15.5px] leading-relaxed text-slatey">
              The State Board exists to make those problems legible to the people who can
              act on them. It is elected annually by members in the state, maintains its own
              secretariat in Chennai, and works district by district through the local
              chapters rather than expecting members to travel to a single office.
            </p>

            <p className="mt-4 text-[15.5px] leading-relaxed text-slatey">
              Everything the Board does sits under the national mandate set in 1941,{" "}
              <strong className="text-navy">Prosperity through Industry</strong>, but the
              agenda is set locally, by members who run units in this state.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/about/office-bearers" className="btn btn-primary">
                Office bearers &amp; committees
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/membership/apply" className="btn btn-outline">
                Join the Tamil Nadu Board
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_30px_60px_-30px_rgba(15,27,61,0.5)]">
              <Img
                src={img.precision}
                alt="Precision manufacturing at a Tamil Nadu member unit"
                sizes="(max-width: 1024px) 100vw, 45vw"
                seed="tn-board"
                className="object-cover"
              />
            </div>

            <div className="card bg-navy p-7 text-white">
              <h3 className="text-xl text-white">State Secretariat</h3>
              <ul className="mt-5 space-y-3.5 text-[14.5px] text-white/70">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  Chennai, Tamil Nadu
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <a href="tel:+919840944318" className="hover:text-white">
                    +91 98409 44318
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <a href={`mailto:${contact.emails[0]}`} className="break-all hover:text-white">
                    {contact.emails[0]}
                  </a>
                </li>
              </ul>
              <Link href="/contact" className="btn btn-ghost mt-6 w-full">
                Contact the Board
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clusters */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="District Chapters"
            title="Where our members are"
            intro="Chapters follow the clusters rather than administrative boundaries, because that is how the supply chains actually run."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tnBoard.clusters.map((c) => (
              <div key={c.name} className="card group p-7">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Factory className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-[18px]">{c.name}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-slatey">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 lg:py-24">
        <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-2xl lg:order-1">
            <Img
              src={img.handshake}
              alt="Members at a Tamil Nadu chapter meeting"
              sizes="(max-width: 1024px) 100vw, 50vw"
              seed="tn-activities"
              className="object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="eyebrow mb-3">What the Board Does</p>
            <h2 className="text-3xl">A calendar built around member constraints</h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-slatey">
              Not a programme of talks. Each of these exists because members asked for it
              and keep turning up.
            </p>

            <ul className="mt-7 space-y-3">
              {tnBoard.activities.map((a) => (
                <li key={a} className="flex items-start gap-3 text-[15px] text-navy">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {a}
                </li>
              ))}
            </ul>

            <Link href="/events" className="btn btn-primary mt-8">
              See the current calendar
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
