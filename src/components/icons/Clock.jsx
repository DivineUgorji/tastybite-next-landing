function Clock({ className, width = 1.5, alt }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      role="img"
      aria-label={alt}
    >
      <title>{alt}</title>
      <circle
        cx="12"
        cy="12"
        r="10"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <polyline
        points="12 6 12 12 16 14"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Clock;
