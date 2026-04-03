import type { Metadata } from "next";
import { JetBrains_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prateek Yadav | DevSecOps Engineer",
  description:
    "DevSecOps Engineer at Coralogix specializing in cloud security, SOC operations, threat intelligence, and security automation. Building faster with Claude and Cursor.",
  keywords: [
    "DevSecOps",
    "Cloud Security",
    "SOC Operations",
    "Threat Intelligence",
    "Vulnerability Management",
    "AWS",
    "Azure",
    "GCP",
    "Terraform",
    "Python",
    "Claude AI",
    "Cursor",
  ],
  authors: [{ name: "Prateek Yadav" }],
  openGraph: {
    title: "Prateek Yadav | DevSecOps Engineer",
    description:
      "DevSecOps Engineer at Coralogix — Cloud Security, SOC Operations, Threat Intelligence. Building faster with AI.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${ibmPlexSans.variable}`}>
      <body className="bg-[#080c0f] text-[#e6edf3] antialiased font-body">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
