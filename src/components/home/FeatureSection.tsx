"use client";

import Link from 'next/link';
import Image from 'next/image';

const FeatureSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-primary-950/10 to-dark-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-primary-900/5 to-transparent"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold-300/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-mystical-600/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="inline-block text-mystical-600 font-medium tracking-wider text-sm mb-3">DIVINE SIGNIFICANCE</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            The Sacred Meaning Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-mystical-700">1212</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            The number 1212 is a powerful angelic message combining the energies of numbers 1 and 2, 
            representing new beginnings, balance, and divine harmony. Discover how this sacred sequence 
            can illuminate various aspects of your life journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Spiritual Meaning */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1518134346374-184f9d21cea2?q=80&w=600&h=500&auto=format&fit=crop"
                alt="Spiritual Meaning"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent"></div>
              <div className="absolute top-4 left-4 bg-gold-300 text-primary-900 rounded-full px-3 py-1 text-xs font-bold">SPIRITUAL</div>
            </div>
            <div className="p-8 border-t border-primary-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Spiritual Awakening</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Angel number 1212 heralds a profound spiritual awakening, illuminating your connection to higher consciousness
                and divine guidance. It's a cosmic reminder to align with your soul's authentic purpose.
              </p>
              <Link 
                href="/meaning/spiritual" 
                className="group inline-flex items-center text-mystical-600 font-semibold transition-all hover:text-mystical-700"
              >
                <span className="border-b border-transparent group-hover:border-mystical-600 transition-all">Explore Spiritual Meaning</span>
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Love & Relationships */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=600&h=500&auto=format&fit=crop"
                alt="Love and Relationships"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent"></div>
              <div className="absolute top-4 left-4 bg-gold-300 text-primary-900 rounded-full px-3 py-1 text-xs font-bold">LOVE</div>
            </div>
            <div className="p-8 border-t border-primary-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Love & Connection</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                In matters of the heart, 1212 signifies meaningful transitions and soul connections.
                Discover how this powerful number can transform your relationships and deepen your capacity for authentic love.
              </p>
              <Link 
                href="/meaning/love" 
                className="group inline-flex items-center text-mystical-600 font-semibold transition-all hover:text-mystical-700"
              >
                <span className="border-b border-transparent group-hover:border-mystical-600 transition-all">Explore Love Meaning</span>
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Career & Success */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&h=500&auto=format&fit=crop"
                alt="Career and Success"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent"></div>
              <div className="absolute top-4 left-4 bg-gold-300 text-primary-900 rounded-full px-3 py-1 text-xs font-bold">CAREER</div>
            </div>
            <div className="p-8 border-t border-primary-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Purpose & Prosperity</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The 1212 angel number reveals the path to fulfilling work and authentic success aligned with your soul's purpose.
                Learn how to harness this energy to manifest abundance and professional fulfillment.
              </p>
              <Link 
                href="/career" 
                className="group inline-flex items-center text-mystical-600 font-semibold transition-all hover:text-mystical-700"
              >
                <span className="border-b border-transparent group-hover:border-mystical-600 transition-all">Explore Career Guidance</span>
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link 
            href="/meaning" 
            className="inline-block bg-gradient-to-r from-mystical-600 to-accent-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border border-white/10"
          >
            <span className="flex items-center">
              <span>Discover All 1212 Meanings</span>
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection; 