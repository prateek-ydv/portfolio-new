"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { education, certifications } from "@/lib/education";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 md:py-32 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="font-display text-sm text-[#39ff14]">[06]</span>
          <span className="font-display text-sm text-[#8b949e] uppercase tracking-wider">
            Education & Certifications
          </span>
          <div className="flex-1 h-px bg-[#30363d]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="terminal-card rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-5 h-5 text-[#39ff14]" />
              <h3 className="font-display text-sm font-semibold text-[#39ff14] uppercase tracking-wider">
                Education
              </h3>
            </div>

            {education.map((edu) => (
              <div key={edu.institution}>
                <p className="font-display text-lg text-[#e6edf3] font-semibold">
                  {edu.degree} in {edu.field}
                </p>
                <p className="font-display text-sm text-[#8b949e] mt-1">
                  {edu.institution}
                </p>
                <p className="font-display text-xs text-[#484f58] mt-1">
                  {edu.period}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="terminal-card rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-5 h-5 text-[#39ff14]" />
              <h3 className="font-display text-sm font-semibold text-[#39ff14] uppercase tracking-wider">
                Certifications
              </h3>
            </div>

            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="flex items-start gap-3 font-display text-sm"
                >
                  <span className="text-[#39ff14] mt-0.5">·</span>
                  <div>
                    <span className="text-[#e6edf3]">{cert.name}</span>
                    <span className="text-[#484f58]">
                      {" "}
                      — {cert.issuer}, {cert.year}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
