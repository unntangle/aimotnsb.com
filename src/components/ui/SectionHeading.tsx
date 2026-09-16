import { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "light",
  className = "",
}: Props) {
  const centred = align === "center";

  return (
    <div
      className={`${centred ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2
        className={`text-3xl sm:text-4xl ${tone === "dark" ? "text-white" : ""}`}
      >
        {title}
      </h2>
      <span
        className={`mt-5 block h-[3px] w-14 rounded-full bg-brand ${
          centred ? "mx-auto" : ""
        }`}
      />
      {intro && (
        <p
          className={`mt-5 text-[15px] leading-relaxed ${
            tone === "dark" ? "text-white/70" : "text-slatey"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
