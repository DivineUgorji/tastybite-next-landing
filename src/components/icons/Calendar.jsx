function Calendar({ clasName, width = 1.5, alt }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={clasName}
      role="img"
      aria-label={alt}
    >
      <title>{alt}</title>
      <path
        d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M16 2v4"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M8 2v4"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M3 10h5"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M17.5 17.5 16 16.3V14"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx="16"
        cy="16"
        r="6"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Calendar;
