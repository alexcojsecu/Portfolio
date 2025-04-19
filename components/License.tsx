import React from 'react';
import Image from 'next/image';

const License = () => {
  return (
    <div className="text-center py-6 md:py-12 bg-black text-white">
      {/* Experience Section */}
      <div>
        {/* Large Centered Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 md:mb-10">Experience</h1>

        {/* Certificate Section 1: Machine Learning Specialization */}
        <div className="flex flex-col md:flex-row items-center justify-start gap-4 md:gap-10 max-w-6xl mx-auto px-4 md:px-32 mb-6 md:mb-10">
          {/* Certificate Image */}
          <div className="w-16 h-16 md:w-24 md:h-24 relative">
            <Image
              src="/Certificate1.jpg"
              alt="Stanford Online Course Certificate"
              layout="fill"
              objectFit="cover"
              className="rounded-none" // Removed rounded edges
            />
          </div>

          {/* Certificate Text */}
          <div className="text-left">
            <p className="text-xl md:text-2xl font-bold">Machine Learning Specialization</p>
            <p className="text-lg md:text-xl">Machine Learning Specialization</p>
            <p className="text-base md:text-lg">DeepLearning.AI, Stanford University</p>
            <p className="text-sm md:text-base text-gray-400">
              Issued Jan 2025 •{' '}
              <a
                href="https://coursera.org/share/1294a9bf9c79fb5dce7b99cbcf1c5ae9" // Updated href
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Security best practice for target="_blank"
                className="text-blue-500 hover:text-blue-400 transition-colors"
              >
                View Certificate
              </a>
            </p>
          </div>
        </div>

        {/* Certificate Section 2: edX Verified Certificate for Machine Learning and AI with Python */}
        <div className="flex flex-col md:flex-row items-center justify-start gap-4 md:gap-10 max-w-6xl mx-auto px-4 md:px-32 mb-6 md:mb-10">
          {/* Certificate Image */}
          <div className="w-16 h-16 md:w-24 md:h-24 relative">
            <Image
              src="/Icon2.png"
              alt="edX Verified Certificate for Machine Learning and AI with Python"
              layout="fill"
              objectFit="cover"
              className="rounded-none" // Removed rounded edges
            />
          </div>

          {/* Certificate Text */}
          <div className="text-left">
            <p className="text-xl md:text-2xl font-bold">edX Verified Certificate for Machine Learning and AI with Python</p>
            <p className="text-lg md:text-xl">Machine Learning and AI with Python</p>
            <p className="text-base md:text-lg">edX, Harvard College</p>
            <p className="text-sm md:text-base text-gray-400">
              Issued March 2025 •{' '}
              <a
                href="https://courses.edx.org/certificates/4d80002fa63d4ae689f90391098faa0a" // Updated href
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Security best practice for target="_blank"
                className="text-blue-500 hover:text-blue-400 transition-colors"
              >
                View Certificate
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="mt-8 md:mt-12">
        {/* Large Centered Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 md:mb-10">Courses</h1>

        {/* Course 1 */}
        <div className="flex flex-col md:flex-row items-center justify-start gap-4 md:gap-10 max-w-6xl mx-auto px-4 md:px-32 mb-6 md:mb-10">
          {/* Certificate Image */}
          <div className="w-16 h-16 md:w-24 md:h-24 relative">
            <Image
              src="/DLIcon.png"
              alt="Stanford Online Course Certificate"
              layout="fill"
              objectFit="cover"
              className="rounded-none" // Removed rounded edges
            />
          </div>

          {/* Certificate Text */}
          <div className="text-left flex-1">
            <p className="text-xl md:text-2xl font-bold">Supervised Machine Learning: Regression and Classification</p>
            <p className="text-base md:text-lg">DeepLearning.AI, Stanford University</p>
            <p className="text-sm md:text-base text-gray-400">
              Issued Dec 2024 •{' '}
              <a
                href="https://coursera.org/share/1294a9bf9c79fb5dce7b99cbcf1c5ae9" // Updated href
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Security best practice for target="_blank"
                className="text-blue-500 hover:text-blue-400 transition-colors"
              >
                View Certificate
              </a>
            </p>
          </div>
        </div>

        {/* Course 2 */}
        <div className="flex flex-col md:flex-row items-center justify-start gap-4 md:gap-10 max-w-6xl mx-auto px-4 md:px-32 mb-6 md:mb-10">
          {/* Certificate Image */}
          <div className="w-16 h-16 md:w-24 md:h-24 relative">
            <Image
              src="/DLIcon.png"
              alt="Stanford Online Course Certificate"
              layout="fill"
              objectFit="cover"
              className="rounded-none" // Removed rounded edges
            />
          </div>

          {/* Certificate Text */}
          <div className="text-left flex-1">
            <p className="text-xl md:text-2xl font-bold">Advanced Learning Algorithms</p>
            <p className="text-base md:text-lg">DeepLearning.AI, Stanford University</p>
            <p className="text-sm md:text-base text-gray-400">
              Issued Jan 2025 •{' '}
              <a
                href="https://coursera.org/share/1294a9bf9c79fb5dce7b99cbcf1c5ae9" // Updated href
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Security best practice for target="_blank"
                className="text-blue-500 hover:text-blue-400 transition-colors"
              >
                View Certificate
              </a>
            </p>
          </div>
        </div>

        {/* Course 3 */}
        <div className="flex flex-col md:flex-row items-center justify-start gap-4 md:gap-10 max-w-6xl mx-auto px-4 md:px-32 mb-6 md:mb-10">
          {/* Certificate Image */}
          <div className="w-16 h-16 md:w-24 md:h-24 relative">
            <Image
              src="/DLIcon.png"
              alt="Stanford Online Course Certificate"
              layout="fill"
              objectFit="cover"
              className="rounded-none" // Removed rounded edges
            />
          </div>

          {/* Certificate Text */}
          <div className="text-left flex-1">
            <p className="text-xl md:text-2xl font-bold">Unsupervised Learning, Recommenders, Reinforcement Learning</p>
            <p className="text-base md:text-lg">DeepLearning.AI, Stanford University</p>
            <p className="text-sm md:text-base text-gray-400">
              Issued Jan 2025 •{' '}
              <a
                href="https://coursera.org/share/1294a9bf9c79fb5dce7b99cbcf1c5ae9" // Updated href
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Security best practice for target="_blank"
                className="text-blue-500 hover:text-blue-400 transition-colors"
              >
                View Certificate
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default License;