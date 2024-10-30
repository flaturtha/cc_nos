import { MetaFunction } from "@remix-run/node";
import { useState } from "react";
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

export default function ComingSoon2() {
  const [email, setEmail] = useState('');
  const [searchParams] = useSearchParams();
  const variant = searchParams.get('v') || '1';
  const content = HEADLINES[variant as keyof typeof HEADLINES] || HEADLINES['1'];

  const [titleStart, titleEnd] = content.title.includes('—') 
    ? [content.title.split('—')[0].trim() + ' —', content.title.split('—')[1].trim()]
    : content.title.split(' ').reduce((acc, word, i, arr) => {
        const midpoint = Math.ceil(arr.length / 2);
        if (i < midpoint) acc[0] = (acc[0] ? acc[0] + ' ' : '') + word;
        else acc[1] = (acc[1] ? acc[1] + ' ' : '') + word;
        return acc;
      }, ['', '']);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Email submitted:', email);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <main className="flex-grow">
        <div className="landing-page w-full bg-[#f7f3e9]">
          <div className="h-[70vh] relative">
            <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
            <img
              src="/images/old-cap-collier.png"
              alt="Product background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#f7f3e9]">
                <span className="block mb-2">{titleStart}</span>
                <span className="block mb-4">{titleEnd}</span>
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
                <svg
                  className="h-8 w-8 text-gray-900"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
                  <circle cx="16.5" cy="7.5" r=".5" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">BE THE FIRST TO KNOW</h2>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto w-full">
                <input
                  className="flex-grow px-4 py-2 rounded border border-gray-900/20 
                            focus:outline-none focus:ring-2 focus:ring-gray-900/50
                            bg-[#f7f3e9] w-full"
                  placeholder="Enter Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button 
                  type="submit" 
                  className="px-6 py-2 rounded bg-gray-900 text-[#f7f3e9] hover:bg-gray-800 transition-colors 
                            w-full sm:w-40 md:w-44"
                >
                  SIGN UP
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}