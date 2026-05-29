"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type HTMLMotionProps,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

const easeOut = [0.22, 1, 0.36, 1] as const;

interface HeroSectionProps extends HTMLMotionProps<"section"> {
  children: ReactNode;
}

interface HeroMotionProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

export function HeroSection({ children, ...props }: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={shouldReduceMotion ? false : "hidden"}
      animate="visible"
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.08,
            staggerChildren: 0.12,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export function HeroCopy({ children, ...props }: HeroMotionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.66,
            ease: easeOut,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function HeroItem({ children, ...props }: HeroMotionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.56,
            ease: easeOut,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function HeroMedia({ children, style, ...props }: HeroMotionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: shouldReduceMotion
          ? { opacity: 1 }
          : {
              opacity: 0,
              y: 18,
              scale: 0.992,
            },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.78,
            ease: easeOut,
          },
        },
      }}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function HeroDepthLayer({ children, style, ...props }: HeroMotionProps) {
  const shouldReduceMotion = useReducedMotion();
  const layerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: layerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [10, -14]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.012, 1.026]);

  return (
    <motion.div
      ref={layerRef}
      style={{
        y: shouldReduceMotion ? 0 : y,
        scale: shouldReduceMotion ? 1 : scale,
        ...style,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
