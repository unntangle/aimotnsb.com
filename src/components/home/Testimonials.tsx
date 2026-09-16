import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/site";

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-24">
      <div className="shell">
        <SectionHeading
          eyebrow="From the Membership"
          title="What changes when you are not doing it alone"
          intro="Members are identified by role and region rather than by name, at their request."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.quote} className="card relative p-8">
              <Quote className="absolute right-6 top-6 h-10 w-10 text-brand-soft" />
              <blockquote className="relative text-[15.5px] leading-relaxed text-slatey">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-hairline pt-5">
                <span className="block font-display text-[15px] font-semibold text-navy">
                  {t.name}
                </span>
                <span className="block text-[13.5px] text-brand">{t.org}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
