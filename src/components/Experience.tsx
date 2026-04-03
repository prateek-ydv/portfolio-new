"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/lib/experience";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="font-display text-sm text-[#39ff14]">[02]</span>
          <span className="font-display text-sm text-[#8b949e] uppercase tracking-wider">
            Experience
          </span>
          <div className="flex-1 h-px bg-[#30363d]" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-[#30363d]" />

          {experience.map((exp, expIndex) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + expIndex * 0.1 }}
              className="relative"
            >
              {/* Company header */}
              <div className="flex items-center gap-4 mb-8 pl-6 md:pl-20">
                {/* Dot on timeline */}
                <div className="absolute left-0 md:left-8 -translate-x-1/2 w-3 h-3 bg-[#39ff14] rounded-full shadow-[0_0_10px_#39ff14]" />
                
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-[#e6edf3]">
                    {exp.company}
                  </h3>
                  <p className="font-display text-sm text-[#8b949e]">
                    {exp.location} · {exp.period}
                  </p>
                </div>
              </div>

              {/* Roles */}
              <div className="pl-6 md:pl-20 space-y-8">
                {exp.roles.map((role, roleIndex) => (
                  <motion.div
                    key={role.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + roleIndex * 0.15 }}
                    className="terminal-card rounded-lg p-6 hover-glow group"
                  >
                    {/* Role header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h4 className="font-display text-lg font-semibold text-[#e6edf3] group-hover:text-[#39ff14] transition-colors">
                        {role.title}
                      </h4>
                      <span className="font-display text-sm text-[#8b949e]">
                        {role.period}
                      </span>
                    </div>

                    {/* Accent border */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#39ff14]/50 rounded-l-lg group-hover:bg-[#39ff14] transition-colors" />

                    {/* Bullets */}
                    <ul className="space-y-3">
                      {role.bullets.map((bullet, bulletIndex) => (
                        <motion.li
                          key={bulletIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + bulletIndex * 0.05 }}
                          className="flex items-start gap-3 text-sm font-body text-[#8b949e]"
                        >
                          <span className="text-[#39ff14] mt-0.5 flex-shrink-0">
                            →
                          </span>
                          <span>{bullet}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
