function Timer({ className, width = 1.5, alt }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      class={className}
      role="img"
      aria-label={alt}
    >
      <title>{alt}</title>
      <line
        x1="10"
        x2="14"
        y1="2"
        y2="2"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <line
        x1="12"
        x2="15"
        y1="14"
        y2="11"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx="12"
        cy="14"
        r="8"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Timer;
