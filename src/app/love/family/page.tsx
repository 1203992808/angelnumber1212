import Image from 'next/image';
import Link from 'next/link';
import { FaUsers, FaArrowRight, FaHome } from 'react-icons/fa';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "1212 Angel Number in Family Relationships | Meaning & Guidance",
  description: "Discover how angel number 1212 influences family relationships, parent-child bonds, and healing family dynamics. Learn the spiritual message behind 1212 in family life.",
  openGraph: {
    title: "1212 Angel Number in Family Relationships | Divine Guidance",
    description: "Explore how angel number 1212 can transform and heal your family relationships with divine guidance.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "1212 Angel Number in Family Relationships",
      },
    ],
  },
};

export default function FamilyRelationshipsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-primary-900/10 to-transparent"></div>
        <div className="absolute top-40 right-0 w-80 h-80 bg-gold-300/10 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto p-6 sm:p-8 relative border-0 before:absolute before:inset-0 before:p-[2px] before:rounded-2xl before:bg-gradient-to-br before:from-accent-500 before:via-mystical-600 before:to-gold-300 before:content-[''] before:-z-10 before:shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/95 to-primary-50/90 backdrop-blur-sm rounded-2xl"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Link href="/love" className="text-primary-600 hover:text-primary-700 transition-colors text-sm font-medium">Love & Relationships</Link>
                <span className="text-gray-400">/</span>
                <span className="text-gray-600 text-sm font-medium">Family Relationships</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-mystical-600 after:absolute after:content-['1212'] after:text-transparent after:bg-clip-text after:bg-gradient-to-r after:from-primary-600 after:to-mystical-600 after:blur-[2px] after:-z-10 after:opacity-70 after:top-0 after:left-0">1212</span> Angel Number in <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-mystical-700 after:absolute after:content-['Family_Relationships'] after:text-transparent after:bg-clip-text after:bg-gradient-to-r after:from-primary-700 after:to-mystical-700 after:blur-[2px] after:-z-10 after:opacity-70 after:top-0 after:left-0">Family Relationships</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
                Angel number 1212 brings powerful messages about harmony, healing, and spiritual growth within family bonds. Discover how
                this divine numerical sequence can transform your family relationships and guide you toward deeper connections.
              </p>
            </div>
            
            {/* Featured image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-5xl mx-auto">
              <Image 
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop" 
                alt="1212 Angel Number Family Relationships Meaning"
                width={1200}
                height={600}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <div className="max-w-3xl">
                  <p className="text-primary-200 text-lg md:text-xl font-medium mb-3">Divine Guidance for Family Bonds</p>
                  <p className="text-white text-base md:text-lg">
                    When angel number 1212 appears in relation to your family life, it signifies a powerful period of transformation
                    and healing. This sacred number brings messages about balance, communication, and ancestral connections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-6">The Divine Significance of 1212 in Family Relationships</h2>
              
              <p className="lead text-xl text-gray-600 mb-8">
                The angel number 1212 combines the energies and vibrations of numbers 1 and 2, each appearing twice to 
                amplify their influence. In the context of family relationships, this numerical pattern carries profound meaning.
              </p>
              
              <div className="bg-primary-50 p-8 rounded-xl my-10 border-l-4 border-primary-500">
                <h3 className="text-2xl font-medium text-gray-900 mb-4">The Balance of 1 and 2 in Family Dynamics</h3>
                <p className="text-gray-700 mb-0">
                  Within family relationships, 1212 represents the perfect harmony between individuality (1) and unity (2). 
                  This divine number reminds us that healthy family systems honor both personal boundaries and deep connection, 
                  creating a nurturing environment where each family member can flourish while maintaining strong bonds.
                </p>
              </div>
              
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Key Messages of 1212 for Family Relationships</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <FaHome className="text-primary-700 text-xl" />
                  </div>
                  <h4 className="text-xl font-medium text-gray-900 mb-3">Healing Family Wounds</h4>
                  <p className="text-gray-600">
                    Angel number 1212 often appears when there's divine support for healing generational patterns and 
                    family wounds. It signals a powerful time to address unresolved issues and transform family dynamics.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <FaUsers className="text-primary-700 text-xl" />
                  </div>
                  <h4 className="text-xl font-medium text-gray-900 mb-3">Balanced Communication</h4>
                  <p className="text-gray-600">
                    The 1-2-1-2 pattern emphasizes balanced communication within family relationships. It encourages 
                    both speaking your truth (1) and listening with empathy (2) to create harmonious family interactions.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-primary-700 w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  </div>
                  <h4 className="text-xl font-medium text-gray-900 mb-3">Spiritual Family Development</h4>
                  <p className="text-gray-600">
                    1212 signifies that your family unit is developing spiritually. This number often appears when family 
                    members are growing together on a soul level or supporting each other's spiritual journeys.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-primary-700 w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h4 className="text-xl font-medium text-gray-900 mb-3">Ancestral Connections</h4>
                  <p className="text-gray-600">
                    When 1212 appears in relation to family, it may indicate ancestral healing and support. Your spiritual 
                    guides and ancestors may be working with you to transform family patterns across generations.
                  </p>
                </div>
              </div>
              
              <h3 className="text-2xl font-medium text-gray-900 mb-4">1212 in Parent-Child Relationships</h3>
              
              <p>
                Angel number 1212 has special significance when it appears in the context of parent-child relationships. 
                It offers divine guidance for nurturing these precious bonds while honoring individual growth and development.
              </p>
              
              <div className="grid grid-cols-1 gap-6 my-8">
                <div className="bg-gradient-to-r from-primary-50 to-mystical-50 p-6 rounded-xl border border-primary-100">
                  <h4 className="text-xl font-medium text-gray-900 mb-3">Balance of Nurturing and Independence</h4>
                  <p className="text-gray-700 mb-0">
                    The 1-2-1-2 pattern reminds parents of the delicate balance between providing nurturing support (2) and 
                    encouraging independence (1). This number often appears when adjustments are needed in how much freedom 
                    or structure is offered to children at their current developmental stage.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-primary-50 to-mystical-50 p-6 rounded-xl border border-primary-100">
                  <h4 className="text-xl font-medium text-gray-900 mb-3">Soul Agreements and Lessons</h4>
                  <p className="text-gray-700 mb-0">
                    Seeing 1212 in relation to your children may indicate that you're navigating important soul agreements and 
                    lessons together. This number reminds parents that children are spiritual beings with their own paths, and 
                    the parent-child relationship is a sacred vehicle for mutual growth and evolution.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-primary-50 to-mystical-50 p-6 rounded-xl border border-primary-100">
                  <h4 className="text-xl font-medium text-gray-900 mb-3">Breaking Generational Patterns</h4>
                  <p className="text-gray-700 mb-0">
                    Angel number 1212 often appears when parents have the opportunity to break unhealthy generational patterns. 
                    It signals divine support for creating new, healthier ways of parenting that differ from what you may have 
                    experienced in your own childhood.
                  </p>
                </div>
              </div>
              
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Healing Sibling Relationships with 1212 Guidance</h3>
              
              <p>
                Sibling relationships can be among our most complex and enduring connections. When 1212 appears in relation to 
                siblings, it offers specific guidance for healing, growth, and transformation.
              </p>
              
              <div className="bg-white p-6 rounded-xl shadow-md my-8 border border-gray-100">
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-700 font-medium">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-1">Honoring Individual Paths</h4>
                      <p className="text-gray-600">
                        The number 1 in 1212 reminds siblings to honor each other's individual journeys. Comparison and competition 
                        can be transformed into mutual respect for each sibling's unique gifts and challenges.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-700 font-medium">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-1">Building Supportive Bonds</h4>
                      <p className="text-gray-600">
                        The number 2 emphasizes harmony and cooperation. When 1212 appears, it may be time to rebuild or strengthen 
                        sibling bonds through compassionate communication and creating new positive shared experiences.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-700 font-medium">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-1">Healing Childhood Dynamics</h4>
                      <p className="text-gray-600">
                        Angel number 1212 often appears when siblings have the opportunity to heal dynamics established in childhood. 
                        It supports having honest conversations about shared experiences and different perspectives.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-700 font-medium">4</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-1">Adult Sibling Relationships</h4>
                      <p className="text-gray-600">
                        As siblings enter adulthood, 1212 encourages creating new, mature relationships based on choice rather than 
                        obligation. This number supports siblings in establishing healthy boundaries while maintaining loving connections.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Practical Guidance for Family Harmony with 1212</h3>
              
              <p>
                When angel number 1212 appears in your family life, here are practical ways to align with its divine guidance:
              </p>
              
              <div className="space-y-8 my-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-700 font-medium">01</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-900 mb-2">Create Family Rituals</h4>
                    <p className="text-gray-600">
                      Establish meaningful rituals that honor both togetherness (2) and individual expression (1). 
                      This might include regular family meetings where each person has dedicated time to share, special 
                      meals that celebrate individual preferences, or ceremonies that mark important transitions.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-700 font-medium">02</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-900 mb-2">Practice Conscious Communication</h4>
                    <p className="text-gray-600">
                      The 1212 pattern encourages balanced communication where each family member can express their truth 
                      and be deeply heard. Establish communication practices like speaking circles, active listening exercises, 
                      or regular check-ins that create space for authentic sharing.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-700 font-medium">03</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-900 mb-2">Honor Individual Paths</h4>
                    <p className="text-gray-600">
                      The number 1 in 1212 reminds family members to respect each other's unique journeys. Create a family 
                      culture that celebrates differences, supports individual interests, and allows each person to grow in 
                      their own way while maintaining loving connection.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-700 font-medium">04</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-900 mb-2">Explore Family Healing</h4>
                    <p className="text-gray-600">
                      When 1212 appears, it often signals an opportunity for deep family healing. Consider family therapy, 
                      healing rituals, forgiveness practices, or ancestral work that can transform old patterns and create 
                      new foundations for your family system.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-primary-50 to-mystical-50 p-8 rounded-xl my-10 border border-primary-100">
                <h3 className="text-2xl font-medium text-gray-900 mb-4">1212 Family Affirmations</h3>
                <p className="text-gray-700 mb-6">
                  Work with these affirmations when 1212 appears in your family life:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary-600">✦</span>
                    <span className="text-gray-700">"Our family honors both individuality and deep connection."</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-600">✦</span>
                    <span className="text-gray-700">"We are healing generational patterns with divine support."</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-600">✦</span>
                    <span className="text-gray-700">"Each family member's unique journey is respected and celebrated."</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-600">✦</span>
                    <span className="text-gray-700">"Our family communication is balanced between speaking truth and listening deeply."</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-600">✦</span>
                    <span className="text-gray-700">"We are creating new, healthy patterns for future generations."</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-600">✦</span>
                    <span className="text-gray-700">"Our family bonds are strengthening through both challenges and celebrations."</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-50 to-mystical-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-6">Discover Your Family's 1212 Message</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              The appearance of 1212 in your family life carries unique significance based on your specific family dynamics and journey.
              Receive a personalized reading to understand what this powerful angel number means for your family relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/personal-reading"
                className="inline-block bg-gradient-to-r from-primary-600 to-mystical-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border border-white/10"
              >
                <span className="flex items-center justify-center">
                  <span>Get Your Family Reading</span>
                  <FaArrowRight className="ml-2" />
                </span>
              </Link>
              <Link
                href="/love"
                className="inline-block bg-white text-primary-600 font-bold py-4 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-primary-100"
              >
                <span className="flex items-center justify-center">
                  <span>Explore More Love Meanings</span>
                  <FaArrowRight className="ml-2" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 