import Link from "next/link";
import { Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { membershipTiers } from "@/lib/site";

export default function MembershipPlans() {
  return (
    <section className="py-20 lg:py-24">
      <div className="shell">
        <SectionHeading
          eyebrow="Membership"
          title="Choose the category that fits your enterprise"
          intro="Every category carries a vote at your State Board. The difference is depth of access, not degree of belonging."
        />

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {membershipTiers.map((tier) => (
            <div
              key={tier.name}
              className={`card relative overflow-hidden p-8 ${
                tier.featured
                  ? "border-brand/30 shadow-[0_30px_60px_-32px_rgba(238,75,62,0.55)] lg:-mt-6 lg:pb-12 lg:pt-12"
                  : ""
              }`}
            >
              {tier.featured && (
                <span className="absolute right-0 top-0 rounded-bl-lg bg-brand px-4 py-1.5 font-display text-[11.5px] font-semibold uppercase tracking-widest text-white">
                  Most chosen
                </span>
              )}

              <h3 className="font-display text-[15px] font-semibold uppercase tracking-widest text-brand">
                {tier.name}
              </h3>
              <p className="mt-4 font-display text-4xl font-extrabold text-navy">
                {tier.price}
                <span className="ml-1.5 font-sans text-[14px] font-normal text-slatey">
                  {tier.cadence}
                </span>
              </p>
              <p className="mt-2 text-[14px] text-slatey">{tier.for}</p>

              <ul className="mt-7 space-y-3 border-t border-hairline pt-7">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14.5px] text-navy">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/membership/apply"
                className={`btn mt-8 w-full ${tier.featured ? "btn-primary" : "btn-outline"}`}
              >
                Apply for {tier.name}
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-[13px] text-slatey">
          Fees shown are indicative annual subscriptions. Final rates are confirmed by
          your State Board at the time of enrolment.{" "}
          <Link href="/membership" className="font-medium text-brand">
            More about membership
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
