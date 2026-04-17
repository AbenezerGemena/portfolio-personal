import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  alt?: boolean; // alternate background
}

export default function Section({
  id,
  children,
  className,
  style,
  alt = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={className}
      style={{
        padding: "5rem 1.5rem",
        backgroundColor: alt ? "var(--bg-secondary)" : "var(--bg)",
        ...style,
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <h2
        style={{
          fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
          fontWeight: 700,
          color: "var(--text)",
          letterSpacing: "-0.03em",
          margin: 0,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            marginTop: "0.5rem",
            color: "var(--text-muted)",
            fontSize: "1rem",
          }}
        >
          {subtitle}
        </p>
      )}
      <div
        style={{
          marginTop: "0.75rem",
          width: "40px",
          height: "3px",
          backgroundColor: "var(--accent)",
          borderRadius: "2px",
        }}
      />
    </div>
  );
}
