"use client";

import Image from 'next/image';
import Link from 'next/link';

const NumberMeaningSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Understanding <span className="text-indigo-700">1212</span> Numerical Energy
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              In numerology, 1212 is seen as a powerful sequence that combines the energies of numbers 1 and 2, amplified by their repetition.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-indigo-100 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-indigo-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Energy of Number 1</h3>
                  <p className="text-gray-600">
                    Represents new beginnings, leadership, independence, and creativity. It's a number that symbolizes action, confidence, and pursuing dreams.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-indigo-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Energy of Number 2</h3>
                  <p className="text-gray-600">
                    Represents balance, harmony, cooperation, and relationships. It promotes partnership, intuition, and adaptability, encouraging finding balance in life.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-indigo-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Combined Energy of 1212</h3>
                  <p className="text-gray-600">
                    When these numbers combine to form 1212, they create a powerful message encouraging you to move forward on a new path while maintaining balance and harmony. It symbolizes transformation, spiritual awakening, and discovering your mission.
                  </p>
                </div>
              </div>
            </div>
            
            <Link 
              href="/meaning/dual-energy" 
              className="inline-flex items-center text-indigo-700 hover:text-indigo-900 font-semibold"
            >
              Explore the deeper meaning of number combinations
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </Link>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="absolute -inset-4 md:-inset-10 rounded-full bg-indigo-100 bg-opacity-50 blur-xl"></div>
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-2 gap-1">
                <div className="aspect-square bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center">
                  <span className="text-7xl font-bold text-white">1</span>
                </div>
                <div className="aspect-square bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                  <span className="text-7xl font-bold text-white">2</span>
                </div>
                <div className="aspect-square bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center">
                  <span className="text-7xl font-bold text-white">1</span>
                </div>
                <div className="aspect-square bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                  <span className="text-7xl font-bold text-white">2</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Angel Number 1212</h3>
                <p className="text-gray-600">
                  Divine message of new beginnings and balance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumberMeaningSection; 