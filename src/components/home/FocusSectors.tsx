import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Img from "@/components/ui/Img";
import { img, sectors } from "@/lib/site";

export default function FocusSectors() {
  return (
    <section className="py-20 lg:py-24">
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <p className="eyebrow mb-3">Our Sectors</p>
          <h2 className="text-3xl sm:text-4xl">
            Every sector that turns raw material into livelihood
          </h2>
          <p className="mt-5 text-[15.5px] leading-relaxed text-slatey">
            AIMO&rsquo;s membership is deliberately broad. A foundry in Kolhapur and a
            software services firm in Chennai face different markets but the same three
            constraints: credit, compliance and skilled people. We organise our work around
            those constraints rather than around industry silos.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {sectors.map((s) => (
              <span
                key={s}
                className="flex items-center gap-3 rounded-md border border-hairline bg-white px-4 py-3 text-[14.5px] font-medium text-navy transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-sm"
              >
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {s}
              </span>
            ))}
          </div>

          <Link href="/about/tamil-nadu-state-board" className="btn btn-primary mt-9">
            About the Tamil Nadu State Board
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Imagery */}
        <div className="relative order-1 lg:order-2">
          <span className="dot-grid absolute -right-6 -top-6 hidden h-32 w-32 lg:block" />
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
              <Img
                src={img.precision}
                alt="Precision engineering at a member unit"
                sizes="(max-width: 1024px) 50vw, 25vw"
                seed="sector-a"
                className="object-cover"
              />
            </div>
            <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-xl">
              <Img
                src={img.womanEngineer}
                alt="Engineer inspecting components"
                sizes="(max-width: 1024px) 50vw, 25vw"
                seed="sector-b"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
