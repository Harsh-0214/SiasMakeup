export default function SiteVine() {
  return (
    <div
      aria-hidden
      className="hidden lg:block"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "42px",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 5,
        overflow: "hidden",
        color: "var(--accent-sage)",
        opacity: 0.45,
      }}
    >
      <svg
        viewBox="0 0 50 1000"
        preserveAspectRatio="xMidYMin meet"
        fill="none"
        style={{ width: "42px", height: "100%", display: "block" }}
      >
        {/* Main stem */}
        <path
          d="M25 0 C20 80 30 160 25 260 C20 360 30 460 25 560 C20 660 30 760 25 860 C23 920 25 1000 25 1000"
          stroke="currentColor"
          strokeWidth="1.4"
          opacity="0.6"
        />

        {/* Leaves at ~80 */}
        <path d="M24 80 C13 68 4 54 8 42 C13 37 23 63 24 80Z" fill="currentColor" opacity="0.65" />
        <path d="M26 80 C37 68 46 54 42 42 C37 37 27 63 26 80Z" fill="currentColor" opacity="0.5" />

        {/* Tendril ~130 */}
        <path d="M26 130 C36 125 42 116 40 108 C38 100 30 101 29 107 C28 113 33 118 38 116" stroke="currentColor" strokeWidth="0.9" opacity="0.45" />

        {/* Leaves at ~230 */}
        <path d="M23 230 C10 218 2 202 7 190 C12 185 22 210 23 230Z" fill="currentColor" opacity="0.6" />
        <path d="M27 230 C40 218 48 202 43 190 C38 185 28 210 27 230Z" fill="currentColor" opacity="0.45" />

        {/* Small leaf ~280 */}
        <path d="M24 280 C15 271 8 259 13 249 C18 245 24 267 24 280Z" fill="currentColor" opacity="0.42" />

        {/* Tendril ~330 */}
        <path d="M24 330 C14 325 8 315 13 307 C17 299 24 302 24 308 C24 314 18 318 13 316" stroke="currentColor" strokeWidth="0.9" opacity="0.4" />

        {/* Leaves at ~420 */}
        <path d="M23 420 C10 408 2 392 7 380 C12 375 22 400 23 420Z" fill="currentColor" opacity="0.62" />
        <path d="M27 420 C40 408 48 392 43 380 C38 375 28 400 27 420Z" fill="currentColor" opacity="0.47" />

        {/* Tendril ~475 */}
        <path d="M26 475 C36 469 42 459 39 451 C36 443 28 445 27 451 C26 457 31 462 36 460" stroke="currentColor" strokeWidth="0.9" opacity="0.42" />

        {/* Leaves at ~570 */}
        <path d="M23 570 C10 558 2 542 7 530 C12 525 22 550 23 570Z" fill="currentColor" opacity="0.58" />
        <path d="M27 570 C40 558 48 542 43 530 C38 525 28 550 27 570Z" fill="currentColor" opacity="0.44" />

        {/* Small leaf ~618 */}
        <path d="M26 618 C37 610 44 598 40 588 C36 583 26 604 26 618Z" fill="currentColor" opacity="0.4" />

        {/* Tendril ~660 */}
        <path d="M24 660 C14 655 8 645 13 637 C17 629 24 632 24 638 C24 644 18 648 13 646" stroke="currentColor" strokeWidth="0.9" opacity="0.38" />

        {/* Leaves at ~745 */}
        <path d="M23 745 C10 733 2 717 7 705 C12 700 22 725 23 745Z" fill="currentColor" opacity="0.6" />
        <path d="M27 745 C40 733 48 717 43 705 C38 700 28 725 27 745Z" fill="currentColor" opacity="0.46" />

        {/* Tendril ~800 */}
        <path d="M26 800 C36 794 42 784 39 776 C36 768 28 770 27 776 C26 782 31 787 36 785" stroke="currentColor" strokeWidth="0.9" opacity="0.4" />

        {/* Leaves at ~880 */}
        <path d="M23 880 C10 868 2 852 7 840 C12 835 22 860 23 880Z" fill="currentColor" opacity="0.55" />
        <path d="M27 880 C40 868 48 852 43 840 C38 835 28 860 27 880Z" fill="currentColor" opacity="0.42" />

        {/* Small leaf ~940 */}
        <path d="M24 940 C15 932 8 920 13 910 C18 906 24 928 24 940Z" fill="currentColor" opacity="0.4" />
      </svg>
    </div>
  );
}
