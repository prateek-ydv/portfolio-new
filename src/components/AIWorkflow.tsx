"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Zap, Bot } from "lucide-react";

const workflowCards = [
  {
    icon: Brain,
    title: "Claude AI",
    emoji: "🧠",
    description:
      "I use Claude for thinking through security architecture, debugging complex pipelines, drafting documentation, and accelerating research.",
  },
  {
    icon: Zap,
    title: "Cursor",
    emoji: "⚡",
    description:
      "AI-native code editor for writing Python scripts, Terraform configs, and automation tools faster than traditional workflows.",
  },
  {
    icon: Bot,
    title: "Automations",
    emoji: "🤖",
    description:
      "CI pipelines, Slack bots, API integrations — I automate repetitive security operations so teams can focus on what matters.",
  },
];

export default function AIWorkflow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="workflow" className="py-24 md:py-32 px-6 relative" ref={ref}>
      {/* Subtle background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="font-display text-sm text-[#39ff14]">[04]</span>
          <span className="font-display text-sm text-[#8b949e] uppercase tracking-wider">
            How I Work
          </span>
          <div className="flex-1 h-px bg-[#30363d]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#e6edf3] mb-4">
            AI-Augmented Development
          </h2>
          <p className="font-body text-[#8b949e] max-w-2xl">
            These are my secret weapons for shipping security tools and
            automations at speed.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {workflowCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="terminal-card rounded-lg p-6 hover-glow group relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#39ff14]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                {/* Icon */}
                <div className="text-4xl mb-4">{card.emoji}</div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-[#e6edf3] mb-3 group-hover:text-[#39ff14] transition-colors">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-[#8b949e] leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Accent border */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#39ff14]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
