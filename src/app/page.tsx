import HeroSection from "@/components/home/HeroSection";
import FeatureSection from "@/components/home/FeatureSection";
import NumberMeaningSection from "@/components/home/NumberMeaningSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CallToActionSection from "@/components/home/CallToActionSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1212 Angel Number: Meaning, Love, Money & Twin Flame Guidance",
  description: "Discover the true meaning of angel number 1212 and how it influences your love, career, wealth, and spiritual life. Get personalized readings to reveal your special message.",
  openGraph: {
    title: "1212 Angel Number - Discover Its Divine Guidance in Your Life",
    description: "Discover the true meaning of angel number 1212 and how it influences your love, career, wealth, and spiritual life.",
    images: [
      {
        url: "https://source.unsplash.com/1200x630/?universe,spiritual",
        width: 1200,
        height: 630,
        alt: "1212 Angel Number",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <NumberMeaningSection />
      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
