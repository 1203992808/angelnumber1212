import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal 1212 Angel Number Reading | Under Maintenance",
  description: "Our personal reading feature is currently being upgraded. Please check back soon for enhanced spiritual guidance.",
  keywords: "1212 personal reading, angel number analysis, maintenance, upgrade",
  openGraph: {
    title: "Personal 1212 Angel Number Reading | Under Maintenance",
    description: "Our personal reading feature is currently being upgraded. Please check back soon.",
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

export default function PersonalReadingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 