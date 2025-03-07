import React from 'react';
import Image from 'next/image'; // Import the Image component from Next.js

const Hero = () => {
  return (
    <section className="bg-[#181414] py-16 px-6">
      {/* Wrapper div for scaling */}
      <div className="scale-110 transform origin-top"> {/* Adjust scale value as needed */}
        <div className="relative w-full max-w-3xl mx-auto border border-zinc-700 rounded-2xl p-6">
          {/* Social Icons in the Top-Right */}
          <div className="absolute top-3 right-3 flex gap-3">
            <a href="mailto:alex@example.com" className="p-2 bg-zinc-800 rounded-lg text-white hover:bg-zinc-700 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.5 4h15a2.5 2.5 0 0 1 2.5 2.5v11a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-11A2.5 2.5 0 0 1 4.5 4zM21 7l-9 6-9-6v10.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V7z"/></svg>
            </a>
            <a href="https://github.com/example" className="p-2 bg-zinc-800 rounded-lg text-white hover:bg-zinc-700 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.36-1.35-3.36-1.35a2.65 2.65 0 0 0-1.1-1.46c-.9-.61.07-.6.07-.6a2.1 2.1 0 0 1 1.55 1.05 2.16 2.16 0 0 0 2.95.84 2.15 2.15 0 0 1 .64-1.35c-2.22-.25-4.56-1.11-4.56-4.93a3.86 3.86 0 0 1 1-2.67 3.6 3.6 0 0 1 .1-2.63s.84-.27 2.75 1.02a9.37 9.37 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02a3.6 3.6 0 0 1 .1 2.63 3.86 3.86 0 0 1 1 2.67c0 3.83-2.34 4.68-4.57 4.93a2.41 2.41 0 0 1 .69 1.87v2.78c0 .26.18.58.69.48A10 10 0 0 0 12 2z"/></svg>
            </a>
            {/* Replace Instagram SVG with LinkedIn Image */}
            <a href="https://linkedin.com/in/example" className="p-2 bg-zinc-800 rounded-lg text-white hover:bg-zinc-700 transition-all">
              <div className="w-5 h-5 relative">
                <Image
                  src="/Linkedin.webp" // Path to the LinkedIn image in the public folder
                  alt="LinkedIn"
                  layout="fill" // Ensures the image fills the container
                  objectFit="contain" // Ensures the image fits within the container
                />
              </div>
            </a>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-3">
            {/* Name */}
            <h1 className="text-4xl lg:text-5xl font-bold text-white">Alexandru Cojescu</h1>
            
            {/* Location with Pin Icon */}
            <div className="flex items-center text-lg font-semibold text-zinc-400">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
              </svg>
              Los Angeles, California
            </div>

            {/* Caption */}
            <p className="text-zinc-300">
              I'm a first year computer science major at UC Merced with interests in machine learning and AI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;