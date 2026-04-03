export interface Education {
  degree: string;
  field: string;
  institution: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export const education: Education[] = [
  {
    degree: "B.Tech",
    field: "Computer Science Engineering (AI & ML)",
    institution: "JECRC University",
    period: "2020 – 2024",
  },
];

export const certifications: Certification[] = [
  {
    name: "Web Development Bootcamp",
    issuer: "Udemy",
    year: "2023",
  },
  {
    name: "Ethereum Blockchain Development Bootcamp",
    issuer: "Udemy",
    year: "2023",
  },
];
