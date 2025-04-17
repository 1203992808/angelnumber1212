"use client";

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const CanonicalUrl = () => {
  const pathname = usePathname();
  
  useEffect(() => {
    // Remove any existing canonical links
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }
    
    // Create and add the new canonical link with the current path
    // Handle the homepage (/) specially to avoid double slashes
    const canonicalPath = pathname === '/' ? '' : pathname;
    
    const link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', `https://1212angelnumber.pro${canonicalPath}`);
    document.head.appendChild(link);
    
    return () => {
      // Cleanup on unmount
      if (link) {
        link.remove();
      }
    };
  }, [pathname]);
  
  return null;
};

export default CanonicalUrl; 