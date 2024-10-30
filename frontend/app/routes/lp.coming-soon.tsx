import { MetaFunction } from "@remix-run/node";
import { useEffect } from "react";
import { useSearchParams } from "@remix-run/react";
import Footer from "../components/Footer";
import { HEADLINES } from "~/config/headlines";
import { trackFBEvent } from "~/components/FacebookPixel";

export const meta: MetaFunction = () => {
  return [
    { title: "Tales of Murder Press - Classic Crime Fiction" },
    { name: "description", content: "Rediscover the lost classics of crime fiction with Tales of Murder Press." },
  ];
};

export default function ComingSoon() {
  const [searchParams] = useSearchParams();
  const variant = searchParams.get('v') || '1';
  const content = HEADLINES[variant as keyof typeof HEADLINES] || HEADLINES['1'];

  useEffect(() => {
    // Track page view with UTM params
    const utmSource = searchParams.get('utm_source');
    const utmMedium = searchParams.get('utm_medium');
    const utmCampaign = searchParams.get('utm_campaign');

    trackFBEvent('LandingPageView', {
      variant,
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign
    });
  }, [variant, searchParams]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=KChqVc';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="landing-page w-full">
          <div 
            className="hero-section min-h-screen flex flex-col justify-between bg-cover bg-no-repeat
                       bg-[position:60%_center] 
                       md:bg-[position:50%_center] 
                       lg:bg-[position:15%_center]
                       transition-[background-position] duration-700"
            style={{ 
              backgroundImage: 'url("/images/old-cap-collier.png")'
            }}
          >
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>

            {/* Add a subtle animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent 
                            animate-gradient-shift pointer-events-none"></div>

            {/* Main content */}
            <div className="relative flex-grow flex items-end pb-16">
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="flex flex-col md:flex-row justify-end items-center gap-6 md:gap-8 
                              pt-20 md:pt-0 px-4 md:px-0">
                  {/* Content container */}
                  <div className="w-full md:w-7/12 lg:w-1/2 md:ml-auto lg:ml-32 space-y-6 md:space-y-8
                                bg-gray-900/50 backdrop-blur-md
                                border border-[#e8dab5]/20
                                rounded-lg p-8 shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
                    {/* Enhanced title styling with vintage corner */}
                    <div className="relative space-y-4">
                      {/* Corner decoration integrated with title */}
                      <div className="absolute -top-16 -left-16 w-32 h-32 opacity-40
                                      transform rotate-0 transition-all duration-700 ease-in-out">
                        <img 
                          src="/images/vintage-corner.png" 
                          alt="" 
                          className="w-full h-full object-contain"
                          loading="eager"
                        />
                      </div>
                      
                      <h1 className="font-bold text-center md:text-left 
                                     text-xl sm:text-2xl md:text-3xl lg:text-4xl
                                     tracking-wide leading-tight text-[#e8dab5] 
                                     drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]
                                     [text-shadow:_2px_2px_12px_rgb(0_0_0_/_60%),_-1px_-1px_4px_rgb(0_0_0_/_40%)]
                                     relative z-10">
                        {content.title}
                      </h1>
                    </div>
                    
                    {/* Benefits list - removed some of the heavy shadows since we have the background now */}
                    <div className="mt-4 text-[#e8dab5] text-sm">
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <span className="text-[#e8dab5]">✓</span>
                          <span>Get exclusive access to rare mysteries</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-[#e8dab5]">✓</span>
                          <span>Full text online free</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-[#e8dab5]">✓</span>
                          <span>eBook, print, audiobook editions available</span>
                        </li>
                      </ul>
                    </div>

                    {/* Form container - simplified since we have the parent background */}
                    <div className="w-full mt-6">
                      <div className="p-4 rounded-lg
                                    border border-[#e8dab5]/30
                                    transition-all duration-300 ease-in-out">
                        <div 
                          className="klaviyo-form-Y47xkP" 
                          id="klaviyo-form"
                          style={{
                            '--form-title-color': '#e8dab5',
                            '--form-title-text-shadow': '2px 2px 8px rgba(0,0,0,0.4)',
                            '--form-button-margin': '0.5rem 0',
                            '--form-padding': '0.25rem',
                            '--form-row-gap': '0.75rem',
                            '--form-title-font-size': '1.5rem',
                            '--form-input-padding': '0.75rem',
                            '--form-input-border-color': 'rgba(232, 218, 181, 0.4)',
                            '--form-input-background': 'rgba(232, 218, 181, 0.95)',
                            '--form-input-color': 'rgb(17, 24, 39)',
                            '--form-button-background': 'rgb(17, 24, 39)',
                            '--form-button-color': '#e8dab5',
                            '--form-button-hover-background': 'rgb(31, 41, 55)',
                            '--form-button-shadow': '0 4px 12px rgba(0,0,0,0.2)'
                          } as React.CSSProperties}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="w-full relative">
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
