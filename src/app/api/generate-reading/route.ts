import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Use API key directly as a workaround for environment issues
const API_KEY = 'AIzaSyDgACA4ZcxR00uJhIqrGsUYJvlHJS9LJgg';

export async function POST(request: NextRequest) {
  console.log('Generate reading API called');
  
  try {
    const { formData } = await request.json();
    console.log('Form data received:', formData.readingType);
    
    // Initialize Gemini API
    const genAI = new GoogleGenerativeAI(API_KEY);
    
    // Get the model
    console.log('Initializing Gemini model...');
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    // Create a personalized prompt based on the user's inputs
    const personalizedPrompt = generatePersonalizedPrompt(formData);
    
    // Generate content
    console.log('Sending request to Gemini API...');
    try {
      // Log prompt length for debugging
      console.log('Prompt length:', personalizedPrompt.length, 'characters');
      
      // Generate content with safety settings and temperature
      const generationConfig = {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 8192,
      };
      
      const result = await model.generateContent({
        contents: [{ role: 'user', parts: [{ text: personalizedPrompt }]}],
        generationConfig,
      });
      
      const response = await result.response;
      const reading = response.text();
      
      console.log('Received response from Gemini API');
      
      return NextResponse.json({ 
        success: true, 
        reading: reading 
      });
    } catch (genaiError) {
      console.error('Error with Gemini API details:', JSON.stringify(genaiError, null, 2));
      
      // Fallback to mock reading if API fails
      console.log('Falling back to mock reading due to API error');
      const mockReading = generateMockReading(formData);
      
      return NextResponse.json({ 
        success: true, 
        reading: mockReading,
        isMock: true
      });
    }
  } catch (error) {
    console.error('Error generating reading:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to generate reading' },
      { status: 500 }
    );
  }
}

// Function to generate a personalized prompt for the LLM
function generatePersonalizedPrompt(formData: any) {
  const { readingType, age, gender, name, additionalInfo } = formData;
  
  // Create a shorter, more focused prompt
  let prompt = `As an angel number interpreter specializing in 1212, create a personalized reading for a ${age}-year-old ${gender.toLowerCase()} named ${name || "the seeker"} focused on ${readingType}.

${additionalInfo ? `Context from the seeker: "${additionalInfo}"` : ""}

Create a comprehensive reading with these sections:
1. Title - Create an engaging title for this reading
2. Symbolism - Explain 1212's meaning in relation to their situation
3. Personal Message - Personalized interpretation of what 1212 means for them now
4. Challenges - What challenges they may be facing
5. Practices - Specific spiritual practices to help them (at least 4)
6. Recommendations - Practical advice tailored to their situation (at least 6)
7. Affirmations - Personalized affirmations for their journey
8. Action Steps - Clear, actionable steps they can take

Format using markdown with headings, bullet points, and emphasis where appropriate. Make the reading feel personally tailored to this individual with practical advice they can immediately implement.`;
  
  return prompt;
}

