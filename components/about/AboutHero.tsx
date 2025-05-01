import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutHero = () => {
  return (
    <div className="relative bg-[#4E44E4] pt-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-white/80">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <span>About us</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center pb-32">
          <div>
            <h1 className="mb-8 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Invest, Imbibe and Innovate
            </h1>
            
            <div className="space-y-6 text-lg text-white/90">
              <p>
                Edu-versity provides a comprehensive platform, bridging the gap between Industry based mentors and students. We have curated a wide range of programs consisting projects, offering practical knowledge and helping them in shaping their career.
              </p>
              
              <p>
                We envision becoming a cost-efficient learning partner for every student and helping them in transforming their careers. We aim to provide students with flexible, virtual specialised programmes in collaboration with top-notch companies and institutions.
              </p>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg"
              alt="Student learning"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;