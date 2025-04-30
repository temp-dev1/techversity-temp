'use client';

import React, { useEffect, useRef } from 'react';

const partners = [
  {
    name: 'Adobe',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/1200px-Adobe_Corporate_Logo.png',
  },
  {
    name: 'IBM',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
  },
  {
    name: 'Cisco',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg',
  },
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
  },
  {
    name: 'Intuit',
    logo: 'https://plugin.intuitcdn.net/identity-authn-core-ui/c8bf23fa3230058f.svg',
  },
  {
    name: 'ESB',
    logo: 'https://edu-versity.in/wp-content/uploads/2023/08/certificate-partner-5.png',
  },
];

const CertificationPartners = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;

    const scrollAnimation = () => {
      if (scroll.scrollLeft >= scroll.scrollWidth / 2) {
        scroll.scrollLeft = 0;
      } else {
        scroll.scrollLeft += 1;
      }
    };

    const interval = setInterval(scrollAnimation, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f8f9fa] py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#1a1a1a] md:text-4xl">
          Our Certifications Partners
        </h2>

        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex w-full items-center gap-16 overflow-x-auto whitespace-nowrap py-8 scrollbar-hide"
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
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
