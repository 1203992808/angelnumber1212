import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "1212 Spiritual Meaning: Divine Guidance & Awakening | AngelNumber1212",
  description: "Explore the spiritual meaning of angel number 1212 and how it connects to divine guidance, awakening, and spiritual growth in your life journey.",
  keywords: "1212 spiritual meaning, angel number 1212 spiritual significance, 1212 divine guidance, spiritual awakening 1212",
};

export default function SpiritualMeaningPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <div className="text-sm mb-8 text-primary-200">
        <Link href="/" className="hover:text-primary-100 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/meaning" className="hover:text-primary-100 transition-colors">Meaning</Link>
        <span className="mx-2">/</span>
        <span className="text-white">Spiritual</span>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
        The Spiritual Meaning of <span className="text-primary-400">Angel Number 1212</span>
      </h1>
      
      <div className="prose prose-lg max-w-none prose-invert">
        <p className="text-primary-100 text-xl leading-relaxed">
          Coming soon! We're currently creating comprehensive content about the spiritual meaning of angel number 1212.
        </p>
        <p className="text-primary-200">
          Check back soon or explore our <Link href="/meaning" className="text-primary-400 hover:text-primary-300 transition-colors">main meaning page</Link> for insights about angel number 1212.
        </p>
      </div>
    </div>
  );
} 