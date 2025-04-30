import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-white pt-16">
      <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Left Column */}
          <div className="order-2 md:order-1">
            {/* Wipro Logo */}
            <div className="mb-8 flex items-center">
              <img
                src="https://media.licdn.com/dms/image/v2/D4E0BAQEINH3Vf1swig/company-logo_100_100/company-logo_100_100/0/1730379480485/wipro_logo?e=1751500800&v=beta&t=aFQ_fZd7zi5hHh81zQsDZYmlpNpLaApzy0wTHXdZpi4"
                alt="Wipro"
                className="h-12 w-auto"
              />
              <p className="ml-4 text-lg font-medium text-[#1a1a1a]">
                Credential Platform Partner
              </p>
            </div>

<h1 className="mb-6 font-bold leading-tight text-[#1a1a1a] text-[clamp(1.5rem,4vw,3rem)] sm:whitespace-normal md:whitespace-nowrap">
  Start Your Upskilling Journey
</h1>

            <p className="mb-8 text-lg text-gray-600">
              Explore from our wide range of specialised programs and kickstart
              your career.
            </p>

            <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button 
                className="h-14 px-8 text-lg font-semibold bg-[#2196F3] hover:bg-[#1976D2]"
              >
                Explore Now
              </Button>
              <Button
                variant="outline"
                className="h-14 px-8 text-lg font-semibold border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white"
              >
                Talk to Us
              </Button>
            </div>

            <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-6 sm:space-y-0">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-[#FF9800] text-[#FF9800]"
                  />
                ))}
                <span className="ml-2 font-semibold text-[#1a1a1a]">
                  Rated 4.9/5
                </span>
              </div>
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <img
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-white"
                      src={`https://i.pravatar.cc/150?img=${i + 1}`}
                      alt="User"
                    />
                  ))}
                </div>
                <span className="ml-3 font-semibold text-[#1a1a1a]">
                  Trusted by 1.5 lac+ learners
                </span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="order-1 relative md:order-2">
            <img
              src="https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg"
              alt="Student learning"
              className="w-full rounded-2xl"
            />
            
            {/* Course Cards */}
            <div className="absolute -top-4 right-4 w-48 transform rotate-6">
              <div className="bg-white rounded-lg shadow-lg p-3">
                <div className="text-sm font-semibold">Course</div>
                <div className="text-lg font-bold">Machine Learning</div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FF9800] text-[#FF9800]" />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-4 -left-4 w-48 transform -rotate-6">
              <div className="bg-white rounded-lg shadow-lg p-3">
                <div className="text-sm font-semibold">Course</div>
                <div className="text-lg font-bold">Data Science</div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FF9800] text-[#FF9800]" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
