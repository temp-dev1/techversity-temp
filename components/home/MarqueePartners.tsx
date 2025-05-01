'use client';

import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const MarqueePartners = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemWidth = 264;
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const res = await fetch('/api/partners');
        const data: Partner[] = await res.json();
        setPartners([...data, ...data, ...data]); // Loop effect
        if (scrollRef.current) {
          scrollRef.current.scrollLeft = itemWidth * data.length;
        }
      } catch (error) {
        console.error('Error fetching partners:', error);
      }
    };

    fetchPartners();
  }, []);

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = direction === 'left' ? -itemWidth : itemWidth;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (!scrollRef.current || partners.length === 0) return;
    const originalLength = partners.length / 3;
    const scrollLeft = scrollRef.current.scrollLeft;
    const maxScroll = itemWidth * originalLength * 2;

    if (scrollLeft <= 0) {
      scrollRef.current.scrollLeft = scrollLeft + itemWidth * originalLength;
    } else if (scrollLeft >= maxScroll) {
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
              {partners.map((partner, index) => (
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