// Function to generate a mock reading (for development purposes and as fallback)
function generateMockReading(formData: any) {
  const readingTypes: Record<string, any> = {
    love: {
      title: "Awakening Divine Love: Your 1212 Journey",
      content: `The appearance of 1212 in your love life is particularly significant right now. As a ${formData.age}-year-old ${formData.gender.toLowerCase()}, you're at a crucial point where divine energies are aligning to bring harmony to your relationships. This number signifies balance between giving and receiving love, which is especially important at your current life stage.
      
The number 1 in this sequence represents your individual power and self-worth, while the number 2 symbolizes partnerships and duality. Their repeated appearance indicates you're being called to find a sacred balance between independence and connection in your relationships.`,
      practices: [
        "**Heart Chakra Meditation**: Spend 12 minutes daily with your hands over your heart, breathing into any tension while visualizing a healing green light expanding with each breath. Focus specifically on feelings of self-love first, then gradually extend this love outward.",
        "**Relationship Pattern Inventory**: Take time to journal about your past five relationships, identifying specific patterns and writing down the lessons each one taught you about yourself. Look for recurring themes that may be appearing again in your current situation.",
        "**Forgiveness Ritual**: Create a private ritual where you write letters to anyone you need to forgive (including yourself), then safely burn or bury them to symbolically release emotional blockages to receiving love.",
        "**Boundary Setting Practice**: Identify three areas where you tend to compromise your needs in relationships. Practice expressing these boundaries clearly and compassionately with someone you trust.",
        "**Authentic Expression Exercise**: Each day for 12 days, share one genuine feeling or need with someone close to you, focusing on honesty without attachment to how they respond."
      ],
      recommendations: [
        "Pay special attention to relationships with people born on the 1st, 2nd, or 12th of any month, as they may carry important messages for you right now.",
        "Notice any recurring themes in your dreams about relationships, as your subconscious is trying to communicate important insights.",
        "Consider how your relationship patterns may be reflecting your relationship with yourself, and focus on healing any self-worth issues that arise.",
        "Look for opportunities to balance giving and receiving in your relationships, especially if you tend to lean heavily toward one or the other.",
        "Trust your intuition about relationship decisions in the coming weeks, as the energy of 1212 is enhancing your inner guidance.",
        "Create a sacred relationship altar in your home with symbols of balanced partnership to help manifest healthier connections.",
        "Consider working with rose quartz or green aventurine crystals to support heart healing during this significant period.",
        "Practice seeing challenging relationship situations as opportunities for spiritual growth rather than obstacles."
      ]
    },
    career: {
      title: "Divine Purpose Activation: Your 1212 Career Path",
      content: `With angel number 1212 appearing in your professional life, you're receiving clear guidance that your career path is aligning with your soul's purpose. At ${formData.age}, you're entering a phase where your unique talents can create both material abundance and spiritual fulfillment.
      
The repeated sequence of 1 and 2 indicates you're being called to balance leadership and initiative (1) with cooperation and partnership (2). This isn't about choosing between being a leader or team player, but rather embodying both energies skillfully depending on what each situation requires.`,
      practices: [
        "**Purpose Mapping Exercise**: Create a visual map connecting your natural talents, what brings you joy, what the world needs, and what can provide for you financially. The overlapping center reveals your purpose zone. Spend 30 minutes developing this map with as much specific detail as possible.",
        "**Energy Tracking Journal**: For the next 14 days, rate your energy level (1-10) after each work task or activity. Analyze which specifically energize rather than drain you—these are clues to your authentic path.",
        "**Intuitive Career Meditation**: In a quiet space, spend 20 minutes in meditation asking to be shown images or feelings of yourself doing work that aligns with your highest purpose. Journal immediately afterward, noting every detail without judgment.",
        "**Bold Action Challenge**: Identify one action that would move you toward more meaningful work and commit to taking it within the next 12 days. Break this action down into three small steps if it feels overwhelming.",
        "**Morning Intention Ritual**: Before beginning each workday, spend 5 minutes setting an intention for how you wish to be of service through your work that day. Focus on the impact you wish to have rather than specific tasks."
      ],
      recommendations: [
        "Pay special attention to ideas that combine two different skills or fields you enjoy—the 1212 pattern suggests innovation through combining seemingly separate domains.",
        "Notice potential mentors or collaborators who embody both leadership and service qualities, as they may play significant roles in your career evolution.",
        "Create specific boundaries that protect your creative energy while still allowing effective collaboration, such as designated creation time without interruptions.",
        "Trust unusual or unexpected career opportunities that appear in the next few months, as they may contain seeds of your true purpose.",
        "Consider how your unique life experiences at age ${formData.age} have prepared you for work that may not follow conventional paths.",
        "Explore how technology and spiritual values might combine in your work to create something innovative.",
        "Pay attention to career ideas that come to you at 12:12 (both AM and PM), as your intuition is heightened at these times.",
        "Look for ways to teach or share your knowledge with others, as the number 2 in 1212 emphasizes connection and mutual support."
      ]
    },
    wealth: {
      title: "Abundance Manifestation Blueprint: Your 1212 Prosperity Path",
      content: `The angel number 1212 appearing in your life is a powerful message about abundance. For a ${formData.gender.toLowerCase()} of ${formData.age}, this indicates you're entering a cycle where your thoughts manifest quickly into material reality, especially regarding finances.
      
This number sequence reveals that you're being called to achieve greater balance between actively creating wealth (the energy of 1) and being receptive to unexpected abundance (the energy of 2). Many people focus only on action but forget that allowing and receiving are equally important parts of the manifestation equation.`,
      practices: [
        "**Prosperity Visualization**: Spend 12 minutes each morning in detailed visualization of yourself surrounded by abundant resources, feeling the emotions of security and generosity this creates. Focus especially on how this abundance benefits not just you but others around you.",
        "**Belief Transformation Work**: Identify your top three limiting beliefs about money (e.g., 'Money is hard to earn') by examining your family's attitudes about wealth. Create and repeat empowering alternatives daily (e.g., 'Money flows easily to me when I follow my joy').",
        "**Gratitude Prosperity Journal**: Each night, write down specifically 12 things you're grateful for regarding your current financial situation, no matter how small. This shifts your focus from lack to abundance and accelerates manifestation.",
        "**Energy Exchange Audit**: Review how you're currently exchanging your energy for resources. Are you being adequately compensated for your time and expertise? Create a plan to adjust any imbalances within the next 30 days.",
        "**Abundance Affirmation Walk**: Take a 20-minute walk while repeating prosperity affirmations that align with your new abundance consciousness. The rhythmic movement helps integrate these beliefs into your body."
      ],
      recommendations: [
        "Pay attention to any repeated thoughts about money, as these are currently programming your financial reality more powerfully than usual.",
        "Look for potential passive income opportunities that may come through unexpected channels, especially those involving the number 12.",
        "Balance long-term financial security planning with present moment enjoyment of your resources, as 1212 indicates both are necessary.",
        "Examine how you can use your resources to support causes that resonate with your soul's purpose, creating a positive energy flow.",
        "Notice if you have resistance to receiving financial support or opportunities from others, as this may be blocking your abundance.",
        "Be particularly mindful of keeping your thoughts positive when dealing with bills, financial statements, or conversations about money.",
        "Consider creating a 'prosperity corner' in your home with symbols of abundance that resonate with you personally.",
        "Explore the concept of 'energy leaks' in your financial life—places where you spend money that don't truly align with your values or bring you joy."
      ]
    },
    personal: {
      title: "Sacred Integration: Your 1212 Personal Transformation Journey",
      content: `Angel number 1212 has appeared at this crucial stage of your personal development. As a ${formData.age}-year-old ${formData.gender.toLowerCase()}, you're being called to balance your internal polarities and integrate the wisdom you've gained so far on your journey.
      
This powerful number sequence is a cosmic signal that you're standing at an important threshold of transformation. The repeated pattern of 1's and 2's indicates you're being called to balance assertiveness with receptivity, action with reflection, and independence with interconnection—all essential for your next stage of growth.`,
      practices: [
        "**Shadow Integration Journal**: Create a dedicated journal for exploring aspects of yourself you've rejected or hidden. Spend 20 minutes three times weekly writing from the perspective of these disowned parts with compassion and curiosity.",
        "**Mindful Presence Practice**: Set 12 alarms throughout your day as reminders to pause, take three deep breaths, and fully experience whatever is happening in that moment without judgment. Notice patterns in when you're most likely to be on autopilot.",
        "**Morning & Evening Ritual Creation**: Develop personal rituals to bookend your day—begin with practices that set your highest intention (meditation, journaling, or movement) and end with reflection and gratitude. Be consistent for at least 21 days.",
        "**Authentic Expression Challenge**: Identify one area where you've been hiding your true self. Take a small step toward more honest self-expression each day for 12 days, noting any fears that arise and moving through them.",
        "**Polarity Integration Meditation**: For 15 minutes daily, meditate on balancing opposing aspects of yourself—strength/vulnerability, logic/intuition, giving/receiving. Visualize these qualities as complementary rather than contradictory."
      ],
      recommendations: [
        "Pay particular attention to situations that trigger strong emotional responses, as these highlight areas where healing and integration are needed.",
        "Examine your relationship with time—notice if you tend to sacrifice the present for the future or ignore long-term vision for immediate gratification.",
        "When making decisions, practice using both analytical thinking and intuitive knowing, giving equal weight to each approach.",
        "Notice recurring patterns throughout your life, as these contain important clues about your soul's evolution and current lessons.",
        "Consider how your experiences at age ${formData.age} represent a specific phase in your spiritual development, with unique opportunities for growth.",
        "Look for ways to bring more play and creativity into your daily routine, as these activities help integrate different aspects of yourself.",
        "Pay attention to synchronicities involving the numbers 1, 2, or 12, as these may contain personalized guidance for your journey.",
        "Explore how you might be resisting certain aspects of your authentic self due to cultural or family conditioning, and experiment with releasing these limitations."
      ]
    },
    relationships: {
      title: "Sacred Connections: Your 1212 Relationship Evolution",
      content: `The 1212 angel number appearing in your life brings important messages about your interpersonal connections beyond romantic relationships. At ${formData.age}, you're being guided to create more authentic and balanced connections with everyone in your social sphere.
      
This powerful number sequence indicates you're at a significant point of evolution in how you relate to others. The repeated pattern of 1's and 2's suggests you're being called to find the sacred balance between maintaining healthy boundaries (the energy of 1) and fostering genuine connection (the energy of 2).`,
      practices: [
        "**Active Listening Meditation**: In conversations this week, practice fully focusing on the other person without planning your response. Notice physical sensations in your body when you're truly present versus when your mind wanders.",
        "**Energy Boundary Visualization**: Each morning, spend 5 minutes visualizing a permeable golden sphere around you that allows love and positive energy to flow in and out while protecting your essence from energy that doesn't serve you.",
        "**Relationship Circle Mapping**: Draw concentric circles representing different levels of intimacy, then thoughtfully place each relationship where it belongs currently. Consider if any adjustments would better honor your energy and authentic connections.",
        "**Authenticity Practice**: Identify one relationship where you tend to hold back your truth. Commit to expressing one honest thought or feeling per interaction, starting with lower-risk truths and gradually building to deeper authenticity.",
        "**Relationship Energy Inventory**: List your five most significant current relationships. For each, assess: Does this connection predominantly energize or deplete you? What specific quality of interaction creates this effect? Make notes on potential adjustments."
      ],
      recommendations: [
        "Evaluate which relationships currently energize you and which deplete you, as this awareness is crucial for your next stage of growth.",
        "Notice recurring patterns in your interactions, especially situations where you feel your energy being drained, as these contain important lessons.",
        "Examine the balance of giving and receiving in your relationships, adjusting where necessary to create greater reciprocity.",
        "Trust the process if certain relationships naturally fall away while new connections form—this is divine orchestration aligning you with your authentic self.",
        "Pay special attention to people who enter your life who were born on the 1st, 2nd, or 12th of any month, as they may bring important lessons.",
        "Practice expressing appreciation for specific qualities in others that you value, focusing on who they are rather than what they do for you.",
        "Notice if you have patterns of people-pleasing or conflict avoidance that prevent authentic relationships, and experiment with new responses.",
        "Consider how your current relationship patterns might reflect early life experiences, and how you can consciously choose new ways of connecting."
      ]
    },
    spiritual: {
      title: "Divine Awakening: Your 1212 Spiritual Activation",
      content: `The appearance of 1212 in your spiritual journey is profoundly significant. For a ${formData.gender.toLowerCase()} of ${formData.age}, this number sequence indicates you're at a gateway of heightened spiritual awareness and divine connection.
      
This powerful angelic code suggests that the veil between dimensions is thinning in your experience, allowing for clearer communication with your higher self, spirit guides, and the angelic realm. The repeated pattern of 1's and 2's indicates a perfect balance of divine masculine energy (action, creation) and divine feminine energy (intuition, receptivity) activating within you.`,
      practices: [
        "**Higher Guidance Meditation**: Spend 12 minutes daily in silent meditation, focusing on your breath while setting the intention to receive guidance from your higher self. Pay special attention to any images, feelings, or insights that arise, and journal about them immediately afterward.",
        "**Synchronicity Journal**: Create a dedicated journal to record meaningful coincidences, repeating numbers, and unusual signs or dreams. Look for patterns in these divine communications and how they might be guiding specific areas of your life.",
        "**Sacred Study Practice**: Identify spiritual teachings that genuinely resonate with your intuition rather than following prescribed paths. Spend 20 minutes daily studying these teachings, noting how they apply to your specific life circumstances.",
        "**Energy Clearing Ritual**: Develop a weekly practice of clearing your energy field through methods that resonate with you, such as sage smudging, salt baths, sound healing, or visualization of violet flame transmutation. Be consistent with timing and intention.",
        "**Nature Communion Practice**: Spend at least 30 minutes weekly in direct contact with nature, preferably barefoot on earth. Open your senses fully to the living intelligence around you, asking to receive specific wisdom for your spiritual journey."
      ],
      recommendations: [
        "Pay special attention to your dreams during this period, as your dream state is becoming a powerful channel for spiritual messages specific to your path.",
        "Focus particularly on heart-centered meditation practices, as your heart chakra serves as a bridge between physical and spiritual dimensions at this time.",
        "Notice any unusual sensations around your crown, third eye, or heart chakras, as these may indicate energetic activations related to developing spiritual gifts.",
        "Examine your concept of time from a spiritual perspective, practicing presence in the eternal now to accelerate your awakening process.",
        "Trust unusual or unexpected spiritual insights that arise, even if they differ from teachings you've previously followed.",
        "Create a sacred space in your home dedicated to your spiritual practice, with symbols that personally resonate with your unique spiritual path.",
        "Pay attention to repeating number sequences beyond 1212, as these may contain additional guidance specific to different aspects of your development.",
        "Consider how your life experiences at age ${formData.age} have prepared you for this specific spiritual awakening, as nothing on your path has been random."
      ]
    }
  };

  const type = formData.readingType as keyof typeof readingTypes;
  const reading = readingTypes[type] || readingTypes.personal;
  
  const personalInfo = formData.additionalInfo 
    ? `\n\nI sense that your recent experiences with "${formData.additionalInfo}" are directly connected to the 1212 energy entering your life. This situation is not random but is serving as a catalyst for transformation in exactly the areas you need most right now. The angelic realm has orchestrated these circumstances to help you grow through this specific challenge, which contains precisely the lessons your soul needs for its evolution at this time.`
    : '';

  return `
# ${reading.title}

Dear ${formData.name || "Divine Seeker"},

The recurring appearance of 1212 in your life is far from coincidence—it is a sacred message from the divine realm specifically calibrated for your current life journey. This powerful number sequence carries unique significance for you at this pivotal moment.

## The Spiritual Meaning of 1212 in Your Life

Angel number 1212 combines the energies of the numbers 1 and 2, appearing twice to amplify their influence. The number 1 represents new beginnings, independence, and initiative, while 2 symbolizes balance, harmony, and relationships. Together, they create a powerful message about finding equilibrium between individuality and connection.

## Your Personal 1212 Message

${reading.content}${personalInfo}

## Challenges You May Be Facing

The angelic realm recognizes these potential challenges on your path:

* You may be experiencing tension between different aspects of yourself that seem contradictory
* There could be uncertainty about which direction to take at this important crossroads
* You might be struggling to trust your intuition when it conflicts with logical thinking
* There may be a need to release old patterns that once served you but now limit your growth

## Divine Guidance: Spiritual Practices for Transformation

The following practices have been divinely inspired to help you fully embody the 1212 energy in your life:

1. ${reading.practices[0]}
2. ${reading.practices[1]}
3. ${reading.practices[2]}
4. ${reading.practices[3]}
5. ${reading.practices[4]}

## Specific Recommendations for Your Journey

Based on your unique circumstances, here are divinely guided recommendations:

1. ${reading.recommendations[0]}
2. ${reading.recommendations[1]}
3. ${reading.recommendations[2]}
4. ${reading.recommendations[3]}
5. ${reading.recommendations[4]}
6. ${reading.recommendations[5]}
7. ${reading.recommendations[6]}
8. ${reading.recommendations[7]}

## Sacred Affirmations to Align with 1212 Energy

Repeat these affirmations daily, ideally at 12:12, to strengthen your connection with this angel number's vibration:

> *"I trust the divine timing of my journey and embrace each step with courage."*
>
> *"I balance independence and connection in perfect harmony."*
>
> *"My intuition and logic work together to guide me on my highest path."*
>
> *"I release what no longer serves me to make space for new blessings."*
>
> *"I am exactly where I need to be on my soul's journey."*
>
> *"I am open to receiving divine guidance in expected and unexpected ways."*

## Embracing Your Divine Path Forward

Trust that seeing 1212 repeatedly is celestial confirmation that you are being divinely guided and supported. This number sequence is appearing as reassurance that even during challenges, you are exactly where you need to be on your soul's journey.

In the coming weeks, pay special attention to thoughts or ideas that come to you around 12:12 (both AM and PM), as the angelic energy is particularly strong at these times. Also notice any dreams involving the number 12 or patterns of two, as these contain additional guidance for you.

Remember that you are never alone on this journey. Your angels, spirit guides, and higher self are constantly supporting you, sending love and wisdom to light your path.

With divine light and sacred guidance,

**Your Angel Number 1212 Guide**
  `;
} 