"use client";

import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "72px 1.5rem 4rem",
      }}
    >
      {/* Industrial concrete background layers */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 60% at 50% 40%, rgba(139,115,85,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 50% 80% at 20% 80%, rgba(201,166,107,0.05) 0%, transparent 60%),
            linear-gradient(180deg, var(--bg-primary) 0%, #161410 100%)
          `,
        }}
      />

      {/* Horizontal rule lines — industrial detail */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "15%",
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, var(--border-subtle) 30%, var(--border-subtle) 70%, transparent)",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "15%",
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, var(--border-subtle) 30%, var(--border-subtle) 70%, transparent)",
        }}
      />

      {/* Main content */}
      <div
        ref={scrollRef}
        style={{
          position: "relative",
          textAlign: "center",
          maxWidth: "780px",
          opacity: 0,
          transform: "translateY(24px)",
          transition: "opacity 800ms var(--ease-out), transform 800ms var(--ease-out)",
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.7rem",
            fontWeight: 500,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--accent-gold)",
            marginBottom: "1.5rem",
          }}
        >
          Freelance Makeup Artist · GTA
        </p>

        {/* Gold divider */}
        <div
          aria-hidden
          style={{
            width: "48px",
            height: "1px",
            background: "var(--accent-gold)",
            margin: "0 auto 1.5rem",
            opacity: 0.7,
          }}
        />

        {/* Main heading */}
        <h1
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(3.5rem, 10vw, 7.5rem)",
            fontWeight: 300,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            lineHeight: 1,
            marginBottom: "1.25rem",
          }}
        >
          Sia&apos;s
          <br />
          <span
            style={{
              color: "var(--accent-gold)",
              fontWeight: 600,
            }}
          >
            Makeup
          </span>
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
            fontWeight: 400,
            fontStyle: "italic",
            letterSpacing: "0.04em",
            color: "var(--text-secondary)",
            marginBottom: "2.5rem",
          }}
        >
          Bridal · Editorial · Everyday Glam · SFX
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "160px",
              padding: "0.875rem 2rem",
              backgroundColor: "var(--accent-gold)",
              color: "var(--bg-primary)",
              fontFamily: "var(--font-inter)",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background-color 200ms var(--ease-out), transform 160ms var(--ease-out)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent-gold-light)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent-gold)")}
            onMouseDown={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(0.97)")}
            onMouseUp={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
          >
            Book Now
          </a>

          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "160px",
              padding: "0.875rem 2rem",
              backgroundColor: "transparent",
              color: "var(--text-secondary)",
              border: "1px solid var(--border-medium)",
              fontFamily: "var(--font-inter)",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "color 200ms var(--ease-out), border-color 200ms var(--ease-out), transform 160ms var(--ease-out)",
              cursor: "pointer",
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
            View Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll to about section"
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--text-muted)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.25rem",
          padding: "8px",
          transition: "color 200ms var(--ease-out)",
          animation: "bobDown 2s ease-in-out infinite",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-gold)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
      >
        <ChevronDown size={20} strokeWidth={1} />
      </button>

      <style>{`
        @keyframes bobDown {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
}
