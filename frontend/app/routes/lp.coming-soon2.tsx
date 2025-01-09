import { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from "react";
import { useSearchParams } from "@remix-run/react";
import Footer from "../components/Footer";
import { HEADLINES } from "~/config/headlines";
import { trackFBEvent } from "~/components/FacebookPixel";
import CookieConsent from "~/components/CookieConsent";
import LoginButton from "~/components/LoginButton";
import React from "react";
import LaunchForm2 from "~/components/LaunchForm2";

export const meta: MetaFunction = () => {
  return [
    { title: "Tales of Murder Press - Classic Crime Fiction" },
    { name: "description", content: "Rediscover the lost classics of crime fiction with Tales of Murder Press." },
  ];
};

function HighlightedText({ 
  text, 
  highlights, 
  variant 
}: { 
  text: string, 
  highlights: string[], 
  variant: string 
}) {
  if (!highlights || highlights.length === 0) return <span className="uppercase font-light lg:font-extralight">{text}</span>;
  
  const pattern = new RegExp(
    `(${highlights.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'gi'
  );
  
  const parts = text.split(pattern);
  
  return (
    <>
      {parts.map((part, index) => {
        const isHighlighted = highlights.some(h => 
          h.toLowerCase() === part.toLowerCase()
        );
        
        if (isHighlighted) {
          const style = HEADLINES[variant as keyof typeof HEADLINES]?.styles?.[part];
          if (style === "italic") {
            return <span key={index} className="font-light lg:font-extralight italic">{part}</span>;
          } else if (style === "bold") {
            return <span key={index} className="font-[1000] tracking-wide">{part}</span>;
          }
          return <span key={index} className="font-[1000] tracking-wide">{part}</span>;
        }
        
        return (
          <span key={index} className="font-light lg:font-extralight">
            {part}
          </span>
        );
      })}
    </>
  );
}

export default function ComingSoon2() {
  const [searchParams] = useSearchParams();
  const variant = searchParams.get('utm_source') || '1';
  const content = HEADLINES[variant as keyof typeof HEADLINES] || HEADLINES['1'];

  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  // Page view tracking
  useEffect(() => {
    if (window._learnq) {
      window._learnq.push(['track', 'Viewed Landing Page', {
        'Landing Page Variant': variant,
        'Page URL': window.location.href,
        'Page Title': document.title,
        'UTM Source': variant,
        'UTM Medium': searchParams.get('utm_medium') || '',
        'UTM Campaign': searchParams.get('utm_campaign') || '',
        'UTM Term': searchParams.get('utm_term') || '',
        'Timestamp': new Date().toISOString()
      }]);
    }

    // Also push to dataLayer for GTM
    window.dataLayer?.push({
      event: 'pageView',
      pageVariant: variant,
      utmSource: variant,
      utmMedium: searchParams.get('utm_medium') || '',
      utmCampaign: searchParams.get('utm_campaign') || '',
      utmTerm: searchParams.get('utm_term') || ''
    });
  }, [variant, searchParams]);

  // Scroll depth tracking
  useEffect(() => {
    let maxScroll = 0;
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100
      );
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        if (maxScroll >= 50 && !sessionStorage.getItem('scrolled50')) {
          sessionStorage.setItem('scrolled50', 'true');
          window._learnq?.push(['track', 'Scrolled 50%', {
            'Landing Page Variant': variant,
            'Page URL': window.location.href,
            'UTM Source': variant,
            'UTM Medium': searchParams.get('utm_medium') || '',
            'UTM Campaign': searchParams.get('utm_campaign') || '',
            'UTM Term': searchParams.get('utm_term') || '',
            'Timestamp': new Date().toISOString()
          }]);
        }
        if (maxScroll >= 90 && !sessionStorage.getItem('scrolled90')) {
          sessionStorage.setItem('scrolled90', 'true');
          window._learnq?.push(['track', 'Scrolled 90%', {
            'Landing Page Variant': variant,
            'Page URL': window.location.href,
            'UTM Source': variant,
            'UTM Medium': searchParams.get('utm_medium') || '',
            'UTM Campaign': searchParams.get('utm_campaign') || '',
            'UTM Term': searchParams.get('utm_term') || '',
            'Timestamp': new Date().toISOString()
          }]);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [variant, searchParams]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <LoginButton />
      <main className="flex-grow">
        <div className="landing-page w-full bg-[#f7f3e9]">
          <div className={`relative before:block ${
            variant === '32'
              ? 'before:pb-[190%] sm:before:pb-[66.67%]'  // Extra tall for variant 32
              : variant === '44' || variant === '40' || variant === '34'
                ? 'before:pb-[170%] sm:before:pb-[66.67%]'  // Taller for variants 44, 40, and 34
                : 'before:pb-[150%] sm:before:pb-[66.67%]'  // Normal height for other variants
          }`}>
            <div className="absolute inset-0 bg-black/45 z-10"></div>
            <img
              src={content.image || "/images/old-cap-collier.png"}
              alt="Product background"
              className="absolute top-0 left-0 w-full h-full object-cover"
              style={{ 
                objectPosition: typeof content.imagePosition === 'object' 
                  ? content.imagePosition.mobile 
                  : content.imagePosition || 'center 30%'
              }}
            />
            <div className="absolute inset-0 flex flex-col justify-start items-center text-center z-20 px-4 pt-24">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-[#f7f3e9] uppercase max-w-[18ch] mx-auto leading-snug sm:leading-normal">
                <HighlightedText 
                  text={content.title} 
                  highlights={content.highlights || []} 
                  variant={variant}
                />
              </h1>
              
              <div className="w-full max-w-2xl mt-3 mb-4 sm:mt-6 sm:mb-6 md:mt-8 md:mb-8">
                <p className="text-gray-900 font-bold text-xs sm:text-sm md:text-lg lg:text-xl 
                              bg-[#f7f3e9]/95 backdrop-blur-sm 
                              px-2 py-1 sm:px-4 sm:py-2 text-center inline-block mx-auto
                              border-l-4 border-r-4 border-gray-900/20
                              shadow-[0_4px_12px_rgba(0,0,0,0.1)]
                              transition-all duration-300 ease-in-out
                              hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)]">
                  A Vintage Mystery Library
                </p>
              </div>

              <div className="text-[#f7f3e9] text-sm sm:text-base md:text-lg max-w-xl">
                <ul className="space-y-0.5 sm:space-y-1 md:space-y-1.5">
                  <li className="flex items-center gap-1 sm:gap-2 justify-center">
                    <span className="text-[#f7f3e9] text-base sm:text-lg md:text-xl">✓</span>
                    <span>Get exclusive access to rare mysteries</span>
                  </li>
                  <li className="flex items-center gap-1 sm:gap-2 justify-center">
                    <span className="text-[#f7f3e9] text-sm sm:text-base md:text-lg">✓</span>
                    <span>Full text online free</span>
                  </li>
                  <li className="flex items-center gap-1 sm:gap-2 justify-center">
                    <span className="text-[#f7f3e9] text-sm sm:text-base md:text-lg">✓</span>
                    <span>eBook, print, audiobook editions available</span>
                  </li>
                </ul>
              </div>

              <div className={`mt-16 ${
                variant === '32' ? 'mb-4' : 'mb-2'
              } animate-bounce cursor-pointer hidden md:block`} onClick={handleScrollToBottom}>
                <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="11" stroke="#f7f3e9" strokeWidth="2"/>
                  <path d="M7 10L12 15L17 10" stroke="#f7f3e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-8 sm:space-y-10">
            <div className="space-y-4 sm:space-y-6 text-center">
              <div className="flex justify-center">
                <img
                  src="/images/key3.svg"
                  alt="Vintage key"
                  className="h-12 sm:h-16 w-auto transform -rotate-90"
                />
              </div>
              <h2 className="space-y-2 sm:space-y-3">
                <div className="text-2xl sm:text-3xl font-bold text-[#f7f3e9] bg-gray-900 py-2 px-4 inline-block shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.3)] transition-shadow duration-300">
                  UNLOCK YOUR INVITATION
                </div>
                <div className="text-3xl sm:text-4xl font-semibold text-gray-900">
                  +
                </div>
                <div className="text-lg sm:text-xl font-semibold text-gray-900">
                  CLAIM YOUR FREE VINTAGE MYSTERY NOVEL <span className="italic">(ebook edition)</span>
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-600 mt-1 flex items-center justify-center flex-wrap gap-x-1.5 sm:gap-x-3">
                  {['BAT WING', 'INTO THE HEART OF AUSTRALIA', 'THE BRADYS AND THE CHINESE IDOL', 'THE DEAD SECRET', 'THE EXPRESSMAN AND THE DETECTIVE'].map((title, index, array) => (
                    <>
                      <button 
                        key={index}
                        onClick={handleScrollToBottom}
                        className="italic hover:text-gray-900 hover:font-semibold transition-all duration-200 cursor-pointer"
                      >
                        {title}
                      </button>
                      {index < array.length - 1 && (
                        <span className="text-gray-400 font-light text-[0.8em] sm:text-base">✦</span>
                      )}
                    </>
                  ))}
                </div>
              </h2>
              <LaunchForm2 variant={variant} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
}