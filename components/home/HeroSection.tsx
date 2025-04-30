import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-white pt-24">
      <div className="container mx-auto px-4 py-8 md:px-6 md:py-24">
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

            <h1 className="mb-6 text-4xl font-bold leading-tight text-[#1a1a1a] md:text-5xl lg:text-6xl">
              Start Your Upskilling Journey
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              Explore from our wide range of specialised programs and kickstart
              your career.
            </p>

            <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button className="bg-[#2196F3] px-8 py-3 text-lg font-semibold hover:bg-[#1976D2] md:py-6">
                Explore Now
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#1a1a1a] px-8 py-3 text-lg font-semibold text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white md:py-6"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
