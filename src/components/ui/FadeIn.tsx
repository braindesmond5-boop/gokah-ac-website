"use client";
import { motion } from "framer-motion";

export function FadeIn({ 
  children, 
  delay = 0, 
  className = "",
  direction = "up",
  style
}: { 
  children: React.ReactNode, 
  delay?: number, 
  className?: string,
  direction?: "up" | "down" | "left" | "right" | "none",
  style?: React.CSSProperties
}) {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
