"use client"; // Required for using hooks

import React, { useEffect, useState } from 'react'; // Import hooks
import Image from 'next/image';

const License = () => {
  // State to trigger the animation for underlines
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set isLoaded to true after the component mounts to trigger animations
    const timer = setTimeout(() => setIsLoaded(true), 100); // Small delay to ensure mount
    return () => clearTimeout(timer); // Cleanup timer
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    // Main page container with background and overall vertical padding
    <div className="min-h-screen bg-black text-white py-12 md:py-20 px-4 sm:px-6">

      {/* Experience Section */}
      <section className="max-w-5xl mx-auto mb-16 md:mb-24">
        {/* Centered Title with Underline */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="text-3xl md:text-5xl font-bold relative inline-block">
            Experience
            <span
              className={`absolute left-0 bottom-0 h-1 bg-white -mb-1 md:-mb-2 transition-all duration-[2000ms] ease-in-out ${
                isLoaded ? 'w-full' : 'w-0'
              }`}
            ></span>
          </h1>
        </div>

        {/* Container for all experience items, provides vertical spacing between them */}
        <div className="space-y-8 md:space-y-10">
          {/* Certificate Section: TechLiberate */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6">
            <div className="w-16 h-16 md:w-24 md:h-24 relative flex-shrink-0">
              <Image
                src="/TechLiberate.jpg"
                alt="TechLiberate Logo"
                fill={true}
                className="object-cover rounded-none"
              />
            </div>
            <div className="text-center sm:text-left flex-1">
              <p className="text-xl md:text-2xl font-bold">Software Engineer</p>
              <p className="text-base md:text-xl">Backend Software Implementor</p>
              <p className="text-sm md:text-lg">AI Consultant Firm, TechLiberate.com</p>
              <p className="text-xs md:text-base text-gray-400">
                Issued Nov 2025 •{' '}
                <a
                  href="mailto:alexandru@techliberate.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors"
                >
                  alexandru@techliberate.com
                </a>
              </p>
            </div>
          </div>

          {/* Certificate Section 1: Machine Learning Specialization */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6">
            <div className="w-16 h-16 md:w-24 md:h-24 relative flex-shrink-0">
              <Image
                src="/Certificate1.jpg"
                alt="Stanford Online Course Certificate"
                fill={true}
                className="object-cover rounded-none"
              />
            </div>
            <div className="text-center sm:text-left flex-1">
              <p className="text-xl md:text-2xl font-bold">Machine Learning Specialization</p>
              <p className="text-base md:text-xl">Machine Learning Specialization</p>
              <p className="text-sm md:text-lg">DeepLearning.AI, Stanford University</p>
              <p className="text-xs md:text-base text-gray-400">
                Issued Jan 2025 •{' '}
                <a
                  href="https://coursera.org/share/1294a9bf9c79fb5dce7b99cbcf1c5ae9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors"
                >
                  View Certificate
                </a>
              </p>
            </div>
          </div>

          {/* Certificate Section 2: edX Verified Certificate */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6">
            <div className="w-16 h-16 md:w-24 md:h-24 relative flex-shrink-0">
              <Image
                src="/Icon2.png"
                alt="edX Verified Certificate for Machine Learning and AI with Python"
                fill={true}
                className="object-cover rounded-none"
              />
            </div>
            <div className="text-center sm:text-left flex-1">
              <p className="text-xl md:text-2xl font-bold">
                edX Verified Certificate for Machine Learning and AI with Python
              </p>
              <p className="text-base md:text-xl">Machine Learning and AI with Python</p>
              <p className="text-sm md:text-lg">edX, Harvard College</p>
              <p className="text-xs md:text-base text-gray-400">
                Issued March 2025 •{' '}
                <a
                  href="https://courses.edx.org/certificates/4d80002fa63d4ae689f90391098faa0a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors"
                >
                  View Certificate
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <h1 className="text-3xl md:text-5xl font-bold relative inline-block">
            Courses
            <span
              className={`absolute left-0 bottom-0 h-1 bg-white -mb-1 md:-mb-2 transition-all duration-[2000ms] ease-in-out ${
                isLoaded ? 'w-full' : 'w-0'
              }`}
            ></span>
          </h1>
        </div>

        <div className="space-y-8 md:space-y-10">
          {/* Course 1 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6">
            <div className="w-16 h-16 md:w-24 md:h-24 relative flex-shrink-0">
              <Image
                src="/DLIcon.png"
                alt="DeepLearning AI Course Icon"
                fill={true}
                className="object-cover rounded-none"
              />
            </div>
            <div className="text-center sm:text-left flex-1">
              <p className="text-xl md:text-2xl font-bold">
                Supervised Machine Learning: Regression and Classification
              </p>
              <p className="text-sm md:text-lg">DeepLearning.AI, Stanford University</p>
              <p className="text-xs md:text-base text-gray-400">
                Issued Dec 2024 •{' '}
                <a
                  href="https://coursera.org/share/1294a9bf9c79fb5dce7b99cbcf1c5ae9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors"
                >
                  View Certificate
                </a>
              </p>
            </div>
          </div>

          {/* Course 2 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6">
            <div className="w-16 h-16 md:w-24 md:h-24 relative flex-shrink-0">
              <Image
                src="/DLIcon.png"
                alt="DeepLearning AI Course Icon"
                fill={true}
                className="object-cover rounded-none"
              />
            </div>
            <div className="text-center sm:text-left flex-1">
              <p className="text-xl md:text-2xl font-bold">Advanced Learning Algorithms</p>
              <p className="text-sm md:text-lg">DeepLearning.AI, Stanford University</p>
              <p className="text-xs md:text-base text-gray-400">
                Issued Jan 2025 •{' '}
                <a
                  href="https://coursera.org/share/1294a9bf9c79fb5dce7b99cbcf1c5ae9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors"
                >
                  View Certificate
                </a>
              </p>
            </div>
          </div>

          {/* Course 3 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6">
            <div className="w-16 h-16 md:w-24 md:h-24 relative flex-shrink-0">
              <Image
                src="/DLIcon.png"
                alt="DeepLearning AI Course Icon"
                fill={true}
                className="object-cover rounded-none"
              />
            </div>
            <div className="text-center sm:text-left flex-1">
              <p className="text-xl md:text-2xl font-bold">
                Unsupervised Learning, Recommenders, Reinforcement Learning
              </p>
              <p className="text-sm md:text-lg">DeepLearning.AI, Stanford University</p>
              <p className="text-xs md:text-base text-gray-400">
                Issued Jan 2025 •{' '}
                <a
                  href="https://coursera.org/share/1294a9bf9c79fb5dce7b99cbcf1c5ae9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors"
                >
                  View Certificate
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default License;