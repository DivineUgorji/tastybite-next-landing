function CustomizeSliders({ className, width = 1.5, alt }) {
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
      <path
        d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M14 2v4a2 2 0 0 0 2 2h4"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M8 12h8"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M10 11v2"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M8 17h8"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M14 16v2"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CustomizeSliders;
