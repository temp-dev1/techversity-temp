'use client';

import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const partners = [
  {
    id: 1,
    name: 'Startup India',
    logo: 'https://edu-versity.in/wp-content/uploads/2023/08/logo-2.png',
  },
  {
    id: 2,
    name: 'Anavadyaa',
    logo: 'https://edu-versity.in/wp-content/uploads/2023/08/logo-3.png',
  },
  {
    id: 3,
    name: 'Enterpreter',
    logo: 'https://edu-versity.in/wp-content/uploads/2023/08/logo-4.png',
  },
  {
    id: 4,
    name: 'Extech Digital',
    logo: 'https://edu-versity.in/wp-content/uploads/2023/08/logo-5.png',
  },
  {
    id: 5,
    name: 'Webclox',
    logo: 'https://edu-versity.in/wp-content/uploads/2023/08/logo-6.png',
  },
  {
    id: 6,
    name: 'Bouncer avenue',
    logo: 'https://edu-versity.in/wp-content/uploads/2023/08/logo-1.png',
  },
];

// Triple the array for seamless looping
const loopedPartners = [...partners, ...partners, ...partners];

const MarqueePartners = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemWidth = 264; // approx width + margin/padding per item
  const originalLength = partners.length;

  useEffect(() => {
    if (scrollRef.current) {
      // Jump to the middle set
      scrollRef.current.scrollLeft = itemWidth * originalLength;
    }
  }, []);

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;

    const scrollAmount = direction === 'left' ? -itemWidth : itemWidth;
    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const scrollLeft = scrollRef.current.scrollLeft;
    const maxScroll = itemWidth * originalLength * 2;

    if (scrollLeft <= 0) {
      // Jump forward
      scrollRef.current.scrollLeft = scrollLeft + itemWidth * originalLength;
    } else if (scrollLeft >= maxScroll) {
      // Jump backward
      scrollRef.current.scrollLeft = scrollLeft - itemWidth * originalLength;
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-center text-4xl font-bold text-[#1a1a1a] mb-12">
          Our Marquee Partners
        </h2>

        <div className="relative">
          <div className="relative overflow-hidden py-8">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex items-center gap-16 overflow-x-auto scrollbar-hide transition-all duration-300 ease-in-out"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {loopedPartners.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex min-w-[200px] items-center justify-center"
                >
                  <div className="relative h-20 w-48">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          </div>

          <button
            onClick={() => handleManualScroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 focus:outline-none"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4 text-gray-600" />
          </button>
          <button
            onClick={() => handleManualScroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 focus:outline-none"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MarqueePartners;
