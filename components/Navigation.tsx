'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS, CONTACT_INFO } from '@/lib/constants';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [barHeight, setBarHeight] = useState(44);
  const barRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const measureBar = useCallback(() => {
    if (barRef.current) {
      setBarHeight(barRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    measureBar();
    window.addEventListener('resize', measureBar);
    return () => window.removeEventListener('resize', measureBar);
  }, [measureBar]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Contact Bar */}
      <div
        ref={barRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-primary-dark' : 'bg-black/40 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-12 py-1.5 sm:py-2">
          <div className="flex items-center gap-4 sm:gap-12">
            {CONTACT_INFO.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s|\(|\)|-/g, '')}`}
                className="text-white text-sm sm:text-lg font-bold tracking-wide hover:text-accent transition-colors"
              >
                {phone}
              </a>
            ))}
          </div>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-white text-sm sm:text-lg font-bold tracking-wide hover:text-accent transition-colors"
          >
            {CONTACT_INFO.email}
          </a>
        </div>
      </div>

      <header
        style={{ top: barHeight }}
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20 lg:h-24 transition-all duration-300">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-primary rounded-lg">
            <Image
              src="/images/logo.jpg"
              alt="Team JPR Logo"
              width={50}
              height={50}
              className="rounded-full transition-transform group-hover:scale-110 duration-300"
            />
            <span className={`text-2xl font-extrabold tracking-tight transition-colors duration-300 ${scrolled ? 'text-primary-dark' : 'text-white drop-shadow-md'}`}>
              Team JPR
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href.split('#')[0]));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary ${
                      isActive
                        ? 'text-white bg-primary shadow-md'
                        : scrolled 
                          ? 'text-gray-600 hover:text-primary hover:bg-primary/5' 
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA desktop */}
          <Link
            href="/contact"
            className={`hidden lg:inline-flex items-center px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-accent/30 ${
              scrolled 
                ? 'bg-accent text-white hover:bg-accent-hover' 
                : 'bg-white text-primary hover:bg-gray-100'
            }`}
          >
            Get a Quote
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <div className="w-6 flex flex-col gap-1.5 items-end">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : 'w-4'}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl transition-all duration-300 origin-top overflow-hidden ${
            menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="p-4 space-y-2">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                      isActive ? 'text-primary bg-primary/5' : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-4 mt-2 border-t border-gray-100">
              <Link
                href="/contact"
                className="block w-full text-center px-4 py-3 bg-accent text-white text-base font-semibold rounded-xl hover:bg-accent-hover transition-colors shadow-md focus:outline-none focus:ring-4 focus:ring-accent/30"
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    </>
  );
}
