import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechVersity - Learn, Build, and Innovate in Tech",
  description: "Master in-demand tech skills with expert-led courses. TechVersity empowers students and professionals to innovate and grow through hands-on learning.",
  keywords: [
    "TechVersity",
    "online tech courses",
    "learn web development",
    "frontend backend courses",
    "JavaScript courses",
    "Python programming",
    "full stack development",
    "career in tech",
    "coding bootcamp",
    "software development training"
  ],
  openGraph: {
    title: "TechVersity - Learn, Build, and Innovate in Tech",
    description: "Unlock your tech career with expert-led courses in web development, AI, and more.",
    url: "https://www.tech-versity.com/",
    siteName: "TechVersity",
    images: [
      {
        url: "https://yourdomain.com/banner.png",
        width: 1200,
        height: 630,
        alt: "TechVersity Courses Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
