"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, shouldStart: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!shouldStart) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [shouldStart, target, duration]);
  return value;
}

const stats = [
  { numeric: 5, suffix: "+", label: "Years Experience" },
  { numeric: 200, suffix: "+", label: "Happy Clients" },
  { numeric: null, display: "GTA", label: "& Beyond" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          el.querySelectorAll<HTMLElement>("[data-reveal]").forEach((child, i) => {
            setTimeout(() => {
              child.style.opacity = "1";
              child.style.transform = "translateY(0)";
            }, i * 90);
          });
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const count0 = useCountUp(stats[0].numeric!, visible);
  const count1 = useCountUp(stats[1].numeric!, visible, 2200);
  const counts = [count0, count1, null];

  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: "8rem clamp(2rem, 5vw, 5rem)" }}
    >
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4.5rem" }}
        className="lg:grid-cols-2"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          <div
            data-reveal
            style={{
              opacity: 0,
              transform: "translateY(24px)",
              transition: "opacity 700ms var(--ease-out), transform 700ms var(--ease-out)",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "440px",
                aspectRatio: "4/3",
                position: "relative",
                overflow: "hidden",
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `
                    linear-gradient(135deg, rgba(139,115,85,0.15) 0%, transparent 55%),
                    linear-gradient(315deg, rgba(107,98,88,0.12) 0%, transparent 60%)
                  `,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-bodoni)",
                    fontSize: "clamp(5rem, 14vw, 8rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    color: "var(--accent-gold)",
                    lineHeight: 0.88,
                    opacity: 0.9,
                  }}
                >
                  SM
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.35em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                  }}
                >
                  Sia&apos;s Makeup Studio
                </p>
              </div>
              <div style={{ position: "absolute", top: "1.25rem", right: "1.25rem", width: "28px", height: "28px", borderTop: "1px solid var(--accent-gold)", borderRight: "1px solid var(--accent-gold)", opacity: 0.5 }} />
              <div style={{ position: "absolute", bottom: "1.25rem", left: "1.25rem", width: "28px", height: "28px", borderBottom: "1px solid var(--accent-gold)", borderLeft: "1px solid var(--accent-gold)", opacity: 0.5 }} />
            </div>
          </div>

          <div
            data-reveal
            style={{
              opacity: 0,
              transform: "translateY(24px)",
              transition: "opacity 700ms var(--ease-out) 80ms, transform 700ms var(--ease-out) 80ms",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  padding: "1.75rem 1rem",
                  textAlign: "center",
                  borderRight: i < stats.length - 1 ? "1px solid var(--border-subtle)" : "none",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-bodoni)",
                    fontSize: "2.2rem",
                    fontWeight: 400,
                    color: "var(--accent-gold)",
                    lineHeight: 1,
                    marginBottom: "0.4rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {stat.numeric !== null
                    ? `${counts[i]}${stat.suffix}`
                    : stat.display}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.6rem",
                    fontWeight: 500,
                    letterSpacing: "0.18em",
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

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "1.75rem" }}>
          <div
            data-reveal
            style={{
              opacity: 0,
              transform: "translateY(24px)",
              transition: "opacity 700ms var(--ease-out) 120ms, transform 700ms var(--ease-out) 120ms",
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
                marginBottom: "1.25rem",
              }}
            >
              About Sia
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
              }}
            >
              The Art of
              <br />
              <em style={{ fontStyle: "italic", color: "var(--accent-gold)", fontWeight: 400 }}>
                Making You Shine
              </em>
            </h2>
          </div>

          <div
            data-reveal
            style={{
              opacity: 0,
              transform: "translateY(24px)",
              transition: "opacity 700ms var(--ease-out) 200ms, transform 700ms var(--ease-out) 200ms",
            }}
          >
            <div style={{ width: "40px", height: "1px", background: "var(--accent-gold)", opacity: 0.7, marginBottom: "1.5rem" }} />
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.92rem", lineHeight: 1.9, color: "var(--text-secondary)", marginBottom: "1.1rem" }}>
              Hi, I&apos;m Sia — a freelance makeup artist based in the GTA with a passion for
              enhancing natural beauty and creating bold, transformative looks. Whether you&apos;re
              walking down the aisle, stepping in front of a camera, or simply wanting to feel
              your best, I bring precision and artistry to every face I work on.
            </p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.92rem", lineHeight: 1.9, color: "var(--text-secondary)" }}>
              Specializing in bridal, editorial, SFX, and everyday glam — with services for
              every occasion and all genders. I travel within the GTA and beyond to bring the
              studio to you.
            </p>
          </div>

          <div
            data-reveal
            style={{
              opacity: 0,
              transform: "translateY(24px)",
              transition: "opacity 700ms var(--ease-out) 280ms, transform 700ms var(--ease-out) 280ms",
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
                fontSize: "0.68rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--accent-gold)",
                textDecoration: "none",
                borderBottom: "1px solid var(--accent-gold-dark)",
                paddingBottom: "3px",
                transition: "color 200ms var(--ease-out), border-color 200ms var(--ease-out)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--accent-gold-light)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--accent-gold)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-gold-dark)";
              }}
            >
              Follow @siasmakeup →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
