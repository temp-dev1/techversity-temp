import React from "react";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Founder & CEO",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    linkedin: "#",
  },
  {
    name: "Priya Sharma",
    role: "Academic Director",
    image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg",
    linkedin: "#",
  },
  {
    name: "Amit Patel",
    role: "Head of Technology",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    linkedin: "#",
  },
  {
    name: "Neha Gupta",
    role: "Career Services Head",
    image: "https://images.pexels.com/photos/3760274/pexels-photo-3760274.jpeg",
    linkedin: "#",
  },
];

const AboutTeam = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-[#05264E] text-center mb-12">
          Meet Our Leadership Team
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-[#06315F]"
            >
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06315F] via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-gray-300">{member.role}</p>
                </div>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-[#0A66C2] opacity-0 transition-all duration-300 hover:bg-white group-hover:opacity-100"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;