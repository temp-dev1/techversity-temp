import React from "react";
import { Award } from "lucide-react";

const certifications = [
  {
    name: "NSDC Certified",
    logo: "https://edu-versity.in/wp-content/uploads/2023/08/certificate-partner-1.png",
  },
  {
    name: "ISO 9001:2015",
    logo: "https://edu-versity.in/wp-content/uploads/2023/08/certificate-partner-2.png",
  },
  {
    name: "MSME Registered",
    logo: "https://edu-versity.in/wp-content/uploads/2023/08/certificate-partner-3.png",
  },
  {
    name: "Startup India",
    logo: "https://edu-versity.in/wp-content/uploads/2023/08/certificate-partner-4.png",
  },
];

const AboutCertifications = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-[#05264E] text-center mb-12">
          Our Certifications
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={cert.logo}
                  alt={cert.name}
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p className="text-[#05264E] font-semibold">{cert.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCertifications;