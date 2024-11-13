import type { MetaFunction } from "@remix-run/node";
import { Book, Bookmark, Headphones, RefreshCw, Smartphone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@remix-run/react";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "About Tales of Murder - A Vintage Mystery Library" },
    { name: "description", content: "Discover the story behind Tales of Murder, your gateway to classic detective fiction and vintage mysteries from the golden age of detective stories." },
  ];
};

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-900 py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/">
              <img 
                src="/images/logo_full.svg" 
                alt="Tales of Murder" 
                className="w-full h-auto [filter:invert(1)] max-h-16"
              />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="flex flex-col min-h-screen bg-stone-100 dark:bg-stone-900">
          <main className="flex-1">
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-stone-800 dark:text-stone-100">
                      Preserving the Golden Age of Crime Fiction
                    </h1>
                    <p className="mx-auto max-w-[700px] text-stone-600 md:text-xl dark:text-stone-400">
                      Introducing forgotten classics to a new generation of mystery lovers.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32">
              <div className="container px-4 md:px-6">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <Book className="w-6 h-6 text-red-800 dark:text-red-500" />
                        <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100">Our Mission</h2>
                      </div>
                      <p className="mt-2 text-stone-600 dark:text-stone-400">
                        To preserve and promote vintage murder mystery and crime fiction, ensuring these literary treasures are not lost to time.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <Bookmark className="w-6 h-6 text-red-800 dark:text-red-500" />
                        <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100">Our Collection</h2>
                      </div>
                      <p className="mt-2 text-stone-600 dark:text-stone-400">
                        Curated works from the golden age of detective fiction, featuring forgotten gems and celebrated classics.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <Smartphone className="w-6 h-6 text-red-800 dark:text-red-500" />
                        <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100">Digital Access</h2>
                      </div>
                      <p className="mt-2 text-stone-600 dark:text-stone-400">
                        Free online access to our entire catalog, with enhanced editions available to support our preservation efforts.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <RefreshCw className="w-6 h-6 text-red-800 dark:text-red-500" />
                        <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100">Our Process</h2>
                      </div>
                      <p className="mt-2 text-stone-600 dark:text-stone-400">
                        We carefully digitize, restore, and format each work, ensuring its authenticity while making it accessible for modern readers.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32 bg-stone-200 dark:bg-stone-800">
              <div className="container px-4 md:px-6">
                <div className="grid gap-10 lg:grid-cols-2">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-stone-800 dark:text-stone-100">
                      Our Story
                    </h2>
                    <p className="text-stone-600 dark:text-stone-400">
                      Founded by a group of passionate bibliophiles and mystery enthusiasts, Tales of Murder began as a project 
                      to digitize out-of-print detective novels. Today, we're dedicated to bringing these forgotten masterpieces 
                      back to life.
                    </p>
                    <p className="text-stone-600 dark:text-stone-400">
                      Our mission goes beyond mere preservation. We strive to introduce these timeless stories to a new generation
                      of readers, celebrating the ingenuity and craft of the authors who shaped the genre we love.
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      alt="Vintage books collection"
                      className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                      height="310"
                      src="/images/old-cap-collier.png"
                      width="550"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32">
              <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-stone-800 dark:text-stone-100">
                  Available Formats
                </h2>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <Book className="w-12 h-12 text-red-800 dark:text-red-500 mb-4" />
                      <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100">Online Reading</h3>
                      <p className="mt-2 text-stone-600 dark:text-stone-400">
                        Free access to our entire catalog through our user-friendly online reader.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <Smartphone className="w-12 h-12 text-red-800 dark:text-red-500 mb-4" />
                      <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100">eBook</h3>
                      <p className="mt-2 text-stone-600 dark:text-stone-400">
                        Enhanced ePub and Kindle versions with improved formatting and extra content.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <Headphones className="w-12 h-12 text-red-800 dark:text-red-500 mb-4" />
                      <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100">Coming Soon</h3>
                      <p className="mt-2 text-stone-600 dark:text-stone-400">
                        More formats and features are in development. Stay tuned!
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          </main>
        </div>
      </main>

      <Footer />
    </div>
  );
} 