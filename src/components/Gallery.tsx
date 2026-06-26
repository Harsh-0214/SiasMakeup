"use client";

import { useEffect, useRef, useState } from "react";
import InstagramIcon from "./InstagramIcon";

const galleryItems = [
  { label: "Bridal", accent: "gold" },
  { label: "Editorial", accent: "sage" },
  { label: "Full Face", accent: "rose" },
  { label: "SFX", accent: "gold" },
  { label: "Bridal Party", accent: "sage" },
  { label: "Men's Grooming", accent: "rose" },
];

const accentVars: Record<string, { border: string; label: string }> = {
  gold: { border: "var(--accent-gold)", label: "var(--accent-gold)" },
  sage: { border: "var(--accent-sage)", label: "var(--accent-sage)" },
  rose: { border: "var(--accent-rose)", label: "var(--accent-rose)" },
};

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll<HTMLElement>("[data-reveal]").forEach((child, i) => {
            setTimeout(() => {
              child.style.opacity = "1";
              child.style.transform = "translateY(0)";
            }, i * 70);
          });
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" style={{ padding: "8rem clamp(2rem, 5vw, 5rem)" }}>
      <div ref={ref}>
        {/* Header */}
        <div
          data-reveal
          style={{
            opacity: 0,
            transform: "translateY(24px)",
            transition: "opacity 700ms var(--ease-out), transform 700ms var(--ease-out)",
            textAlign: "left",
            marginBottom: "4rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.6rem",
              fontWeight: 500,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "var(--accent-gold)",
              marginBottom: "1.1rem",
            }}
          >
            Portfolio
          </p>
          <h2
            style={{
              fontFamily: "var(--font-bodoni)",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 400,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              color: "var(--text-primary)",
              lineHeight: 1,
              marginBottom: "1rem",
            }}
          >
            Recent Work
          </h2>
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "linear-gradient(90deg, var(--accent-gold), var(--accent-sage))",
              opacity: 0.8,
              margin: "0 0 1.25rem",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.85rem",
              color: "var(--text-muted)",
              maxWidth: "400px",
              lineHeight: 1.8,
            }}
          >
            Follow along on Instagram for the latest looks, behind-the-scenes and more.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1.25rem",
            marginBottom: "3.5rem",
          }}
        >
          {galleryItems.map((item, i) => (
            <div
              key={item.label}
              data-reveal
              style={{
                opacity: 0,
                transform: "translateY(24px)",
                transition: `opacity 700ms var(--ease-out) ${i * 70}ms, transform 700ms var(--ease-out) ${i * 70}ms`,
              }}
            >
              <GalleryCard label={item.label} accent={item.accent} index={i} />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div
          data-reveal
          style={{
            opacity: 0,
            transform: "translateY(24px)",
            transition: "opacity 700ms var(--ease-out), transform 700ms var(--ease-out)",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <a
            href="https://www.instagram.com/siasmakeup"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.625rem",
              padding: "1rem 2.25rem",
              backgroundColor: "var(--bg-surface)",
              border: "1px solid var(--border-medium)",
              color: "var(--text-secondary)",
              fontFamily: "var(--font-inter)",
              fontSize: "0.65rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition:
                "color 250ms var(--ease-out), border-color 250ms var(--ease-out), transform 180ms var(--ease-out)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--accent-sage)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-sage)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border-medium)";
            }}
            onMouseDown={(e) =>
              ((e.currentTarget as HTMLElement).style.transform = "scale(0.97)")
            }
            onMouseUp={(e) =>
              ((e.currentTarget as HTMLElement).style.transform = "scale(1)")
            }
          >
            <InstagramIcon size={14} strokeWidth={1.5} />
            View Full Portfolio on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

function GalleryCard({
  label,
  accent,
  index,
}: {
  label: string;
  accent: string;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const { border, label: labelColor } = accentVars[accent] ?? accentVars.gold;

  const patternColors = [
    ["rgba(139,115,85,0.18)", "rgba(138,170,120,0.1)"],
    ["rgba(138,170,120,0.18)", "rgba(139,115,85,0.1)"],
    ["rgba(196,136,122,0.16)", "rgba(139,115,85,0.12)"],
    ["rgba(139,115,85,0.14)", "rgba(196,136,122,0.1)"],
    ["rgba(138,170,120,0.15)", "rgba(196,136,122,0.1)"],
    ["rgba(196,136,122,0.14)", "rgba(138,170,120,0.1)"],
  ];
  const [c1, c2] = patternColors[index % patternColors.length];

  return (
    <div
      style={{
        position: "relative",
        aspectRatio: "3/4",
        overflow: "hidden",
        backgroundColor: "var(--bg-surface)",
        border: `1px solid ${hovered ? border : "var(--border-subtle)"}`,
        cursor: "pointer",
        transform: hovered ? "translateY(-4px) scale(1.015)" : "translateY(0) scale(1)",
        boxShadow: hovered ? `0 16px 40px rgba(0,0,0,0.22), 0 0 0 1px ${border}22` : "none",
        transition: "transform 380ms var(--ease-out), box-shadow 380ms var(--ease-out), border-color 250ms var(--ease-out)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(135deg, ${c1} 0%, var(--bg-elevated) 50%, ${c2} 100%)`,
          backgroundColor: "var(--bg-surface)",
        }}
      />

      {/* Dot texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle, ${border}22 1px, transparent 1px)`,
          backgroundSize: "18px 18px",
          opacity: hovered ? 1 : 0.5,
          transition: "opacity 380ms var(--ease-out)",
        }}
      />

      {/* Botanical line art */}
      <svg
        aria-hidden
        viewBox="0 0 80 120"
        fill="none"
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "1rem",
          width: "52px",
          opacity: hovered ? 0.18 : 0.08,
          color: border,
          transition: "opacity 380ms var(--ease-out)",
          pointerEvents: "none",
        }}
      >
        <path d="M40 118 C40 95 38 65 36 38 C34 16 37 3 40 3" stroke="currentColor" strokeWidth="1.2" />
        <path d="M38 90 C28 78 12 72 3 58 C16 65 30 78 38 90Z" fill="currentColor" />
        <path d="M38 90 C48 78 64 72 73 58 C60 65 46 78 38 90Z" fill="currentColor" opacity="0.7" />
        <path d="M37 62 C26 50 9 43 1 28 C14 36 29 49 37 62Z" fill="currentColor" opacity="0.8" />
        <path d="M37 62 C48 50 65 43 73 28 C60 36 45 49 37 62Z" fill="currentColor" opacity="0.6" />
      </svg>

      {/* Hover overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(14,13,11,0.72)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          opacity: hovered ? 1 : 0,
          transition: "opacity 280ms var(--ease-out)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-bodoni)",
            fontSize: "1.4rem",
            fontWeight: 400,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
          }}
        >
          {label}
        </p>
        <div
          style={{
            width: "24px",
            height: "1px",
            background: labelColor,
          }}
        />
      </div>

      {/* Bottom label chip */}
      <div
        style={{
          position: "absolute",
          bottom: "0.75rem",
          left: "0.75rem",
          opacity: hovered ? 0 : 1,
          transition: "opacity 200ms var(--ease-out)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.55rem",
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            backgroundColor: "var(--bg-primary)",
            padding: "3px 8px",
            border: `1px solid ${border}44`,
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
