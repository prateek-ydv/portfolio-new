export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Security",
    skills: [
      "Vulnerability Management",
      "CVE Analysis",
      "Threat Intelligence",
      "IOC Management",
      "SOC Operations",
      "Incident Response",
      "Phishing Analysis",
      "Malware Analysis",
      "Secure SDLC",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    skills: [
      "AWS Lambda",
      "AWS IAM",
      "Microsoft Azure",
      "GCP",
      "Terraform",
      "Infrastructure as Code",
    ],
  },
  {
    category: "Languages & Tools",
    skills: ["Python", "JavaScript", "HTML/CSS", "Git", "GitHub", "Linux"],
  },
  {
    category: "Integrations & Automation",
    skills: [
      "Slack Bots",
      "Zendesk",
      "GitHub Actions",
      "CI Pipelines",
      "OpenTelemetry",
      "API Automations",
      "Blockchain",
    ],
  },
  {
    category: "AI Tools",
    skills: ["Claude AI", "Cursor", "GitHub Copilot"],
  },
];
