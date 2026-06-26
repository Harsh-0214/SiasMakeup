export default function BotanicalAccent({
  size = 100,
  variant = "branch",
  style,
}: {
  size?: number;
  variant?: "branch" | "sprig" | "leaf";
  style?: React.CSSProperties;
}) {
  if (variant === "sprig") {
    return (
      <svg width={size} height={Math.round(size * 1.5)} viewBox="0 0 60 90" fill="none" aria-hidden style={style}>
        <path d="M30 88 C30 70 29 50 28 28 C27 12 28 2 30 2" stroke="currentColor" strokeWidth="0.9" opacity="0.7" />
        <path d="M29 68 C22 58 10 54 4 42 C14 48 24 58 29 68Z" fill="currentColor" opacity="0.6" />
        <path d="M29 68 C36 58 48 54 54 42 C44 48 34 58 29 68Z" fill="currentColor" opacity="0.48" />
        <path d="M28 46 C20 37 9 32 3 22 C13 28 23 38 28 46Z" fill="currentColor" opacity="0.52" />
        <path d="M28 46 C36 37 47 32 53 22 C43 28 33 38 28 46Z" fill="currentColor" opacity="0.4" />
        <path d="M29 26 C23 18 15 14 10 6 C18 12 26 20 29 26Z" fill="currentColor" opacity="0.44" />
        <path d="M29 26 C35 18 43 14 48 6 C40 12 32 20 29 26Z" fill="currentColor" opacity="0.35" />
      </svg>
    );
  }

  if (variant === "leaf") {
    return (
      <svg width={size} height={Math.round(size * 1.3)} viewBox="0 0 50 65" fill="none" aria-hidden style={style}>
        <path d="M25 62 C25 42 24 22 23 8 C22 2 24 0 25 0 C26 0 28 2 27 8 C26 22 25 42 25 62Z" stroke="currentColor" strokeWidth="0.7" fill="none" opacity="0.65" />
        <path d="M24 48 C10 38 2 28 1 14 C10 22 20 36 24 48Z" fill="currentColor" opacity="0.55" />
        <path d="M24 48 C38 38 46 28 47 14 C38 22 28 36 24 48Z" fill="currentColor" opacity="0.45" />
      </svg>
    );
  }

  return (
    <svg width={size} height={Math.round(size * 1.6)} viewBox="0 0 80 128" fill="none" aria-hidden style={style}>
      <path d="M40 125 C40 100 38 70 36 42 C34 18 37 3 40 3" stroke="currentColor" strokeWidth="1" opacity="0.72" />
      <path d="M38 102 C28 90 12 84 3 70 C16 77 30 90 38 102Z" fill="currentColor" opacity="0.55" />
      <path d="M38 102 C48 90 64 84 73 70 C60 77 46 90 38 102Z" fill="currentColor" opacity="0.44" />
      <path d="M37 76 C26 64 9 57 1 42 C14 50 29 63 37 76Z" fill="currentColor" opacity="0.48" />
      <path d="M37 76 C48 64 65 57 73 42 C60 50 45 63 37 76Z" fill="currentColor" opacity="0.38" />
      <path d="M37 50 C28 40 16 35 9 23 C20 29 32 41 37 50Z" fill="currentColor" opacity="0.42" />
      <path d="M37 50 C46 40 58 35 65 23 C54 29 42 41 37 50Z" fill="currentColor" opacity="0.33" />
      <path d="M38 28 C31 20 22 16 17 8 C26 13 35 22 38 28Z" fill="currentColor" opacity="0.36" />
      <path d="M38 28 C45 20 54 16 59 8 C50 13 41 22 38 28Z" fill="currentColor" opacity="0.28" />
    </svg>
  );
}
