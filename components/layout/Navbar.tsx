"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAVBAR_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ContactForm from "@/components/ui/ContactForm";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openForm = () => {
    setIsMenuOpen(false); // close mobile menu if open
    setIsFormOpen(true);
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
          <Link href="/" className="flex items-center">
            <div className="relative w-[180px] h-[40px]">
              <Image
                src="/techversity-logo.png"
                alt="TechVersity Logo"
                fill
                priority
                className="object-contain"
                sizes="180px"
              />
            </div>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <ul className="flex items-center gap-6">
              {NAVBAR_LINKS.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-[#05264E] transition-colors hover:text-[#FF5C00]"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Button variant="orange" onClick={openForm}>
              Talk to Expert
            </Button>
          </div>

          <button
            className="text-[#05264E] md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="absolute left-0 right-0 bg-white p-4 shadow-md md:hidden">
            <ul className="flex flex-col gap-4">
              {NAVBAR_LINKS.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="block py-2 text-[#05264E] transition-colors hover:text-[#FF5C00]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Button variant="orange" className="w-full" onClick={openForm}>
                Talk to Expert
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Popup form */}
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default Navbar;
