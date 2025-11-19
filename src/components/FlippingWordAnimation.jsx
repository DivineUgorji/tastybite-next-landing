"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const FlipWords = () => {
  const words = ["Shawarma", "Burger", "Cakes", "Chicken & Chips"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block relative align-baseline h-[1em]">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 15, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          exit={{ y: -10, opacity: 0 }}
          transition={{
            y: { type: "spring", stiffness: 400, damping: 12, mass: 0.5 },
            scale: { type: "spring", stiffness: 500, damping: 8 },
            opacity: { duration: 0.9 },
          }}
          className="inline-block text-primary-accent-100 relative"
          style={{ minWidth: "max-content" }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default FlipWords;
