"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroDecor() {
  return (
    <>
      {/* Left Food */}
      <motion.div
        animate={{
          y: [0, -120, 0],
        }}
        transition={{
          duration: 7.5, // 🔥 faster
          ease: [0.4, 0, 0.6, 1], // easeInOut equivalent
          repeat: Infinity,
        }}
        className="absolute -left-24 bottom-0 hidden lg:block"
      >
        <Image
          src="/images/food-right.png"
          alt="Food bowl"
          width={260}
          height={260}
          priority
        />
      </motion.div>

      {/* Right Food */}
      <motion.div
        animate={{
          y: [0, 120, 0],
        }}
        transition={{
          duration: 7.5, // slightly offset
          ease: [0.4, 0, 0.6, 1],
          repeat: Infinity,
        }}
        className="absolute -right-24 bottom-74 hidden lg:block"
      >
        <Image
          src="/images/food-right.png"
          alt="Food bowl"
          width={260}
          height={260}
          priority
        />
      </motion.div>
    </>
  );
}
