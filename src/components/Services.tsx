"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

type ServiceItem = {
  name: string;
  price: string | null;
  includes?: string;
  note?: string;
};

type ServiceCategory = {
  id: string;
  title: string;
  subtitle?: string;
  note?: string;
  items: ServiceItem[];
};

type ServiceTab = {
  id: string;
  label: string;
  categories: ServiceCategory[];
};

const services: ServiceTab[] = [
  {
    id: "makeup",
    label: "Makeup",
    categories: [
      {
        id: "makeup-services",
        title: "Makeup Services",
        note: "Makeup set prices: with or without lashes. Travel fee TBD.",
        items: [
          { name: "False Lash Application", price: "$5" },
          { name: "False Lash + Liner", price: "$10", includes: "Mascara, tightrope lining, false lashes" },
          { name: "Brows Only", price: "$20", includes: "Filling + concealing + powder" },
          { name: "Eye's Only", price: "$30", includes: "Light brows, eyeshadow, liner, mascara + lashes" },
          { name: "Express Face", price: "$45", includes: "Skin prep, brows, mascara, wash of colour, light concealing + blush/bronzer, lipgloss" },
          { name: "Full Face Makeup", price: "$85", includes: "Skin prep, colour correcting, brows, full eyes, concealer, foundation, bronzer/contour, blush & highlight, false lashes" },
          { name: "SFX / Halloween / Theatre MU", price: "$100" },
        ],
      },
    ],
  },
  {
    id: "bridal",
    label: "Bridal",
    categories: [
      {
        id: "within-gta",
        title: "Within GTA",
        subtitle: "All services include false lashes",
        items: [
          { name: "Bridal Consultation", price: "$30" },
          { name: "Bridal Trial", price: "$50" },
          { name: "Bridal Makeup", price: "$130" },
          { name: "MOB / MOG", price: "$120" },
          { name: "Bridesmaid's Makeup (per head)", price: "$100" },
          { name: "Travel / Kit Fee", price: "$40" },
        ],
      },
      {
        id: "out-of-town",
        title: "Out of Town",
        subtitle: "All services include false lashes",
        items: [
          { name: "Bridal Consultation", price: "$30" },
          { name: "Bridal Trial", price: "$70" },
          { name: "Bridal Makeup", price: "$150" },
          { name: "MOB / MOG", price: "$140" },
          { name: "Bridesmaid's Makeup (per head)", price: "$120" },
          { name: "Travel / Kit Fee", price: "TBD" },
        ],
      },
      {
        id: "out-of-country",
        title: "Out of Country",
        subtitle: "All services include false lashes",
        items: [
          { name: "Bridal Consult", price: "$30" },
          { name: "Bridal Trial", price: "TBD" },
          { name: "Bridal Makeup", price: "$150" },
          { name: "MOB / MOG", price: "$140" },
          { name: "Bridesmaid's Makeup (per head)", price: "$120" },
          { name: "Travel Round Trip", price: "40%" },
        ],
      },
    ],
  },
  {
    id: "mens",
    label: "Men's Grooming",
    categories: [
      {
        id: "brows-beards",
        title: "Brows & Beards",
        items: [
          { name: "Eyebrow Clean Up / Shaping", price: "$10" },
          { name: "Eyebrow Tinting", price: "$15" },
          { name: "Beard Trimming / Light Shaping", price: "$25" },
          { name: "Beard Tinting", price: "$30" },
        ],
      },
      {
        id: "grooming-looks",
        title: "Grooming Packages",
        note: "Travel + kit fee to be determined upon booking.",
        items: [
          { name: "Basic Grooming (Single Look / Event)", price: "$50", includes: "Skin prep, light concealer, anti-shine products, beard & eyebrow grooming + basic hair styling" },
          { name: "Headshots / Photography (1–2 Looks)", price: "$100", includes: "Skin prep, concealer, beard & eyebrow grooming, anti-shine products + hair styling" },
          { name: "Wedding Day Grooming", price: "$120", includes: "Skin prep, light foundation/concealer, beard & eyebrow grooming, anti-shine products, hair styling + touch up kit" },
        ],
      },
    ],
  },
];

