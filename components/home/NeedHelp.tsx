"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ui/ContactForm";

const NeedHelp = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section id="contact" className="relative mb-[-60px] mt-8 z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[24px] bg-gradient-to-r from-[#2196F3] via-[#4E6BE7] to-[#8A3FEF]">
          <div className="flex flex-col items-start gap-6 p-6 sm:p-8 md:flex-row md:items-center md:justify-between lg:p-10">
            <div className="text-white w-full md:max-w-[480px]">
              <h2 className="mb-3 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                Need help? Feel free to reach out to us!
              </h2>
              <p className="mb-6 text-base text-white/90 md:text-lg">
                We generally respond within 1-2 business days
              </p>
              <Button
                onClick={() => setIsFormOpen(true)}
                className="w-full sm:w-auto rounded-xl bg-white px-6 py-3 text-base font-semibold text-[#4E6BE7] transition-all hover:bg-white/90"
              >
                Talk to Our Experts
              </Button>
            </div>
            <div className="relative w-full md:w-[400px]">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Support Representative"
                  className="h-[200px] w-full object-cover object-center sm:h-[240px] md:h-[280px]"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-[#8A3FEF]/20"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};

export default NeedHelp;
