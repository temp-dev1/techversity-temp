"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ui/ContactForm";

const NeedHelp = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section id="contact" className="relative mb-[-60px] mt-8 z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-gradient-to-r from-[#2196F3] via-[#4E6BE7] to-[#8A3FEF]">
          <div className="flex flex-col items-center justify-between gap-4 p-6 md:flex-row md:p-8 lg:p-10">
            <div className="text-white md:max-w-[480px]">
              <h2 className="mb-2 text-xl font-bold leading-tight md:text-2xl lg:text-3xl">
                Need help? Feel free to reach out to us!
              </h2>
              <p className="mb-4 text-sm text-white/90 md:text-base">
                We generally respond within 1-2 business days
              </p>
              <Button
                onClick={() => setIsFormOpen(true)}
                className="w-full rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#4E6BE7] transition-all hover:bg-white/90 md:w-auto md:px-6 md:py-2.5 md:text-base"
              >
                Talk to Our Experts
              </Button>
            </div>
            <div className="relative w-full md:w-[320px] lg:w-[400px]">
              <img
                src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Support Representative"
                className="h-[200px] w-full rounded-xl object-cover object-center md:h-[240px] lg:h-[280px]"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 92%, 0 100%)'
                }}
              />
              <div className="absolute inset-0 rounded-xl border border-white/20" />
            </div>
          </div>
        </div>
      </div>

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};

export default NeedHelp;
