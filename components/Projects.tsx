import React from 'react';
import Image from 'next/image'; // Import Next.js Image component

const Projects = () => {
  return (
    <div className="bg-[#181414] text-white py-20 px-6">
      {/* Container for Title and Image */}
      <div className="w-full max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">My Work</h1>

        {/* Image Container */}
        <div className="relative">
          {/* Container with fixed 5:3 Aspect Ratio */}
          <div className="group relative overflow-hidden rounded-lg w-full" style={{ aspectRatio: "5 / 3" }}>
            {/* Image Wrapper for Darkening Effect on Hover & Inner Shadow */}
            <div
              className="absolute top-0 left-0 w-full h-full group-hover:bg-black/50 transition-all duration-300"
              style={{
                boxShadow: 'inset 0 0 80px rgba(0, 0, 0, 0.8)', // Stronger inner shadow effect
              }}
            >
              {/* Next.js <Image /> with BunnyCDN URL */}
              <Image
                src="https://ImperialMobileGallery.b-cdn.net/HeroPageFR.jpg" // BunnyCDN URL
                alt="Project"
                layout="fill"
                objectFit="cover"
                priority // Improves LCP performance
                className="brightness-100 group-hover:brightness-75 group-hover:scale-105 transition-all duration-300"
              />
            </div>

            {/* Text Overlay (Top Left, Enlarging Downward on Hover) */}
            <div className="absolute top-6 left-6 transition-all duration-300 group-hover:translate-y-4">
              <p className="text-3xl font-bold group-hover:text-4xl transition-all duration-300">
                Project Title
              </p> {/* Larger Title with Hover Increase */}
              <p className="text-xl text-gray-300 mt-1 group-hover:text-2xl transition-all duration-300">
                Project description goes here.
              </p> {/* Larger Description with Hover Increase */}
            </div>

            {/* Learn More Button (Appears on Hover) */}
            <div className="absolute bottom-6 left-6 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <button className="bg-white text-[#181414] px-6 py-3 text-xl rounded-lg font-bold hover:bg-gray-200 transition-all flex items-center gap-2">
                Learn More <span className="text-2xl">→</span> {/* Added arrow */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
