"use client";

import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Michael Chen',
    location: 'New York',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&auto=format&fit=crop',
    quote: 'Since I started paying attention to the number 1212, my career has taken an incredible turn. Through this website\'s interpretations, I\'ve come to understand the guidance this number has for me.',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    location: 'London',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=300&auto=format&fit=crop',
    quote: 'I kept seeing 12:12 on my phone, and this website helped me understand it wasn\'t a coincidence. It gave me the courage to end an unhealthy relationship, and now I\'ve found my twin flame.',
  },
  {
    id: 3,
    name: 'David Rodriguez',
    location: 'Los Angeles',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=300&auto=format&fit=crop',
    quote: 'The personalized reading service was incredibly accurate! It revealed my special connection with the 1212 number and provided clear direction for my spiritual practice.',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Their <span className="text-indigo-700">1212</span> Experiences
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how others have transformed their lives by understanding the messages of angel number 1212.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <svg className="h-8 w-8 text-indigo-300 mb-2" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-600 italic">{testimonial.quote}</p>
              </div>
              
              <div className="flex mt-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star} 
                    className="h-5 w-5 text-yellow-500" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="/personal-reading" 
            className="inline-block bg-white text-indigo-700 border-2 border-indigo-700 hover:bg-indigo-700 hover:text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Get Your Personal Reading
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 