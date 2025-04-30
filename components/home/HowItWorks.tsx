import React from "react";
import { Users, Code, Award, Briefcase } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Select Your Program",
    icon: Users,
  },
  {
    number: "2",
    title: "Get trained by Mentors",
    icon: Code,
  },
  {
    number: "3",
    title: "Build realtime Projects",
    icon: Award,
  },
  {
    number: "4",
    title: "Get Certified",
    icon: Briefcase,
  },
  {
    number: "5",
    title: "Placement Assistance",
    icon: Users,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#1a1a1a] py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-16 text-center text-3xl font-bold text-white md:text-4xl">
          How it works
        </h2>

        {/* Desktop View */}
        <div className="hidden md:flex justify-between">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#2196F3] via-[#9C27B0] to-[#E91E63] p-[2px]">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#1a1a1a]">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <span className="mb-2 block text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2196F3] via-[#9C27B0] to-[#E91E63]">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View */}
        <div className="flex flex-col space-y-12 md:hidden">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex items-start pl-12 relative">
                <div className="absolute left-0 top-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#2196F3] via-[#9C27B0] to-[#E91E63] p-[2px]">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#1a1a1a]">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="ml-6">
                  <span className="mb-1 block text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2196F3] via-[#9C27B0] to-[#E91E63]">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
