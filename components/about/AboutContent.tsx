import React from "react";
import { Monitor, Briefcase, FileText, Award, Search, Lock } from "lucide-react";

const AboutContent = () => {
  const strengths = [
    {
      icon: <Monitor className="w-12 h-12 text-blue-400" />,
      title: "Live Classes",
      description: "Our industry mentors conduct live, interactive classes to ensure an engaging and effective learning experience."
    },
    {
      icon: <Briefcase className="w-12 h-12 text-blue-400" />,
      title: "Guaranteed Internships",
      description: "Get guaranteed internships through our collaboration with 55+ companies, featuring industrial training, real-world projects, and hands-on assignments."
    },
    {
      icon: <FileText className="w-12 h-12 text-blue-400" />,
      title: "Capstone Projects",
      description: "Kickstart your career by gaining industry-relevant skills through real projects sourced from our partner companies."
    },
    {
      icon: <Award className="w-12 h-12 text-blue-400" />,
      title: "Certified Programs",
      description: "Upskill with our diverse range of certified programs, developed in collaboration with leading industry partners."
    },
    {
      icon: <Search className="w-12 h-12 text-blue-400" />,
      title: "Placement Assistance",
      description: "Enhance your career prospects with our mock interviews, group discussions, and soft skills training — giving you the edge to land your dream job."
    },
    {
      icon: <Lock className="w-12 h-12 text-blue-400" />,
      title: "Lifetime Access",
      description: "Enjoy lifetime access to our Learning Management System with a one-time enrollment."
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
