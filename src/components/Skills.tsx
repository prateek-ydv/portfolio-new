"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skillGroups } from "@/lib/skills";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="font-display text-sm text-[#39ff14]">[03]</span>
          <span className="font-display text-sm text-[#8b949e] uppercase tracking-wider">
            Skills & Stack
          </span>
          <div className="flex-1 h-px bg-[#30363d]" />
        </motion.div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + groupIndex * 0.1 }}
              className="terminal-card rounded-lg p-6"
            >
              {/* Category title */}
              <h3 className="font-display text-sm font-semibold text-[#39ff14] uppercase tracking-wider mb-4">
                {group.category}
              </h3>

              {/* Skills tags */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: 0.4 + groupIndex * 0.1 + skillIndex * 0.03,
                    }}
                    className="px-3 py-1.5 font-display text-xs bg-[#161b22] border border-[#30363d] rounded text-[#8b949e] hover:border-[#39ff14] hover:text-[#39ff14] hover:shadow-[0_0_10px_rgba(57,255,20,0.2)] transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
