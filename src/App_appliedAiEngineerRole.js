import './App.css';
import { useState } from 'react';
import logo from './assets/images/logo.png'; // Adjust the path based on the file location
import profilePic from './assets/images/profile_pic_casual.jpg'
import about from './data/appliedAiEngineerRole/about';
import bio from './data/appliedAiEngineerRole/bio';
import basicDetails from './data/appliedAiEngineerRole/basicDetails';
import projects from './data/appliedAiEngineerRole/projects';
import certifications from './data/appliedAiEngineerRole/certifications';
import experiences from './data/appliedAiEngineerRole/experiences';
import skills from './data/appliedAiEngineerRole/skills';

import ChatBot from './Components/ChatBot';

const openFlowChart = (base64String) => {
  // Open a new tab
  const newWindow = window.open();

  newWindow.document.write(`
        <html>
          <head>
            <title>Chart Preview</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
            <style>
              body {
                width: 100%;
                text-align: center;
              }
            </style>
          </head>
          <body>
            <img src="${base64String}" alt="Chart">
          </body>
        </html>
    `);
}

const { hero, quote, education, languages, hobbies, contact } = basicDetails;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav style={{ boxShadow: `0 0px 100px rgba(57, 255, 20, 0.3)` }} className="fixed top-0 w-full bg-[#252526] bg-opacity-95 backdrop-blur-md z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <img src={logo} style={{ height: '40px', paddingTop: '0px' }} />
          </div>
          <div onClick={() => { setIsMenuOpen(!isMenuOpen) }} class="flex items-center"><button class="ml-4 md:hidden text-[#D4D4D4]"><i class="fas fa-bars text-2xl"></i></button></div></div><div onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${isMenuOpen ? 'block' : 'hidden'} md:block bg-[#252526] md:bg-transparent`}>
          <div className="flex flex-col md:flex-row md:space-x-4 py-2 md:pt-0">
            <a href="#home" className="text-[#D4D4D4] hover:text-[#39FF14] pl-0 pr-6 py-2 rounded-md text-sm font-medium nav-link">Home</a>
            <a href="#projects" className="text-[#D4D4D4] hover:text-[#39FF14] pl-0 pr-6 py-2 rounded-md text-sm font-medium nav-link">Projects</a>
            <a href="#about" className="text-[#D4D4D4] hover:text-[#39FF14] pl-0 pr-6 py-2 rounded-md text-sm font-medium nav-link">About</a>
            <a href="#skills" className="text-[#D4D4D4] hover:text-[#39FF14] pl-0 pr-6 py-2 rounded-md text-sm font-medium nav-link">Skills</a>
            <a href="#experience" className="text-[#D4D4D4] hover:text-[#39FF14] pl-0 pr-6 py-2 rounded-md text-sm font-medium nav-link">Experience</a>
            <a href="#education" className="text-[#D4D4D4] hover:text-[#39FF14] pl-0 pr-6 py-2 rounded-md text-sm font-medium nav-link">Education</a>
            <a href="#certifications" className="text-[#D4D4D4] hover:text-[#39FF14] pl-0 pr-6 py-2 rounded-md text-sm font-medium nav-link">Certifications</a>
            <a href="#languages" className="text-[#D4D4D4] hover:text-[#39FF14] pl-0 pr-6 py-2 rounded-md text-sm font-medium nav-link">Languages</a>
            <a href="#hobbies" className="text-[#D4D4D4] hover:text-[#39FF14] pl-0 pr-6 py-2 rounded-md text-sm font-medium nav-link">Hobbies</a>
            <a href="#contact" className="text-[#D4D4D4] hover:text-[#39FF14] pl-0 pr-6 py-2 rounded-md text-sm font-medium nav-link">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Hero Component with Video Background and Larger Profile Picture
const Hero = () => (
  <section id="home" className="relative h-screen flex items-center justify-center">
    <div className="absolute inset-0 bg-[#1E1E1E] opacity-70"></div>
    <div className="relative text-center text-[#D4D4D4] flex flex-col items-center">
      <img
        src={profilePic} alt="Sudhanshu's Profile"
        className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-[#39FF14] mb-4 object-cover"
      />
      <h1 className="text-5xl md:text-7xl font-bold mb-4 code-glow">{hero.name}</h1>
      <p className="text-xl md:text-2xl mb-6">{bio.main}</p>
      <div>
        <a target="_blank"
          href={hero.resumeUrl}
          className="inline-block bg-[#39FF14] text-[#1E1E1E] mx-3 px-6 py-3 rounded-lg btn mb-4"
        >
          View Resume
        </a>
        <a
          target="_blank"
          href={hero.githubUrl}
          className="inline-block bg-[#3C3C3C] text-[#fff] mx-3 px-6 py-3 rounded-lg btn mb-4"
        >
          View GitHub Profile
        </a>
        <a
          href="#contact"
          className="inline-block bg-[#3C3C3C] text-[#fff] mx-3 px-6 py-3 rounded-lg btn mb-4"
        >
          Get in Touch
        </a>
      </div>
    </div>
  </section>
);

// Projects Component
const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#39FF14] mb-6 code-glow">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#2D2D2D] p-6 rounded-lg flex flex-col sm:flex-row">
              {/* <img
                src={project.thumbnail}
                alt={`${project.name} thumbnail`}
                className="w-full sm:w-1/3 h-48 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-6"
              /> */}
              <div className="flex-1 projectContainer">
                <h3 className="text-xl font-semibold text-[#D4D4D4] mb-2">{project.name}</h3>
                <div className="text-[#D4D4D4] mb-4 projectDescription">{project.description}</div>

                {/* Tech Stack Capsules */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies && project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-[#3C3C3C] text-[#39FF14] px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="buttonStack">
                  {project.link && <a target="_blank" href={project.link}
                    className="inline-block bg-[#39FF14] text-[#1E1E1E] px-2 py-2 rounded-lg btn">
                    View Project
                  </a>}

                  {project.flowchart && <a>
                    <div onClick={() => openFlowChart(project.flowchart)} className="bg-[#3C3C3C] text-[#D4D4D4] text-right px-2 py-2 rounded-lg btn">
                      View Flow Chart
                    </div>
                  </a>}
                  {project.sourceCode &&
                    <a target="_blank" href={project.sourceCode} className="text-[#39FF14] hover:text-[#FF6D00] flex-grow">View Source Code</a>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Component 
const About = () => (
  <section id="about" className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-[#39FF14] mb-6 code-glow">About Me</h2>
      <p className="text-[#D4D4D4] text-lg">{about.main}</p>
      <blockquote style={{ padding: '10px', borderWidth: '0px 0px 0px 10px', marginTop: '30px', marginRight: '10px', borderLeft: `4px solid #39ff14` }}>
        <p style={{ marginLeft: '10px', fontWeight: 600 }}>
          <i>"{quote.text}"</i>
        </p>
        <p style={{ marginTop: '10px', marginLeft: '10px' }} className="text-[#39FF14]"> <i>— {quote.author}</i></p>
      </blockquote>
    </div>
  </section>
);

// Skills Component
const Skills = () => {
  const skillCategories = skills.skillCategories
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#39FF14] mb-6 code-glow">Skills</h2>
        {skillCategories.map((cat, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold text-[#D4D4D4] mb-4">{cat.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {cat.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="bg-[#3C3C3C] text-[#D4D4D4] text-center py-2 rounded-lg btn">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Experience Component
const Experience = () => (
  <section id="experience" className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-[#39FF14] mb-6 code-glow">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-[#2D2D2D] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#D4D4D4]">{exp.title}</h3>
            <p className="text-[#D4D4D4]">{exp.company}</p>
            <p className="text-[#39FF14]">{exp.date}</p>
            {exp.points.length > 0 && (
              <ul
                className="text-[#D4D4D4] mt-2"
                style={{ listStyleType: "disc", paddingLeft: "20px" }}
                dangerouslySetInnerHTML={{ __html: exp.points.map(p => `<li>${p}</li>`).join("") }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);


// Education Component
const Education = () => (
  <section id="education" className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-[#39FF14] mb-6 code-glow">Education</h2>
      <div className="space-y-4">
        {education.map((item, index) => (
          <div key={index} className="bg-[#2D2D2D] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#D4D4D4]">{item.degree}</h3>
            <p className="text-[#D4D4D4]">{item.institution}</p>
            {item.details.map((detail, detailIndex) => (
              <p key={detailIndex} className="text-[#D4D4D4]">{detail}</p>
            ))}
            <p className="text-[#39FF14]">{item.date}</p>
          </div>
        ))}
      </div>
    </div>

  </section>
);

// Certifications Component
const Certifications = () => (
  <section id="certifications" className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-[#39FF14] mb-6 code-glow">Certifications</h2>
      <div className="space-y-4">
        {certifications.map((certification, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold text-[#D4D4D4] uppercase">
              {certification.title}
            </h3>
            <p className="text-[#D4D4D4]">{certification.provider}</p>
            <p className="text-[#39FF14]">{certification.date}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Languages Component
const Languages = () => (
  <section id="languages" className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-[#39FF14] mb-6 code-glow">Languages</h2>
      <div className="space-y-4">
        {languages.map((language, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold text-[#D4D4D4]">{language.name}</h3>
            <p className="text-[#39FF14]">{language.proficiency}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Hobbies Component
const Hobbies = () => (
  <section id="hobbies" className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-[#39FF14] mb-6 code-glow">Hobbies</h2>
      <ul className="list-disc list-inside text-[#D4D4D4] text-lg">
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  </section>
);

// Contact Component with Location
const Contact = () => (
  <section id="contact" className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-[#39FF14] mb-6 code-glow">Contact</h2>
      <p className="text-[#D4D4D4] mb-6">{contact.intro}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {contact.items.map((item, index) => (
          <div key={index} className="flex items-center">
            <i className={`${item.iconClass} text-[#39FF14] mr-2`}></i>
            {item.href ? (
              <a target="_blank" href={item.href} className="text-[#D4D4D4] hover:text-[#FF6D00]">{item.text}</a>
            ) : (
              <span className="text-[#D4D4D4]">{item.text}</span>
            )}
          </div>
        ))}
      </div>
      <a target="_blank"
        href={contact.cta.href}
        className="inline-block bg-[#39FF14] text-[#1E1E1E] px-6 py-3 rounded-lg btn"
      >
        {contact.cta.label}
      </a>
    </div>
  </section>
);

// Main App Component
const App = () => (
  <div className="text-[#D4D4D4]" style={{ position: 'relative' }}>
    <Header />
    <Hero />
    <Projects />
    <About />
    <Skills />
    <Experience />
    <Education />
    <Certifications />
    <Languages />
    <Hobbies />
    <Contact />
    <ChatBot />
    <div style={{ height: '50px', width: '100vw', position: 'fixed', bottom: '-50px', boxShadow: `0 0px 100px rgba(57, 255, 20, 0.3)` }}></div>
  </div>
);

export { App };
