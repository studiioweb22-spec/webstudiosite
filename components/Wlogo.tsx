export function WLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      <svg
        viewBox="0 0 200 160"
        className="h-full w-auto"
        fill="currentColor"
        aria-label="W Studio"
      >
        <text
          x="100"
          y="120"
          textAnchor="middle"
          fontFamily="Cormorant Garamond, Georgia, serif"
          fontSize="160"
          fontWeight="500"
          letterSpacing="-6"
        >
          W
        </text>
      </svg>
      <span className="mt-1 block h-px w-6 bg-current opacity-60" />
      <span className="mt-2 text-[0.65rem] tracking-[0.42em] font-light">STUDIO</span>
    </div>
  );
}
