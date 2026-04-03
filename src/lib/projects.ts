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
    title: "Decentralised Photo Storage",
    description: "A decentralized photo storage system built on blockchain technology for secure, censorship-resistant image hosting.",
    techStack: ["JavaScript", "Solidity", "IPFS", "Web3"],
    githubUrl: "https://github.com/prateek-ydv/Decentralised-Photo-Storage-System",
    status: "live",
  },
  {
    id: "2",
    title: "Coffee Token Sale",
    description: "ERC-20 token sale smart contract with automated pricing and secure transaction handling for a tokenized coffee marketplace.",
    techStack: ["Solidity", "Ethereum", "Web3", "Smart Contracts"],
    githubUrl: "https://github.com/prateek-ydv/Coffee-Token-Sale",
    status: "live",
  },
  {
    id: "3",
    title: "Shared Wallet",
    description: "Multi-signature wallet smart contract enabling shared fund management with granular access controls and spending limits.",
    techStack: ["Solidity", "Ethereum", "Smart Contracts"],
    githubUrl: "https://github.com/prateek-ydv/SharedWallet",
    status: "live",
  },
  {
    id: "4",
    title: "Mess Food Schedule",
    description: "Blockchain-based food scheduling system for transparent and tamper-proof meal management in institutional settings.",
    techStack: ["Solidity", "Ethereum", "DApp"],
    githubUrl: "https://github.com/prateek-ydv/MessFoodSchedule",
    status: "live",
  },
  {
    id: "5",
    title: "Weather App",
    description: "Real-time weather application fetching live data from weather APIs with clean UI and location-based forecasts.",
    techStack: ["JavaScript", "REST API", "HTML/CSS"],
    githubUrl: "https://github.com/prateek-ydv/weatherapp",
    status: "live",
  },
  {
    id: "6",
    title: "Emojipedia",
    description: "A fun and dynamic emoji dictionary with searchable entries and detailed meanings for every emoji.",
    techStack: ["JavaScript", "React", "CSS"],
    githubUrl: "https://github.com/prateek-ydv/emojipedia",
    status: "live",
  },
];
