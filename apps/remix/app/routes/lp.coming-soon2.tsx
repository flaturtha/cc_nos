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

function HighlightedText({ text, highlights }: { text: string, highlights: string[] }) {
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
        
        return (
          <React.Fragment key={index}>
            {isHighlighted ? (
              <span className="font-[1000] tracking-wide">
                {part}
              </span>
            ) : (
              <span className="font-light lg:font-extralight">
                {part}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </>
  );
}

export default function ComingSoon2() {
  const [searchParams] = useSearchParams();
  const variant = searchParams.get('utm_source') || '1';
  const content = HEADLINES[variant as keyof typeof HEADLINES] || HEADLINES['1'];

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
          <div className="h-[70vh] relative">
            <div className="absolute inset-0 bg-black/25 z-10"></div>
            <img
              src="/images/old-cap-collier.png"
              alt="Product background"
              className="w-full h-full object-cover object-[15%_center]"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-[#f7f3e9] uppercase max-w-[16ch] sm:max-w-[18ch] lg:max-w-[24ch] mx-auto leading-tight">
                <HighlightedText 
                  text={content.title} 
                  highlights={content.highlights || []} 
                />
              </h1>
              
              <div className="w-full max-w-2xl my-12">
                <p className="text-gray-900 font-bold text-base sm:text-lg md:text-xl 
                              bg-[#f7f3e9]/95 backdrop-blur-sm 
                              px-4 py-2 text-center inline-block mx-auto
                              border-l-4 border-r-4 border-gray-900/20
                              shadow-[0_4px_12px_rgba(0,0,0,0.1)]
                              transition-all duration-300 ease-in-out
                              hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)]">
                  A Vintage Mystery Library
                </p>
              </div>

              <div className="text-[#f7f3e9] text-sm sm:text-base max-w-xl">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 justify-center">
                    <span className="text-[#f7f3e9]">✓</span>
                    <span>Get exclusive access to rare mysteries</span>
                  </li>
                  <li className="flex items-center gap-2 justify-center">
                    <span className="text-[#f7f3e9]">✓</span>
                    <span>Full text online free</span>
                  </li>
                  <li className="flex items-center gap-2 justify-center">
                    <span className="text-[#f7f3e9]">✓</span>
                    <span>eBook, print, audiobook editions available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto px-4 py-4 space-y-10">
            <div className="space-y-6 text-center">
              <div className="flex justify-center">
                <img
                  src="/images/key3.svg"
                  alt="Vintage key"
                  className="h-16 w-auto transform -rotate-90"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">
                UNLOCK YOUR INVITATION TO FORGOTTEN MYSTERIES
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