function Close({ className, width = 1.5, alt }) {
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
      <path
        d="M18 6 6 18"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="m6 6 12 12"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Close;
