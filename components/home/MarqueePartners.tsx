'use client';

import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Partner } from '@/models/Partner';

const MarqueePartners = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const itemWidth = 264;

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch('/api/partners');
        const data = await response.json();
        setPartners(data);
      } catch (error) {
        console.error('Error fetching partners:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;

    const scrollAmount = direction === 'left' ? -itemWidth : itemWidth;
    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  // Triple the array for seamless looping
  const loopedPartners = [...partners, ...partners, ...partners];

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
              className="flex items-center gap-16 overflow-x-auto scrollbar-hide transition-all duration-300 ease-in-out"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {loopedPartners.map((partner, index) => (
                <div
                  key={`${partner._id}-${index}`}
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
