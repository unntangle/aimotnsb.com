import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Img from "@/components/ui/Img";

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  image: string;
  crumb: string;
};

export default function PageHero({ eyebrow, title, intro, image, crumb }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <div className="absolute inset-0 -z-10">
        <Img
          src={image}
          alt=""
          sizes="100vw"
          seed={crumb}
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
      </div>

      <div className="shell py-20 lg:py-28">
        <div className="max-w-2xl fade-up">
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          <h1 className="text-4xl text-white sm:text-5xl">{title}</h1>
          {intro && (
            <p className="mt-5 text-[16px] leading-relaxed text-white/70">{intro}</p>
          )}

          <nav className="mt-8 flex items-center gap-2 text-[13.5px] text-white/55">
            <Link href="/" className="hover:text-brand">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">{crumb}</span>
          </nav>
        </div>
      </div>

      <span className="absolute -bottom-16 right-8 hidden h-40 w-40 rotate-12 rounded-3xl bg-brand/25 lg:block" />
    </section>
  );
}
