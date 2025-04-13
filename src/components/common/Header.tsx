"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Initialize scroll state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gradient-to-r from-dark-950/95 to-primary-900/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-gradient-to-b from-dark-950/80 to-transparent backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <div className="relative">
            <div className="flex items-center">
              <div className="mr-3 w-10 h-10 bg-gradient-to-br from-accent-600 to-mystical-500 rounded-full flex items-center justify-center shadow-lg relative overflow-hidden group-hover:shadow-accent-600/30 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-400/20 to-mystical-600/20 opacity-60 mix-blend-overlay"></div>
                <span className="text-lg font-bold text-white">1212</span>
                <div className="absolute -inset-1 bg-gradient-to-r from-gold-300/30 to-mystical-500/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <span className="text-2xl font-bold tracking-tight transition-all duration-300 flex items-center">
                <span className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gold-300 group-hover:to-gold-400 transition-all duration-300">1212</span>
                <span className={`ml-2 ${scrolled ? 'text-mystical-400' : 'text-mystical-300'} transition-colors duration-300`}>Angel Number</span>
              </span>
            </div>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-mystical-500 to-accent-400 group-hover:w-full transition-all duration-500"></div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/meaning" className="text-white/90 hover:text-gold-300 transition-colors font-medium text-sm uppercase tracking-wider py-2 px-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold-300 hover:after:w-full after:transition-all after:duration-300">
            Meaning
          </Link>
          <Link href="/meaning/love" className="text-white/90 hover:text-gold-300 transition-colors font-medium text-sm uppercase tracking-wider py-2 px-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold-300 hover:after:w-full after:transition-all after:duration-300">
            Love
          </Link>
          <Link href="/career" className="text-white/90 hover:text-gold-300 transition-colors font-medium text-sm uppercase tracking-wider py-2 px-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold-300 hover:after:w-full after:transition-all after:duration-300">
            Career
          </Link>
          <Link href="/wealth" className="text-white/90 hover:text-gold-300 transition-colors font-medium text-sm uppercase tracking-wider py-2 px-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold-300 hover:after:w-full after:transition-all after:duration-300">
            Wealth
          </Link>
          <Link href="/spiritual" className="text-white/90 hover:text-gold-300 transition-colors font-medium text-sm uppercase tracking-wider py-2 px-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold-300 hover:after:w-full after:transition-all after:duration-300">
            Spiritual
          </Link>
          <Link href="/blog" className="text-white/90 hover:text-gold-300 transition-colors font-medium text-sm uppercase tracking-wider py-2 px-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold-300 hover:after:w-full after:transition-all after:duration-300">
            Blog
          </Link>
          <Link href="/personal-reading" className="ml-2 bg-gradient-to-r from-mystical-600 to-accent-600 hover:from-mystical-700 hover:to-accent-700 text-white px-5 py-2 rounded-full text-sm font-medium tracking-wider transform transition-all hover:-translate-y-0.5 hover:shadow-lg border border-white/10">
            Get Reading
          </Link>
        </nav>

        {/* Mobile Button */}
        <button 
          onClick={handleToggleMenu}
          className={`md:hidden focus:outline-none transition-transform hover:scale-110 z-50 ${isMenuOpen ? 'text-white' : 'text-white/90'}`}
          aria-label="Navigation Menu"
          tabIndex={0}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation - Fullscreen Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gradient-to-br from-dark-950/98 via-primary-900/98 to-primary-800/98 backdrop-blur-md flex flex-col justify-center z-40">
          <nav className="flex flex-col items-center space-y-6 p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="mr-3 w-12 h-12 bg-gradient-to-br from-accent-600 to-mystical-500 rounded-full flex items-center justify-center shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-400/20 to-mystical-600/20 opacity-60 mix-blend-overlay"></div>
                <span className="text-lg font-bold text-white">1212</span>
              </div>
              <span className="text-2xl text-mystical-400 font-semibold">Angel Number</span>
            </div>
            <Link 
              href="/meaning" 
              className="text-xl text-white hover:text-gold-300 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Meaning
            </Link>
            <Link 
              href="/meaning/love" 
              className="text-xl text-white hover:text-gold-300 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Love
            </Link>
            <Link 
              href="/career" 
              className="text-xl text-white hover:text-gold-300 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Career
            </Link>
            <Link 
              href="/wealth" 
              className="text-xl text-white hover:text-gold-300 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Wealth
            </Link>
            <Link 
              href="/spiritual" 
              className="text-xl text-white hover:text-gold-300 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Spiritual
            </Link>
            <Link 
              href="/blog" 
              className="text-xl text-white hover:text-gold-300 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/personal-reading" 
              className="mt-4 bg-gradient-to-r from-mystical-600 to-accent-600 text-white px-8 py-3 rounded-full font-bold hover:from-mystical-700 hover:to-accent-700 transition-all transform hover:-translate-y-0.5 border border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Personal Reading
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 