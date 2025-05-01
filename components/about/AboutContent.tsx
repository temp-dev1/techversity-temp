import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const achievements = [
  "NSDC & NIESBUD Certified Training Partner",
  "ISO 9001:2015 Certified Institution",
  "Member of International Association of Universities",
  "Recognized by Startup India",
  "MSME Registered Institute",
  "Approved by Government of India",
];

const AboutContent = () => {
  return (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;