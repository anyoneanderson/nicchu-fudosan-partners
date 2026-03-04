"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ANIMATION_DURATION } from "@/lib/constants";

const FadeInSection = ({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: ANIMATION_DURATION, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
