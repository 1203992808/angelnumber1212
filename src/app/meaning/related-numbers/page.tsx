import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Related Angel Numbers to 1212: Connections & Comparisons | AngelNumber1212",
  description: "Discover how angel number 1212 relates to other powerful angel numbers like 1111, 2121, and 1234. Understand the connections and differences between these divine messages.",
  keywords: "angel numbers related to 1212, 1212 vs 1111, similar angel numbers, angel number comparisons, 1212 connections",
};

export default function RelatedNumbersPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <div className="text-sm mb-8 text-primary-200">
        <Link href="/" className="hover:text-primary-100 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/meaning" className="hover:text-primary-100 transition-colors">Meaning</Link>
        <span className="mx-2">/</span>
        <span className="text-white">Related Numbers</span>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
        Angel Numbers <span className="text-primary-400">Related to 1212</span>
      </h1>
      
      <div className="prose prose-lg max-w-none prose-invert">
        <p className="text-primary-100 text-xl leading-relaxed">
          Coming soon! We're currently creating comprehensive content about angel numbers related to 1212 and their unique connections.
        </p>
        <p className="text-primary-200">
          Check back soon or explore our <Link href="/meaning" className="text-primary-400 hover:text-primary-300 transition-colors">main meaning page</Link> for insights about angel number 1212.
        </p>
      </div>
    </div>
  );
} 