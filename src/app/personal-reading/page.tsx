import type { Metadata } from "next";
import PersonalReadingSection from "@/components/reading/PersonalReadingSection";

export const metadata: Metadata = {
  title: "Personal 1212 Angel Number Reading | Tailored Divine Guidance",
  description: "Receive a personalized 1212 angel number reading based on your unique circumstances. Discover how this divine message applies to your life.",
  keywords: "1212 personal reading, angel number analysis, personalized divine message, spiritual guidance",
  openGraph: {
    title: "Personal 1212 Angel Number Reading | Tailored Divine Guidance",
    description: "Receive your personalized 1212 angel number reading to gain insights into your specific life circumstances.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1590907047706-ee9c08cf3189?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "1212 Angel Number Personal Reading",
      },
    ],
  },
};

export default function PersonalReadingPage() {
  return <PersonalReadingSection />;
} 