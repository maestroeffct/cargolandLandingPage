"use client";

import { satoshi } from "@/app/fonts";
import { motion } from "framer-motion";
import { MapPin, Headphones, Sparkles, Utensils } from "lucide-react";

const items = [
  { text: "Highly rated riders", icon: MapPin, color: "#2ED573" },
  {
    text: "20/7 support for customers and vendors",
    icon: Headphones,
    color: "#FFB6C1",
  },
  { text: "Quick and easy onboarding", icon: Sparkles, color: "#FFD700" },
  { text: "Quality meal choices", icon: Utensils, color: "#FF8C42" },
];

export default function FeaturePillsMarquee() {
  return (
    <section className="overflow-hidden bg-white py-10">
      {/* Framer Motion ONLY fades the section */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        // transition={{ duration: 0.5, ease: [0.4, 0, 0.6, 1] }}
      >
        {/* Pure CSS marquee — NOT a motion.div */}
        <div className="relative overflow-hidden">
          <div className="flex w-max gap-4 animate-marquee">
            {[...items, ...items].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={` ${satoshi.className} flex shrink-0 items-center gap-3 rounded-xl bg-[#2A1F1D] px-6 py-3 text-md font-bold text-white shadow-md`}
                >
                  <span
                    className="flex h-6 w-6 items-center justify-center rounded-full"
                    style={{ backgroundColor: item.color }}
                  >
                    <Icon size={14} className="text-[#2A1F1D]" />
                  </span>
                  <span className="whitespace-nowrap">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
