import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Dual Energy of 1+2 in Angel Number 1212 | AngelNumber1212",
  description: "Learn about the powerful dual energy of numbers 1 and 2 in angel number 1212, representing balance, harmony, and the divine masculine and feminine energies.",
  keywords: "1212 dual energy, 1 and 2 meaning, masculine feminine balance 1212, angel number 1212 duality",
};

export default function DualEnergyPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <div className="text-sm mb-8 text-primary-200">
        <Link href="/" className="hover:text-primary-100 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/meaning" className="hover:text-primary-100 transition-colors">Meaning</Link>
        <span className="mx-2">/</span>
        <span className="text-white">Dual Energy</span>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
        The Dual Energy of <span className="text-primary-400">1+2</span> in Angel Number 1212
      </h1>
      
      <div className="prose prose-lg max-w-none prose-invert">
        <p className="text-primary-100 text-xl leading-relaxed">
          Coming soon! We're currently creating comprehensive content about the dual energy of numbers 1 and 2 in angel number 1212.
        </p>
        <p className="text-primary-200">
          Check back soon or explore our <Link href="/meaning" className="text-primary-400 hover:text-primary-300 transition-colors">main meaning page</Link> for insights about angel number 1212.
        </p>
      </div>
    </div>
  );
} 