"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { personal } from "@/lib/personal";

export default function Hero() {
  const [nameText, setNameText] = useState("");
  const [showName, setShowName] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [roleText, setRoleText] = useState("");
  const [isTypingRole, setIsTypingRole] = useState(true);

  // Type out the name
  useEffect(() => {
    const name = personal.name;
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= name.length) {
        setNameText(name.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setShowName(true);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  // Cycle through roles
  useEffect(() => {
    if (!showName) return;

    const role = personal.roles[currentRole];
    let charIndex = 0;

    if (isTypingRole) {
      const typeInterval = setInterval(() => {
        if (charIndex <= role.length) {
          setRoleText(role.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setIsTypingRole(false);
          }, 2000);
        }
      }, 50);

      return () => clearInterval(typeInterval);
    } else {
      // Deleting
      let deleteIndex = role.length;
      const deleteInterval = setInterval(() => {
        if (deleteIndex > 0) {
          setRoleText(role.slice(0, deleteIndex - 1));
          deleteIndex--;
        } else {
          clearInterval(deleteInterval);
          setIsTypingRole(true);
          setCurrentRole((prev) => (prev + 1) % personal.roles.length);
        }
      }, 30);

      return () => clearInterval(deleteInterval);
    }
  }, [showName, currentRole, isTypingRole]);

  const scrollToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 matrix-bg" />
      
      {/* Animated scanline */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#39ff14]/30 to-transparent animate-scanline" />
      </div>

      {/* Scanlines overlay */}
      <div className="absolute inset-0 scanlines opacity-50" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        {/* Terminal prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <span className="font-display text-sm md:text-base text-[#8b949e]">
            <span className="text-[#39ff14]">root@prateek</span>
            <span className="text-[#8b949e]">:</span>
            <span className="text-[#00d4ff]">~</span>
            <span className="text-[#8b949e]">$ whoami</span>
          </span>
        </motion.div>

        {/* Name */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          <span className="text-[#e6edf3]">{nameText}</span>
          {!showName && (
            <span className="inline-block w-3 h-12 md:h-16 bg-[#39ff14] ml-1 cursor-blink" />
          )}
        </h1>

        {/* Role typewriter */}
        <div className="h-8 md:h-10 mb-8">
          <p className="font-display text-lg md:text-xl text-[#8b949e]">
            {roleText}
            <span className="inline-block w-2 h-5 bg-[#39ff14] ml-0.5 cursor-blink" />
          </p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={scrollToExperience}
            data-hoverable
            className="group flex items-center gap-2 px-6 py-3 bg-[#39ff14] text-[#080c0f] font-display font-medium text-sm rounded-md transition-all hover:shadow-[0_0_30px_rgba(57,255,20,0.4)]"
          >
            View Experience
          </button>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            data-hoverable
            className="group flex items-center gap-2 px-6 py-3 border border-[#30363d] text-[#e6edf3] font-display text-sm rounded-md transition-all hover:border-[#39ff14] hover:text-[#39ff14]"
          >
            GitHub
            <ExternalLink className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 border border-[#30363d] rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-1 bg-[#39ff14] rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
