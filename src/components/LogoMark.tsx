"use client";

export default function LogoMark({
  size = 48,
  showTagline = false,
}: {
  size?: number;
  showTagline?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        lineHeight: 1,
        userSelect: "none",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-bodoni)",
          fontSize: `${size}px`,
          fontWeight: 400,
          letterSpacing: "-0.02em",
          color: "var(--accent-gold)",
          lineHeight: 0.88,
          display: "block",
        }}
      >
        SM
      </span>
      {showTagline && (
        <span
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: `${Math.max(7, Math.round(size * 0.16))}px`,
            fontWeight: 400,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginTop: `${Math.round(size * 0.12)}px`,
            display: "block",
          }}
        >
          Sia&apos;s Makeup
        </span>
      )}
    </div>
  );
}
