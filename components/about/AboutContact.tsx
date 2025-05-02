import React from "react";
import { Button } from "@/components/ui/button";

const AboutContact = () => {
  return (
    <div className="bg-[#05264E] py-16" style="margin-bottom:1rem;">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of students who have transformed their careers with TechVersity. Get in touch with our counselors for personalized guidance.
        </p>
        <Button variant="orange" size="lg">
          Contact Us Today
        </Button>
      </div>
    </div>
  );
};

export default AboutContact;
