import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, Quote } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Newsletter from "@/components/home/Newsletter";
import { img, internshipTestimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Internship Testimonials",
  description:
    "Students who completed placements with AIMO (TNSB) describe the work they did, what they learned on the shop floor and in the office, and what the internship changed for them.",
};

export default function InternshipTestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Internship"
        title="Internship Testimonials"
        intro="In their own words: interns from Tamil Nadu colleges on the projects they ran, the people they met, and what a placement inside an industry body actually taught them."
        image={img.lectureHall}
        crumb="Internship Testimonials"
      />

      <section className="py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="From the Interns"
            title="What the placement looked like from their side"
            intro="Testimonials are published as written, with only light corrections for spelling and spacing."
          />

          {/* Masonry-style columns so uneven testimonial lengths sit tightly. */}
          <div className="mt-14 columns-1 gap-6 lg:columns-2 [&>*]:mb-6">
            {internshipTestimonials.map((t) => (
              <figure
                key={t.name}
                className="card relative break-inside-avoid p-7 sm:p-8"
              >
                <Quote
                  aria-hidden
                  className="absolute right-6 top-6 h-9 w-9 text-brand-soft"
                />

                <figcaption className="flex items-center gap-4 pr-12">
                  <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-soft">
                    <Image
                      src={t.photo}
                      alt={t.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[17px] font-semibold uppercase tracking-wide text-navy">
                      {t.name}
                    </span>
                    <span className="mt-0.5 block text-[13px] leading-snug text-slatey">
                      {t.affiliation}
                    </span>
                  </span>
                </figcaption>

                <blockquote className="mt-6 space-y-4 border-t border-hairline pt-6">
                  {t.quote.map((p, i) => (
                    <p key={i} className="text-[14.5px] leading-relaxed text-slatey">
                      {i === 0 && <>&ldquo;</>}
                      {p}
                      {i === t.quote.length - 1 && <>&rdquo;</>}
                    </p>
                  ))}
                </blockquote>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="shell">
          <div className="card mx-auto max-w-3xl p-10 text-center sm:p-12">
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand">
              <GraduationCap className="h-5 w-5" />
            </span>
            <h2 className="mt-5 text-3xl">Your turn on the shop floor</h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-slatey">
              Students join us with a CV and an interest in how industry actually works.
              Write to the Secretariat to ask about the current intake, or to tell us how
              many interns your unit can supervise properly.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn btn-primary">
                Apply as a student
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Host an intern
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
