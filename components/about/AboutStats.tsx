import React from "react";

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

const AboutStats = () => {
  return (
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
  );
};

export default AboutStats;