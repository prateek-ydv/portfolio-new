"use client";

import { motion } from "framer-motion";
import { personal } from "@/lib/personal";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-[#30363d]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-6">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              data-hoverable
              className="font-display text-sm text-[#8b949e] hover:text-[#39ff14] transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href={`mailto:${personal.email}`}
              data-hoverable
              className="font-display text-sm text-[#8b949e] hover:text-[#39ff14] transition-colors"
            >
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
