import React from "react";

const Qualifications = () => {
  return (
    <div className="bg-black h-auto">
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
      </div>
    </div>
  );
};

export default Qualifications;
