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
            className="hero-section min-h-screen flex flex-col justify-between bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: 'url("/images/old-cap-collier.png")',
              backgroundPosition: '15% center'
            }}
          >
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>

            {/* Main content */}
            <div className="relative flex-grow flex items-center">
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="flex flex-col md:flex-row justify-end items-center gap-6 md:gap-8 
                              pt-20 md:pt-0">
                  {/* Content container */}
                  <div className="w-full md:w-7/12 lg:w-1/2 md:ml-auto lg:ml-32 space-y-6 md:space-y-8">
                    {/* Enhanced title styling */}
                    <h1 className="font-bold text-center md:text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                                 tracking-wide leading-tight text-[#e8dab5] 
                                 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]
                                 [text-shadow:_2px_2px_8px_rgb(0_0_0_/_40%)]
                                 transition-all duration-300 ease-in-out
                                 hover:scale-[1.02] hover:[text-shadow:_3px_3px_12px_rgb(0_0_0_/_50%)]">
                      {content.title}
                    </h1>
                    
                    {/* Enhanced description styling */}
                    <div className="w-full">
                      <p className="w-full text-gray-900 font-bold text-lg sm:text-xl md:text-2xl 
                                  bg-[#e8dab5]/95 backdrop-blur-sm px-6 py-3 text-center
                                  border-l-4 border-r-4 border-gray-900/20
                                  shadow-[0_4px_12px_rgba(0,0,0,0.1)]
                                  transition-all duration-300 ease-in-out
                                  hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)]">
                        {content.description}
                      </p>
                    </div>

                    {/* Enhanced form container */}
                    <div className="w-full mt-6">
                      <div className="bg-gray-900/60 backdrop-blur-sm p-4 rounded-lg
                                    shadow-[0_4px_16px_rgba(0,0,0,0.2)]
                                    border border-[#e8dab5]/30
                                    transition-all duration-300 ease-in-out
                                    hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)]">
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
