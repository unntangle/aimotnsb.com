import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  CalendarDays,
  Cpu,
  Landmark,
  Users,
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import BecomeMemberCTA from "@/components/ui/BecomeMemberCTA";
import Newsletter from "@/components/home/Newsletter";
import Testimonials from "@/components/home/Testimonials";
import Img from "@/components/ui/Img";
import {
  enrolConfirmation,
  enrolSteps,
  img,
  memberBenefits,
  membershipLead,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Why manufacturers join AIMO TNSB, the Tamil Nadu State Board of the All India Manufacturers' Organisation: member benefits and how to enrol.",
};

const iconMap = {
  cpu: Cpu,
  landmark: Landmark,
  book: BookOpen,
  users: Users,
  chart: BarChart3,
  award: Award,
};

const faqs = [
  [
    "Do I need to be a manufacturer?",
    "No. AIMO TNSB's membership includes services MSMEs, which now form the largest part of the Indian economy. If your enterprise is registered and operating, you are eligible.",
  ],
  [
    "Which State Board should I join?",
    "Normally the one covering the state where your principal unit is registered. If you operate across several states, the Secretariat will advise you on the most useful chapter.",
  ],
  [
    "How long does approval take?",
    "Typically ten to fifteen working days, depending on your State Board's meeting cycle and the National Governing Council calendar.",
  ],
  [
    "Is membership annual?",
    "Yes. Subscriptions run for a financial year and are renewable. Members in good standing retain voting rights at their State Board.",
  ],
  [
    "Can an association or cluster join?",
    "Yes. Industry associations, clusters and groups can affiliate. Write to the General Secretary to discuss the arrangement.",
  ],
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Membership"
        intro="A smaller organisation gets a louder voice by standing with others. That is the whole proposition, and everything below is a consequence of it."
        image={img.officeTeam}
        crumb="Membership"
      />

      {/* ------------------------------ Why join ------------------------------ */}
      <section id="why-join" className="scroll-mt-28 py-20 lg:py-24">
        <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow mb-3">Why Join AIMO TNSB</p>
            <h2 className="text-3xl sm:text-4xl">
              A smaller organisation gets a louder voice by standing with others
            </h2>

            <p className="mt-4 flex items-center gap-2 text-[14px] font-medium text-navy">
              <CalendarDays className="h-4 w-4 text-brand" />
              Next member orientation · First Wednesday of every month, 4:00 PM IST
            </p>

            <p className="mt-6 text-[15.5px] leading-relaxed text-slatey">
              Most promoters have had the experience of raising a legitimate problem and
              watching it go nowhere, not because anyone opposed it, but because a single
              enterprise is not a constituency. An individual complaint is noise; a
              documented sector position is evidence. What changes the outcome is the same
              objection, from two hundred units, with numbers attached, filed inside the
              consultation window.
            </p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-slatey">
              Traditionally AIMO TNSB members have come from small, medium and large scale
              industries across the country: engineering, chemicals, pharmaceuticals, food
              processing and services. More recently we have seen a marked surge of interest
              from start-ups and new-age entrepreneurs, who find in AIMO TNSB a credible
              support and a genuine voice for their concerns at the policy level.
            </p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-slatey">
              AIMO TNSB works through cross-promotion and partnership. We are glad to work
              with organisations that share our values to jointly build programmes of real
              benefit to the business fraternity.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/membership/apply" className="btn btn-primary">
                Become a Member
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#benefits" className="btn btn-outline">
                See member benefits
              </Link>
            </div>
          </div>

          <div className="relative">
            <span className="dot-grid absolute -bottom-6 -left-6 hidden h-32 w-32 lg:block" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_30px_60px_-30px_rgba(15,27,61,0.5)]">
              <Img
                src={img.networking}
                alt="AIMO members at a chapter meeting"
                sizes="(max-width: 1024px) 100vw, 50vw"
                seed="whyjoin-page"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 right-4 rounded-xl bg-navy px-6 py-5 text-white shadow-xl">
              <p className="font-display text-3xl font-extrabold leading-none text-brand">
                80+
              </p>
              <p className="mt-1 text-[13px] leading-tight text-white/70">
                Years of continuous
                <br />
                industry representation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------ Benefits ------------------------------ */}
      <section id="benefits" className="scroll-mt-28 bg-mist py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Member Benefits"
            title={membershipLead}
            intro="Not a logo for your letterhead, but a set of working relationships you can call on when something goes wrong."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {memberBenefits.map((b) => {
              const Icon = iconMap[b.icon as keyof typeof iconMap];
              return (
                <div key={b.title} className="card group p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-[19px]">{b.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-slatey">{b.body}</p>
                  <p className="mt-3 border-t border-hairline pt-3 text-[13.5px] leading-relaxed text-slatey">
                    {b.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------------------------- How to enrol ---------------------------- */}
      <section id="how-to-enrol" className="scroll-mt-28 py-20 lg:py-24">
        <div className="shell grid items-start gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <div>
            <p className="eyebrow mb-3">How to Enroll</p>
            <h2 className="text-3xl sm:text-4xl">Six steps, roughly two weeks</h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-slatey">
              Applications are approved by both your State Board and the National Governing
              Council, which is why enrolment is not instantaneous.
            </p>

            <ol className="mt-10 space-y-7">
              {enrolSteps.map((s) => (
                <li key={s.step} className="flex gap-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand font-display text-[14px] font-bold text-white">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="text-[17px]">{s.title}</h3>
                    <p className="mt-1 text-[14.5px] leading-relaxed text-slatey">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-10 rounded-xl border border-hairline bg-mist p-6 text-[14.5px] leading-relaxed text-slatey">
              {enrolConfirmation}
            </p>
          </div>

          <div className="lg:sticky lg:top-28">
            <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-xl">
              <Img
                src={img.lectureHall}
                alt="Members at an AIMO orientation session"
                sizes="(max-width: 1024px) 100vw, 40vw"
                seed="cat-enrol"
                className="object-cover"
              />
            </div>

            <div className="card bg-navy p-8 text-white">
              <h3 className="text-xl text-white">Ready to join?</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-white/65">
                Fill in the membership form and the printed AIMO TNSB application
                downloads automatically once you submit. Sign it and send the hard copy to
                your State Board.
              </p>

              <Link href="/membership/apply" className="btn btn-primary mt-6 w-full">
                Become a Member
                <ArrowRight className="h-4 w-4" />
              </Link>

              <p className="mt-6 border-t border-white/10 pt-5 text-[13px] text-white/50">
                Payment may be made by RTGS or through the online payment gateway. Once
                approved you receive a membership number and docket.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-mist">
        <Testimonials />
      </div>

      {/* -------------------------------- FAQ --------------------------------- */}
      <section className="py-20 lg:py-24">
        <div className="shell">
          <SectionHeading eyebrow="Questions" title="Before you apply" />
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-hairline border-y border-hairline">
            {faqs.map(([q, a]) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[16.5px] font-semibold text-navy">
                  {q}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-soft text-brand transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 pr-10 text-[15px] leading-relaxed text-slatey">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------ Final CTA ------------------------------ */}
      <BecomeMemberCTA blurb="One form, a few minutes. Submit it and the printed application downloads straight away, ready to sign and send to your State Board." />

      <Newsletter />
    </>
  );
}
