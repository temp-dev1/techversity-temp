'use client';
import React, { useEffect, useRef, useState } from 'react';
import { CertPartner } from '@/models/CertPartner';

const CertificationPartners = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [partners, setPartners] = useState<CertPartner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || partners.length === 0) return;

    let animationFrameId: number;
    let lastTime = 0;
    const speed = 5; // Pixels per millisecond

    const animate = (currentTime: number) => {
      if (lastTime === 0) {
        lastTime = currentTime;
      }

      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += deltaTime * speed;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [partners]);

  if (loading) {
    return (
      <section className="bg-[#f8f9fa] py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-[#f8f9fa] py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center text-red-600">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#f8f9fa] py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#1a1a1a] md:text-4xl">
          Our Certifications Partners
        </h2>
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="overflow-x-auto whitespace-nowrap no-scrollbar"
          >
            <div className="flex min-w-max items-center gap-16 py-8">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner._id}-${index}`}
                  className="min-w-[200px] flex items-center justify-center"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 w-auto object-contain grayscale transition-all hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Gradient overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f8f9fa] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#f8f9fa] to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default CertificationPartners;
