import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#05264E] text-white">
      <div className="container mx-auto px-4 pt-[160px] pb-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6 flex items-center">
              <div className="relative w-[180px] h-[40px]">
                <Image
                  src="/technoversity_footer.png"
                  alt="TechVersity Logo"
                  fill
                  className="object-contain"
                  sizes="180px"
                />
              </div>
            </div>
            <p className="mb-6 text-[15px] leading-relaxed text-gray-300">
              Learn over 25+ skills from industry professionals and get ready for your dream career.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="rounded-full bg-[#06315F] p-2.5 text-gray-300 transition-colors hover:bg-[#2196F3] hover:text-white"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="#"
                className="rounded-full bg-[#06315F] p-2.5 text-gray-300 transition-colors hover:bg-[#2196F3] hover:text-white"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="#"
                className="rounded-full bg-[#06315F] p-2.5 text-gray-300 transition-colors hover:bg-[#2196F3] hover:text-white"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="#"
                className="rounded-full bg-[#06315F] p-2.5 text-gray-300 transition-colors hover:bg-[#2196F3] hover:text-white"
              >
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-[18px] font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-[15px] text-gray-300 transition-colors hover:text-[#2196F3]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-[15px] text-gray-300 transition-colors hover:text-[#2196F3]"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[15px] text-gray-300 transition-colors hover:text-[#2196F3]"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[18px] font-semibold">More</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-[15px] text-gray-300 transition-colors hover:text-[#2196F3]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-[15px] text-gray-300 transition-colors hover:text-[#2196F3]"
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[18px] font-semibold">Contact Us</h3>
            <div className="not-italic">
              <p className="mb-3 flex items-start text-[15px] text-gray-300">
                <span className="mr-3 mt-1">📞</span>
                +91 9340333374
              </p>
              <p className="mb-3 flex items-center text-[15px] text-gray-300">
                <span className="mr-3">📧</span>
                <a
                  href="mailto:admin@tech-versity.com"
                  className="transition-colors hover:text-[#2196F3]"
                >
                  admin@tech-versity.com
                </a>
              </p>
            </div>
          </div>

          <div className="mt-12 border-t border-[#06315F] pt-6">
            <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
              <p className="text-[14px] text-gray-300">
                Copyright © 2025-26 Techversity
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
