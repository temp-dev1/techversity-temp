import React from "react";

const AboutHero = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-500">
      {/* Main content container */}
      <div className="px-4 sm:px-8 md:px-16 py-8 md:py-16 relative">
        {/* Breadcrumb navigation */}
        <div className="mb-4">
          <div className="flex items-center text-white/90 text-sm md:text-base">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span>About us</span>
          </div>
        </div>
        
        {/* Content wrapper */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left text content - exactly 50% on desktop */}
          <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Learn, Adapt, and Innovate
            </h1>
            
            <p className="text-white/90 mb-4 text-sm sm:text-base md:text-lg leading-relaxed">
              Techversity offers a comprehensive learning platform that bridges the gap between industry-experienced mentors and aspiring students. Our curated programs are project-based and focused on delivering practical, real-world knowledge to help students shape and accelerate their careers.
            </p>
            
            <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
              We aspire to be a cost-effective learning partner for every student, empowering them to transform their futures. Through flexible, virtual, and specialized programs developed in collaboration with leading companies and institutions, we aim to equip learners with in-demand industry skills. In addition, we focus on holistic development, encouraging both personal and professional growth through interactive group activities and mentorship.
            </p>
          </div>
          
          {/* Right image section - with proper sizing and alignment */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative max-w-md w-full">
              {/* Using placeholder image since external URLs aren't allowed */}
              <img
                src="https://edu-versity.in/wp-content/themes/elearning-education/new-assets/images/abt-banner.png"
                alt="Student with headphones working on laptop"
                className="w-full h-auto object-cover rounded"
              />
              
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent rounded"></div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-teal-400 rounded-full opacity-20"></div>
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-indigo-600 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
