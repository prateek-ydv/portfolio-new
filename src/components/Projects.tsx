"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Folder, Clock } from "lucide-react";
import { projects } from "@/lib/projects";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="font-display text-sm text-[#39ff14]">[05]</span>
          <span className="font-display text-sm text-[#8b949e] uppercase tracking-wider">
            Projects
          </span>
          <div className="flex-1 h-px bg-[#30363d]" />
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="terminal-card rounded-lg p-6 hover-glow group relative overflow-hidden"
            >
              {/* Coming soon overlay */}
              {project.status === "coming-soon" && (
                <div className="absolute inset-0 bg-[#080c0f]/60 backdrop-blur-[1px] flex items-center justify-center z-10">
                  <span className="flex items-center gap-2 px-3 py-1 bg-[#161b22] border border-[#30363d] rounded-full font-display text-xs text-[#8b949e]">
                    <Clock className="w-3 h-3" />
                    Coming Soon
                  </span>
                </div>
              )}

              <div className="relative">
                {/* Icon */}
                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-8 h-8 text-[#39ff14]" />
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-hoverable
                      className="text-[#8b949e] hover:text-[#39ff14] transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-semibold text-[#e6edf3] mb-2 group-hover:text-[#39ff14] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-[#8b949e] mb-4">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 font-display text-xs text-[#484f58]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-8 font-display text-sm text-[#484f58]"
        >
          More projects coming soon. Check my{" "}
          <a
            href="https://github.com/prateek-ydv"
            target="_blank"
            rel="noopener noreferrer"
            data-hoverable
            className="text-[#00d4ff] hover:underline"
          >
            GitHub
          </a>{" "}
          for latest work.
        </motion.p>
      </div>
    </section>
  );
}
