"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const MARQUEE_TEXT =
  "Bridal · Editorial · SFX & Theatre · Everyday Glam · Men's Grooming · GTA & Beyond · Bridal Parties · On-Location · ";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);

    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div
        ref={bgRef}
        aria-hidden
        style={{
          position: "absolute",
          inset: "-30%",
          background: `
            radial-gradient(ellipse 70% 55% at 65% 30%, rgba(139,115,85,0.12) 0%, transparent 65%),
            radial-gradient(ellipse 45% 65% at 15% 75%, rgba(201,166,107,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 35% 45% at 85% 75%, rgba(100,82,55,0.09) 0%, transparent 50%),
            linear-gradient(175deg, var(--bg-primary) 0%, #0b0a08 100%)
          `,
          willChange: "transform",
        }}
      />

      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "16%",
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, var(--border-subtle) 25%, var(--border-subtle) 75%, transparent 100%)",
        }}
      />

      <div
        aria-hidden
        style={{
          position: "absolute",
          right: "-4vw",
          top: "50%",
          transform: "translateY(-52%)",
          fontFamily: "var(--font-bodoni)",
          fontSize: "clamp(14rem, 32vw, 36rem)",
          fontWeight: 400,
          lineHeight: 0.85,
          letterSpacing: "-0.04em",
          color: "transparent",
          WebkitTextStroke: "1px rgba(201,166,107,0.065)",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        SM
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "calc(72px + 6vh) clamp(2.5rem, 8vw, 9rem) 5rem",
        }}
      >
        <div style={{ overflow: "hidden", marginBottom: "1.75rem" }}>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.62rem",
              fontWeight: 500,
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              color: "var(--accent-gold)",
              opacity: loaded ? 1 : 0,
              animation: loaded ? "slideUpReveal 0.7s var(--ease-out) 0.05s both" : undefined,
            }}
          >
            Freelance Makeup Artist · GTA
          </p>
        </div>

        <div
          aria-hidden
          style={{
            width: "52px",
            height: "1px",
            background: "var(--accent-gold)",
            opacity: 0.85,
            marginBottom: "2.25rem",
            transformOrigin: "left",
            transform: loaded ? "scaleX(1)" : "scaleX(0)",
            transition: loaded ? "transform 0.9s var(--ease-out) 0.2s" : "none",
          }}
        />

        <div style={{ marginBottom: "1.75rem" }}>
          <div style={{ overflow: "hidden" }}>
            <h1
              style={{
                fontFamily: "var(--font-bodoni)",
                fontSize: "clamp(4.5rem, 14vw, 12rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                color: "var(--text-primary)",
                lineHeight: 0.92,
                display: "block",
                margin: 0,
                opacity: loaded ? 1 : 0,
                animation: loaded ? "slideUpReveal 1s var(--ease-out) 0.22s both" : undefined,
              }}
            >
              Sia&apos;s
            </h1>
          </div>
          <div style={{ overflow: "hidden" }}>
            <h1
              className="gold-shimmer"
              style={{
                fontFamily: "var(--font-bodoni)",
                fontSize: "clamp(4.5rem, 14vw, 12rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                lineHeight: 0.92,
                display: "block",
                margin: 0,
                opacity: loaded ? 1 : 0,
                animation: loaded ? "slideUpReveal 1s var(--ease-out) 0.42s both" : undefined,
              }}
            >
              Makeup
            </h1>
          </div>
        </div>

        <div style={{ overflow: "hidden", marginBottom: "3rem" }}>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1rem, 2.5vw, 1.45rem)",
              fontWeight: 300,
              fontStyle: "italic",
              letterSpacing: "0.04em",
              color: "var(--text-secondary)",
              opacity: loaded ? 1 : 0,
              animation: loaded ? "slideUpReveal 0.85s var(--ease-out) 0.58s both" : undefined,
            }}
          >
            Bridal · Editorial · Everyday Glam · SFX
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            opacity: loaded ? 1 : 0,
            animation: loaded ? "fadeIn 0.8s var(--ease-out) 0.78s both" : undefined,
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
              padding: "1rem 2.75rem",
              backgroundColor: "var(--accent-gold)",
              color: "var(--bg-primary)",
              fontFamily: "var(--font-inter)",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background-color 280ms var(--ease-out), transform 180ms var(--ease-out)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent-gold-light)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent-gold)")
            }
            onMouseDown={(e) =>
              ((e.currentTarget as HTMLElement).style.transform = "scale(0.97)")
            }
            onMouseUp={(e) =>
              ((e.currentTarget as HTMLElement).style.transform = "scale(1)")
            }
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
              padding: "1rem 2.75rem",
              backgroundColor: "transparent",
              color: "var(--text-secondary)",
              border: "1px solid var(--border-medium)",
              fontFamily: "var(--font-inter)",
              fontSize: "0.65rem",
              fontWeight: 500,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition:
                "color 280ms var(--ease-out), border-color 280ms var(--ease-out), transform 180ms var(--ease-out)",
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
            onMouseDown={(e) =>
              ((e.currentTarget as HTMLElement).style.transform = "scale(0.97)")
            }
            onMouseUp={(e) =>
              ((e.currentTarget as HTMLElement).style.transform = "scale(1)")
            }
          >
            View Services
          </a>
        </div>
      </div>

      <button
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll to about section"
        style={{
          position: "absolute",
          bottom: "6rem",
          right: "clamp(2.5rem, 8vw, 9rem)",
          zIndex: 2,
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--text-muted)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          padding: "8px",
          transition: "color 200ms var(--ease-out)",
          animation: "bobDown 2.5s ease-in-out infinite",
          opacity: loaded ? 1 : 0,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-gold)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
      >
        <span
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.52rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
        <ChevronDown size={14} strokeWidth={1.2} />
      </button>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          borderTop: "1px solid var(--border-subtle)",
          overflow: "hidden",
          padding: "0.9rem 0",
          backgroundColor: "rgba(0,0,0,0.18)",
        }}
      >
        <div
          aria-hidden
          style={{
            display: "flex",
            animation: "marqueeScroll 32s linear infinite",
            width: "max-content",
          }}
        >
          {[MARQUEE_TEXT, MARQUEE_TEXT].map((text, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.56rem",
                fontWeight: 500,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                whiteSpace: "nowrap",
                paddingRight: "0",
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
