"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import type { ReactNode } from "react";

const easeOut = [0.22, 1, 0.36, 1] as const;

type Direction = "up" | "down" | "left" | "right";

type RevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
};

type RevealSectionProps = HTMLMotionProps<"section"> & {
  children: ReactNode;
  delay?: number;
};

type StaggerProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
};

type MotionCardProps = HTMLMotionProps<"article"> & {
  children: ReactNode;
  delay?: number;
};

function getOffset(direction: Direction) {
  switch (direction) {
    case "down":
      return { x: 0, y: -12 };
    case "left":
      return { x: 14, y: 0 };
    case "right":
      return { x: -14, y: 0 };
    case "up":
    default:
      return { x: 0, y: 14 };
  }
}

function revealVariants(
  shouldReduceMotion: boolean,
  direction: Direction,
  delay = 0,
): Variants {
  const offset = getOffset(direction);

  return {
    hidden: shouldReduceMotion
      ? { opacity: 1 }
      : {
          opacity: 0,
          x: offset.x,
          y: offset.y,
        },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay,
        duration: 0.56,
        ease: easeOut,
      },
    },
  };
}

function cardVariants(shouldReduceMotion: boolean, delay = 0): Variants {
  return {
    hidden: shouldReduceMotion
      ? { opacity: 1 }
      : {
          opacity: 0,
          y: 16,
        },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.52,
        ease: easeOut,
      },
    },
  };
}

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  ...props
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22, margin: "0px 0px -6% 0px" }}
      variants={revealVariants(Boolean(shouldReduceMotion), direction, delay)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function RevealSection({
  children,
  delay = 0,
  ...props
}: RevealSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16, margin: "0px 0px -6% 0px" }}
      variants={{
        hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0.98 },
        visible: {
          opacity: 1,
          transition: {
            delay,
            duration: 0.34,
            ease: easeOut,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export function Stagger({
  children,
  delay = 0,
  ...props
}: StaggerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -6% 0px" }}
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: shouldReduceMotion
            ? { delay }
            : {
                delayChildren: delay,
                staggerChildren: 0.085,
              },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  delay = 0,
  direction = "up",
  ...props
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={revealVariants(Boolean(shouldReduceMotion), direction, delay)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionCard({
  children,
  delay = 0,
  ...props
}: MotionCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -6% 0px" }}
      variants={cardVariants(Boolean(shouldReduceMotion), delay)}
      {...props}
    >
      {children}
    </motion.article>
  );
}
