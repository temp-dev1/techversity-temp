import Head from "next/head";
import HeroSection from "@/components/home/HeroSection";
import CertificationPartners from "@/components/home/CertificationPartners";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
//import MarqueePartners from "@/components/home/MarqueePartners";
import TrendingPrograms from "@/components/home/TrendingPrograms";
import IndustryExperts from "@/components/home/IndustryExperts";
import Achievers from "@/components/home/Achievers";
import NeedHelp from "@/components/home/NeedHelp";

export default function Home() {
  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>Techversity | Learn, Build and Innovate in Tech</title>
        <meta name="description" content="Techversity offers online courses in AI, Python, and the latest technologies. Learn from great mentors and start your journey to success." />
        <meta name="keywords" content="online courses, AI courses, Python courses, latest technologies, learning, great mentors" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tech-versity.com/" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Techversity | Online Courses on Latest Technologies, AI, Python & More" />
        <meta property="og:description" content="Techversity offers online courses in AI, Python, and the latest technologies. Learn from great mentors and start your journey to success." />
        <meta property="og:image" content="https://www.tech-versity.com/techversity-logo.png" />
        <meta property="og:url" content="https://www.tech-versity.com/" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Techversity | Online Courses on Latest Technologies, AI, Python & More" />
        <meta name="twitter:description" content="Techversity offers online courses in AI, Python, and the latest technologies. Learn from great mentors and start your journey to success." />
        <meta name="twitter:image" content="https://www.tech-versity.com/techversity-logo.png" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Techversity",
              "url": "https://www.tech-versity.com/",
              "logo": "https://www.tech-versity.com/techversity-logo.png",
              "sameAs": [] 
            })
          }}
        />
      </Head>
    
    <main className="min-h-screen">
      <HeroSection />
      <CertificationPartners />
      <WhyChooseUs />
      <HowItWorks />
      {/* <MarqueePartners /> */}
      <TrendingPrograms />
      <IndustryExperts />
      <Achievers />
      <NeedHelp />
    </main>
      </>
  );
}
