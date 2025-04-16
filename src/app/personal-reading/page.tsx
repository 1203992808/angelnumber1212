"use client";

// CSS for the stars animation
const twinkleAnimation = `
  @keyframes twinkle {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.8; }
  }
`;

export default function PersonalReadingPage() {
  return (
    <section className="py-24 md:py-32 overflow-hidden relative">
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
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-tr from-mystical-500 to-accent-500 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-serif">
            该功能升级中，暂不可用
          </h1>
          
          <p className="text-xl text-white/80 mb-10">
            We are currently enhancing our personal reading feature to provide you with even more accurate and insightful divine guidance. Please check back soon.
          </p>
          
          <a href="/" className="inline-block py-3 px-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            Return to Homepage
          </a>
        </div>
      </div>
      
      <style jsx>{twinkleAnimation}</style>
    </section>
  );
} 