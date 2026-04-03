"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const commands = [
  {
    command: "python3 vuln_scanner.py --source CISA --env prod",
    output: "[+] Polling CVE feeds... done",
  },
  {
    command: "slack-bot deploy --channel sec-alerts",
    output: "[+] IOC validator active",
  },
  {
    command: "terraform apply -auto-approve",
    output: "[+] Parsing rules created: 12",
  },
  {
    command: "gh actions run threat-intel-pipeline",
    output: "[+] IOCs ingested: 847",
  },
  {
    command: "python3 ioc_validator.py --feed otx",
    output: "[+] Threats validated: 23",
  },
];

export default function TerminalWindow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedCommand, setDisplayedCommand] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentCmd = commands[currentIndex];
    let charIndex = 0;

    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (charIndex <= currentCmd.command.length) {
          setDisplayedCommand(currentCmd.command.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          setShowOutput(true);

          setTimeout(() => {
            setShowOutput(false);
            setDisplayedCommand("");
            setIsTyping(true);
            setCurrentIndex((prev) => (prev + 1) % commands.length);
          }, 2500);
        }
      }, 40);

      return () => clearInterval(typingInterval);
    }
  }, [currentIndex, isTyping]);

  return (
    <div className="terminal-card rounded-lg overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-[#30363d]">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="ml-2 text-xs text-[#8b949e] font-display">
          root@prateek:~/security
        </span>
      </div>

      {/* Terminal content */}
      <div className="p-4 font-display text-sm min-h-[180px]">
        <div className="space-y-2">
          {/* Current command line */}
          <div className="flex items-start gap-2">
            <span className="text-[#39ff14]">$</span>
            <span className="text-[#e6edf3]">
              {displayedCommand}
              {isTyping && (
                <span className="inline-block w-2 h-4 bg-[#39ff14] ml-0.5 cursor-blink" />
              )}
            </span>
          </div>

          {/* Output */}
          {showOutput && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#39ff14] pl-4"
            >
              {commands[currentIndex].output}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
