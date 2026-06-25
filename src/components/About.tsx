"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "200+", label: "Happy Clients" },
  { value: "GTA", label: "& Beyond" },
];

export default function About() {
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
            }, i * 80);
          });
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "7rem clamp(2rem, 5vw, 5rem)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "4rem",
        }}
        className="lg:grid-cols-2"
      >
        {/* Left: decorative element + stats */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          <div
            data-reveal
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 600ms var(--ease-out), transform 600ms var(--ease-out)",
            }}
          >
            {/* Abstract industrial block */}
            <div
              style={{
                width: "100%",
                maxWidth: "420px",
                aspectRatio: "4/3",
                position: "relative",
                overflow: "hidden",
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              {/* Concrete texture layers */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `
                    linear-gradient(135deg, rgba(139,115,85,0.12) 0%, transparent 50%),
                    linear-gradient(315deg, rgba(107,98,88,0.1) 0%, transparent 60%)
                  `,
                }}
              />
              {/* Studio aesthetic text overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2rem",
                  textAlign: "center",
                }}
              >
                {/* SM monogram */}
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    border: "1px solid var(--border-medium)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      color: "var(--accent-gold)",
                    }}
                  >
                    SM
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                  }}
                >
                  Sia&apos;s Makeup Studio
                </p>
              </div>

              {/* Gold corner accent */}
              <div
                style={{
                  position: "absolute",
                  top: "1.25rem",
                  right: "1.25rem",
                  width: "32px",
                  height: "32px",
                  borderTop: "1px solid var(--accent-gold)",
                  borderRight: "1px solid var(--accent-gold)",
                  opacity: 0.6,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "1.25rem",
                  left: "1.25rem",
                  width: "32px",
                  height: "32px",
                  borderBottom: "1px solid var(--accent-gold)",
                  borderLeft: "1px solid var(--accent-gold)",
                  opacity: 0.6,
                }}
              />
            </div>
          </div>

          {/* Stats */}
          <div
            data-reveal
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 600ms var(--ease-out), transform 600ms var(--ease-out)",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0",
              border: "1px solid var(--border-subtle)",
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  padding: "1.5rem 1rem",
                  textAlign: "center",
                  borderRight: i < stats.length - 1 ? "1px solid var(--border-subtle)" : "none",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "2rem",
                    fontWeight: 600,
                    color: "var(--accent-gold)",
                    lineHeight: 1,
                    marginBottom: "0.375rem",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.65rem",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: text */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "1.5rem" }}>
          <div
            data-reveal
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 600ms var(--ease-out), transform 600ms var(--ease-out)",
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
              About Sia
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 400,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "var(--text-primary)",
                lineHeight: 1.1,
              }}
            >
              The Art of
              <br />
              <em style={{ color: "var(--accent-gold)", fontStyle: "italic", fontWeight: 300 }}>
                Making You Shine
              </em>
            </h2>
          </div>

          <div
            data-reveal
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 600ms var(--ease-out), transform 600ms var(--ease-out)",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "1px",
                background: "var(--accent-gold)",
                opacity: 0.6,
                marginBottom: "1.25rem",
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.9rem",
                lineHeight: 1.8,
                color: "var(--text-secondary)",
                marginBottom: "1rem",
              }}
            >
              Hi, I&apos;m Sia — a freelance makeup artist based in the GTA with a passion for
              enhancing natural beauty and creating bold, transformative looks. Whether you&apos;re
              walking down the aisle, stepping in front of a camera, or simply wanting to feel
              your best, I bring precision and artistry to every face I work on.
            </p>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.9rem",
                lineHeight: 1.8,
                color: "var(--text-secondary)",
              }}
            >
              Specializing in bridal, editorial, SFX, and everyday glam — with services
              for every occasion and all genders. I travel within the GTA and beyond to
              bring the studio to you.
            </p>
          </div>

          <div
            data-reveal
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 600ms var(--ease-out), transform 600ms var(--ease-out)",
            }}
          >
            <a
              href="https://www.instagram.com/siasmakeup"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "var(--font-inter)",
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--accent-gold)",
                textDecoration: "none",
                borderBottom: "1px solid var(--accent-gold-dark)",
                paddingBottom: "2px",
                transition: "color 200ms var(--ease-out)",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent-gold-light)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent-gold)")}
            >
              Follow @siasmakeup →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
