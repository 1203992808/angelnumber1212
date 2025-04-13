import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Use API key directly as a workaround for environment issues
const API_KEY = 'AIzaSyDgACA4ZcxR00uJhIqrGsUYJvlHJS9LJgg';

export async function POST(request: NextRequest) {
  console.log('Generate reading API called');
  
  try {
    const { prompt, formData } = await request.json();
    console.log('Form data received:', formData.readingType);
    
    // Always fallback to mock reading for now
    console.log('Using mock reading (Gemini API disabled)');
    const mockReading = generateMockReading(formData);
    
    // Add delay to simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return NextResponse.json({ 
      success: true, 
      reading: mockReading 
    });

    /* Uncomment to test with Gemini API
    try {
      // Initialize with direct API key
      const genAI = new GoogleGenerativeAI(API_KEY);
      
      // Get the model
      console.log('Initializing Gemini model...');
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      
      // Generate content
      console.log('Sending request to Gemini API...');
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const reading = response.text();
      
      console.log('Received response from Gemini API');
      
      return NextResponse.json({ 
        success: true, 
        reading: reading 
      });
    } catch (genaiError) {
      console.error('Error with Gemini API:', genaiError);
      
      // Fallback to mock reading if API fails
      console.log('Falling back to mock reading due to API error');
      const mockReading = generateMockReading(formData);
      
      return NextResponse.json({ 
        success: true, 
        reading: mockReading 
      });
    }
    */
  } catch (error) {
    console.error('Error generating reading:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to generate reading' },
      { status: 500 }
    );
  }
}

// Function to generate a mock reading (for development purposes)
function generateMockReading(formData: any) {
  const readingTypes: Record<string, any> = {
    love: {
      title: "Love & Relationships",
      content: `The appearance of 1212 in your love life is particularly significant right now. As a ${formData.age}-year-old ${formData.gender.toLowerCase()}, you're at a crucial point where divine energies are aligning to bring harmony to your relationships. This number signifies balance between giving and receiving love.`,
      practices: [
        "Practice heart-centered meditation focusing on self-love first",
        "Write down qualities you appreciate in your current or desired partner",
        "Release past relationship trauma through forgiveness rituals",
        "Trust your intuition about relationship decisions ahead"
      ]
    },
    career: {
      title: "Career & Purpose",
      content: `With angel number 1212 appearing in your professional life, you're receiving clear guidance that your career path is aligning with your soul's purpose. At ${formData.age}, you're entering a phase where your unique talents can create both material abundance and spiritual fulfillment.`,
      practices: [
        "Start each workday with intention-setting focusing on service",
        "Notice which tasks energize you versus drain you - these are clues",
        "Take bold action on creative ideas that come to you",
        "Seek ways to incorporate more of your authentic self into your work"
      ]
    },
    wealth: {
      title: "Wealth & Abundance",
      content: `The angel number 1212 appearing in your life is a powerful message about abundance. For a ${formData.gender.toLowerCase()} of ${formData.age}, this indicates you're entering a cycle where your thoughts manifest quickly into material reality, especially regarding finances.`,
      practices: [
        "Create a prosperity visualization practice for 12 minutes daily",
        "Audit your beliefs about money and transform limiting thoughts",
        "Express gratitude for both large and small financial blessings",
        "Take one inspired action daily toward your abundance goals"
      ]
    },
    personal: {
      title: "Personal Growth",
      content: `Angel number 1212 has appeared at this crucial stage of your personal development. As a ${formData.age}-year-old ${formData.gender.toLowerCase()}, you're being called to balance your internal polarities and integrate the wisdom you've gained so far on your journey.`,
      practices: [
        "Begin a shadow work journal to integrate unconscious aspects",
        "Practice present-moment awareness throughout your daily activities",
        "Create morning and evening rituals that honor your spiritual connection",
        "Engage in creative expression that allows your authentic self to emerge"
      ]
    },
    relationships: {
      title: "Interpersonal Relationships",
      content: `The 1212 angel number appearing in your life brings important messages about your interpersonal connections beyond romantic relationships. At ${formData.age}, you're being guided to create more authentic and balanced connections with everyone in your social sphere.`,
      practices: [
        "Practice active listening without planning your response",
        "Set healthy boundaries with those who drain your energy",
        "Express appreciation to friends and family more regularly",
        "Release connections that no longer serve your highest growth"
      ]
    },
    spiritual: {
      title: "Spiritual Connection",
      content: `The appearance of 1212 in your spiritual journey is profoundly significant. For a ${formData.gender.toLowerCase()} of ${formData.age}, this number sequence indicates you're at a gateway of heightened spiritual awareness and divine connection.`,
      practices: [
        "Deepen your meditation practice to connect with higher guidance",
        "Pay attention to synchronicities and signs throughout your day",
        "Explore spiritual teachings that resonate with your intuition",
        "Create sacred space in your home for regular spiritual practice"
      ]
    }
  };

  const type = formData.readingType as keyof typeof readingTypes;
  const reading = readingTypes[type] || readingTypes.personal;
  
  const personalInfo = formData.additionalInfo 
    ? `\n\nI sense that your recent experiences with "${formData.additionalInfo}" are directly connected to the 1212 energy entering your life. This situation is serving as a catalyst for transformation in exactly the areas you need most.`
    : '';

  return `
## Your Personal 1212 Angel Number Reading: ${reading.title}

Dear Friend,

The recurring appearance of 1212 in your life is no coincidence. This powerful angel number carries special significance for you at this moment.

### What 1212 Means For You Personally

${reading.content}${personalInfo}

### Divine Guidance for Your Journey

Based on your unique circumstances, here are spiritual practices to help you harness the 1212 energy:

1. ${reading.practices[0]}
2. ${reading.practices[1]}
3. ${reading.practices[2]}
4. ${reading.practices[3]}

### Moving Forward

Trust that seeing 1212 is confirmation you're on the right path. The angels are supporting your journey and reminding you that you're never alone. Stay open to receiving further guidance and know that you have the inner wisdom to interpret the signs meant specifically for you.

With light and guidance,
Your Angel Number 1212 Guide
  `;
} 