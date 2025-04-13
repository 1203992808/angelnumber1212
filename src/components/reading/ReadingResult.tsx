"use client";

import { useRef } from "react";
import ReactMarkdown from 'react-markdown';

type ReadingResponse = {
  reading: string;
  loading: boolean;
  error: string | null;
};

type ReadingResultProps = {
  response: ReadingResponse;
  onNewReading: () => void;
};

const ReadingResult = ({ response, onNewReading }: ReadingResultProps) => {
  const readingRef = useRef<HTMLDivElement>(null);
  
  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow || !readingRef.current) return;
    
    const content = readingRef.current.innerHTML;
    
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Your 1212 Angel Number Reading</title>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
            }
            h1, h2, h3 {
              color: #6d28d9;
            }
            h1 {
              text-align: center;
              border-bottom: 2px solid #e5e7eb;
              padding-bottom: 15px;
              margin-bottom: 30px;
            }
            img {
              max-width: 150px;
              margin: 0 auto 30px;
              display: block;
            }
            p {
              margin-bottom: 16px;
            }
            .footer {
              margin-top: 50px;
              text-align: center;
              font-size: 14px;
              color: #6b7280;
              border-top: 1px solid #e5e7eb;
              padding-top: 20px;
            }
          </style>
        </head>
        <body>
          <img src="https://images.unsplash.com/photo-1618022125607-3e4b5b95f843?auto=format&fit=crop&w=300&h=300&q=80" alt="Angel Number 1212" />
          ${content}
          <div class="footer">
            <p>This reading was generated for you by AngelNumber1212.com</p>
            <p>©${new Date().getFullYear()} Angel Number 1212 - Personal Spiritual Guidance</p>
          </div>
        </body>
      </html>
    `);
    
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 500);
  };
  
  const handleCopyToClipboard = async () => {
    if (!readingRef.current) return;
    
    try {
      await navigator.clipboard.writeText(response.reading);
      alert("Reading copied to clipboard!");
    } catch (err) {
      alert("Failed to copy to clipboard. Please try again.");
    }
  };
  
  const handleShare = () => {
    if (navigator.share && response.reading) {
      navigator.share({
        title: 'My 1212 Angel Number Reading',
        text: response.reading.substring(0, 100) + '...',
        url: window.location.href,
      })
      .catch((error) => console.error('Error sharing:', error));
    } else {
      handleCopyToClipboard();
    }
  };
  
  if (response.loading) {
    return (
      <div className="p-8 bg-gradient-to-br from-dark-900/90 to-primary-900/80 backdrop-blur-lg rounded-2xl border border-white/10 shadow-xl">
        <div className="flex flex-col items-center justify-center min-h-[300px] text-center">
          <div className="relative w-20 h-20 mb-6">
            <div className="absolute inset-0 rounded-full bg-gold-300/20 animate-ping"></div>
            <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-mystical-600 to-accent-600">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Connecting with Divine Guidance...</h3>
          <p className="text-white/70">We're channeling your personalized 1212 angel number reading.</p>
          <div className="mt-8 flex space-x-2">
            <span className="w-3 h-3 bg-gold-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
            <span className="w-3 h-3 bg-gold-300 rounded-full animate-bounce" style={{ animationDelay: '250ms' }}></span>
            <span className="w-3 h-3 bg-gold-300 rounded-full animate-bounce" style={{ animationDelay: '500ms' }}></span>
          </div>
        </div>
      </div>
    );
  }
  
  if (response.error) {
    return (
      <div className="p-8 bg-gradient-to-br from-dark-900/90 to-primary-900/80 backdrop-blur-lg rounded-2xl border border-white/10 shadow-xl">
        <div className="flex flex-col items-center justify-center min-h-[300px] text-center">
          <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center mb-6">
            <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Connection Interrupted</h3>
          <p className="text-white/70 mb-6">{response.error}</p>
          <button
            onClick={onNewReading}
            className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-white transition-all"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="p-6 md:p-10 bg-gradient-to-br from-gray-900/90 via-blue-900/40 to-purple-900/80 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl animate-fade-in">
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between mb-8 pb-6 border-b border-white/10">
        <h2 className="text-2xl md:text-3xl font-bold text-white font-serif mt-4 md:mt-0 flex items-center">
          <span className="mr-3 text-gold-300">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
            </svg>
          </span>
          Your Divine 1212 Reading
        </h2>
        <div className="flex space-x-3">
          <button
            onClick={onNewReading}
            className="px-4 py-2 text-sm bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all flex items-center transform hover:-translate-y-1 duration-300"
          >
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
            New Reading
          </button>
        </div>
      </div>
      
      <div className="prose prose-invert prose-sm md:prose-base mx-auto max-w-none">
        {response.loading ? (
          <div className="flex justify-center py-12">
            <svg className="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        ) : response.error ? (
          <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-white">
            <p className="font-medium text-lg mb-1">Error</p>
            <p>{response.error}</p>
          </div>
        ) : (
          <div 
            ref={readingRef} 
            className="reading-content"
          >
            <ReactMarkdown
              components={{
                h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-gold-300 mb-6 mt-8" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-gold-300 mb-4 mt-6 flex items-center before:content-[''] before:w-3 before:h-3 before:bg-gold-300/40 before:mr-2 before:rounded-full" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-xl font-bold text-gold-200 mb-3 mt-5" {...props} />,
                p: ({node, ...props}) => <p className="mb-4 leading-relaxed text-white/90" {...props} />,
                ul: ({node, ...props}) => <ul className="mb-6 ml-5 space-y-2" {...props} />,
                ol: ({node, ...props}) => <ol className="mb-6 ml-5 space-y-2 list-decimal" {...props} />,
                li: ({node, ...props}) => <li className="mb-1 pl-1" {...props} />,
                em: ({node, ...props}) => <em className="text-gold-200 font-medium not-italic" {...props} />,
                strong: ({node, ...props}) => <strong className="text-white font-bold" {...props} />,
                blockquote: ({node, ...props}) => (
                  <blockquote className="pl-4 italic border-l-4 border-gold-300/30 my-6 py-2 px-2 bg-mystical-600/10 rounded-r-lg text-white/90" {...props} />
                ),
              }}
            >
              {response.reading}
            </ReactMarkdown>
          </div>
        )}
      </div>
      
      <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap gap-3 justify-center">
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-gradient-to-r from-mystical-500/40 to-mystical-600/40 hover:from-mystical-500/60 hover:to-mystical-600/60 text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center shadow-lg hover:shadow-mystical-500/20"
        >
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
          </svg>
          Save & Print
        </button>
        <button
          onClick={handleCopyToClipboard}
          className="px-4 py-2 bg-gradient-to-r from-blue-500/40 to-blue-600/40 hover:from-blue-500/60 hover:to-blue-600/60 text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center shadow-lg hover:shadow-blue-500/20"
        >
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
            <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
          </svg>
          Copy Text
        </button>
        <button
          onClick={handleShare}
          className="px-4 py-2 bg-gradient-to-r from-gold-400/40 to-gold-600/40 hover:from-gold-400/60 hover:to-gold-600/60 text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center shadow-lg hover:shadow-gold-500/20"
        >
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
          </svg>
          Share
        </button>
      </div>
      
      <div className="mt-8 p-5 bg-mystical-600/20 border border-mystical-500/30 rounded-xl backdrop-blur-sm shadow-inner">
        <div className="flex items-start">
          <div className="mr-3 mt-1">
            <div className="text-mystical-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
              </svg>
            </div>
          </div>
          <p className="text-white/70 text-sm">
            This reading is a spiritual interpretation of angel number 1212 based on your inputs. 
            Consider this guidance as a tool for reflection and inspiration on your spiritual journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReadingResult; 