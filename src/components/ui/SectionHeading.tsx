import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = false, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <ScrollReveal width={centered ? "100%" : "fit-content"}>
          <p className={`font-sans tracking-[0.2em] text-xs uppercase mb-4 ${light ? "text-gray-400" : "text-jeevana-green"}`}>
            {subtitle}
          </p>
        </ScrollReveal>
      )}
      <ScrollReveal width={centered ? "100%" : "fit-content"}>
        <h2 className={`font-display text-4xl md:text-5xl font-bold tracking-tight text-balance ${light ? "text-white" : "text-jeevana-dark"}`}>
          {title}
        </h2>
      </ScrollReveal>
      <ScrollReveal width={centered ? "100%" : "fit-content"} delay={0.2}>
        <div className={`h-1 w-16 mt-6 ${centered ? "mx-auto" : ""} ${light ? "bg-jeevana-accent" : "bg-jeevana-green"}`} />
      </ScrollReveal>
    </div>
  );
}
