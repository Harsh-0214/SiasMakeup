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
              background: "var(--accent-gold)",
              opacity: 0.7,
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
              <GalleryCard label={item.label} aspect={item.aspect} index={i} />
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
              (e.currentTarget as HTMLElement).style.color = "var(--accent-gold)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-gold)";
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
  aspect,
  index,
}: {
  label: string;
  aspect: string;
  index: number;
}) {
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
        transition: "transform 400ms var(--ease-out), box-shadow 400ms var(--ease-out)",
        transformStyle: "preserve-3d",
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 14;
        e.currentTarget.style.transform = `perspective(900px) rotateX(${-y}deg) rotateY(${x}deg)`;
        e.currentTarget.style.boxShadow = `${-x * 1.5}px ${y * 1.5}px 40px rgba(0,0,0,0.4)`;
        e.currentTarget.style.transition = "transform 0ms, box-shadow 0ms";
        const overlay = e.currentTarget.querySelector<HTMLElement>(".gallery-overlay");
        if (overlay) overlay.style.opacity = "1";
        e.currentTarget.style.borderColor = "var(--border-medium)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transition =
          "transform 450ms var(--ease-out), box-shadow 450ms var(--ease-out)";
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
          backgroundImage:
            "radial-gradient(circle, rgba(201,166,107,0.07) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Hover overlay */}
      <div
        className="gallery-overlay"
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(16,15,13,0.78)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0,
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
            background: "var(--accent-gold)",
            marginTop: "0.6rem",
          }}
        />
      </div>

      {/* Bottom label */}
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
            fontSize: "0.55rem",
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            backgroundColor: "rgba(16,15,13,0.72)",
            padding: "3px 8px",
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
