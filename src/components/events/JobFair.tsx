import { Briefcase, Building2, CalendarDays, GraduationCap, MapPin, Users } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { jobFair, type JobFairCompany } from "@/lib/site";

/**
 * TECHKNOW 2026 Mega Job Fair: participating companies and what each is
 * recruiting for. All content lives in `jobFair` in src/lib/site.ts.
 */

const OPENING_TYPES = [
  { key: "regular", label: "Regular Job" },
  { key: "internship", label: "Internship" },
  { key: "apprenticeship", label: "Apprenticeship cum Job" },
] as const;

const fmt = (n: number) => n.toLocaleString("en-IN");

export default function JobFair() {
  const companies: JobFairCompany[] = jobFair.companies;
  const totalOpenings = companies.reduce((sum, c) => sum + c.total, 0);

  const facts = [
    { icon: CalendarDays, label: "Date", value: jobFair.dateLabel },
    { icon: MapPin, label: "Venue", value: jobFair.venue },
    { icon: Building2, label: "Companies", value: `${companies.length} recruiters` },
    { icon: Users, label: "Openings", value: `${fmt(totalOpenings)} vacancies` },
  ];

  return (
    <section id="job-fair" className="scroll-mt-28 border-b border-hairline py-20 lg:py-24">
      <div className="shell">
        <SectionHeading
          eyebrow="TECHKNOW 2026 · Mega Job Fair"
          title="Companies recruiting at the job fair"
          intro="Regular jobs, internships and apprenticeship-cum-job openings from companies across Tamil Nadu and Karnataka. Check the eligible branches below and bring copies of your resume and certificates on the day."
        />

        {/* --------------------------- Key facts --------------------------- */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-xl border border-hairline bg-mist px-5 py-4"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand text-white">
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="font-display text-[11.5px] font-semibold uppercase tracking-widest text-slatey">
                  {label}
                </p>
                <p className="text-[14.5px] font-medium leading-snug text-navy">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ------------------------- Company cards ------------------------- */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {companies.map((c, i) => (
            <article key={c.name} className="card flex flex-col p-6">
              {/* Header */}
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft font-display text-[14px] font-bold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[17px] leading-snug">{c.name}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-[13.5px] text-slatey">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-brand" />
                    {c.location}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <span className="block font-display text-2xl font-extrabold leading-none text-brand">
                    {fmt(c.total)}
                  </span>
                  <span className="mt-1 block text-[11.5px] uppercase tracking-wider text-slatey">
                    Openings
                  </span>
                </div>
              </div>

              {/* Opening types */}
              <div className="mt-5 flex flex-wrap gap-2">
                {OPENING_TYPES.filter(({ key }) => c.openings[key] !== undefined).map(
                  ({ key, label }) => (
                    <span
                      key={key}
                      className="rounded-full border border-hairline bg-mist px-3 py-1 text-[12.5px] font-medium text-navy"
                    >
                      {label}
                      <span className="ml-1.5 font-semibold text-brand">{c.openings[key]}</span>
                    </span>
                  ),
                )}
              </div>

              {/* Details */}
              <dl className="mt-5 space-y-3 border-t border-hairline pt-5 text-[14px]">
                <div className="flex gap-3">
                  <dt className="shrink-0">
                    <GraduationCap className="mt-0.5 h-4 w-4 text-brand" aria-label="Eligible branches" />
                  </dt>
                  <dd className="leading-snug text-navy">
                    {c.branches ?? <span className="text-slatey">Branches to be announced at the venue</span>}
                  </dd>
                </div>
                {(c.salary || c.stipend) && (
                  <div className="flex gap-3">
                    <dt className="shrink-0">
                      <Briefcase className="mt-0.5 h-4 w-4 text-brand" aria-label="Pay" />
                    </dt>
                    <dd className="space-y-1 leading-snug text-navy">
                      {c.salary && (
                        <p>
                          <span className="text-slatey">Salary: </span>
                          <span className="font-semibold">{c.salary}</span>
                        </p>
                      )}
                      {c.stipend && (
                        <p>
                          <span className="text-slatey">Stipend: </span>
                          <span className="font-semibold">{c.stipend}</span>
                        </p>
                      )}
                    </dd>
                  </div>
                )}
              </dl>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-[13.5px] text-slatey">
          LPA = lakhs per annum. Vacancies and packages are as shared by the participating
          companies and may change on the day.
        </p>
      </div>
    </section>
  );
}
