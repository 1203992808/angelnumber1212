"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <footer className="bg-gradient-to-b from-indigo-950 to-black text-white relative overflow-hidden">
      {/* Background Stars - Client-side only rendering */}
      <div className="absolute inset-0 opacity-20">
        {isClient && (
          <div className="stars-container">
            {[...Array(50)].map((_, i) => (
              <div 
                key={i} 
                className="absolute rounded-full bg-white" 
                style={{
                  top: `${Math.floor(i * (100 / 50))}%`,
                  left: `${(i * 13) % 100}%`,
                  width: `${Math.max(1, Math.floor(Math.sin(i) * 3))}px`,
                  height: `${Math.max(1, Math.floor(Math.sin(i) * 3))}px`,
                  opacity: 0.3 + ((i % 7) / 10), // Deterministic opacity based on index instead of Math.random()
                }}
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Site Logo & Description */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-indigo-800 rounded-full flex items-center justify-center mr-2 shadow-glow">
                <span className="text-white font-bold">1212</span>
              </div>
              <span className="text-xl font-bold">
                Angel <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-300">Number</span>
              </span>
            </Link>
            <p className="text-indigo-200 text-sm mb-4">
              Explore the deeper meaning of angel number 1212, get personalized readings, and discover how this sacred number guides your life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-indigo-300 hover:text-white transition-colors hover:scale-110 transform duration-200" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-indigo-300 hover:text-white transition-colors hover:scale-110 transform duration-200" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-indigo-300 hover:text-white transition-colors hover:scale-110 transform duration-200" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/meaning" className="text-indigo-200 hover:text-white transition-colors">
                  Meaning
                </Link>
              </li>
              <li>
                <Link href="/relationships" className="text-indigo-200 hover:text-white transition-colors">
                  Relationships
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-indigo-200 hover:text-white transition-colors">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/wealth" className="text-indigo-200 hover:text-white transition-colors">
                  Wealth
                </Link>
              </li>
              <li>
                <Link href="/spiritual" className="text-indigo-200 hover:text-white transition-colors">
                  Spiritual
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Resources */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-300">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-indigo-200 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/personal-reading" className="text-indigo-200 hover:text-white transition-colors">
                  Personal Reading
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-indigo-200 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-indigo-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-indigo-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 md:col-span-3 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-300">Newsletter</h3>
            <p className="text-indigo-200 text-sm mb-4">
              Get the latest angel number insights and spiritual guidance delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-indigo-900/50 backdrop-blur-sm text-white rounded-full border border-indigo-700/50 focus:outline-none focus:ring-2 focus:ring-violet-400 flex-grow transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white px-4 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-glow"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-indigo-900/50 mt-8 pt-8 text-sm text-indigo-300 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} 1212 Angel Number. All rights reserved.</p>
          <div className="flex mt-4 md:mt-0 space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 