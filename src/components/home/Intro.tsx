import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Img from "@/components/ui/Img";
import { img } from "@/lib/site";

export default function Intro() {
  return (
    <section className="relative overflow-hidden bg-mist py-20 lg:py-24">
      <div className="shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p className="eyebrow mb-3">Saving Livelihoods Is As Important As Saving Lives</p>
          <h2 className="text-3xl sm:text-[2.6rem]">
            Bridging the last mile between government and the shop floor
          </h2>

          <p className="mt-6 text-[15.5px] leading-relaxed text-slatey">
            The purpose of AIMO TNSB is to encourage dialogue and partnership among the
            many stakeholders of the MSME ecosystem, promoting innovation and knowledge
            sharing on the issues that decide whether a small enterprise survives its next
            quarter.
          </p>

          <p className="mt-4 text-[15.5px] leading-relaxed text-slatey">
            Schemes are announced with real intent. They fail, when they fail, in the last
            mile, in the gap between a notification in Delhi and a promoter in Hosur who
            has never heard of it, or cannot assemble the paperwork. Closing that gap is
            most of what we do. Our national footprint covers micro, small and medium
            enterprises across manufacturing and the services sector, which remains the
            most dynamic part of the Indian economy.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="border-l-2 border-brand pl-5">
              <p className="font-display text-[15px] font-semibold text-navy">
                Founded in 1941
              </p>
              <p className="mt-1 text-[14px] text-slatey">
                By Bharat Ratna Sir M. Visvesvaraya, with the motto &ldquo;Prosperity
                through Industry&rdquo;.
              </p>
            </div>
            <div className="border-l-2 border-brand pl-5">
              <p className="font-display text-[15px] font-semibold text-navy">
                Headquartered in Mumbai
              </p>
              <p className="mt-1 text-[14px] text-slatey">
                With annually elected State and Regional Boards and their own
                secretariats.
              </p>
            </div>
          </div>

          <Link href="/about" className="btn btn-primary mt-9">
            More about AIMO TNSB
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative">
          <div className="relative aspect-[5/6] overflow-hidden rounded-2xl shadow-[0_30px_70px_-32px_rgba(15,27,61,0.6)]">
            <Img
              src={img.aimoEvent1}
              alt="AIMO TNSB members and office bearers at a national conference"
              sizes="(max-width: 1024px) 100vw, 45vw"
              seed="intro"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
            <blockquote className="absolute inset-x-0 bottom-0 p-7">
              <p className="font-display text-xl font-bold leading-snug text-white sm:text-2xl">
                &ldquo;Industry is the surest road out of poverty for a nation that has
                people willing to work.&rdquo;
              </p>
              <footer className="mt-3 text-[13.5px] text-white/70">
                In the spirit of our founder&rsquo;s writing on industrial self-reliance
              </footer>
            </blockquote>
          </div>
          <span className="absolute -left-5 -top-5 -z-10 hidden h-32 w-32 rounded-2xl bg-brand/15 lg:block" />
        </div>
      </div>
    </section>
  );
}
