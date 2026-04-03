"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ExternalLink } from "lucide-react";
import { personal } from "@/lib/personal";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 px-6 relative" ref={ref}>
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-[#39ff14]/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="w-12 h-px bg-[#30363d]" />
          <span className="font-display text-sm text-[#39ff14]">[07]</span>
          <div className="w-12 h-px bg-[#30363d]" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#e6edf3] mb-6"
        >
          Let&apos;s connect<span className="text-[#39ff14]">.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="font-body text-[#8b949e] text-lg mb-12 max-w-md mx-auto"
        >
          Open to security roles, collaborations, and interesting problems.
        </motion.p>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={`mailto:${personal.email}`}
            data-hoverable
            className="group flex items-center gap-3 px-6 py-3 border border-[#39ff14] text-[#39ff14] font-display text-sm rounded-md transition-all hover:bg-[#39ff14] hover:text-[#080c0f] hover:shadow-[0_0_30px_rgba(57,255,20,0.3)]"
          >
            <Mail className="w-4 h-4" />
            {personal.email}
          </a>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            data-hoverable
            className="group flex items-center gap-2 px-6 py-3 border border-[#30363d] text-[#e6edf3] font-display text-sm rounded-md transition-all hover:border-[#00d4ff] hover:text-[#00d4ff]"
          >
            GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        {/* LinkedIn - subtle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-8 font-display text-sm text-[#484f58]"
        >
          Also on{" "}
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-hoverable
            className="text-[#8b949e] hover:text-[#00d4ff] transition-colors"
          >
            LinkedIn
          </a>
        </motion.p>
      </div>
    </section>
  );
}
