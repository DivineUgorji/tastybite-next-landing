function MobileMenuIcon({ className, width = 1.5, alt }) {
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
      <line
        x1="4"
        x2="20"
        y1="12"
        y2="12"
        strokeWidth={width}
        strokewinecap="round"
        strokewinejoin="round"
      />

      <line
        x1="4"
        x2="20"
        y1="6"
        y2="6"
        strokeWidth={width}
        strokewinecap="round"
        strokewinejoin="round"
      />

      <line
        x1="4"
        x2="20"
        y1="18"
        y2="18"
        strokeWidth={width}
        strokewinecap="round"
        strokewinejoin="round"
      />
    </svg>
  );
}

export default MobileMenuIcon;
