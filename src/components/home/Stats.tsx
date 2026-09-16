import Img from "@/components/ui/Img";
import { img, stats } from "@/lib/site";

export default function Stats() {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-20 lg:py-24">
      <div className="absolute inset-0 -z-10">
        <Img
          src={img.factoryFloor}
          alt=""
          sizes="100vw"
          seed="stats"
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy-700" />
      </div>

      <div className="shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-3">The Sector We Represent</p>
          <h2 className="text-3xl text-white sm:text-4xl">
            India does not run on its largest companies alone
          </h2>
          <p className="mt-5 text-[15.5px] leading-relaxed text-white/70">
            Micro, small and medium enterprises are the substrate beneath almost every
            supply chain in the country. These are the numbers AIMO TNSB carries into
            every consultation.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group bg-navy px-6 py-10 text-center transition-colors duration-300 hover:bg-brand"
            >
              <p className="font-display text-4xl font-extrabold text-brand transition-colors duration-300 group-hover:text-white lg:text-5xl">
                {s.value}
              </p>
              <p className="mt-3 text-[14.5px] leading-snug text-white/65 transition-colors group-hover:text-white/90">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-[13px] text-white/45">
          Sources: Ministry of Commerce; Directorate General of Commercial Intelligence
          and Statistics (DGCIS). MSME product exports reached US$ 124.4 bn in 2017–18.
        </p>
      </div>
    </section>
  );
}
