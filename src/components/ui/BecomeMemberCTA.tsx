import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Img from "@/components/ui/Img";
import { img } from "@/lib/site";

/**
 * Compact closing call to action used across the site. Light treatment over a
 * faded photograph so it stays distinct from the navy newsletter and footer.
 */
export default function BecomeMemberCTA({
  blurb = "Policy representation, credit clinics, research access and industry recognition, since 1941.",
}: {
  blurb?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden border-y border-hairline bg-mist py-12 lg:py-14">
      <div className="absolute inset-0 -z-10">
        <Img
          src={img.precision}
          alt=""
          sizes="100vw"
          seed="become-member"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/35" />
      </div>

      <div className="shell flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-[1.75rem]">
            Become a Member now and reap the benefits of AIMO TNSB
          </h2>
          <p className="mt-2.5 text-[15px] leading-relaxed text-slatey">{blurb}</p>
        </div>

        <Link href="/membership/apply" className="btn btn-primary shrink-0">
          Become a Member
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
