"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import InstagramIcon from "./InstagramIcon";
import LogoMark from "./LogoMark";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const stored = localStorage.getItem("theme") as "dark" | "light" | null;
    if (stored) {
      setTheme(stored);
      document.documentElement.setAttribute("data-theme", stored);
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navBg = scrolled
    ? theme === "light"
      ? "rgba(234,229,220,0.94)"
      : "rgba(16,15,13,0.94)"
    : "transparent";

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 clamp(1.5rem, 4vw, 3rem)",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "background-color 350ms var(--ease-out), border-color 350ms var(--ease-out)",
          backgroundColor: navBg,
          backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
          borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{ textDecoration: "none" }}
          aria-label="Sia's Makeup — back to top"
        >
          <LogoMark size={34} showTagline={false} />
        </a>

        {/* Desktop nav */}
        <nav
          style={{ display: "flex", alignItems: "center", gap: "2rem" }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-inter)",
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
                transition: "color 200ms var(--ease-out)",
                padding: "4px 0",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.label}
            </button>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle light/dark mode"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              border: "1px solid var(--border-medium)",
              background: "none",
              cursor: "pointer",
              color: "var(--text-secondary)",
              transition: "color 200ms var(--ease-out), border-color 200ms var(--ease-out)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--accent-gold)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-gold)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border-medium)";
            }}
          >
            {theme === "dark" ? <Sun size={14} strokeWidth={1.5} /> : <Moon size={14} strokeWidth={1.5} />}
          </button>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/siasmakeup"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @siasmakeup"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              border: "1px solid var(--border-medium)",
              color: "var(--text-secondary)",
              transition: "color 200ms var(--ease-out), border-color 200ms var(--ease-out)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--accent-gold)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-gold)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border-medium)";
            }}
          >
            <InstagramIcon size={14} strokeWidth={1.5} />
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text-primary)",
            padding: "8px",
            transition: "transform 160ms var(--ease-out)",
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.92)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </header>

      {/* Scroll progress bar */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          top: "72px",
          left: 0,
          height: "1px",
          width: `${progress}%`,
          background: "linear-gradient(90deg, var(--accent-gold-dark), var(--accent-gold), var(--accent-gold-light))",
          zIndex: 101,
          transition: "width 80ms linear",
          transformOrigin: "left",
        }}
      />

      {/* Mobile menu overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99,
          backgroundColor: theme === "light" ? "rgba(234,229,220,0.97)" : "rgba(16,15,13,0.97)",
          backdropFilter: "blur(24px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0",
          transform: open ? "translateY(0)" : "translateY(-100%)",
          opacity: open ? 1 : 0,
          transition: "transform 350ms var(--ease-out), opacity 280ms var(--ease-out)",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        {/* Logo in mobile menu */}
        <div style={{ marginBottom: "3rem" }}>
          <LogoMark size={52} showTagline />
        </div>

        {navLinks.map((link, i) => (
          <button
            key={link.href}
            onClick={() => handleNavClick(link.href)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-bodoni)",
              fontSize: "clamp(2rem, 8vw, 3rem)",
              fontWeight: 400,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--text-primary)",
              transition: "color 200ms var(--ease-out)",
              padding: "0.6rem 0",
              animation: open ? `slideUpReveal 0.5s var(--ease-out) ${i * 0.06 + 0.1}s both` : undefined,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
          >
            {link.label}
          </button>
        ))}

        <div style={{
          marginTop: "2.5rem",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          animation: open ? "fadeIn 0.5s var(--ease-out) 0.35s both" : undefined,
        }}>
          <a
            href="https://www.instagram.com/siasmakeup"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              fontFamily: "var(--font-inter)",
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              color: "var(--accent-gold)",
              textDecoration: "none",
            }}
          >
            <InstagramIcon size={14} strokeWidth={1.5} />
            @siasmakeup
          </a>

          <button
            onClick={toggleTheme}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-inter)",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            {theme === "dark" ? <Sun size={13} strokeWidth={1.5} /> : <Moon size={13} strokeWidth={1.5} />}
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </>
  );
}
