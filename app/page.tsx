import HeroSection from "@/components/home/HeroSection";
import CertificationPartners from "@/components/home/CertificationPartners";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import MarqueePartners from "@/components/home/MarqueePartners";
import TrendingPrograms from "@/components/home/TrendingPrograms";
import IndustryExperts from "@/components/home/IndustryExperts";
import Achievers from "@/components/home/Achievers";
import NeedHelp from "@/components/home/NeedHelp";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CertificationPartners />
      <WhyChooseUs />
      <HowItWorks />
      <MarqueePartners />
      <TrendingPrograms />
      <IndustryExperts />
      <Achievers />
      <NeedHelp />
    </main>
  );
}