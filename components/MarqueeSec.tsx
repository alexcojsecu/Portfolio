import React from 'react';
import Image from 'next/image'; // Import Next.js Image component
import { Marquee } from '@/components/magicui/marquee'; // Ensure the path is correct

const MarqueeSec = () => {
  return (
    <section className="bg-[#181414] py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-6">What I Work With</h2>

        {/* First Marquee */}
        <div className="mb-8">
          <Marquee pauseOnHover={true} repeat={2}>
            <div className="flex space-x-12 items-center pr-10">
              <IconWithText src="https://ImperialMobileGallery.b-cdn.net/python.png" alt="Python" label="Python" />
              <IconWithText src="https://ImperialMobileGallery.b-cdn.net/nodejs.png" alt="Node.js" label="Node.js" />
              <IconWithText src="https://ImperialMobileGallery.b-cdn.net/js.png" alt="JavaScript" label="JavaScript" />
              <IconWithText src="https://ImperialMobileGallery.b-cdn.net/java.png" alt="Java" label="Java" />
              <IconWithText src="https://ImperialMobileGallery.b-cdn.net/tailwind.png" alt="Tailwind" label="Tailwind" />
            </div>
          </Marquee>
        </div>

        {/* Second Marquee (Reverse Direction, Extra Padding) */}
        <div>
          <Marquee pauseOnHover={true} reverse={true} repeat={2}>
            <div className="flex space-x-12 items-center pr-10">
              <IconWithText src="https://ImperialMobileGallery.b-cdn.net/typescript.png" alt="TypeScript" label="TypeScript" />
              <IconWithText src="https://ImperialMobileGallery.b-cdn.net/react.png" alt="React" label="React" />
              <IconWithText src="https://ImperialMobileGallery.b-cdn.net/html.png" alt="HTML" label="HTML" />
              <IconWithText src="https://ImperialMobileGallery.b-cdn.net/css.png" alt="CSS" label="CSS" />
              <IconWithText src="https://ImperialMobileGallery.b-cdn.net/c++.png" alt="C++" label="C++" />
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

interface IconWithTextProps {
  src: string;
  alt: string;
  label: string;
}

const IconWithText: React.FC<IconWithTextProps> = ({ src, alt, label }) => (
  <div className="flex items-center space-x-4">
    <Image src={src} alt={alt} width={64} height={64} className="w-16 h-16" />
    <span className="text-white text-lg font-medium">{label}</span>
  </div>
);

export default MarqueeSec;
