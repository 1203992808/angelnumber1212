"use client";

import { useState } from "react";
import Image from "next/image";
import ReadingForm from "./ReadingForm";
import ReadingResult from "./ReadingResult";
import { ReadingFormData } from "./ReadingForm";

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
      // Call the API to get a personalized reading
      const response = await fetch('/api/generate-reading', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formData
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.isMock) {
        console.log('Warning: Received mock data instead of AI-generated reading');
      }
      
      setReadingResponse({
        reading: data.reading,
        loading: false,
        error: null,
      });
    } catch (error) {
      console.error("Error generating reading:", error);
      setReadingResponse({
        reading: "",
        loading: false,
        error: "We encountered an issue generating your reading. Please try again later.",
      });
    }
  };

  // Function to generate a mock reading (for development purposes)
  const generateMockReading = (formData: ReadingFormData) => {
    const readingTypes: Record<string, any> = {
      love: {
        title: "Love & Relationships",
        symbolism: "The angel number 1212 combines the energies of 1 (new beginnings, initiative) and 2 (balance, partnerships) in a powerful sequence. The repetition amplifies these energies, creating a potent message about balance in relationships and the start of significant romantic developments.",
        content: `The appearance of 1212 in your love life is profoundly significant at this moment in your journey. As a ${formData.age}-year-old ${formData.gender.toLowerCase()}, you're standing at an important threshold where cosmic forces are actively working to bring greater harmony and depth to your relationships.

This number sequence signals that you're being divinely guided to create greater balance between giving and receiving love. The repeated pattern of 1 and 2 suggests you may have been focusing too much on either your own needs or those of others—now is the time to find that sacred middle ground.

The number 1 in this sequence represents your individual power and the importance of maintaining your authentic self within relationships, while the number 2 signifies partnership and the dance of connection. Together, they suggest that true intimacy comes when you can fully be yourself while deeply connecting with another.

At ${formData.age}, you're in a unique position to integrate lessons from past relationship experiences with new wisdom being offered to you now. Your soul is ready for relationships that honor both your independence and your desire for meaningful connection.`,
        challenges: [
          "You may struggle with vulnerability, fearing that opening your heart could lead to pain",
          "There might be lingering patterns from past relationships that need healing",
          "You could be experiencing confusion about whether to stay or leave a current relationship",
          "You may be attracting partners who reflect unresolved aspects of yourself"
        ],
        practices: [
          "Heart Chakra Meditation: Spend 12 minutes daily with your hands over your heart, breathing into any tension or pain while visualizing a green light expanding with each breath",
          "Mirror Work: Each morning, look into your eyes in the mirror and say 'I am worthy of deep, authentic love' as you connect with your higher self",
          "Relationship Inventory: Journal about your past five relationships, identifying patterns and writing down what each one taught you about yourself",
          "Forgiveness Ritual: Write letters (you don't need to send) to anyone you need to forgive, including yourself, to release emotional blockages to love"
        ],
        affirmations: [
          "I am open to giving and receiving love in perfect balance",
          "My relationships reflect my inner harmony and self-worth",
          "I attract partners who honor my authentic self",
          "I release past patterns that no longer serve my highest good in relationships"
        ],
        specific_advice: `For someone of your age and current life situation, it's essential to recognize that seeing 1212 indicates you're being called to evolve how you approach relationships. This isn't about finding the perfect partner, but becoming the balanced person who can participate in a healthy partnership.

The angels are guiding you to trust your intuition about relationship decisions in the coming months. When faced with choices, quiet your mind and listen to the subtle guidance that comes through feelings rather than thoughts.

Pay particular attention to recurring themes in your dreams and any synchronicities involving couples or pairs—these are divine signposts guiding you toward balance. Also notice any people who enter your life who were born on the 1st, 2nd, or 12th of any month, as they may carry important messages for you.`,
        deeper_insight: `
At this profound juncture in your life's journey, the angel number 1212 is revealing deeper truths about your approach to love and intimate connections. The divine message being communicated specifically to you now involves the sacred integration of self-love with partnership love—a balance many souls struggle to achieve.

The recurring appearance of this number in your awareness field suggests that your spiritual guides recognize you've been working through significant relationship lessons in this lifetime. At age ${formData.age}, you've developed certain patterns in how you give and receive love that were necessary for your earlier soul development, but now require evolution to match your expanding consciousness.

What's especially significant about seeing 1212 now is that it indicates you're being prepared for a relationship that will serve as a spiritual catalyst rather than just an emotional or physical partnership. This connection—whether with a current partner or someone yet to enter your life—will challenge you to grow beyond comfortable patterns and embrace a higher octave of love consciousness.

Your guides are showing that you've been operating from a particular "love blueprint" that was formed through your early experiences and past relationships. This blueprint contains both wisdom and limitations. The appearance of 1212 signals that you're ready to redraft this blueprint to incorporate greater authenticity, vulnerability, and spiritual connection.`,
        practical_steps: `
### 7-Day Love Consciousness Practice
1. **Day 1: Relationship Archaeology** - Spend 30 minutes journaling about your earliest memories of love and how these might be influencing your current relationships. Look for recurring themes across different relationships.

2. **Day 2: Heart Chakra Healing** - Practice a 20-minute meditation focusing on your heart center. Visualize any pain or old wounds being dissolved by emerald green light, allowing fresh energy to circulate through this important energy center.

3. **Day 3: Self-Love Inventory** - Create two detailed lists: "Ways I Show Love to Others" and "Ways I Show Love to Myself." Notice any imbalances and commit to three specific actions to balance these energies.

4. **Day 4: Communication Upgrade** - Identify one relationship where communication feels challenging. Write down three specific phrases you can use to express your needs more authentically while maintaining connection.

5. **Day 5: Energetic Decluttering** - Symbolically release attachments to past relationships by writing names on small papers and burning them safely (or dissolving in water), setting the intention to transform these energies.

6. **Day 6: Boundary Reinforcement** - Practice saying "no" to a small request without explanation or apology, just to exercise your boundary-setting muscles. Notice how it feels in your body.

7. **Day 7: Attraction Alignment** - Create a detailed visualization of the quality of relationships you wish to attract, focusing on how these relationships feel rather than specific characteristics of the people involved.`,
        timeline_guidance: `
### Divine Timing in Your Relationship Journey

The angel number 1212 carries specific timing information for your relationship development:

**Next 12 Days:** You'll likely notice subtle signs pointing toward relationship patterns that need attention. Pay particular attention to recurring thoughts or dreams about relationships during this window.

**Next 12 Weeks:** This period offers a powerful opportunity for healing relationship wounds from the past. Old connections may resurface briefly, not necessarily for reconciliation, but for closure and integration of lessons.

**Next 12 Months:** The foundation you build during this year will set the stage for significantly deeper connections. This is a divinely orchestrated preparation phase—each relationship experience is calibrating your energy to align with connections that match your authentic vibration.

During the ${currentDate.getMonth() < 6 ? "latter" : "early"} part of this year, be especially attentive to "coincidental" meetings, as these may contain important relationship catalysts designed to accelerate your growth.

Remember that angel number 1212 signifies perfect timing—trust that relationships are developing at precisely the right pace for your highest evolution, even when progress seems slow or challenging.`
      },
      career: {
        title: "Career & Purpose",
        symbolism: "In 1212, the number 1 represents leadership, pioneering energy, and new beginnings, while 2 symbolizes cooperation, diplomacy, and finding balance. This repeating sequence indicates a powerful alignment between your individual talents (1) and how they can serve others in harmony (2).",
        content: `With angel number 1212 appearing repeatedly in your professional life, you're receiving clear cosmic confirmation that your career path is beginning to align with your soul's true purpose. At ${formData.age}, you're entering a significant phase where your unique skills and authentic self-expression can create both material abundance and profound spiritual fulfillment.

The double appearance of both 1 and 2 indicates that you're being called to balance individual initiative with collaboration. This is not about choosing between being a leader or a team player—it's about embodying both energies skillfully depending on what each situation requires.

There's a strong indication that you may soon find yourself at a career crossroads where listening to your intuition will be crucial. The angelic realm is signaling that opportunities aligned with your soul purpose are either present now or will manifest soon, but you must be attuned to recognize them.

Your unique combination of talents that you may have previously thought were unrelated are actually meant to come together in an innovative way. What seems like a diverse and perhaps scattered background is actually perfect preparation for the work you're meant to do.`,
        challenges: [
          "You may feel pulled between financial security and following your passion",
          "There could be lingering self-doubt about whether you're qualified for your true calling",
          "You might be struggling to recognize your most authentic gifts because they come naturally to you",
          "There may be fear around being visible or taking leadership in your field"
        ],
        practices: [
          "Purpose Mapping: Create a visual map connecting your natural talents, what brings you joy, what the world needs, and what can provide for you financially—where these overlap lies your purpose",
          "Energy Tracking: For two weeks, rate your energy level after each work task from 1-10, then analyze which activities consistently energize rather than drain you",
          "Intuitive Career Meditation: In a quiet state, ask to be shown images of yourself doing work that aligns with your highest purpose, then journal what you see without judging it",
          "Bold Action Challenge: Identify one action that would move you toward more meaningful work and commit to taking it within the next 12 days"
        ],
        affirmations: [
          "I trust the divine timing of my career unfolding",
          "My unique gifts are needed in the world right now",
          "I balance ambition with service in perfect harmony",
          "Each step I take aligns me more closely with my soul's purpose"
        ],
        specific_advice: `For someone at ${formData.age}, it's critical to understand that the 1212 angel number appearing now is signaling that the seeds you've planted in your career are ready to bear fruit, but may need to be expressed in a new or evolved form.

Pay special attention to any ideas or opportunities that combine two different fields or skill sets—the number pattern 1212 suggests innovation through combining seemingly separate domains. Also, be alert to potential mentors or collaborators who cross your path, especially those who embody both leadership and service.

The angels are guiding you to create systems or boundaries that protect your creative energy while still allowing you to collaborate effectively. Consider establishing specific days or times dedicated solely to your most meaningful work, as this will accelerate your alignment with your purpose.`,
        deeper_insight: `
The recurring appearance of 1212 in relation to your career journey reveals a profound cosmic alignment taking place within your professional life. This is not merely about finding satisfying work—it represents a divine calling to express your soul's purpose through your vocation in ways that transform both yourself and others.

At ${formData.age}, you stand at a particularly significant threshold where your accumulated skills, wisdom, and life experience can now be channeled into work that resonates with your deepest truth. The repeated pattern of 1 and 2 in this angel number indicates you're being called to balance individuality with cooperation, innovation with tradition, and personal ambition with collective contribution.

What makes this moment especially powerful is that the veil between your conscious awareness and your soul's deeper knowing about your purpose is thinning. Ideas, inspirations, or opportunities appearing now contain seeds of your authentic calling, even if they seem unexpected or unrelated to your current path.

The divine realm is showing that you may have been operating on a career trajectory that was appropriate for an earlier phase of your life but may now feel increasingly misaligned with your evolving self. This misalignment isn't accidental—it's creating necessary tension to propel you toward work that allows fuller expression of your gifts.

Your unique soul signature contains abilities that the world needs now. The appearance of 1212 suggests you're being cosmically nudged toward contexts where these gifts can have their greatest impact. Trust that seemingly random interests, skills, or passions you've developed are actually perfect preparation for this next phase.`,
        practical_steps: `
### 12-Day Professional Alignment Process

1. **Values Clarification Exercise**: Take 30 minutes to identify your top 5 non-negotiable values (e.g., creativity, service, autonomy). For each value, rate your current work environment on how well it allows expression of this value (1-10 scale).

2. **Professional Timeline Review**: Create a visual timeline of your career highlighting moments when you felt most engaged and fulfilled. Look for patterns in these peak experiences—they contain clues to your authentic path.

3. **Skills Inventory Expansion**: List all skills you've developed in your life—including those from hobbies, volunteer work, and personal interests—not just professional skills. Circle those you most enjoy using regardless of proficiency.

4. **Purposeful Networking**: Identify 3-5 people whose work you admire and who embody elements of what you aspire to create. Reach out to at least one this week for a conversation about their path.

5. **Intuitive Career Visualization**: Spend 20 minutes in a relaxed state imagining yourself 3 years in the future doing deeply fulfilling work. Journal in detail about the environment, activities, people, and impact of this work.

6. **Resistance Mapping**: Identify your top 3 fears about pursuing more purposeful work. For each fear, create a specific contingency plan that addresses the realistic aspect while releasing the emotional charge.

7. **Daily Inspiration Practice**: Each morning for 12 days, read something related to your field of interest or listen to interviews with innovators in areas that fascinate you before checking email or news.

8. **Micro-Purpose Projects**: Identify one small project you can complete in 1-2 hours that combines your skills with meaningful contribution. Complete at least two such projects this week.

9. **Financial Alignment Planning**: Create a realistic assessment of financial needs, savings, and potential transition timeline if you're considering a significant career change.

10. **Mentorship Seeking**: Identify someone who has successfully navigated a similar transition to what you're contemplating and reach out for guidance.

11. **Decision-Making Matrix**: For any career decisions, evaluate options based on alignment with purpose, potential for growth, financial viability, and lifestyle compatibility.

12. **Sacred Career Contract**: Write a personal mission statement for your professional life that honors both your practical needs and spiritual purpose.`,
        timeline_guidance: `
### Divine Timing for Your Career Evolution

The 1212 angel number carries specific guidance about the unfolding timeline of your professional transformation:

**Immediate Window (Next 12 Days)**: This is a powerful period for receiving inspiration and clarity. Pay special attention to ideas that come during meditation, just before sleep, or upon waking. Keep a dedicated notebook for these insights, as they contain important seeds for your evolution.

**Integration Phase (1-3 Months)**: During this period, you'll likely notice increasing synchronicities related to your authentic path. What seem like coincidences—repeatedly hearing about certain fields, unexpected introductions to key people, or resources appearing at just the right moment—are actually divinely orchestrated guideposts.

**Preparation Period (3-6 Months)**: This window is optimal for developing necessary skills, researching options, and laying practical groundwork for your next steps. Focus on incremental progress rather than dramatic change during this phase.

**Significant Opportunity Window (6-12 Months)**: The angelic realm indicates that a meaningful opportunity aligned with your purpose is likely to manifest within this timeframe. This may come through unexpected channels, so remain open while continuing to take consistent action toward your vision.

**Full Alignment (1-2 Years)**: While immediate shifts may occur, the complete integration of your authentic purpose into your professional life is a process that will unfold over this longer timeline. Trust that each step is perfectly timed, even during periods that seem slow or challenging.

Remember that seeing 1212 indicates you're already on your path—these aren't changes you need to force but rather an evolution that's naturally unfolding as you remain conscious and responsive to divine guidance.`
      },
      wealth: {
        title: "Wealth & Abundance",
        symbolism: "In numerology, the sequence 1212 carries powerful manifestation energy. The number 1 represents creation, new beginnings and setting intentions, while 2 embodies balance, harmony and receptivity. This repeated pattern amplifies the message that your thoughts are rapidly manifesting into material reality.",
        content: `The angel number 1212 appearing in your life is a profound message about your relationship with abundance. For a ${formData.gender.toLowerCase()} of ${formData.age}, this divine sign indicates you're entering a powerful manifestation cycle where your thoughts, beliefs, and energetic vibration are creating your financial reality more quickly than ever before.

This number sequence reveals that you're being called to achieve greater balance between actively creating wealth (the energy of 1) and being receptive to unexpected abundance (the energy of 2). Many people focus only on the action-oriented aspect of manifestation, but 1212 reminds you that allowing and receiving are equally important parts of the abundance equation.

The repeated pattern suggests you're in a unique window of opportunity where the universe is supporting a complete transformation of your financial situation. However, this transformation begins with healing any limiting beliefs about money that stem from your family history, cultural programming, or past experiences.

At your current stage of life, the angels are guiding you to recognize that true abundance isn't just about accumulating money—it's about creating a balanced flow of resources that supports your physical needs while also nourishing your spiritual growth.`,
        challenges: [
          "You may be harboring unconscious beliefs that associate wealth with negative traits like greed or shallowness",
          "There could be patterns of self-sabotage just when financial success seems within reach",
          "You might struggle with receiving financial support or opportunities from others",
          "There may be fear around managing larger sums of money or making investment decisions"
        ],
        practices: [
          "Abundance Meditation: Spend 12 minutes each morning visualizing yourself surrounded by golden light representing prosperity, allowing this energy to flow through every cell of your body",
          "Belief Transformation: Identify your top three limiting beliefs about money (e.g., 'Money is hard to earn') and create empowering alternatives (e.g., 'Money flows to me easily when I follow my joy')",
          "Gratitude Alchemy: Each night, write down 12 things you're grateful for regarding your current financial situation, no matter how small, to shift your focus to abundance rather than lack",
          "Inspired Action: Take one concrete step daily toward your financial goals, however small, while remaining open to unexpected opportunities that may not fit your original plan"
        ],
        affirmations: [
          "I am a powerful creator of abundance in all forms",
          "Money flows to me easily and I receive it with gratitude",
          "I release all limiting beliefs about wealth and prosperity",
          "I am worthy of financial abundance and use it to create positive change"
        ],
        specific_advice: `For someone at ${formData.age}, seeing 1212 in relation to finances suggests you're being guided to balance long-term security with present moment enjoyment of resources. The angels are indicating that your relationship with giving and receiving is ready for a profound evolution.

Pay attention to any repeated thoughts you have about money, as these are currently programming your financial reality. The 1212 sequence suggests you need to be especially mindful of keeping your thoughts positive when dealing with bills, financial statements, or conversations about money.

The divine guidance is also pointing toward potential passive income opportunities that may come through unexpected channels. Stay alert to ideas involving the number 12, such as subscription models, 12-month programs, or systems that create recurring revenue with less active effort over time.

You're also being called to examine how you can use your resources to support causes or communities that resonate with your soul's purpose. The balanced energy of 1212 suggests your greatest financial fulfillment will come when your wealth serves both your needs and the greater good.`,
        deeper_insight: `
The appearance of angel number 1212 in relation to your financial life carries profound significance that extends far beyond material concerns. This divine message is revealing deeper spiritual truths about your relationship with abundance and the energetic patterns that have been governing your experience of material resources.

At age ${formData.age}, you've developed specific beliefs and emotional patterns around money and prosperity—some conscious, many unconscious—that have been shaping your financial reality. The 1212 sequence indicates you're at a critical juncture where these patterns can be transformed at their core, not merely at the surface level of behaviors.

What's particularly significant about this timing is that you're being called to heal ancestral patterns related to abundance. Many of your deepest beliefs about wealth weren't originally yours—they were inherited from family systems, cultural conditioning, and collective consciousness. The repeating 1-2 pattern indicates you have the spiritual support to break these generational cycles and establish new prosperity templates.

The divine realm is showing that your relationship with receiving is especially important to examine now. Many spiritual seekers focus on giving but have unconscious blocks around worthiness to receive. The balance of 1 (self) and 2 (relationship) in this number points to creating new equilibrium between giving and receiving in all areas, including finances.

Your guides are also indicating that your purpose and prosperity are meant to be aligned—when you serve in alignment with your soul's gifts, abundance flows more naturally. Any persistent financial struggles may indicate areas where you're not fully honoring your authentic path or where outdated beliefs are creating energetic resistance to the flow of resources.`,
        practical_steps: `
### 12-Day Abundance Activation Protocol

1. **Prosperity Consciousness Audit**: Spend 30 minutes journaling about your earliest memories of money and wealth. Identify key phrases you heard about money growing up and how these might still be influencing your relationship with abundance.

2. **Limiting Belief Transformation**: Identify your top 3 limiting beliefs about money (e.g., "Money is scarce," "Wealth requires struggle"). For each, create an empowering alternative (e.g., "Abundance flows easily when I'm aligned with my purpose") and write it 12 times each morning.

3. **Energy Center Clearing**: Focus on your root chakra (base of spine) and solar plexus (stomach area) through daily 10-minute meditation. These energy centers govern security and personal power—essential components of financial wellbeing.

4. **Gratitude Amplification Practice**: Create a "prosperity inventory" listing everything in your life that represents abundance (not just financial). Review and add to this list daily, feeling genuine gratitude for each item.

5. **Receiving Exercise**: Challenge yourself to accept three compliments, gifts, or offers of help each day without deflecting or immediately trying to reciprocate. Notice any discomfort and breathe through it.

6. **Value Exchange Alignment**: Review how you're compensated for your work/services. Are you charging appropriately for your time and expertise? Create a plan to adjust any imbalances.

7. **Abundance Visualization**: Spend 12 minutes each morning visualizing yourself with comfortable financial resources, focusing on the feeling of security, freedom, and generosity this creates.

8. **Money Relationship Healing**: Write a letter to money as if it were a person with whom you have a relationship. Express your feelings honestly, then write a response from money to you.

9. **Conscious Spending Practice**: For one week, before each purchase, pause and ask: "Does this expenditure align with my values and contribute to my wellbeing or that of others?"

10. **Prosperity Affirmation Walk**: Take a 20-minute walk while repeating affirmations that align with your new abundance consciousness. The rhythmic movement helps integrate these new beliefs.

11. **Generosity Practice**: Identify three ways you can give from a place of genuine abundance rather than obligation or depletion. Implement at least one this week.

12. **Financial Vision Creation**: Develop a clear, detailed vision for your ideal relationship with money 3 years from now. Focus on how you'll feel and what you'll be able to create or contribute, rather than specific amounts.`,
        timeline_guidance: `
### Divine Timing for Your Abundance Evolution

The angel number 1212 carries specific guidance about how your relationship with prosperity will unfold:

**Foundation Period (Next 12 Days)**: This is a crucial window for consciousness work around abundance. The energy patterns you establish during this period will significantly influence your financial trajectory moving forward. Focus intensely on addressing limiting beliefs and establishing new thought patterns.

**Energy Shift Phase (2-6 Weeks)**: During this period, you may notice subtle shifts in how you feel about money and prosperity. While external circumstances might not change dramatically yet, your internal relationship with abundance is being recalibrated.

**Synchronicity Window (2-3 Months)**: Watch for meaningful coincidences related to finances—unexpected opportunities, resources, or connections may appear. These aren't random but are divine responses to your shifting energy field.

**Testing Period (3-6 Months)**: You might face situations that trigger old scarcity beliefs. These aren't setbacks but opportunities to practice your new abundance consciousness under pressure. Your response to these challenges will determine how quickly your external reality shifts.

**Manifestation Acceleration (6-12 Months)**: If you've been consistent with your internal work, this period often brings more tangible shifts in your financial situation. The seeds planted earlier begin to sprout in visible ways.

**Complete Pattern Transformation (1-3 Years)**: The full renovation of your relationship with abundance is a deeper process that unfolds over this longer timeline. Each cycle brings greater alignment between your consciousness and your material experience.

Remember that seeing 1212 indicates divine timing—your abundance evolution is unfolding in perfect synchronization with your overall spiritual development. Trust the process, especially during periods that seem slow or challenging.`
      },
      personal: {
        title: "Personal Growth & Transformation",
        symbolism: "The angel number 1212 represents a powerful gateway for personal evolution. The number 1 symbolizes new beginnings, independence and initiative, while 2 represents balance, duality and intuition. Together in this pattern, they signal a divine opportunity to integrate opposing aspects of yourself into a more evolved whole.",
        content: `Angel number 1212 has appeared at this pivotal stage of your personal development for profound reasons. As a ${formData.age}-year-old ${formData.gender.toLowerCase()}, you're being divinely guided to integrate the seemingly opposing aspects of your nature—your logical and intuitive sides, your strength and vulnerability, your individual needs and your connection to others.

This powerful number sequence is a cosmic signal that you're standing at an important threshold of transformation. The repeated pattern of 1's and 2's indicates you're being called to balance assertiveness with receptivity, action with reflection, and independence with interconnection.

At ${formData.age}, you've accumulated significant life experience that has shaped your understanding of yourself. Now, the angels are guiding you to synthesize these experiences into deeper wisdom, releasing what no longer serves you while strengthening the authentic core of who you truly are.

The appearance of 1212 suggests you're being prepared for a significant leap in consciousness that will allow you to perceive your life purpose with greater clarity. This evolution isn't about adding something new but rather about removing the layers that have obscured your authentic self.`,
        challenges: [
          "You may be experiencing tension between different aspects of yourself that seem contradictory",
          "There could be resistance to letting go of familiar patterns even when they limit your growth",
          "You might struggle with balancing self-care and caring for others",
          "There may be fear around embracing your full potential and the responsibility it brings"
        ],
        practices: [
          "Shadow Integration Journal: Dedicate a special journal to exploring aspects of yourself you've rejected or hidden, writing from the perspective of these disowned parts with compassion",
          "Mindful Presence Practice: Set 12 alarms throughout your day as reminders to pause, take two deep breaths, and fully experience whatever is happening in that moment without judgment",
          "Sacred Morning & Evening Rituals: Create intentional bookends to your day—begin with practices that set your highest intention and end with reflection and gratitude",
          "Authentic Expression: Identify one area where you've been hiding your true self and take a small step toward more honest self-expression each day for 12 days"
        ],
        affirmations: [
          "I embrace all aspects of myself with compassion and understanding",
          "Each challenge I face is transforming me into my highest self",
          "I balance action and receptivity in perfect harmony",
          "I am exactly where I need to be on my soul's journey"
        ],
        specific_advice: `For someone at your stage of life, the 1212 angel number appearing now indicates you're being prepared for a significant shift in how you understand your life's journey. The angels are guiding you to recognize patterns that have repeated throughout your life, as these contain important clues about your soul's evolution.

Pay particular attention to situations that trigger strong emotional responses, as these are highlighting areas where healing and integration are needed. The 1212 sequence suggests these triggers aren't random but are precisely calibrated opportunities for growth.

You're also being called to examine your relationship with time. The balanced energy of 1212 indicates a need to honor both the present moment and your long-term vision—neither sacrificing today for tomorrow nor ignoring the future for immediate gratification.

When making decisions in the coming months, the divine guidance suggests using both your analytical mind and your intuitive knowing, giving equal weight to each. Notice which you tend to favor and practice strengthening the other to achieve greater balance.`,
        deeper_insight: `
The appearance of angel number 1212 at this precise moment in your personal growth journey reveals profound spiritual significance. This powerful numerical sequence is appearing as a divine indication that you've reached a critical evolutionary threshold in your soul's development—one that has been preparing for many lifetimes.

At ${formData.age}, you stand at a unique crossroads where the wisdom you've accumulated through life experience can now be integrated into a more cohesive understanding of your authentic self. The repeating pattern of 1's and 2's indicates you're being called to harmonize seemingly contradictory aspects of your nature: your individuality with your interconnectedness, your logical mind with your intuitive knowing, and your human experience with your divine essence.

What makes this juncture particularly significant is that the veil between your conscious self and higher self is thinning, allowing greater access to your soul's wisdom. The challenges you've faced weren't random—they were divinely orchestrated catalysts designed to awaken specific qualities and insights essential for your next evolution.

Your guides are showing that you've been operating from certain identity constructs that were necessary for your earlier development but may now be limiting your expansion. These constructs—beliefs about who you are, what you're capable of, and how life works—served as important scaffolding but are now being called into question so that your authentic essence can emerge more fully.

This number sequence also indicates that you're in a powerful cycle of completion and new beginning. Aspects of yourself that have been dormant are awakening, while patterns that no longer serve your highest good are ready to be released with gratitude for their teaching.`,
        practical_steps: `
### 12-Day Personal Transformation Protocol

1. **Identity Inventory**: Set aside 45 minutes to list all the roles and identities you embody (e.g., professional title, family roles, personality traits). For each, reflect: "Is this who I truly am, or is it a role I play?" Note which feel authentically aligned versus which feel constrictive.

2. **Values Clarification Exercise**: Identify your top 5 core values (e.g., authenticity, compassion, growth). For each value, rate (1-10) how fully you're currently expressing it in your daily life, and identify one specific way to align more deeply.

3. **Shadow Dialogue Practice**: Choose one quality you tend to judge in others. Journal a conversation with this trait, recognizing how it might exist in disowned aspects of yourself and what gifts it might offer when integrated consciously.

4. **Life Review Timeline**: Create a visual timeline of your life highlighting pivotal moments of challenge and growth. Look for recurring themes that reveal your soul's curriculum in this lifetime.

5. **Morning Consciousness Ritual**: For the next 12 days, spend the first 20 minutes after waking in contemplative practice: 5 minutes meditation, 5 minutes gratitude, 5 minutes setting intentions, 5 minutes visualizing your highest expression for the day.

6. **Triggered Awareness Practice**: When emotionally triggered, implement the 4-4-4 technique: breathe in for 4 counts, hold for 4, exhale for 4, then ask: "What belief about myself is being activated now? Is this belief ultimately true?"

7. **Inner Child Healing Session**: Spend 30 minutes in meditation visualizing yourself at a challenging age. Listen to what this younger self needs to tell you, offer the compassion and wisdom they needed then, and visualize integration of this aspect.

8. **Authentic Expression Challenge**: Identify one area where you've been holding back your truth. Take one concrete step toward more authentic expression, starting with something that feels challenging but manageable.

9. **Digital Consciousness Fast**: For 24 hours (or start with 8 if that feels overwhelming), disconnect from all digital devices. Use this time to reconnect with your inner voice through nature, creativity, or contemplation.

10. **Conscious Relationship Pattern Breaking**: Identify one relationship dynamic you tend to repeat. Create a specific plan for how you'll respond differently next time this pattern arises.

11. **Sacred Space Creation**: Designate a small area in your home as a personal sanctuary. Include elements representing earth, air, fire, and water, as well as meaningful symbols of your authentic self.

12. **Future Self Dialogue**: Through writing or recorded speech, create a dialogue with your evolved self 7 years from now. Ask for guidance about your current evolutionary edge and listen for the wisdom that emerges.`,
        timeline_guidance: `
### Divine Timing for Your Personal Evolution

The angel number 1212 offers specific guidance about the unfolding timeline of your personal transformation:

**Integration Window (Next 12 Days)**: This is a particularly potent period for pattern recognition and integration work. The veils between your conscious and unconscious mind are thinner, allowing greater access to insights about your core patterns. Pay special attention to dreams during this window.

**Release Phase (2-6 Weeks)**: During this period, you may notice emotions or memories arising that have been suppressed. This isn't regression but a necessary clearing process. Old energies are surfacing to be acknowledged and released with compassion.

**Void Space (2-3 Months)**: After releasing old patterns, you may experience a transitional period that feels uncertain or empty. This "void space" is essential—it creates room for new aspects of your authentic self to emerge. Resist the temptation to fill this space with busyness or distraction.

**New Growth Phase (3-6 Months)**: During this window, new aspects of your authentic self begin to emerge more clearly. You may discover interests, perspectives, or qualities that surprise you. These aren't random but represent your soul's true nature becoming more accessible.

**Testing and Strengthening (6-12 Months)**: This period often brings situations that test your new patterns and perspectives. These challenges aren't setbacks but opportunities to strengthen your authentic expression under varying conditions.

**Embodiment and Integration (1-3 Years)**: The full integration of your authentic self is a deeper process that unfolds over this longer timeline. Each cycle brings greater alignment between your inner essence and outer expression.

Remember that seeing 1212 indicates divine orchestration—your evolution is unfolding in perfect timing with cosmic forces that support your highest development. Trust the process, especially during periods that feel challenging or unclear.`
      },
      relationships: {
        title: "Interpersonal Relationships",
        symbolism: "The sequence 1212 carries special significance for relationships beyond romance. The number 1 represents individuality and assertiveness, while 2 symbolizes partnership and diplomacy. This pattern repeating suggests a divine message about finding harmony between honoring your own needs and connecting deeply with others.",
        content: `The 1212 angel number appearing in your life brings important messages about your interpersonal connections beyond romantic relationships. At ${formData.age}, you're being divinely guided to create more authentic and balanced connections with everyone in your social sphere—family members, friends, colleagues, and even casual acquaintances.

This powerful number sequence indicates you're at a significant point of evolution in how you relate to others. The repeated pattern of 1's and 2's suggests you're being called to find the sacred balance between maintaining healthy boundaries (the energy of 1) and fostering genuine connection (the energy of 2).

The angels are showing you that your relationships are mirrors reflecting important aspects of yourself that may need healing or development. Each challenging interaction contains a lesson, and each harmonious connection reflects inner balance you've already achieved.

At this stage of your life, you're being guided to examine relationship patterns that may have been established early in your life but no longer serve your highest good. The appearance of 1212 suggests you're ready to transform these patterns and create new templates for interaction based on authenticity and mutual respect.`,
        challenges: [
          "You may struggle with setting boundaries while maintaining connection",
          "There could be patterns of people-pleasing or conflict avoidance that prevent authentic relationships",
          "You might attract similar relationship dynamics across different people in your life",
          "There may be difficulty in balancing time for yourself with time for others"
        ],
        practices: [
          "Active Listening Meditation: In conversations, practice fully focusing on the other person without planning your response, noticing how this changes the quality of connection",
          "Energy Boundary Visualization: Each morning, visualize a permeable golden sphere around you that allows love to flow in and out while protecting your essence",
          "Relationship Circle Mapping: Draw concentric circles representing different levels of intimacy, then thoughtfully place each relationship where it belongs, considering if any adjustments are needed",
          "Authenticity Practice: Identify one relationship where you hold back your truth, and commit to expressing one honest thought or feeling per interaction"
        ],
        affirmations: [
          "I create relationships based on mutual respect and authenticity",
          "I honor both my needs and the needs of others",
          "I attract connections that reflect my inner harmony",
          "I release relationships that have fulfilled their purpose with gratitude"
        ],
        specific_advice: `For someone at ${formData.age}, the appearance of 1212 regarding interpersonal relationships indicates you're being prepared for a significant upgrade in your social connections. The angels are guiding you to evaluate which relationships energize you and which deplete you, as this awareness is crucial for your next stage of growth.

Pay attention to recurring patterns in your interactions, especially any situations where you feel your energy being drained. The 1212 sequence suggests these patterns aren't random but are precisely designed to help you recognize and release outdated ways of relating.

You're also being called to examine the balance of giving and receiving in your relationships. Notice if you tend to overextend yourself or, conversely, if you find it difficult to receive support from others. The divine guidance is pointing toward achieving greater reciprocity.

In the coming months, you may find certain relationships naturally falling away while new connections form. Trust this process as divine orchestration rather than loss or random chance. Each shift is aligning you more closely with your authentic self and those who resonate with your evolving energy.`,
        deeper_insight: `
The appearance of angel number 1212 in relation to your interpersonal connections reveals profound spiritual significance beyond ordinary relationship dynamics. This divine message indicates you've reached an important evolutionary threshold in how you relate to others—a juncture that has been orchestrated by higher forces to catalyze your soul's growth.

At ${formData.age}, your relationship patterns have developed through complex interplay of early conditioning, life experiences, and soul agreements. The repeated sequence of 1's and 2's indicates you're being called to develop a new relational paradigm that honors both your individual sovereignty (1) and your profound interconnection with others (2).

What makes this moment particularly significant is that your relationships are serving as powerful mirrors, reflecting aspects of yourself that require integration and healing. The divine realm is showing that certain relationship dynamics you experience repeatedly aren't random but are precisely designed soul contracts meant to illuminate specific lessons you chose to master in this lifetime.

Your guides are revealing that many of your relationship patterns originated in early life experiences or even past lives, creating templates that have unconsciously governed your interactions. These templates served important purposes in your earlier development but may now be limiting the depth and authenticity of your connections.

This number sequence also indicates you're in a cycle of completion regarding certain relationship karmas. Connections that have fulfilled their evolutionary purpose may naturally transform or complete, while new relationships aligned with your authentic self are being divinely orchestrated to enter your life.`,
        practical_steps: `
### 12-Day Relationship Transformation Protocol

1. **Relationship Pattern Mapping**: Spend 45 minutes creating a visual map of your significant relationships throughout life. Look for recurring dynamics, what these relationships taught you, and how they've shaped your expectations and behaviors.

2. **Boundary Consciousness Practice**: Identify areas where your boundaries need strengthening (where you give too much) and areas where they may be too rigid (where you struggle to let others in). Choose one boundary to consciously adjust this week.

3. **Projection Recognition Exercise**: List qualities you strongly admire or dislike in others. For each quality, reflect honestly: "How might this quality exist within me, either expressed or unexpressed?" Look especially for disowned positive traits.

4. **Energy Clearing Ritual**: Create a simple ritual to clear relationship energies at day's end. This might involve visualization, brief meditation, or symbolic gestures that help you release interpersonal tensions rather than carrying them forward.

5. **Active Listening Challenge**: In three different conversations this week, practice radical presence—focus completely on understanding the other person rather than formulating your response. Notice how this shifts the quality of connection.

6. **Communication Pattern Interrupt**: Identify one habitual communication pattern that creates distance rather than connection (e.g., defensiveness, advice-giving, changing the subject). Create a specific plan for how you'll pause and choose differently.

7. **Relationship Energy Inventory**: List your five most significant current relationships. For each, assess: Does this connection predominantly energize or deplete you? What specific quality of interaction creates this effect?

8. **Authenticity Expression Practice**: Choose one relationship where you tend to wear a social mask. Identify one small but meaningful way you can show up more authentically this week.

9. **Conflict Transformation Approach**: Rather than avoiding disagreements, view them as opportunities for deeper understanding. When conflict arises, practice stating: "I'm curious to understand your perspective better. Can you help me see this from your viewpoint?"

10. **Appreciation Communication**: Express specific, genuine appreciation to at least three people in your life, focusing on qualities of being rather than doing (e.g., "I appreciate your thoughtfulness" rather than just "thanks for helping").

11. **Relationship Needs Assessment**: Identify your top 5 emotional and practical needs in relationships. For each, assess how effectively you communicate these needs and how you might do so more clearly and directly.

12. **Sacred Relationship Vision**: Create a detailed vision of your ideal relationship dynamics moving forward. Focus on the qualities of interaction rather than specific people or outcomes—how do you want to feel in your connections?`,
        timeline_guidance: `
### Divine Timing for Your Relationship Evolution

The angel number 1212 offers specific guidance about how your relationship transformation will unfold:

**Awareness Window (Next 12 Days)**: This is a powerful period for pattern recognition regarding your relationship dynamics. Pay special attention to recurring situations or feelings that arise in your interactions, as they contain important clues about patterns ready for transformation.

**Inner Relationship Healing (2-6 Weeks)**: During this period, focus primarily on your relationship with yourself, as this forms the template for all external connections. Work done during this phase creates the energetic foundation for healthier external relationships.

**Communication Upgrade (2-3 Months)**: This window brings opportunities to implement new communication approaches in your existing relationships. You may notice greater clarity in how you express your needs and boundaries, with noticeable shifts in how others respond.

**Relationship Recalibration (3-6 Months)**: During this phase, you may experience natural evolutions in your social circles. Some connections may naturally become more distant while others deepen. Trust that these shifts are aligning your relationships with your authentic self.

**New Connection Formation (6-12 Months)**: This period often brings new relationships that reflect your evolving consciousness. These connections may feel qualitatively different from past relationships—more authentic, balanced, and mutually supportive.

**Complete Integration (1-2 Years)**: The full transformation of your relationship patterns unfolds over this longer timeline. Each interaction becomes an opportunity to practice and refine your new relationship consciousness.

Remember that seeing 1212 indicates divine orchestration—each relationship is bringing precisely the experiences needed for your soul's evolution. Trust the divine timing, especially when relationship changes feel challenging or uncomfortable.`
      },
      spiritual: {
        title: "Spiritual Connection & Awakening",
        symbolism: "The angel number 1212 is a powerful spiritual activation code. In esoteric numerology, 1 represents divine source and new spiritual beginnings, while 2 symbolizes faith, trust, and your soul's mission. This repeated pattern signifies a spiritual gateway opening that's accelerating your awakening process.",
        content: `The appearance of 1212 in your spiritual journey is profoundly significant and timely. For a ${formData.gender.toLowerCase()} of ${formData.age}, this number sequence indicates you're standing at a gateway of heightened spiritual awareness and divine connection that's opening specifically for you in this phase of your soul's evolution.

This powerful angelic code suggests that the veil between dimensions is thinning in your experience, allowing for clearer communication with your higher self, spirit guides, and the angelic realm. The repeated pattern of 1's and 2's indicates a perfect balance of divine masculine energy (action, creation) and divine feminine energy (intuition, receptivity) activating within you.

At ${formData.age}, you've accumulated life experiences that have prepared you for this spiritual expansion. The angels are signaling that you're ready to integrate the wisdom gained through your challenges and triumphs into a more conscious connection with the divine source.

The 1212 sequence is often associated with spiritual awakening that transcends intellectual understanding—it points to direct experience of your divine nature. This awakening may come gradually through consistent spiritual practice or suddenly through moments of profound insight or mystical experience.`,
        challenges: [
          "You may experience confusion as your perception of reality shifts and expands",
          "There could be tension between your spiritual insights and conventional thinking",
          "You might feel isolated if those around you don't understand your spiritual experiences",
          "There may be fear around surrendering familiar thought patterns as your consciousness evolves"
        ],
        practices: [
          "Higher Guidance Meditation: Spend 12 minutes daily in silent meditation, focusing on your breath while setting the intention to receive guidance from your higher self",
          "Synchronicity Journal: Record meaningful coincidences, repeating numbers, and unusual signs in nature, looking for patterns in these divine communications",
          "Sacred Study: Explore spiritual teachings that genuinely resonate with your intuition rather than following prescribed paths, trusting your inner discernment",
          "Energy Clearing Ritual: Create a weekly practice of clearing your energy field through methods like sage smudging, salt baths, or visualization of violet flame transmutation"
        ],
        affirmations: [
          "I am a divine being having a human experience",
          "I trust the spiritual guidance that flows through my intuition",
          "My awareness expands beyond physical reality into higher dimensions",
          "I am divinely protected as I explore my spiritual gifts"
        ],
        specific_advice: `For someone at your current stage of spiritual development, the 1212 angel number appearing now signals that you're being prepared for a significant expansion of consciousness. The angels are guiding you to pay special attention to your dreams, as your dream state is becoming a powerful channel for spiritual messages.

Meditation will be particularly effective for you during this period, especially practices that focus on the heart center, as this chakra serves as a bridge between physical and spiritual dimensions. Even short periods of meditation can yield profound insights when done with consistency.

The divine guidance suggests you may be developing or strengthening specific spiritual gifts related to intuition, healing, or communication. Notice any unusual sensations, particularly around your crown, third eye, or heart chakras, as these may indicate energetic activations.

You're also being called to examine your concept of time from a spiritual perspective. The balanced energy of 1212 suggests that past, present, and future exist simultaneously in higher dimensions. Practices that help you center in the eternal now will accelerate your spiritual awakening.`,
        deeper_insight: `
The persistent appearance of angel number 1212 in your spiritual journey signifies a profound cosmic initiation that transcends ordinary awareness. This powerful numerical sequence is appearing as a divine confirmation that you're undergoing a significant vibrational upgrade—an acceleration in your spiritual evolution that has been carefully orchestrated by higher forces.

At ${formData.age}, you've accumulated sufficient life experience and spiritual awareness to now access deeper dimensions of consciousness. The repetition of 1's and 2's in this sequence indicates you're being called to harmonize individual spiritual practice (1) with universal connection (2), personal will with divine will, and spiritual knowledge with embodied wisdom.

What makes this juncture particularly significant is that you're experiencing what mystics call "the thinning of the veils"—increased permeability between dimensions of consciousness that allows greater access to spiritual realms. The challenges and synchronicities you've experienced weren't random but have been precisely calibrated to prepare your energy system for this expansion.

Your guides are showing that you've been operating from certain spiritual paradigms that were appropriate for your earlier development but may now be limiting your direct experience of divine reality. These frameworks—whether religious, philosophical, or metaphysical—served as important scaffolding but are now being transcended so that your direct knowing can emerge more fully.

This number sequence also indicates you're in a powerful cycle of spiritual activation. Energy centers (chakras) and dormant spiritual capacities are awakening, while limiting beliefs about reality and your spiritual nature are ready to be released with gratitude for their teaching.`,
        practical_steps: `
### 12-Day Spiritual Activation Protocol

1. **Sacred Morning Practice**: For the next 12 days, dedicate the first 30 minutes after waking to spiritual connection before engaging with technology or daily concerns. This might include meditation, prayer, sacred reading, or contemplation in nature.

2. **Energy Center Activation**: Focus on a different chakra each day through meditation, following the traditional sequence from root to crown. Visualize each center as a spinning wheel of light, clearing any density and inviting divine energy to optimize its function.

3. **Belief System Inventory**: Spend 60 minutes journaling about your core spiritual beliefs. For each belief, inquire: "Is this based on direct experience or adopted from external sources? Does it expand or limit my connection with divine reality?"

4. **Consciousness Cinema Exercise**: Practice watching your thoughts, emotions, and sensations as if they were a movie on a screen, without identifying with them. Start with 5-minute sessions and gradually extend to 20 minutes.

5. **Sacred Sound Practice**: Experiment with using your voice as a spiritual tool through toning, chanting, or singing sacred sounds. Allow your intuition to guide which sounds resonate with different areas of your body and energy field.

6. **Synchronicity Journal**: Record all meaningful coincidences, repeating numbers, animal encounters, and unusual dreams. Look for patterns, messages, and guidance within these synchronistic events.

7. **Nature Communion Ritual**: Spend at least 30 minutes in direct contact with nature (ideally barefoot on earth), opening your senses fully to the living intelligence around you. Ask to receive the specific wisdom nature has for your spiritual journey now.

8. **Dream Incubation Practice**: Before sleep, set a clear intention to receive guidance about your spiritual evolution through your dreams. Keep a journal and writing implement by your bed to record insights immediately upon waking.

9. **Ancestral Wisdom Connection**: Create a simple altar honoring your spiritual lineage (which may be different from your biological lineage). Through meditation, request guidance and support from those who have walked a similar path before you.

10. **Sacred Reading Contemplation**: Choose a passage from spiritual wisdom traditions that resonates with you. Read it slowly three times, allowing deeper layers of meaning to emerge, then sit in silence allowing insights to arise.

11. **Divine Dialogue Practice**: Establish a regular practice of direct communication with your higher guidance through journaling. Write your questions on the page, then quiet your mind and write what comes through without censoring.

12. **Embodiment Practice**: Choose a spiritual quality you wish to develop (e.g., compassion, presence, surrender). Create a specific practice to embody this quality in everyday situations, particularly those that typically trigger reactive patterns.`,
        timeline_guidance: `
### Divine Timing for Your Spiritual Awakening

The angel number 1212 offers specific guidance about the unfolding timeline of your spiritual evolution:

**Initiation Window (Next 12 Days)**: This period holds exceptional potential for establishing new spiritual practices and intentions. The energetic gateway signified by 1212 is particularly accessible during this time, allowing deeper connection with divine guidance.

**Integration Phase (2-6 Weeks)**: During this period, you may experience fluctuations in awareness as your energy system adjusts to higher frequencies. This is normal—periods of clarity may alternate with confusion or fatigue as your spiritual and physical bodies recalibrate.

**Purification Process (2-3 Months)**: This window often brings a clearing of energetic blockages and limiting patterns. You may notice emotional releases, physical detoxification, or the surfacing of old beliefs for examination. This isn't regression but necessary clearing.

**Expanded Perception (3-6 Months)**: During this phase, you may notice heightened sensitivity and awareness. Subtle energies, intuitive impressions, or even direct communication from spiritual guides may become more perceptible as your energy field refines.

**New Capacities Emergence (6-12 Months)**: This period often brings the awakening of spiritual gifts that have been dormant. These might include heightened intuition, healing abilities, creative inspiration, or other expressions of expanded consciousness.

**Stabilization and Embodiment (1-3 Years)**: The full integration of your expanded spiritual awareness unfolds over this longer timeline. Each challenge becomes an opportunity to embody your spiritual understanding more deeply in everyday life.

Remember that seeing 1212 indicates divine orchestration—your spiritual awakening is unfolding in perfect synchronization with cosmic forces and your soul's readiness. Trust the process, especially during periods that feel challenging or unclear.`
      }
    };

    const type = formData.readingType as keyof typeof readingTypes;
    const reading = readingTypes[type] || readingTypes.personal;
    
    const personalInfo = formData.additionalInfo 
      ? `\n\nI sense that your recent experiences with "${formData.additionalInfo}" are directly connected to the 1212 energy entering your life. This situation is not happening by chance but is serving as a catalyst for transformation in exactly the areas you need most right now. The angels have orchestrated these circumstances to help you grow through this specific challenge, which contains precisely the lessons your soul needs for its evolution at this time.`
      : '';

    // Format the date using the component-level variables
    const formattedDate = `${months[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

    return `
# Your Personal 1212 Angel Number Reading: ${reading.title}

*Divine Guidance Received: ${formattedDate}*

Dear Soul Seeker,

The recurring appearance of angel number 1212 in your life is far from coincidence—it is a sacred message from the divine realm specifically calibrated for your current life journey. This powerful number sequence carries unique significance for you at this pivotal moment.

## The Spiritual Meaning of 1212 in Your Life

${reading.symbolism}

## Your Personal 1212 Message

${reading.content}${personalInfo}

## Challenges You May Be Facing

The angelic realm recognizes these potential challenges on your path:

* ${reading.challenges[0]}
* ${reading.challenges[1]}
* ${reading.challenges[2]}
* ${reading.challenges[3]}

## Divine Guidance: Spiritual Practices for Transformation

The following practices have been divinely inspired to help you fully embody the 1212 energy in your life:

1. **${reading.practices[0]}**
2. **${reading.practices[1]}**
3. **${reading.practices[2]}**
4. **${reading.practices[3]}**

## Sacred Affirmations to Align with 1212 Energy

Repeat these affirmations daily, ideally at 12:12, to strengthen your connection with this angel number's vibration:

> *"${reading.affirmations[0]}"*
>
> *"${reading.affirmations[1]}"*
>
> *"${reading.affirmations[2]}"*
>
> *"${reading.affirmations[3]}"*

## Specific Divine Guidance for Your Journey

${reading.specific_advice}

## Deeper Spiritual Insights

${reading.deeper_insight}

## Practical Path Forward

${reading.practical_steps}

## Divine Timing & Guidance

${reading.timeline_guidance}

## Embracing Your Divine Path Forward

Trust that seeing 1212 repeatedly is celestial confirmation that you are being divinely guided and supported. This number sequence is appearing as reassurance that even during challenges, you are exactly where you need to be on your soul's journey.

In the coming weeks, pay special attention to thoughts or ideas that come to you around 12:12 (both AM and PM), as the angelic energy is particularly strong at these times. Also notice any dreams involving the number 12 or patterns of two, as these contain additional guidance for you.

Remember that you are never alone on this journey. Your angels, spirit guides, and higher self are constantly supporting you, sending love and wisdom to light your path.

With divine light and sacred guidance,

**Your Angel Number 1212 Guide**
    `;
  };

  return (
    <section className="py-16 md:py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-950 to-blue-950/70"></div>
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif">
            Your Personal{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-400">
              Angel Number 1212
            </span>{" "}
            Reading
          </h1>
          <p className="max-w-3xl mx-auto text-white/80 text-lg">
            Discover how the divine message of 1212 applies specifically to your life circumstances.
            Complete the form below to receive your personalized spiritual guidance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {readingResponse.reading ? (
            <ReadingResult 
              response={readingResponse} 
              onNewReading={() => setReadingResponse({ reading: "", loading: false, error: null })} 
            />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="p-6 md:p-8 bg-gradient-to-br from-gray-900/80 to-blue-900/80 backdrop-blur-lg rounded-2xl border border-white/10 shadow-xl">
                  <ReadingForm 
                    onSubmit={handleSubmitReading} 
                    isLoading={readingResponse.loading} 
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-5 -left-5 w-20 h-20 bg-gradient-to-br from-yellow-300 to-yellow-400 opacity-10 blur-xl rounded-full animate-pulse"></div>
                <div className="absolute -bottom-7 -right-7 w-28 h-28 bg-gradient-to-br from-purple-400 to-blue-500 opacity-10 blur-xl rounded-full animate-pulse"></div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-lg rounded-full"></div>
                  <div className="relative rounded-2xl overflow-hidden border-2 border-white/10">
                    <Image
                      src="https://images.unsplash.com/photo-1590907047706-ee9c08cf3189?q=80&w=2000&auto=format&fit=crop"
                      width={800}
                      height={800}
                      alt="Spiritual angel number reading"
                      className="w-full h-[450px] object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-blue-900/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 md:p-8">
                      <div className="flex items-center mb-4">
                        <span className="h-px w-8 bg-yellow-300 mr-3"></span>
                        <span className="text-yellow-300 uppercase tracking-widest text-sm font-medium">Divine Insight</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-serif">Unlock Your Personal Guidance</h3>
                      <p className="text-white/80">
                        The angels communicate through number patterns for a reason. 
                        Discover what message 1212 holds specifically for your journey.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <div className="text-yellow-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                    </div>
                    <p className="text-white/70 text-sm">
                      Your reading is generated specifically for you based on your inputs. For the most accurate guidance, please be honest with your information and current life circumstances.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PersonalReadingSection; 