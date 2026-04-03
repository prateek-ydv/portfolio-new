export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: "live" | "coming-soon";
}

export const projects: Project[] = [
  {
    id: "1",
    title: "API Security Tester",
    description: "Automated security testing tool for REST APIs based on OWASP API Security Top 10. Tests for authentication, injection, rate limiting, and security headers.",
    techStack: ["Python", "Click", "REST API", "OWASP"],
    githubUrl: "https://github.com/prateek-ydv/api-security-tester",
    status: "live",
  },
  {
    id: "2",
    title: "PR Security Reviewer",
    description: "GitHub Action that automatically reviews Pull Requests for security issues - secrets, SQL injection, XSS patterns, and posts actionable comments.",
    techStack: ["Node.js", "GitHub Actions", "Security"],
    githubUrl: "https://github.com/prateek-ydv/pr-security-reviewer",
    status: "live",
  },
  {
    id: "3",
    title: "Multi-Cloud Cost Analyzer",
    description: "CLI tool to compare infrastructure costs across AWS, Azure, and GCP. Helps make informed decisions about cloud resource allocation.",
    techStack: ["Python", "AWS", "Azure", "GCP", "CLI"],
    githubUrl: "https://github.com/prateek-ydv/multi-cloud-cost-analyzer",
    status: "live",
  },
  {
    id: "4",
    title: "Git Hooks Collection",
    description: "Security-focused Git hooks for DevSecOps workflows. Pre-commit secret detection, sensitive file protection, and conventional commit enforcement.",
    techStack: ["Bash", "Git", "Security", "DevOps"],
    githubUrl: "https://github.com/prateek-ydv/git-hooks-collection",
    status: "live",
  },
  {
    id: "5",
    title: "Decentralised Photo Storage",
    description: "A decentralized photo storage system built on blockchain technology for secure, censorship-resistant image hosting.",
    techStack: ["JavaScript", "Solidity", "IPFS", "Web3"],
    githubUrl: "https://github.com/prateek-ydv/Decentralised-Photo-Storage-System",
    status: "live",
  },
  {
    id: "6",
    title: "Shared Wallet",
    description: "Multi-signature wallet smart contract enabling shared fund management with granular access controls and spending limits.",
    techStack: ["Solidity", "Ethereum", "Smart Contracts"],
    githubUrl: "https://github.com/prateek-ydv/SharedWallet",
    status: "live",
  },
];
