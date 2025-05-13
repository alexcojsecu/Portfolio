'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const handleOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    handleOrientation();
    window.addEventListener('resize', handleOrientation);
    return () => window.removeEventListener('resize', handleOrientation);
  }, []);

  return (
    <section className="bg-black py-16 px-6">
      <div className="scale-110 transform origin-top">
        <div className={isPortrait ? 'mx-4' : ''}>
          <div className="relative w-full max-w-3xl mx-auto border border-zinc-700 rounded-2xl p-6">
            {/* Social Icons / Dropdown */}
            <div className={`absolute ${isPortrait ? 'top-6 right-6' : 'top-3 right-6'}`}>
              {isPortrait ? (
                <div className="relative">
                  {/* Dropdown Toggle Button */}
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`${
                      isPortrait ? 'pl-4 pr-4 py-3' : 'p-2'
                    } bg-zinc-800 rounded-lg text-white hover:bg-zinc-700 transition-all`}
                  >
                    <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a1.5 1.5 0 0 1-1.06-.44L5.5 8.12a1 1 0 0 1 1.41-1.41L10 9.59l3.09-2.88a1 1 0 1 1 1.41 1.41l-3.44 3.44A1.5 1.5 0 0 1 10 12z" />
                    </svg>
                  </button>

                  {/* Dropdown Content */}
                  <div
                    className={`absolute right-0 mt-2 flex flex-col gap-2 bg-zinc-800 p-2 rounded-lg shadow-lg z-50 transform transition-all duration-300 ease-in-out ${
                      dropdownOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <a
                      href="https://github.com/alexcojsecu"
                      className="p-2 bg-zinc-700 rounded-md text-white hover:bg-zinc-600 transition-all"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.36-1.35-3.36-1.35a2.65 2.65 0 0 0-1.1-1.46c-.9-.61.07-.6.07-.6a2.1 2.1 0 0 1 1.55 1.05 2.16 2.16 0 0 0 2.95.84 2.15 2.15 0 0 1 .64-1.35c-2.22-.25-4.56-1.11-4.56-4.93a3.86 3.86 0 0 1 1-2.67 3.6 3.6 0 0 1 .1-2.63s.84-.27 2.75 1.02a9.37 9.37 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02a3.6 3.6 0 0 1 .1 2.63 3.86 3.86 0 0 1 1 2.67c0 3.83-2.34 4.68-4.57 4.93a2.41 2.41 0 0 1 .69 1.87v2.78c0 .26.18.58.69.48A10 10 0 0 0 12 2z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/alexandrucojescu/"
                      className="p-2 bg-zinc-700 rounded-md text-white hover:bg-zinc-600 transition-all"
                    >
                      <div className="w-5 h-5 relative">
                        <Image
                          src="/Linkedin.webp"
                          alt="LinkedIn"
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="flex gap-3">
                  <a
                    href="https://github.com/alexcojsecu"
                    className="p-2 bg-zinc-800 rounded-lg text-white hover:bg-zinc-700 transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.36-1.35-3.36-1.35a2.65 2.65 0 0 0-1.1-1.46c-.9-.61.07-.6.07-.6a2.1 2.1 0 0 1 1.55 1.05 2.16 2.16 0 0 0 2.95.84 2.15 2.15 0 0 1 .64-1.35c-2.22-.25-4.56-1.11-4.56-4.93a3.86 3.86 0 0 1 1-2.67 3.6 3.6 0 0 1 .1-2.63s.84-.27 2.75 1.02a9.37 9.37 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02a3.6 3.6 0 0 1 .1 2.63 3.86 3.86 0 0 1 1 2.67c0 3.83-2.34 4.68-4.57 4.93a2.41 2.41 0 0 1 .69 1.87v2.78c0 .26.18.58.69.48A10 10 0 0 0 12 2z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/alexandrucojescu/"
                    className="p-2 bg-zinc-800 rounded-lg text-white hover:bg-zinc-700 transition-all"
                  >
                    <div className="w-5 h-5 relative">
                      <Image
                        src="/Linkedin.webp"
                        alt="LinkedIn"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl lg:text-5xl font-bold text-white">Alexandru Cojescu</h1>
              <div className="flex items-center text-lg font-semibold text-zinc-400">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                </svg>
                Los Angeles, California
              </div>
              <p className="text-zinc-300">
                I&apos;m a first-year computer science major at UC Merced with interests in machine learning and AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
