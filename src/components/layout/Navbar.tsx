"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Snowflake, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="bg-primary text-white text-sm py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2">
              <Phone size={16} /> +233 27 786 878
            </span>
            <span>Reliable Local AC Services</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#contact" className="hover:text-blue-200 transition-colors">Request a Quote</Link>
          </div>
        </div>
      </div>
      
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'glass' : 'bg-background shadow-sm border-b border-border'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-2">
              <div className="bg-primary text-white p-2 rounded-lg">
                <Snowflake size={28} />
              </div>
              <span className="text-2xl font-bold text-foreground">
                Gokah<span className="text-primary">AC</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-foreground/80 hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
              <div className="ml-4 flex gap-2">
                <Button href="tel:+23327786878" variant="outline">Call Us</Button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden glass absolute top-full left-0 w-full border-b border-border shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 rounded-md text-base font-medium text-foreground hover:bg-surface"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex justify-between items-center">
                    {link.name}
                    <ChevronRight size={16} className="opacity-50" />
                  </div>
                </Link>
              ))}
              <div className="pt-4 pb-2 space-y-3">
                <Button href="tel:+23327786878" variant="primary" className="w-full justify-center">
                  Call: +233 27 786 878
                </Button>
                <Button href="https://wa.me/233243752653" variant="outline" className="w-full justify-center">
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
