import React from "react";
import { Monitor, Briefcase, FileText, Award, Search, Lock } from "lucide-react";

const AboutContent = () => {
  const strengths = [
    {
      icon: <Monitor className="w-12 h-12 text-blue-400" />,
      title: "Live Classes",
      description: "Our Industry mentors provide live interactive classes, for offering the best possible learning environment."
    },
    {
      icon: <Briefcase className="w-12 h-12 text-blue-400" />,
      title: "Guaranteed Internships",
      description: "Get guaranteed internships in collaboration with 55+ companies. These internships Industrial training as well as Industry-based projects with assignments."
    },
    {
      icon: <FileText className="w-12 h-12 text-blue-400" />,
      title: "Capstone Projects",
      description: "Kickstart your career by learning industry skills by working on projects directly coming from partnered companies."
    },
    {
      icon: <Award className="w-12 h-12 text-blue-400" />,
      title: "Certified Programs",
      description: "Upskill with our wide range of certified programs in collaboration with established and leading companies."
    },
    {
      icon: <Search className="w-12 h-12 text-blue-400" />,
      title: "Placement Assistance",
      description: "Get yourself trained with our mock interviews, GDs, soft skill and interpersonal skills training getting a chance to get placed in your dream company."
    },
    {
      icon: <Lock className="w-12 h-12 text-blue-400" />,
      title: "Lifetime Access",
      description: "Get lifetime access to our Learning Management System with just one-time enrollment."
    }
  ];

  return (
    <div className="bg-white py-20">
    <div className="container mx-auto px-4 max-w-7xl">
      <h2 className="text-4xl font-bold text-center text-slate-800 mb-20">Our Strengths</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {strengths.map((strength, index) => (
          <div key={index} className="flex flex-col items-center lg:items-start px-4">
            <div className="mb-6">
              {strength.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 text-center lg:text-left">{strength.title}</h3>
            <p className="text-gray-600 max-w-sm text-left lg:text-left">{strength.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default AboutContent;