function ServiceRow({ item }: { item: ServiceItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: "1px solid var(--border-subtle)" }}>
      <button
        onClick={() => item.includes && setOpen(!open)}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          cursor: item.includes ? "pointer" : "default",
          padding: "1.1rem 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          textAlign: "left",
          transition: "opacity 150ms",
        }}
        aria-expanded={item.includes ? open : undefined}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flex: 1, minWidth: 0 }}>
          {item.includes && (
            <ChevronDown
              size={14}
              strokeWidth={1.5}
              style={{
                flexShrink: 0,
                color: "var(--accent-gold)",
                transition: "transform 200ms var(--ease-out)",
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          )}
          <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-primary)" }}>
            {item.name}
          </span>
        </div>
        <span
          style={{
            fontFamily: "var(--font-bodoni)",
            fontSize: "1.4rem",
            fontWeight: 400,
            color: item.price === "TBD" ? "var(--text-muted)" : "var(--accent-gold)",
            flexShrink: 0,
            letterSpacing: "-0.01em",
          }}
        >
          {item.price ?? "—"}
        </span>
      </button>

      {item.includes && (
        <div style={{ maxHeight: open ? "200px" : "0", overflow: "hidden", transition: "max-height 300ms var(--ease-out)" }}>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-muted)", paddingBottom: "1rem", paddingLeft: "1.5rem", lineHeight: 1.7 }}>
            <span style={{ color: "var(--earth-clay)", fontWeight: 600 }}>Includes: </span>
            {item.includes}
          </p>
        </div>
      )}
    </div>
  );
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("makeup");

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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const activeService = services.find((s) => s.id === activeTab)!;

  return (
    <section
      id="services"
      style={{
        padding: "8rem clamp(2rem, 5vw, 5rem)",
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div ref={ref}>
        <div
          data-reveal
          style={{
            opacity: 0,
            transform: "translateY(24px)",
            transition: "opacity 700ms var(--ease-out), transform 700ms var(--ease-out)",
            textAlign: "left",
            marginBottom: "3.5rem",
          }}
        >
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--accent-gold)", marginBottom: "1rem" }}>
            Pricing
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
            Services &amp; Rates
          </h2>
          <div style={{ width: "40px", height: "1px", background: "var(--accent-gold)", opacity: 0.7, margin: "0" }} />
        </div>

        <div
          data-reveal
          style={{
            opacity: 0,
            transform: "translateY(24px)",
            transition: "opacity 700ms var(--ease-out), transform 700ms var(--ease-out)",
            display: "flex",
            gap: "0",
            marginBottom: "3rem",
            border: "1px solid var(--border-subtle)",
          }}
        >
          {services.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flex: 1,
                padding: "0.875rem 1rem",
                background: activeTab === tab.id ? "var(--accent-gold)" : "transparent",
                border: "none",
                borderRight: "1px solid var(--border-subtle)",
                cursor: "pointer",
                fontFamily: "var(--font-inter)",
                fontSize: "0.68rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: activeTab === tab.id ? "var(--bg-primary)" : "var(--text-muted)",
                transition: "background-color 200ms var(--ease-out), color 200ms var(--ease-out), transform 160ms var(--ease-out)",
              }}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          data-reveal
          style={{
            opacity: 0,
            transform: "translateY(24px)",
            transition: "opacity 700ms var(--ease-out), transform 700ms var(--ease-out)",
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
          }}
        >
          {activeService.categories.map((cat) => (
            <div key={cat.id}>
              <div style={{ marginBottom: "0.5rem" }}>
                <h3 style={{ fontFamily: "var(--font-bodoni)", fontSize: "1.6rem", fontWeight: 400, letterSpacing: "-0.01em", textTransform: "uppercase", color: "var(--text-primary)", marginBottom: "0.25rem" }}>
                  {cat.title}
                </h3>
                {cat.subtitle && (
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", letterSpacing: "0.1em", color: "var(--earth-clay)", fontStyle: "italic", marginBottom: "0.75rem" }}>
                    * {cat.subtitle}
                  </p>
                )}
                <div style={{ width: "28px", height: "1px", background: "var(--accent-gold)", opacity: 0.5, marginBottom: "0.25rem" }} />
              </div>
              <div>
                {cat.items.map((item) => (
                  <ServiceRow key={item.name} item={item} />
                ))}
              </div>
              {cat.note && (
                <p style={{ marginTop: "0.75rem", fontFamily: "var(--font-inter)", fontSize: "0.7rem", color: "var(--text-muted)", fontStyle: "italic" }}>
                  * {cat.note}
                </p>
              )}
            </div>
          ))}
        </div>

        <div
          data-reveal
          style={{
            opacity: 0,
            transform: "translateY(24px)",
            transition: "opacity 700ms var(--ease-out), transform 700ms var(--ease-out)",
            textAlign: "left",
            marginTop: "3.5rem",
            padding: "2.5rem",
            border: "1px solid var(--border-subtle)",
            backgroundColor: "var(--bg-surface)",
          }}
        >
          <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.3rem", fontStyle: "italic", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
            Ready to book your appointment?
          </p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem 2.75rem",
              backgroundColor: "transparent",
              color: "var(--accent-gold)",
              border: "1px solid var(--accent-gold)",
              fontFamily: "var(--font-inter)",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background-color 200ms var(--ease-out), color 200ms var(--ease-out), transform 160ms var(--ease-out)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent-gold)"; (e.currentTarget as HTMLElement).style.color = "var(--bg-primary)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLElement).style.color = "var(--accent-gold)"; }}
            onMouseDown={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(0.97)")}
            onMouseUp={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
