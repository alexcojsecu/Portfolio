"use client";

import React, { useEffect, useState } from 'react';

const AboutSec = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Container for the heading to manage its centering on mobile */}
        <div className="mb-10 md:mb-14 flex justify-center md:justify-start">
          <h1 className="text-white text-3xl md:text-4xl font-bold relative inline-block">
            About Me
            <span
              className={`absolute bottom-0 h-1 bg-blue-500 -mb-2 transition-all duration-1000 ease-in-out ${
                isLoaded ? 'w-full' : 'w-0'
              } left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0`}
            ></span>
          </h1>
        </div>

        <div className="space-y-8 md:space-y-10">
          <div className="bg-gray-900 bg-opacity-40 p-6 md:p-8 rounded-lg border-l-4 border-blue-500 transform transition-all duration-300 hover:translate-x-1 hover:shadow-lg">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed text-center md:text-left">
              Computer Science Freshman at UC Merced looking to learn everything about Machine Learning
              and Data Science. Aiming to apply expertise in TensorFlow, PyTorch, and supervised/unsupervised
              learning to solve real-world data challenges. Supported by coursework in ML algorithms, Python
              programming, and hands-on projects.
            </p>
          </div>

          <div className="bg-gray-900 bg-opacity-40 p-6 md:p-8 rounded-lg border-l-4 border-green-500 transform transition-all duration-300 hover:translate-x-1 hover:shadow-lg">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed text-center md:text-left">
              As a freshman, I developed practical Python and TensorFlow skills through self-driven projects.
              Though early in my academic journey, my academic and project experience has equipped me with the
              skills to contribute to what large machine learning/data analyst companies do.
            </p>
          </div>

          <div className="bg-gray-900 bg-opacity-40 p-6 md:p-8 rounded-lg border-l-4 border-purple-500 transform transition-all duration-300 hover:translate-x-1 hover:shadow-lg">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed text-center md:text-left">
              I built a neural network to classify MNIST datasets, which taught me the importance of well-structured data.
              While my experience is self-driven, I&apos;m eager to apply these skills to a meaningful medical cause.
              My recent coursework in Introduction to Biology has also sparked my curiosity about the intersection
              of technology and healthcare, and I&apos;m excited to explore this further.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-3 justify-center md:justify-start">
          <span className="px-3 py-1 bg-blue-900 bg-opacity-40 text-blue-300 rounded-full text-sm">TensorFlow</span>
          <span className="px-3 py-1 bg-red-900 bg-opacity-40 text-red-300 rounded-full text-sm">PyTorch</span>
          <span className="px-3 py-1 bg-green-900 bg-opacity-40 text-green-300 rounded-full text-sm">Python</span>
          <span className="px-3 py-1 bg-yellow-900 bg-opacity-40 text-yellow-300 rounded-full text-sm">Machine Learning</span>
          <span className="px-3 py-1 bg-purple-900 bg-opacity-40 text-purple-300 rounded-full text-sm">Data Science</span>
        </div>
      </div>
    </section>
  );
};

export default AboutSec;