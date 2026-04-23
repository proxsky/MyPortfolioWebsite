import React from 'react';
import './portfolio.css';

const portfolioData = [
  {
    id: 1,
    title: "Theme Park Status",
    titleIcon: "bx bx-map-alt", 
    description: "A real-time web application tracking live ride wait times, show schedules, and current weather conditions for parks in Orlando and Los Angeles.",
    techStack: [
      { name: "React", icon: "bx bxl-react" },
      { name: "AWS Lambda", icon: "bx bxl-aws" },
      { name: "DynamoDB", icon: "bx bx-data" },
      { name: "AWS Amplify", icon: "bx bxl-aws" },
      { name: "API Gateway", icon: "bx bx-transfer" },
      { name: "Weather API", icon: "bx bx-cloud-rain" }
    ],
    link: "https://www.themeparkstatus.com"
  },
  {
    id: 2,
    title: "Fulingo",
    titleIcon: "bx bx-message-rounded-dots",
    description: "An interactive language learning platform featuring a memory matching game and audio flashcards designed to help users effectively learn and retain dialects.",
    techStack: [
      { name: "React", icon: "bx bxl-react" },
      { name: "AWS Lambda", icon: "bx bxl-aws" },
      { name: "AWS S3", icon: "bx bx-server" },
      { name: "AWS Amplify", icon: "bx bx-cloud-upload" },
      { name: "DynamoDB", icon: "bx bx-data" },
      { name: "API Gateway", icon: "bx bx-transfer" }
    ],
    link: "https://www.fulingo.com"
  }
];

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Personal projects</span>

      <div className="portfolio__container container grid">
        {portfolioData.map((project) => (
          <div className="portfolio__content" key={project.id}>
            <h3 className="portfolio__title">
              <i className={project.titleIcon}></i> {project.title}
            </h3>
            
            <div className="portfolio__box">
              <p className="portfolio__description">{project.description}</p>
              
              <h4 className="portfolio__subtitle">Tech Stack</h4>
              <div className="portfolio__group">
                {project.techStack.map((tech, index) => (
                  <div className="portfolio__data" key={index}>
                    <i className={tech.icon}></i>
                    <div>
                      <h3 className="portfolio__name">{tech.name}</h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Added a wrapper to easily center the button */}
              <div className="portfolio__button-wrapper">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="portfolio__button">
                  View Project <i className="bx bx-right-arrow-alt portfolio__button-icon"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;