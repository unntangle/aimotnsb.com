import Link from "next/link";
import { ArrowUpRight, BarChart3, GraduationCap, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { pillars } from "@/lib/site";

const iconMap = {
  graduation: GraduationCap,
  chart: BarChart3,
  sparkles: Sparkles,
};

export default function Pillars() {
  return (
    <section className="py-20 lg:py-24">
      <div className="shell">
        <SectionHeading
          eyebrow="What AIMO Does"
          title="Three commitments we have kept for eight decades"
          intro="Educate, evaluate, evolve: the working method behind every submission we file and every room we convene."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = iconMap[p.icon as keyof typeof iconMap];
            return (
              <Link
                key={p.title}
                href={p.href}
                className={`card group relative overflow-hidden p-8 fade-up delay-${i + 1}`}
              >
                <span className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-brand-soft transition-transform duration-500 group-hover:scale-[2.6]" />

                <span className="relative grid h-14 w-14 place-items-center rounded-xl bg-brand-soft text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>

                <h3 className="relative mt-6 text-2xl">{p.title}</h3>
                <p className="relative font-display text-[14px] font-medium tracking-wide text-brand">
                  {p.subtitle}
                </p>
                <p className="relative mt-4 text-[15px] leading-relaxed text-slatey">
                  {p.body}
                </p>

                <span className="relative mt-6 inline-flex items-center gap-1.5 font-display text-[14px] font-semibold text-navy transition-colors group-hover:text-brand">
                  Learn more
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
