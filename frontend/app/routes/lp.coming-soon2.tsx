import { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { useSearchParams } from "@remix-run/react";
import Footer from "../components/Footer";
import { HEADLINES } from "~/config/headlines";
import { trackFBEvent } from "~/components/FacebookPixel";
import CookieConsent from "~/components/CookieConsent";
import LoginButton from "~/components/LoginButton";
import React from "react";

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
  const [email, setEmail] = useState('');
  const [searchParams] = useSearchParams();
  const variant = searchParams.get('v') || '1';
  const content = HEADLINES[variant as keyof typeof HEADLINES] || HEADLINES['1'];

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <LoginButton />
      <main className="flex-grow">
        <div className="landing-page w-full bg-[#f7f3e9]">
          <div className="h-[70vh] relative">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img
              src="/images/old-cap-collier.png"
              alt="Product background"
              className="w-full h-full object-cover object-[15%_center]"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-[#f7f3e9] uppercase max-w-[12ch] sm:max-w-[18ch] lg:max-w-[24ch] mx-auto leading-tight">
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
          <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
            <div className="space-y-4 text-center">
              <div className="flex justify-center">
                <img
                  src="/images/vintage-lock-closed.svg"
                  alt="Vintage lock"
                  className="h-12 w-12"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">
                UNLOCK YOUR INVITATION TO FORGOTTEN MYSTERIES
              </h2>
              <form onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = `/lp/thank-you?v=${variant}`;
                }} 
                className="flex flex-col sm:flex-row gap-2 max-w-2xl mx-auto w-full justify-center"
              >
                <div className="flex-grow w-full sm:flex-grow-0">
                  <input
                    className="w-full px-4 py-2 rounded border border-gray-900/20 
                              focus:outline-none focus:ring-2 focus:ring-gray-900/50
                              bg-[#f7f3e9]"
                    placeholder="Enter Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button 
                  type="submit" 
                  className="px-6 py-2 rounded bg-gray-900 text-[#f7f3e9] hover:bg-gray-800 transition-colors 
                            w-full sm:w-48 md:w-48 whitespace-nowrap"
                >
                  CLAIM MY ACCESS
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
}