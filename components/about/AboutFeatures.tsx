import React from "react";
import { GraduationCap, Users, Rocket, Briefcase } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Industry-Relevant Curriculum",
    description: "Our curriculum is designed in collaboration with industry experts to ensure you learn the most in-demand skills.",
  },
  {
    icon: Users,
    title: "Expert Mentors",
    description: "Learn from experienced professionals who bring real-world expertise to the classroom.",
  },
  {
    icon: Rocket,
    title: "Practical Learning",
    description: "Gain hands-on experience through real-world projects and industry case studies.",
  },
  {
    icon: Briefcase,
    title: "Career Support",
    description: "Get comprehensive placement assistance including resume building, mock interviews, and job referrals.",
  },
];

const AboutFeatures = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-[#05264E] text-center mb-12">
          Why Choose TechVersity?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex p-3 rounded-full bg-[#0099FF]/10 mb-4">
                  <Icon className="w-6 h-6 text-[#0099FF]" />
                </div>
                <h3 className="text-xl font-semibold text-[#05264E] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutFeatures;