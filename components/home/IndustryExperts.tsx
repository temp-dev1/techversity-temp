"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import { Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import { Expert } from "@/models/Expert";

const IndustryExperts = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [experts, setExperts] = useState<Expert[]>([]);
  const [loading, setLoading] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const fetchExperts = async () => {
      try {
        const response = await fetch('/api/experts');
        const data = await response.json();
        setExperts(data);
      } catch (error) {
        console.error('Error fetching experts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperts();
  }, []);

  const checkScrollButtons = useCallback(() => {
    if (!scrollRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  const handleScroll = useCallback((direction: 'left' | 'right') => {
    if (!scrollRef.current || isTransitioning) return;
    
    setIsTransitioning(true);
    const scrollAmount = scrollRef.current.clientWidth * 0.8;
    const targetScroll = scrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
    
    scrollRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });

    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
    checkScrollButtons();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
    checkScrollButtons();
  };

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        element.scrollLeft += e.deltaY;
        checkScrollButtons();
      }
    };

    element.addEventListener('wheel', handleWheel, { passive: false });
    return () => element.removeEventListener('wheel', handleWheel);
  }, [checkScrollButtons]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">
            Learn from Industry Experts
          </h2>
          <p className="mx-auto max-w-2xl">
            Our courses are taught by professionals with years of industry experience from leading global companies.
          </p>
        </div>

        <div className="relative">
          <div 
            ref={scrollRef}
            className="grid auto-cols-[280px] grid-flow-col gap-8 overflow-x-auto pb-8 pt-4 scrollbar-hide select-none"
            onScroll={checkScrollButtons}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            style={{ 
              cursor: isDragging ? 'grabbing' : 'grab',
              WebkitOverflowScrolling: 'touch',
              scrollBehavior: 'smooth',
              scrollSnapType: 'x mandatory'
            }}
          >
            {experts.map((expert) => (
              <div
                key={expert._id}
                className="group relative overflow-hidden rounded-lg bg-[#06315F] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                style={{ 
                  userSelect: 'none',
                  scrollSnapAlign: 'start'
                }}
              >
                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="h-full w-full object-cover object-center transition-transform duration-700 will-change-transform group-hover:scale-110"
                    loading="lazy"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06315F] via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold">{expert.name}</h3>
                    <p className="text-sm text-gray-300">{expert.role}</p>
                  </div>
                  <a
                    href={expert.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-[#0A66C2] opacity-0 shadow-md transition-all duration-300 hover:bg-white hover:shadow-lg group-hover:opacity-100"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="h-8">
                      <img
                        src={expert.companyLogo}
                        alt={expert.company}
                        className="h-full w-auto object-contain"
                        loading="lazy"
                        draggable="false"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-300">
                      {expert.experience}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => handleScroll('left')}
            className={`absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#0099FF] md:-left-6 ${
              !canScrollLeft ? 'invisible opacity-0' : 'visible opacity-100'
            }`}
            aria-label="Scroll left"
            disabled={!canScrollLeft || isTransitioning}
          >
            <ChevronLeft className="h-6 w-6 text-[#05264E]" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className={`absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#0099FF] md:-right-6 ${
              !canScrollRight ? 'invisible opacity-0' : 'visible opacity-100'
            }`}
            aria-label="Scroll right"
            disabled={!canScrollRight || isTransitioning}
          >
            <ChevronRight className="h-6 w-6 text-[#05264E]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustryExperts;
