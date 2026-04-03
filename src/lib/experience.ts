export interface Role {
  title: string;
  period: string;
  bullets: string[];
}

export interface Experience {
  company: string;
  location: string;
  period: string;
  roles: Role[];
}

export const experience: Experience[] = [
  {
    company: "Coralogix India",
    location: "India",
    period: "May 2024 – Present",
    roles: [
      {
        title: "DevOps Engineer",
        period: "Feb 2025 – Present",
        bullets: [
          "Led customer onboardings: account setup, infra monitoring, security tool integrations",
          "Built a Threat Intelligence CI pipeline (GitHub Actions) ingesting IOCs from AlienVault OTX and security blogs — updates repos twice daily",
          "Developed an internal Antivirus tool powered by curated threat intel feeds",
          "Created API-driven automations to sync alerts, dashboards, and security data across tenants",
          "Built custom Slack bots: ticket creation in Zendesk, security advisories to customer channels",
          "Implemented Terraform-based automation for API-driven parsing rule creation",
          "Worked across AWS, Azure, and GCP per customer infrastructure needs",
        ],
      },
      {
        title: "SOC Operations Engineer",
        period: "May 2024 – Feb 2025",
        bullets: [
          "Built cloud-native Vulnerability Management system on AWS Lambda using CISA and open-source CVE feeds — automated polling, normalization, and prioritization across customer environments",
          "Performed SOC ops and incident response across real-world multi-tenant environments — analyzed system architectures, threats, and attack vectors",
          "Built a Slack bot for IOC validation against threat intelligence feeds",
          "Conducted phishing email analysis for rapid detection and response",
        ],
      },
    ],
  },
];
