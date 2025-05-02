"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-white pt-8 md:pt-16">
      <div className="container mx-auto px-4 py-4 sm:py-6 md:px-6 md:py-12">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Left Column */}
          <div className="order-2 md:order-1">
            {/* Wipro Logo */}
            <div className="mb-4 sm:mb-6 md:mb-8 flex items-center">
              <img
                src="/trusted.png"
                alt="Wipro"
                className="h-8 w-auto sm:h-10 md:h-12"
              />
              <p className="ml-2 sm:ml-3 md:ml-4 text-base sm:text-lg font-medium text-[#1a1a1a]">
                Credential Platform Partner
              </p>
            </div>

            <h1 className="mb-4 sm:mb-5 md:mb-6 font-bold text-[#1a1a1a] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-full">
              Begin Your Journey to Professional Excellence
            </h1>

            <p className="mb-6 sm:mb-7 md:mb-8 text-base sm:text-lg text-gray-600 max-w-xl">
              Unlock your potential with our specialized programs and start building your future today.
            </p>

            <div className="mb-6 sm:mb-7 md:mb-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-semibold bg-[#2196F3] hover:bg-[#1976D2]"
              >
                Explore Now
              </Button>
              <Button
                variant="outline"
                className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-semibold border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white"
              >
                Talk to Us
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 sm:h-5 sm:w-5 fill-[#FF9800] text-[#FF9800]"
                  />
                ))}
                <span className="ml-2 font-semibold text-[#1a1a1a] text-sm sm:text-base">
                  Rated 4.9/5
                </span>
              </div>
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <img
                      key={i}
                      className="h-6 w-6 sm:h-8 sm:w-8 rounded-full border-2 border-white"
                      src={`https://i.pravatar.cc/150?img=${i + 1}`}
                      alt="User"
                    />
                  ))}
                </div>
                <span className="ml-3 font-semibold text-[#1a1a1a] text-sm sm:text-base">
                  Trusted by 1.5 lac+ learners
                </span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="order-1 relative md:order-2">
            <div className="relative">
              <img
                src="https://8tmtkpbi5jtnv3qr.public.blob.vercel-storage.com/hero1-yB050UtYjl66BF0hjW4Mft6ZE54X7K.png"
                alt="Student learning"
                className="w-full rounded-xl sm:rounded-2xl"
              />
              
              {/* Course Cards - Desktop and Tablet */}
              <div className="hidden sm:block absolute -top-4 right-4 w-36 md:w-40 lg:w-48 transform rotate-6">
                <div className="bg-white rounded-lg shadow-lg p-2 sm:p-3">
                  <div className="text-xs sm:text-sm font-semibold">Course</div>
                  <div className="text-sm sm:text-base lg:text-lg font-bold">Machine Learning</div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-[#FF9800] text-[#FF9800]" />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="hidden sm:block absolute bottom-4 -left-4 w-36 md:w-40 lg:w-48 transform -rotate-6">
                <div className="bg-white rounded-lg shadow-lg p-2 sm:p-3">
                  <div className="text-xs sm:text-sm font-semibold">Course</div>
                  <div className="text-sm sm:text-base lg:text-lg font-bold">Data Science</div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-[#FF9800] text-[#FF9800]" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Course Cards - Mobile (below image) */}
            <div className="sm:hidden mt-4 flex justify-between gap-3">
              <div className="bg-white rounded-lg shadow-lg p-3 flex-1">
                <div className="text-xs font-semibold">Course</div>
                <div className="text-sm font-bold">Machine Learning</div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-[#FF9800] text-[#FF9800]" />
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-3 flex-1">
                <div className="text-xs font-semibold">Course</div>
                <div className="text-sm font-bold">Data Science</div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-[#FF9800] text-[#FF9800]" />
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
