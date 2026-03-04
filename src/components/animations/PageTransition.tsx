"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ANIMATION_DURATION } from "@/lib/constants";

const PageTransition = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: ANIMATION_DURATION }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
