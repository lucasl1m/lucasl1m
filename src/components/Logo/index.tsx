/**
 * Logo em SVG que herda a cor do texto (currentColor).
 * Funciona em tema claro e escuro ao usar classes como text-whiteText.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <text
        x="0"
        y="22"
        fill="currentColor"
        style={{
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 700,
          fontSize: '22px',
          letterSpacing: '-0.02em',
        }}
      >
        Lucas Lima
      </text>
    </svg>
  );
}
