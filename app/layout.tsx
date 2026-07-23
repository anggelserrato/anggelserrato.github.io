import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://serrato.dev"),

  title: {
    default: "Serrato.Dev | Software Engineer",
    template: "%s | Serrato.Dev",
  },

  description:
    "Personal portfolio of Angel Serrato, a Software Engineer. Check out my projects and get in touch!",

  applicationName: "Serrato.Dev",

  authors: [{ name: "Angel Serrato" }],
  creator: "Angel Serrato",

  keywords: [
    "Angel Serrato",
    "Software Engineer",
    "Web Developer",
    "Portfolio",
    "Serrato.Dev",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    siteName: "Serrato.Dev",
    url: "/",
    title: "Serrato.Dev | Software Engineer",
    description:
      "Personal portfolio of Angel Serrato, a Software Engineer. Check out my projects and get in touch!",
  },

  twitter: {
    card: "summary_large_image",
    title: "Serrato.Dev | Software Engineer",
    description:
      "Personal portfolio of Angel Serrato, a Software Engineer. Check out my projects and get in touch!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
