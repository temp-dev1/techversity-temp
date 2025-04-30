"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ui/ContactForm";

const NeedHelp = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="relative mb-[-120px] mt-16 z-10" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[32px] bg-gradient-to-r from-[#2196F3] via-[#4E6BE7] to-[#8A3FEF]">
          <div className="flex flex-col items-center justify-between gap-8 p-8 md:flex-row md:p-12">
            <div className="text-white md:max-w-[500px]">
              <h2 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
                Need help? Feel free to reach out to us!
              </h2>
              <p className="mb-8 text-lg text-white/90">
                We generally respond within 1-2 business days
              </p>
              <Button
                onClick={() => setIsFormOpen(true)}
                className="rounded-xl bg-white px-8 py-6 text-lg font-semibold text-[#4E6BE7] transition-all hover:bg-white/90"
              >
                Talk to Our Experts
              </Button>
            </div>
            <div className="relative w-full md:w-auto">
              <img
                src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Support Representative"
                className="h-[400px] w-full rounded-2xl object-cover object-center md:w-[500px]"
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