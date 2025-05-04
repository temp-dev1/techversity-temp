"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ui/ContactForm";

const NeedHelp = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section id="contact" className="relative mb-[-80px] mt-12 z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-[1000px] overflow-hidden rounded-2xl bg-gradient-to-r from-[#2196F3] via-[#4E6BE7] to-[#8A3FEF]">
          <div className="flex flex-col items-center justify-between gap-6 p-6 md:flex-row md:p-8">
            <div className="text-white md:max-w-[420px]">
              <h2 className="mb-3 text-2xl font-bold leading-tight md:text-3xl">
                Need help? Feel free to reach out to us!
              </h2>
              <p className="mb-6 text-base text-white/90">
                We generally respond within 1-2 business days
              </p>
              <Button
                onClick={() => setIsFormOpen(true)}
                className="rounded-lg bg-white px-6 py-2.5 text-base font-semibold text-[#4E6BE7] transition-all hover:bg-white/90"
              >
                Talk to Our Experts
              </Button>
            </div>
            <div className="relative w-full md:w-auto">
              <img
                src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Support Representative"
                className="h-[300px] w-full rounded-xl object-cover object-center md:w-[400px] border border-white/10"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};

export default NeedHelp;
