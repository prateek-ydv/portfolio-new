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
    title: "Threat Intelligence Pipeline",
    description: "Project details coming soon",
    techStack: ["Python", "GitHub Actions", "AWS"],
    status: "coming-soon",
  },
  {
    id: "2",
    title: "Vulnerability Scanner",
    description: "Project details coming soon",
    techStack: ["Python", "AWS Lambda", "CISA Feeds"],
    status: "coming-soon",
  },
  {
    id: "3",
    title: "Security Automation Bot",
    description: "Project details coming soon",
    techStack: ["Python", "Slack API", "Zendesk"],
    status: "coming-soon",
  },
];
