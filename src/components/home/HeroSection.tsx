"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    setIsClient(true);
  }, []);
  
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden min-h-screen flex items-center">
      {/* Enhanced background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1800&h=1000&auto=format&fit=crop" 
          alt="Cosmic universe background"
          fill
          quality={100}
          className="object-cover scale-105 origin-center"
          priority
          style={{ transform: 'translateZ(-10px) scale(1.5)'}}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950/95 via-primary-900/90 to-accent-900/80 z-10"></div>
        
        {/* Animated particles effect - Client-side only rendering */}
        <div className="absolute inset-0 z-10 opacity-40">
          {isClient && 
            Array.from({ length: 20 }).map((_, index) => {
              // Use deterministic values based on index to avoid hydration mismatches
              const isWide = index % 3 === 0;
              const isTall = index % 2 === 0;
              const colorType = index % 3; // 0, 1, or 2
              let bgColor = 'bg-white';
              if (colorType === 1) bgColor = 'bg-gold-300';
              if (colorType === 2) bgColor = 'bg-mystical-300';
              
              return (
                <div
                  key={index}
                  className={`absolute w-${isWide ? '2' : '1'} h-${isTall ? '2' : '1'} rounded-full ${bgColor} animate-ping-slow`}
                  style={{
                    top: `${(index * 5) % 100}%`,
                    left: `${(index * 7) % 100}%`,
                    animationDelay: `${(index * 200) % 3000}ms`,
                    animationDuration: `${3000 + (index * 300) % 3000}ms`,
                  }}
                ></div>
              );
            })
          }
        </div>
        
        {/* Light rays effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[800px] bg-mystical-400/10 blur-[100px] rotate-[-30deg] transform-gpu"></div>
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[600px] bg-accent-500/10 blur-[100px] rotate-[20deg] transform-gpu"></div>
          <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] bg-gold-300/10 blur-[100px] rotate-[15deg] transform-gpu"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`text-center lg:text-left transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full mb-6 border border-white/10">
              <span className="flex w-2 h-2 rounded-full bg-gold-300 mr-2 animate-pulse"></span>
              <span className="text-gold-300 font-medium tracking-wider text-sm uppercase">DIVINE MESSAGE</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Discover Your <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-400">1212</span>
                <span className="absolute -inset-1 bg-gradient-to-r from-gold-300/20 to-gold-400/20 blur-md z-0"></span>
              </span> Angel Number Connection
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              When you repeatedly encounter angel number 1212, it's not coincidence - it's a powerful message from the universe guiding your journey toward alignment and purpose.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link 
                href="/personal-reading" 
                className="group bg-gradient-to-r from-mystical-600 to-accent-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_15px_25px_-10px_rgba(124,58,237,0.5)] hover:shadow-[0_20px_35px_-15px_rgba(124,58,237,0.6)] transition-all transform hover:-translate-y-1 hover:scale-105 border border-white/10 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Get Personal Reading
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-accent-600 to-mystical-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
              
              <Link 
                href="/meaning" 
                className="group bg-transparent text-white border-2 border-white/30 hover:border-gold-300 hover:text-gold-300 px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1 backdrop-blur-sm"
              >
                <span className="flex items-center justify-center">
                  Explore Meaning
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          
          <div className={`hidden lg:flex justify-center lg:justify-end transition-all duration-1000 ease-out delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative w-96 h-96 md:w-[450px] md:h-[450px]">
              {/* Cosmic background glow */}
              <div className="absolute -inset-10 bg-gradient-to-r from-mystical-500/20 via-accent-500/5 to-primary-700/10 rounded-full blur-[60px] z-0"></div>
              
              {/* Outer ring with glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-gold-300/30 to-accent-500/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -inset-2 border-2 border-white/30 rounded-full animate-spin-slow"></div>
              
              {/* Inner rings */}
              <div className="absolute inset-8 border-4 border-gold-300/40 rounded-full animate-reverse-spin-slow"></div>
              
              {/* Central element */}
              <div className="absolute inset-14 bg-gradient-to-br from-primary-700 to-accent-700 rounded-full flex items-center justify-center shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-700 to-primary-800 rounded-full opacity-80 mix-blend-overlay"></div>
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 opacity-30 mix-blend-overlay" 
                       style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")'}}>
                  </div>
                </div>
                <span className="text-8xl md:text-9xl font-bold text-white drop-shadow-lg relative">
                  1212
                  <span className="absolute inset-0 blur-md bg-white/20 rounded-full z-0"></span>
                </span>
              </div>
              
              {/* Animated particles - Client-side only rendering */}
              {isClient && (
                <div className="absolute inset-0 z-20">
                  <div className="absolute top-1/4 right-0 w-3 h-3 rounded-full bg-gold-300 animate-ping-slow"></div>
                  <div className="absolute bottom-1/4 left-0 w-2 h-2 rounded-full bg-mystical-400 animate-ping-slow delay-1000"></div>
                  <div className="absolute top-1/2 right-1/4 w-1 h-1 rounded-full bg-white animate-ping-slow delay-500"></div>
                  <div className="absolute bottom-1/3 right-1/3 w-2 h-2 rounded-full bg-gold-400 animate-ping-slow delay-1500"></div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className={`mt-20 md:mt-28 transition-all duration-1000 ease-out delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all transform hover:-translate-y-2 group border border-white/5 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-300 to-gold-400 rounded-xl mb-4 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-primary-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Spiritual Growth</h3>
              <p className="text-white/70 text-sm">Find inner power & purpose through divine guidance</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all transform hover:-translate-y-2 group border border-white/5 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-300 to-gold-400 rounded-xl mb-4 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-primary-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Love & Relationships</h3>
              <p className="text-white/70 text-sm">Attract & maintain harmony in meaningful connections</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all transform hover:-translate-y-2 group border border-white/5 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-300 to-gold-400 rounded-xl mb-4 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-primary-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Career Path</h3>
              <p className="text-white/70 text-sm">Discover your calling and professional purpose</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all transform hover:-translate-y-2 group border border-white/5 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-300 to-gold-400 rounded-xl mb-4 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-primary-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Personal Transformation</h3>
              <p className="text-white/70 text-sm">Embrace life's pivotal moments with confidence</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark-950/90 to-transparent z-10"></div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <span className="text-white/70 text-xs uppercase tracking-widest mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-gold-300 rounded-full animate-bounce-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 