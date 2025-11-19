import { motion } from "motion/react";

function CaretUp({ className, width = 1.5, alt, activeQuestion }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      alt={alt}
      animate={{ rotate: activeQuestion ? -180 : 0 }} // Animate rotation based on the state
      transition={{ duration: 0.3, ease: "easeIn" }}
    >
      <path
        d="m18 15-6-6-6 6"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

export default CaretUp;
