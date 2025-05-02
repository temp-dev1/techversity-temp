'use client';

import React, { useEffect, useRef, useState } from 'react';
import { CertPartner } from '@/models/CertPartner';

const CertificationPartners = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [partners, setPartners] = useState<CertPartner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch('/api/cert-partners');
        if (!response.ok) {
          throw new Error('Failed to fetch certification partners');
        }
        const data = await response.json();
        setPartners(data);
      } catch (error) {
        console.error('Error fetching certification partners:', error);
        setError('Failed to load certification partners');
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;

    let animationFrame: number;

    const scrollAnimation = () => {
      scroll.scrollLeft += 1;
      if (scroll.scrollLeft >= scroll.scrollWidth / 2) {
        scroll.scrollLeft = 0;
      }
      animationFrame = requestAnimationFrame(scrollAnimation);
    };

    animationFrame = requestAnimationFrame(scrollAnimation);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

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
            className="flex min-w-max items-center gap-16 overflow-x-scroll whitespace-nowrap py-8 scrollbar-hide"
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner._id}-${index}`}
                className="flex min-w-[200px] items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto object-contain grayscale transition-all hover:grayscale-0"
                />
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f8f9fa] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#f8f9fa] to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default CertificationPartners;
