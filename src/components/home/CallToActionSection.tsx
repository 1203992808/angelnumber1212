import Link from 'next/link';
import Image from 'next/image';

const CallToActionSection = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-primary-900 via-accent-900 to-primary-800 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-gold-300 animate-ping-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 rounded-full bg-gold-300 animate-ping-slow delay-700"></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 rounded-full bg-gold-300 animate-ping-slow delay-1500"></div>
        
        {/* Glowing orbs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gold-300/20 filter blur-[100px]"></div>
        <div className="absolute -bottom-40 -right-20 w-[30rem] h-[30rem] rounded-full bg-mystical-400/20 filter blur-[100px]"></div>
        
        {/* Mesh grid overlay */}
        <div className="absolute inset-0 opacity-10" 
             style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
                    backgroundSize: '40px 40px'}}>
        </div>
      </div>
      
      {/* Floating 1212 elements */}
      <div className="absolute -left-10 top-1/4 text-8xl font-bold text-white/5 select-none">1212</div>
      <div className="absolute -right-10 bottom-1/4 text-8xl font-bold text-white/5 select-none">1212</div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-20 motion-safe:animate-fade-in-up">
            <span className="inline-block text-gold-300 text-lg font-medium mb-3 tracking-wider">DIVINE GUIDANCE FOR YOU</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Unlock Your Personal <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-400">1212</span> Message
            </h2>
            
            <p className="text-xl md:text-2xl mb-10 text-white/80 max-w-3xl mx-auto leading-relaxed">
              The number 1212 appears in your life for a reason. Discover its unique message tailored 
              specifically to your journey and spiritual path.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 motion-safe:animate-fade-in-up delay-500">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 border border-white/10 group">
              <div className="bg-gradient-to-br from-gold-300 to-gold-400 text-primary-900 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Personal Life Analysis</h3>
              <p className="text-white/70 leading-relaxed">
                Receive a comprehensive analysis of how 1212 connects to your birth date, name numerology, 
                and current life phase to reveal its specific guidance for you.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 border border-white/10 group">
              <div className="bg-gradient-to-br from-gold-300 to-gold-400 text-primary-900 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                  <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                  <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Multi-Dimensional Insights</h3>
              <p className="text-white/70 leading-relaxed">
                Explore in-depth interpretations across love, career, spirituality, and personal growth 
                areas with expert guidance customized to your unique circumstances.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 border border-white/10 group">
              <div className="bg-gradient-to-br from-gold-300 to-gold-400 text-primary-900 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Practical Action Guide</h3>
              <p className="text-white/70 leading-relaxed">
                Receive concrete, actionable steps and practices to align with 1212's energy, 
                including meditations, affirmations, and life changes to amplify its positive influence.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center motion-safe:animate-fade-in-up delay-700">
            <Link 
              href="/personal-reading" 
              className="bg-gradient-to-r from-gold-300 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-primary-900 font-bold text-lg px-10 py-5 rounded-full shadow-[0_20px_35px_-15px_rgba(253,224,71,0.5)] hover:shadow-[0_20px_35px_-10px_rgba(253,224,71,0.65)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="flex items-center">
                <span>Get Your Personalized Reading</span>
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </span>
            </Link>
            
            <Link 
              href="/meaning" 
              className="bg-transparent backdrop-blur-sm border-2 border-white/30 hover:border-gold-300 text-white hover:text-gold-300 font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore 1212 Meanings
            </Link>
          </div>
          
          <div className="mt-16 text-center motion-safe:animate-fade-in-up delay-1000">
            <div className="inline-flex items-center text-gold-300">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span>Over 10,000 accurate readings delivered to seekers worldwide</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary-900 to-transparent z-5"></div>
    </section>
  );
};

export default CallToActionSection; 