import React from 'react';

const Experience = () => {
  return (
    <section className="bg-black py-20 px-6">
      <h1 className="text-4xl font-bold text-white mb-12 text-center">Skills & Experience</h1>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line (Adjustable height and position) */}
        <div className="absolute left-6 top-9 bottom-16 w-2 bg-white"></div>

        {/* QPlay.cz */}
        <div className="relative pl-20 mb-12">
          <h2 className="text-lg font-bold text-teal-400">Imperial Mobile</h2>
          <div className="relative">
            {/* Circle Marker (Adjustable position) */}
            <div className="absolute left-[-62px] top-1/2 transform -translate-y-1/2 w-5 h-5 bg-teal-500 border-2 border-white rounded-full z-10"></div>
            <h3 className="text-xl font-bold text-white">Founder and Owner of Imperial Mobile Detail</h3>
          </div>
          <p className="text-sm text-zinc-400">October 2021 - Currently</p>
          <p className="text-zinc-300 mt-2">
            Adding features to an already built page. Minor website modifications. The project was ended in March 2024.
            <a href="https://imperialmobile.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">Visit ImperialMobile</a>
          </p>
          
        </div>

        {/* TechLiberate */}
        <div className="relative pl-20 mb-12">
          <h2 className="text-lg font-bold text-teal-400">TechLiberate</h2>
          <div className="relative">
            {/* Circle Marker (Adjustable position) */}
            <div className="absolute left-[-62px] top-1/2 transform -translate-y-1/2 w-5 h-5 bg-teal-500 border-2 border-white rounded-full z-10"></div>
            <h3 className="text-xl font-bold text-white">Software Engineer</h3>
          </div>
          <p className="text-sm text-zinc-400">March 2025 - Currently  alexandru@techliberate.com</p>
          <p className="text-zinc-300 mt-2">
            Adding features to an already built page. Minor website modifications
            <a href="https://techliberate.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">Visit TechLiberate</a>
          </p>
          
        </div>

        {/* Pixelnite */}
        <div className="relative pl-20 mb-12">
          <h2 className="text-lg font-bold text-teal-400">Designer Clothing Collector</h2>
          <div className="relative">
            <div className="absolute left-[-62px] top-1/2 transform -translate-y-1/2 w-5 h-5 bg-teal-500 border-2 border-white rounded-full z-10"></div>
            <h3 className="text-xl font-bold text-white">Designer Clothing Collector</h3>
          </div>
          <p className="text-sm text-zinc-400">July 2024</p>
          <p className="text-zinc-300 mt-2">
            Website for Minecraft server called Pixelnite. It contains the current number of players on a server, news, admin team, and other information.
            <a href="https://pixellnte.eu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">Visit Pixelnite</a>
          </p>
        </div>

        {/* OpenSource */}
        <div className="relative pl-20">
          <h2 className="text-lg font-bold text-teal-400">Machine Learning and AI</h2>
          <div className="relative">
            <div className="absolute left-[-62px] top-1/2 transform -translate-y-1/2 w-5 h-5 bg-teal-500 border-2 border-white rounded-full z-10"></div>
            <h3 className="text-xl font-bold text-white">Machine Learning and AI</h3>
          </div>
          <p className="text-sm text-zinc-400">May 2023 - Present</p>
          <p className="text-zinc-300 mt-2">
            I actively try to contribute to Open Source on my GitHub.
            <a href="https://github.com/jzitnik-dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">github.com/jzitnik-dev</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;