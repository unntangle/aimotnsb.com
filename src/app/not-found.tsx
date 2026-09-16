import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center py-24">
      <div className="shell text-center">
        <p className="font-display text-7xl font-extrabold text-brand-soft sm:text-8xl">
          404
        </p>
        <h1 className="mt-2 text-3xl sm:text-4xl">This page has moved on</h1>
        <p className="mx-auto mt-4 max-w-md text-[15.5px] leading-relaxed text-slatey">
          The page you were looking for is not here. It may have been renamed during the
          site refresh, or the link may be out of date.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn btn-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Tell us about the broken link
          </Link>
        </div>
      </div>
    </section>
  );
}
