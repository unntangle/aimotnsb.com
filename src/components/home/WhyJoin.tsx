import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import Img from "@/components/ui/Img";
import { img } from "@/lib/site";

export default function WhyJoin() {
  return (
    <section className="bg-mist py-20 lg:py-24">
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Imagery */}
        <div className="relative">
          <span className="dot-grid absolute -bottom-6 -left-6 hidden h-32 w-32 lg:block" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-[0_30px_60px_-30px_rgba(15,27,61,0.5)] sm:aspect-[4/3] lg:aspect-[4/5]">
            <Img
              src={img.networking}
              alt="AIMO TNSB members networking at a chapter meeting"
              sizes="(max-width: 1024px) 100vw, 50vw"
              seed="whyjoin"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 right-4 rounded-xl bg-navy px-6 py-5 text-white shadow-xl sm:right-8">
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

        {/* Copy */}
        <div>
          <p className="eyebrow mb-3">Why Join AIMO TNSB</p>
          <h2 className="text-3xl sm:text-4xl">
            A smaller organisation gets a louder voice by standing with others
          </h2>

          <p className="mt-4 flex items-center gap-2 text-[14px] font-medium text-navy">
            <CalendarDays className="h-4 w-4 text-brand" />
            Next member orientation · First Wednesday of every month, 4:00 PM IST
          </p>

          <p className="mt-5 text-[15.5px] leading-relaxed text-slatey">
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

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/membership/apply" className="btn btn-primary">
              Become a Member
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Partner with AIMO TNSB
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
