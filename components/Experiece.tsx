import React from 'react';

const Experience = () => {
  return (
    <section className="bg-[#181414] py-20 px-6">
      <h1 className="text-4xl font-bold text-white mb-12 text-center">Skills & Experience</h1>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line (Adjustable height and position) */}
        <div className="absolute left-6 top-9 bottom-16 w-2 bg-white"></div>

        {/* QPlay.cz */}
        <div className="relative pl-20 mb-12">
          <h2 className="text-lg font-bold text-teal-400">QPlay.cz</h2>
          <div className="relative">
            {/* Circle Marker (Adjustable position) */}
            <div className="absolute left-[-62px] top-1/2 transform -translate-y-1/2 w-5 h-5 bg-teal-500 border-2 border-white rounded-full z-10"></div>
            <h3 className="text-xl font-bold text-white">Full-Stack Web Developer</h3>
          </div>
          <p className="text-sm text-zinc-400">October 2023 - March 2024</p>
          <p className="text-zinc-300 mt-2">
            Adding features to an already built page. Minor website modifications. The project was ended in March 2024.
          </p>
        </div>

        {/* Pixelnite */}
        <div className="relative pl-20 mb-12">
          <h2 className="text-lg font-bold text-teal-400">Pixelnite</h2>
          <div className="relative">
            <div className="absolute left-[-62px] top-1/2 transform -translate-y-1/2 w-5 h-5 bg-teal-500 border-2 border-white rounded-full z-10"></div>
            <h3 className="text-xl font-bold text-white">Full-Stack Web Developer</h3>
          </div>
          <p className="text-sm text-zinc-400">July 2024</p>
          <p className="text-zinc-300 mt-2">
            Website for Minecraft server called Pixelnite. It contains the current number of players on a server, news, admin team, and other information.
            <a href="https://pixellnte.eu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">Visit Pixelnite</a>
          </p>
        </div>

        {/* OpenSource */}
        <div className="relative pl-20">
          <h2 className="text-lg font-bold text-teal-400">OpenSource</h2>
          <div className="relative">
            <div className="absolute left-[-62px] top-1/2 transform -translate-y-1/2 w-5 h-5 bg-teal-500 border-2 border-white rounded-full z-10"></div>
            <h3 className="text-xl font-bold text-white">Contributor</h3>
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
