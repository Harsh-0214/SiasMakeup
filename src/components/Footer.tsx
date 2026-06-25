"use client";

import InstagramIcon from "./InstagramIcon";
import LogoMark from "./LogoMark";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid var(--border-subtle)",
        padding: "3.5rem clamp(2rem, 5vw, 5rem) 2.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "2.5rem",
          marginBottom: "2.5rem",
          paddingBottom: "2.5rem",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <LogoMark size={44} showTagline />

        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            fontStyle: "italic",
            fontWeight: 300,
            color: "var(--text-secondary)",
            maxWidth: "320px",
            lineHeight: 1.6,
          }}
        >
          &ldquo;Every face tells a story — let me help you tell yours.&rdquo;
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {["About", "Services", "Gallery", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() =>
                document
                  .querySelector(`#${item.toLowerCase()}`)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                fontFamily: "var(--font-inter)",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                transition: "color 200ms var(--ease-out)",
                padding: 0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} Sia&apos;s Makeup. All rights reserved.
        </p>
        <a
          href="https://www.instagram.com/siasmakeup"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram @siasmakeup"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            fontFamily: "var(--font-inter)",
            fontSize: "0.65rem",
            letterSpacing: "0.12em",
            color: "var(--text-muted)",
            textDecoration: "none",
            transition: "color 200ms var(--ease-out)",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent-gold)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
        >
          <InstagramIcon size={12} strokeWidth={1.5} />
          @siasmakeup
        </a>
      </div>
    </footer>
  );
}
