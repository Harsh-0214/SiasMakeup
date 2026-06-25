"use client";

import { useEffect, useRef } from "react";
import { Mail, Phone } from "lucide-react";
import InstagramIcon from "./InstagramIcon";

const contactLinks = [
  { icon: InstagramIcon, label: "Instagram", value: "@siasmakeup", href: "https://www.instagram.com/siasmakeup", sub: "Follow for the latest looks" },
  { icon: Mail, label: "Email", value: "siasmakeup@hotmail.com", href: "mailto:siasmakeup@hotmail.com", sub: "For bookings & inquiries" },
  { icon: Phone, label: "Phone", value: "(437) 882-5076", href: "tel:+14378825076", sub: "Call or text to book" },
];

const socials = [
  { label: "Instagram", handle: "@siasmakeup", href: "https://www.instagram.com/siasmakeup" },
  { label: "TikTok", handle: "@siasmakeupp", href: "https://www.tiktok.com/@siasmakeupp" },
  { label: "Facebook", handle: "Sia's Makeup", href: "https://www.facebook.com/" },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll<HTMLElement>("[data-reveal]").forEach((child, i) => {
            setTimeout(() => { child.style.opacity = "1"; child.style.transform = "translateY(0)"; }, i * 80);
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
      id="contact"
      style={{
        padding: "8rem clamp(2rem, 5vw, 5rem)",
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div ref={ref}>
        <div
          data-reveal
          style={{ opacity: 0, transform: "translateY(24px)", transition: "opacity 700ms var(--ease-out), transform 700ms var(--ease-out)", textAlign: "left", marginBottom: "3.5rem" }}
        >
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--accent-gold)", marginBottom: "1rem" }}>
            Get in Touch
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
              marginBottom: "0.75rem",
            }}
          >
            Book Your
            <br />
            <em style={{ fontStyle: "italic", color: "var(--accent-gold)", fontWeight: 400 }}>Appointment</em>
          </h2>
          <div style={{ width: "40px", height: "1px", background: "var(--accent-gold)", opacity: 0.7, margin: "0 0 1.25rem" }} />
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", lineHeight: 1.8, color: "var(--text-secondary)", maxWidth: "600px" }}>
            Ready to book or have questions? Reach out via any of the channels below.
            I&apos;m available across the GTA and beyond.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
          {contactLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                data-reveal
                style={{
                  opacity: 0,
                  transform: "translateY(24px)",
                  transition: `opacity 700ms var(--ease-out) ${i * 80}ms, transform 700ms var(--ease-out) ${i * 80}ms, border-color 200ms var(--ease-out)`,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.875rem",
                  padding: "2rem 1.5rem",
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--border-subtle)",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-gold)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)"; }}
              >
                <div style={{ width: "44px", height: "44px", border: "1px solid var(--border-medium)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent-gold)" }}>
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.3rem" }}>{link.label}</p>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.85rem", fontWeight: 500, color: "var(--text-primary)", marginBottom: "0.25rem", wordBreak: "break-all" }}>{link.value}</p>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "var(--text-muted)" }}>{link.sub}</p>
                </div>
              </a>
            );
          })}
        </div>

        <div
          data-reveal
          style={{
            opacity: 0,
            transform: "translateY(24px)",
            transition: "opacity 700ms var(--ease-out), transform 700ms var(--ease-out)",
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: "2rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "2rem",
          }}
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.25rem", textDecoration: "none", transition: "opacity 200ms var(--ease-out)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)" }}>{s.label}</span>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", color: "var(--accent-gold)" }}>{s.handle}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
