"use client";

import { useEffect, useRef } from "react";
import InstagramIcon from "./InstagramIcon";

const galleryItems = [
  { label: "Bridal", aspect: "3/4" },
  { label: "Editorial", aspect: "3/4" },
  { label: "Full Face", aspect: "3/4" },
  { label: "SFX", aspect: "3/4" },
  { label: "Bridal Party", aspect: "3/4" },
  { label: "Men's Grooming", aspect: "3/4" },
];

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
            }, i * 60);
          });
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="gallery"
      style={{
        padding: "7rem clamp(2rem, 5vw, 5rem)",
      }}
    >
      <div ref={ref}>
        {/* Header */}
        <div
          data-reveal
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 600ms var(--ease-out), transform 600ms var(--ease-out)",
            textAlign: "left",
            marginBottom: "3.5rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.65rem",
              fontWeight: 500,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--accent-gold)",
              marginBottom: "1rem",
            }}
          >
            Portfolio
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 400,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--text-primary)",
              lineHeight: 1.1,
              marginBottom: "0.75rem",
            }}
          >
            Recent Work
          </h2>
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "var(--accent-gold)",
              opacity: 0.6,
              margin: "0 0 1rem",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.85rem",
              color: "var(--text-muted)",
              maxWidth: "400px",
              margin: "0 auto",
              lineHeight: 1.7,
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
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          {galleryItems.map((item, i) => (
            <div
              key={item.label}
              data-reveal
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: `opacity 600ms var(--ease-out) ${i * 60}ms, transform 600ms var(--ease-out) ${i * 60}ms`,
              }}
            >
              <GalleryCard label={item.label} aspect={item.aspect} index={i} />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div
          data-reveal
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 600ms var(--ease-out), transform 600ms var(--ease-out)",
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
              padding: "0.875rem 2rem",
              backgroundColor: "var(--bg-surface)",
              border: "1px solid var(--border-medium)",
              color: "var(--text-secondary)",
              fontFamily: "var(--font-inter)",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "color 200ms var(--ease-out), border-color 200ms var(--ease-out), transform 160ms var(--ease-out)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--accent-gold)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-gold)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border-medium)";
            }}
            onMouseDown={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(0.97)")}
            onMouseUp={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
          >
            <InstagramIcon size={15} strokeWidth={1.5} />
            View Full Portfolio on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ label, aspect, index }: { label: string; aspect: string; index: number }) {
  /* Varied earth-tone gradients to simulate photos */
  const gradients = [
    "linear-gradient(135deg, #2a2218 0%, #3d3025 40%, #1e1a14 100%)",
    "linear-gradient(150deg, #1a1c18 0%, #2d2820 50%, #241f18 100%)",
    "linear-gradient(120deg, #1e1a16 0%, #382e22 45%, #1a1610 100%)",
    "linear-gradient(160deg, #221d18 0%, #302820 50%, #1e1814 100%)",
    "linear-gradient(130deg, #201c14 0%, #3a3020 45%, #1a1810 100%)",
    "linear-gradient(145deg, #1c1a1a 0%, #2e2420 50%, #1a1416 100%)",
  ];

  return (
    <div
      style={{
        position: "relative",
        aspectRatio: aspect,
        overflow: "hidden",
        backgroundColor: "var(--bg-surface)",
        border: "1px solid var(--border-subtle)",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        const overlay = e.currentTarget.querySelector<HTMLElement>(".gallery-overlay");
        if (overlay) overlay.style.opacity = "1";
        e.currentTarget.style.borderColor = "var(--border-medium)";
      }}
      onMouseLeave={(e) => {
        const overlay = e.currentTarget.querySelector<HTMLElement>(".gallery-overlay");
        if (overlay) overlay.style.opacity = "0";
        e.currentTarget.style.borderColor = "var(--border-subtle)";
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: gradients[index % gradients.length],
        }}
      />

      {/* Texture dots */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(201,166,107,0.06) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Label overlay */}
      <div
        className="gallery-overlay"
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(19,18,16,0.75)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0,
          transition: "opacity 250ms var(--ease-out)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "1.25rem",
            fontWeight: 400,
            letterSpacing: "0.12em",
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
            background: "var(--accent-gold)",
            marginTop: "0.5rem",
          }}
        />
      </div>

      {/* Bottom label always visible */}
      <div
        style={{
          position: "absolute",
          bottom: "0.75rem",
          left: "0.75rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.6rem",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            backgroundColor: "rgba(19,18,16,0.7)",
            padding: "3px 8px",
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
