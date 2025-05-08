import AboutHero from "@/components/about/AboutHero";
import AboutStats from "@/components/about/AboutStats";
import AboutContent from "@/components/about/AboutContent";
import AboutFeatures from "@/components/about/AboutFeatures";
//import AboutCertifications from "@/components/about/AboutCertifications";
import AboutTeam from "@/components/about/AboutTeam";
import AboutTestimonials from "@/components/about/AboutTestimonials";
//import AboutContact from "@/components/about/AboutContact";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <AboutHero />
      <AboutContent />
      <AboutStats />
      <AboutFeatures />
      {/* <AboutCertifications /> */}
      <AboutTeam />
      <AboutTestimonials />
      {/*<AboutContact /> */}
    </main>
  );
}
