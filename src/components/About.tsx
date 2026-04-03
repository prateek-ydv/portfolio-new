"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personal } from "@/lib/personal";
import TerminalWindow from "./TerminalWindow";

const badges = [
  "Coralogix",
  "DevSecOps",
  "AWS",
  "Azure",
  "GCP",
  "Terraform",
  "CI/CD",
  "Python",
  "Claude AI",
  "Cursor",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="font-display text-sm text-[#39ff14]">[01]</span>
          <span className="font-display text-sm text-[#8b949e] uppercase tracking-wider">
            About
          </span>
          <div className="flex-1 h-px bg-[#30363d]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-body text-[#8b949e] leading-relaxed text-lg mb-8">
              {personal.bio}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {badges.map((badge, index) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="px-3 py-1 font-display text-xs border border-[#30363d] rounded text-[#8b949e] hover:border-[#39ff14] hover:text-[#39ff14] transition-colors"
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right - Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <TerminalWindow />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
