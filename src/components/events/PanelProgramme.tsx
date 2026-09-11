import { Download, ExternalLink, FileText } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Panel discussion programme for TechKnow 2026.
 *
 * The PDF lives in /public/assets. Its filename contains spaces and brackets,
 * so the URL below is percent-encoded — keep the two in sync if the file is
 * ever renamed.
 */
const PDF_SRC =
  "/assets/PANEL%20DISCUSSION-PROGRAM%20SCHEDULE%20(PRE-FINAL)%20FOR%20TECHKNOW%202026.pdf";

/**
 * Chrome and Edge honour these Adobe open parameters and drop their dark
 * toolbar and thumbnail rail, leaving just the pages. Firefox and Safari
 * ignore them and show their own viewer chrome — there is no way to style
 * that, since it renders outside the page's DOM.
 */
const PDF_EMBED_SRC = `${PDF_SRC}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`;

const PDF_DOWNLOAD_NAME =
  "AIMO-TNSB-TechKnow-2026-Panel-Discussion-Schedule.pdf";

export default function PanelProgramme() {
  return (
    <section id="programme" className="scroll-mt-28 py-20 lg:py-24">
      <div className="shell">
        <SectionHeading
          eyebrow="Session Programme"
          title="Panel discussion schedule"
          intro="The pre-final programme for TechKnow 2026, setting out the panel sessions across both days. Read it below, or download a copy to circulate within your unit."
        />

        {/* ---------------------------- Actions ---------------------------- */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={PDF_SRC}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <ExternalLink className="h-4 w-4" />
            Open in new tab
          </a>
          <a href={PDF_SRC} download={PDF_DOWNLOAD_NAME} className="btn btn-outline">
            <Download className="h-4 w-4" />
            Download schedule
          </a>
        </div>

        {/* ----------------------------- Viewer ---------------------------- */}
        <div className="mt-10 overflow-hidden rounded-xl border border-hairline bg-mist shadow-[0_24px_60px_-40px_rgba(15,27,61,0.55)]">
          {/* File bar */}
          <div className="flex items-center gap-3 border-b border-hairline bg-white px-5 py-3.5">
            <FileText className="h-4 w-4 shrink-0 text-brand" />
            <p className="truncate font-display text-[13.5px] font-semibold text-navy">
              Panel Discussion — Programme Schedule (Pre-final)
            </p>
            <span className="ml-auto shrink-0 rounded-full bg-brand-soft px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-widest text-brand">
              PDF
            </span>
          </div>

          {/* Inline document. Rendered by the browser's own PDF viewer on
              desktop; the children below act as the fallback where that
              viewer is unavailable. */}
          <object
            data={PDF_EMBED_SRC}
            type="application/pdf"
            aria-label="Panel discussion programme schedule for TechKnow 2026"
            className="hidden h-[720px] w-full sm:block lg:h-[860px]"
          >
            <div className="px-6 py-16 text-center">
              <p className="text-[15px] text-slatey">
                Your browser cannot display the PDF inline.
              </p>
              <a
                href={PDF_SRC}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-6"
              >
                Open the schedule
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </object>

          {/* Phones: most mobile browsers refuse to render PDFs in-page, so
              send the reader straight to the file instead of an empty box. */}
          <div className="px-6 py-14 text-center sm:hidden">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-xl bg-brand-soft text-brand">
              <FileText className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-xl">Panel discussion schedule</h3>
            <p className="mx-auto mt-3 max-w-xs text-[14.5px] leading-relaxed text-slatey">
              The programme opens best in a full window on a phone.
            </p>
            <a
              href={PDF_SRC}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-6"
            >
              Open the schedule
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        <p className="mt-5 text-center text-[13.5px] text-slatey">
          This is a pre-final schedule. Session timings and panellists may change closer to
          the event.
        </p>
      </div>
    </section>
  );
}
