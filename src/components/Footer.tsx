"use client";

import InstagramIcon from "./InstagramIcon";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid var(--border-subtle)",
        padding: "2.5rem clamp(2rem, 5vw, 5rem)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
        }}
      >
        {/* Brand */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "1.1rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--accent-gold)",
            }}
          >
            Sia&apos;s Makeup
          </p>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              color: "var(--text-muted)",
              marginTop: "0.25rem",
            }}
          >
            Freelance Makeup Artist · GTA
          </p>
        </div>

        {/* Copyright */}
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.65rem",
            letterSpacing: "0.08em",
            color: "var(--text-muted)",
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()} Sia&apos;s Makeup. All rights reserved.
        </p>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/siasmakeup"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram @siasmakeup"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.375rem",
            fontFamily: "var(--font-inter)",
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            color: "var(--text-muted)",
            textDecoration: "none",
            transition: "color 200ms var(--ease-out)",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent-gold)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
        >
          <InstagramIcon size={13} strokeWidth={1.5} />
          @siasmakeup
        </a>
      </div>
    </footer>
  );
}
