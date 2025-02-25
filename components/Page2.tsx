import React from "react";

const Page2 = () => {
  return (
    <div className="bg-[#181414] h-auto">
      <div className="max-container padding-container info-section px-10 lg:px-[300px]">
        {/* Background Section */}
        <section className="section-container">
          <div>
            <h2 className="section-title">Background</h2>
          </div>
          <div>
            <p className="section-content">
              I&apos;m a Fullstack Engineer with 6 years of experience across finance, mobility, e-learning, and SaaS.
              Passionate about the intersection between AI and SaaS, I actively seek out organizations that prioritize
              diversity and recognize the talents and experiences of their team members. Let&apos;s connect to explore
              potential collaborations in these exciting fields!
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="section-container">
          <div>
            <h2 className="section-title">Education</h2>
          </div>
          <div>
            <p className="section-content">Bachelor in Systems Engineering</p>
          </div>
        </section>

        {/* Programming Section */}
        <section className="section-container">
          <div>
            <h2 className="section-title">Programming</h2>
          </div>
          <div>
            <ul>
              <li className="list-item">HTML & CSS</li>
              <li className="list-item">JavaScript/TypeScript</li>
              <li className="list-item">Go</li>
              <li className="list-item">Python</li>
              <li className="list-item">PHP</li>
              <li className="list-item">SQL</li>
            </ul>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section-container">
          <div>
            <h2 className="section-title">Skills</h2>
          </div>
          <div className="grid-skill">
            <div>
              <h3 className="skill-category">Frontend</h3>
              <ul>
                <li className="list-item">React</li>
                <li className="list-item">Next.js</li>
                <li className="list-item">Tailwind CSS</li>
                <li className="list-item">Bootstrap</li>
                <li className="list-item">Vue</li>
              </ul>
            </div>
            <div>
              <h3 className="skill-category">Mobile</h3>
              <ul>
                <li className="list-item">React Native</li>
                <li className="list-item">Java</li>
                <li className="list-item">Kotlin</li>
                <li className="list-item">Android</li>
                <li className="list-item">iOS</li>
              </ul>
            </div>
            <div>
              <h3 className="skill-category">Backend</h3>
              <ul>
                <li className="list-item">Node.js</li>
                <li className="list-item">API Platform</li>
                <li className="list-item">Redis</li>
                <li className="list-item">Kafka</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page2;
