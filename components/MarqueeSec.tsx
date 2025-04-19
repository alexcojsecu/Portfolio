import React from 'react';
import { Marquee } from '@/components/magicui/marquee'; // Ensure the path is correct

const MarqueeSec = () => {
  return (
    <section className="bg-black py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-6">What I Work With</h2>

        {/* First Marquee */}
        <div className="mb-8">
          <Marquee pauseOnHover={true} repeat={2}>
            <div className="flex space-x-12 items-center pr-10">
              <IconWithText src="/python.png" alt="Python" label="Python" />
              <IconWithText src="/nodejs.png" alt="Node.js" label="Node.js" />
              <IconWithText src="/js.png" alt="JavaScript" label="JavaScript" />
              <IconWithText src="/java.png" alt="Java" label="Java" />
              <IconWithText src="/tailwind.png" alt="Tailwind" label="Tailwind" />
              <IconWithText src="/R.png" alt="R" label="R" />
            </div>
          </Marquee>
        </div>

        {/* Second Marquee (Reverse Direction, Extra Padding) */}
        <div>
          <Marquee pauseOnHover={true} reverse={true} repeat={2}>
            <div className="flex space-x-12 items-center pr-10">
              <IconWithText src="/typescript.png" alt="TypeScript" label="TypeScript" />
              <IconWithText src="/react.png" alt="React" label="React" />
              <IconWithText src="/html.png" alt="HTML" label="HTML" />
              <IconWithText src="/css.png" alt="CSS" label="CSS" />
              <IconWithText src="/c++.png" alt="C++" label="C++" />
              <IconWithText src="/Julia.png" alt="Julia" label="Julia" />
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
    <img src={src} alt={alt} className="h-16 w-auto" /> {/* Set height and auto width */}
    <span className="text-white text-lg font-medium">{label}</span>
  </div>
);

export default MarqueeSec;