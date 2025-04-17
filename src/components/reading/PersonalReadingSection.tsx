"use client";

import { useState } from "react";
import Image from "next/image";
import ReadingForm from "./ReadingForm";
import ReadingResult from "./ReadingResult";
import { ReadingFormData } from "./ReadingForm";
// import { generateReading } from "@/lib/readingTemplates";

type ReadingResponse = {
  reading: string;
  loading: boolean;
  error: string | null;
};

const PersonalReadingSection = () => {
  const [readingResponse, setReadingResponse] = useState<ReadingResponse>({
    reading: "",
    loading: false,
    error: null,
  });
  
  // Create date instance at the component level so it can be used throughout
  const currentDate = new Date();
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handleSubmitReading = async (formData: ReadingFormData) => {
    setReadingResponse({
      reading: "",
      loading: true,
      error: null,
    });

    try {
      // Use a timeout to simulate processing and create a better UX
      setTimeout(() => {
        // Generate reading from templates instead of API call
        // const reading = generateReading(formData, currentDate);
        
        // Temporary mock reading
        const reading = `# Your 1212 Angel Number Reading
        
## Personal Insights for ${formData.name || "You"}

The angel number 1212 has appeared in your life at this critical moment. As a ${formData.age}-year-old ${formData.gender.toLowerCase()}, you're being called to embrace new beginnings while maintaining balance in your ${formData.readingType} life.

This is a placeholder reading that will be replaced with a more personalized one in the future.

### Recommendations:
- Take time for self-reflection
- Embrace change with an open heart
- Trust your intuition
- Practice gratitude daily

### Affirmations:
- I am aligned with my highest purpose
- I attract positive opportunities
- I release what no longer serves me
- I am worthy of abundance in all forms`;
        
        setReadingResponse({
          reading,
          loading: false,
          error: null,
        });
      }, 2000); // 2 second delay for better UX
    } catch (error) {
      console.error("Error generating reading:", error);
      setReadingResponse({
        reading: "",
        loading: false,
        error: "We encountered an issue generating your reading. Please try again.",
      });
    }
  };

  return (
    <section className="py-16 md:py-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-primary-900 bg-opacity-90 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-mystical-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-mystical-800/30 to-transparent"></div>
        
        {/* Animated stars/particles */}
        <div className="stars-container">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                opacity: Math.random() * 0.7 + 0.3,
                animation: `twinkle ${Math.random() * 5 + 5}s infinite`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-serif">
              Your Personal 1212 Angel Number Reading
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Discover how the 1212 angel number relates to your unique circumstances and receive divine guidance 
              tailored to your current life journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2 order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden backdrop-blur-lg bg-white/5 border border-white/10 p-6 md:sticky md:top-24">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-mystical-500 to-accent-500 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Why Angel Number 1212?</h3>
                </div>
                
                <div className="space-y-4 text-white/80">
                  <p>
                    The angel number 1212 is a powerful message from your spiritual guides that combines the energies of 1 and 2 repeated for emphasis.
                  </p>
                  <p>
                    Number 1 resonates with new beginnings, innovation, and taking initiative in your life, while 2 brings balance, harmony, and faith.
                  </p>
                  <p>
                    This combination suggests that you're at a pivotal moment where your thoughts are manifesting rapidly into reality. 
                    The universe is supporting your spiritual awakening and growth.
                  </p>
                  <p>
                    Complete the form to receive guidance specifically tailored to your current life circumstances and challenges.
                  </p>
                </div>
                
                <div className="relative mt-8">
                  <Image 
                    src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80"
                    width={400} 
                    height={300} 
                    alt="Spiritual guidance" 
                    className="rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900 to-transparent rounded-xl"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs text-white/70">Photo by Joshua Earle on Unsplash</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3 order-1 md:order-2">
              {readingResponse.reading ? (
                <ReadingResult 
                  response={readingResponse} 
                  onNewReading={() => setReadingResponse({reading: "", loading: false, error: null})} 
                />
              ) : (
                <div className="bg-gradient-to-br from-dark-900/90 to-primary-900/80 backdrop-blur-lg rounded-2xl border border-white/10 shadow-xl p-6 md:p-8">
                  <ReadingForm onSubmit={handleSubmitReading} isLoading={readingResponse.loading} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Add custom CSS for the stars animation */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
};

export default PersonalReadingSection; 