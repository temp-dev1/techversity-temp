import React from "react";
import { Award, Users, BookOpen, Target, CheckCircle2, Rocket, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  {
    value: "25,000+",
    label: "Students Enrolled",
  },
  {
    value: "95%",
    label: "Placement Rate",
  },
  {
    value: "150+",
    label: "Corporate Partners",
  },
  {
    value: "₹12 LPA",
    label: "Average Package",
  },
];

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

const achievements = [
  "NSDC & NIESBUD Certified Training Partner",
  "ISO 9001:2015 Certified Institution",
  "Member of International Association of Universities",
  "Recognized by Startup India",
  "MSME Registered Institute",
  "Approved by Government of India",
];

const AboutUs = () => {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <div className="relative bg-[#05264E] py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="About Us"
            className="h-full w-full object-cover opacity-10"
          />
        </div>
        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About TechVersity
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering careers through quality education and industry-relevant training
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#05264E] mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#05264E] mb-6">
                Leading the Way in Professional Education
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                TechVersity is a premier educational institution committed to delivering high-quality professional education. We bridge the gap between academia and industry through practical, hands-on learning experiences and industry-aligned curriculum.
              </p>
              <div className="space-y-4 mb-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#0099FF] w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
              <Button variant="blue" size="lg" className="w-full md:w-auto">
                Download Brochure
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Students learning"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-6 shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-[#0099FF]/10 p-3 rounded-full">
                    <Award className="w-8 h-8 text-[#0099FF]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#05264E]">NSDC</p>
                    <p className="text-gray-600">Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
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
    </main>
  );
};

export default AboutUs;