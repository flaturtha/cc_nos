project/
├── public/
│   ├── logos/
│   │   ├── atticus.png         # Standalone Atticus logo
│   │   ├── logo-full.png       # Full logo with text
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Website header
│   │   ├── Footer.jsx          # Footer with standalone logo
│   │   ├── Hero.jsx            # Hero section with full logo
│   ├── pages/
│   │   ├── index.jsx           # Main landing page
│   ├── styles/
│   │   ├── globals.css         # Tailwind base styles
│   └── tailwind.config.js      # Tailwind configuration


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1C1C1E',
        secondary: '#8A0707',
        accent: {
          gold: '#C4A484',
          sepia: '#D8C3A5',
          blue: '#1E3A5F',
        },
        background: '#F5F0E1',
        text: '#333333',
      },
      fontFamily: {
        heading: ['Breamcatcher', 'serif'],
        body: ['Crimson Text', 'serif'],
        alt: ['EB Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};

## header

import React from 'react';

const Header = () => {
  return (
    <header className="bg-background text-primary sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <img src="/logos/logo-full.png" alt="Logo" className="h-12" />
        <nav>
          <ul className="flex space-x-6 text-sm font-body">
            <li><a href="#about" className="hover:text-secondary">About</a></li>
            <li><a href="#books" className="hover:text-secondary">Books</a></li>
            <li><a href="#contact" className="hover:text-secondary">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

## hero

import React from 'react';

const Hero = () => {
  return (
    <section className="bg-background text-center py-20">
      <div className="container mx-auto">
        <img src="/logos/logo-full.png" alt="Logo" className="mx-auto h-20 mb-6" />
        <h1 className="text-4xl font-heading text-primary mb-4">
          Before Holmes, Before Poirot—These Sleuths Led the Way
        </h1>
        <p className="text-lg font-body text-text">
          Discover and preserve the forgotten tales of mystery, murder, and intrigue.
        </p>
        <div className="mt-8">
          <a href="#explore" className="bg-secondary text-white px-6 py-3 rounded-md font-body hover:bg-accent-gold">
            Explore the Collection
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;


## footer
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background py-6">
      <div className="container mx-auto flex flex-col items-center text-center">
        <img src="/logos/atticus.png" alt="Atticus Logo" className="h-10 mb-4" />
        <p className="text-sm font-body text-text mb-2">
          &copy; {new Date().getFullYear()} Tales of Murder. All Rights Reserved.
        </p>
        <div className="flex space-x-4">
          <a href="#privacy" className="text-sm font-body hover:text-secondary">Privacy Policy</a>
          <a href="#terms" className="text-sm font-body hover:text-secondary">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


## main landing/index

import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="bg-background text-text">
      <Header />
      <main>
        <Hero />
        {/* Add more sections here */}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;


## icon set ==> not working ... rebuild!