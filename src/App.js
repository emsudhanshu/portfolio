import './App.css';
import React, { useState } from 'react';
import logo from './assets/images/logo.png'; // Adjust the path based on the file location
import profilePic from './assets/images/profile.jpg'
import projects from './data/projects';
import certifications from './data/certifications';

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
      <h1 className="text-5xl md:text-7xl font-bold mb-4 code-glow">Sudhanshu</h1>
      <p className="text-xl md:text-2xl mb-6">Aspiring Data Scientist | Full Stack Developer</p>
      <div>
        <a target="_blank"
          href="https://emsudhanshu.github.io/resume"
          className="inline-block bg-[#39FF14] text-[#1E1E1E] mx-3 px-6 py-3 rounded-lg btn mb-4"
        >
          View Resume
        </a>
        <a
          target="_blank"
          href="https://github.com/emsudhanshu"
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
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#D4D4D4] mb-2">{project.name}</h3>
                <p className="text-[#D4D4D4] mb-4">{project.description}</p>

                <div className="buttonStack">
                  <a target="_blank" href={project.link}
                    className="inline-block bg-[#39FF14] text-[#1E1E1E] px-2 py-2 rounded-lg btn">
                    View Project
                  </a>

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
      <p className="text-[#D4D4D4] text-lg">Full Stack Developer with over five years of experience in building scalable applications in banking and logistics domain. Proficient in developing and optimizing web and mobile applications, ensuring high performance and maintainability. I am currently pursuing a Master’s in Applied Artificial Intelligence at Stevens Institute of Technology to expand my expertise in AI-driven solutions.</p>
      <blockquote style={{ padding: '10px', borderWidth: '0px 0px 0px 10px', marginTop: '30px', marginRight: '10px', borderLeft: `4px solid #39ff14` }}>
        <p style={{ marginLeft: '10px', fontWeight: 600 }}>
          <i>"The question is not whether intelligent machines can have any emotions, but whether machines can be intelligent without any emotions.”</i>
        </p>
        <p style={{ marginTop: '10px', marginLeft: '10px' }} className="text-[#39FF14]"> <i>— Marvin Minsky</i></p>
      </blockquote>
    </div>
  </section>
);

// Skills Component
const Skills = () => {
  const skillCategories = [
    {
      category: "Machine Learning",
      skills: ["Python", "NLP", "Transformer", "CNN", "Tensorflow"]
    },
    {
      category: "Frontend",
      skills: ["React", "Redux", "Saga", "JavaScript", "HTML", "CSS", "Micro-frontends", "Material UI"]
    },
    {
      category: "Debugging",
      skills: ["Redux Toolkit", "Chrome Debugger"]
    },
    {
      category: "Backend",
      skills: ["Java", "Spring Boot", "Node.js", "Express"]
    },
    {
      category: "Database",
      skills: ["MongoDB", "SQL"]
    },
    {
      category: "Build Tools",
      skills: ["Maven", "NPM"]
    },
    {
      category: "Source Control",
      skills: ["Git", "BitBucket"]
    },
    {
      category: "Agile Methodologies",
      skills: ["Scrum", "Scrum Planning", "Retrospectives"]
    },
    {
      category: "Project Management",
      skills: ["Jira"]
    }
  ];
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
        <div className="bg-[#2D2D2D] p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-[#D4D4D4]">Research Assistant - ML and AI</h3>
          <p className="text-[#D4D4D4]">Stevens Institute of Technology - Hoboken, New Jersey, United States</p>
          <p className="text-[#39FF14]">May 2025 – Present</p>
          {/* <p className="text-[#D4D4D4]">
            <br></br>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              <li>Developed a standalone payment gateway web application using React JS.</li>
              <li>Built a standalone application for 15G/H submission and download using React JS and Java Spring Boot Microservices.</li>
              <li>Automated the build generation and obfuscation process using Node.js, saving 2 working hours daily.</li>
              <li>Led project architecture improvements, including code structuring, optimization, security enhancements, and obfuscation.</li>
              <li>Developed multiple scripts for boilerplate code generation, accelerating development and reducing redundant efforts.</li>
              <li>Took ownership of product development, leading a team of 5 developers.</li>
              <li>Mentored and guided the team in coding best practices, maintainability, and task delegation while monitoring progress.</li>
              <li>Contributed to code reviews, pair programming, and Agile methodologies to ensure high-quality and consistent code.</li>
            </ul>
          </p> */}
        </div>

        <div className="bg-[#2D2D2D] p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-[#D4D4D4]">Full Stack Developer - Senior Software Development Engineer</h3>
          <p className="text-[#D4D4D4]">Fidelity Information Services India Private Ltd (FIS) - Bengaluru, India</p>
          <p className="text-[#39FF14]">Jun 2024 – Jan 2025</p>
          <p className="text-[#D4D4D4]">
            <br></br>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              <li>Developed a standalone payment gateway web application using React JS.</li>
              <li>Built a standalone application for 15G/H submission and download using React JS and Java Spring Boot Microservices.</li>
              <li>Automated the build generation and obfuscation process using Node.js, saving 2 working hours daily.</li>
              <li>Led project architecture improvements, including code structuring, optimization, security enhancements, and obfuscation.</li>
              <li>Developed multiple scripts for boilerplate code generation, accelerating development and reducing redundant efforts.</li>
              <li>Took ownership of product development, leading a team of 5 developers.</li>
              <li>Mentored and guided the team in coding best practices, maintainability, and task delegation while monitoring progress.</li>
              <li>Contributed to code reviews, pair programming, and Agile methodologies to ensure high-quality and consistent code.</li>
            </ul>
          </p>
        </div>

        <div className="bg-[#2D2D2D] p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-[#D4D4D4]">Full Stack Developer – Software Development Engineer II</h3>
          <p className="text-[#D4D4D4]">Fidelity Information Services India Private Ltd (FIS) - Bengaluru, India</p>
          <p className="text-[#39FF14]">Aug 2023 – May 2024</p>
          <p className="text-[#D4D4D4]">
            <br></br>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              <li>Contributed to the development of backend Microservices using Java Spring Boot framework and PostgreSQL database.</li>
              <li>Recommended innovative front-end solutions like Micro-Frontends and React Toolkit for improved UI development speed and efficiency.</li>
              <li>End-to-end delivered and maintained various net banking modules like Profile, Accounts, Payee Management, Alerts Management, Fund Transfers etc. by developing required UI and APIs.</li>
            </ul>
          </p>
        </div>

        <div className="bg-[#2D2D2D] p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-[#D4D4D4]">Front End Developer – Software Development Engineer II</h3>
          <p className="text-[#D4D4D4]">Fidelity Information Services India Private Ltd (FIS) - Bengaluru, India</p>
          <p className="text-[#39FF14]">Nov 2021 – July 2023</p>
          <p className="text-[#D4D4D4]">
            <br></br>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              <li>Developed an Internet Banking Application using React, Redux, and Material UI to create a dynamic user experience.</li>
              <li>Designed and implemented reusable React components and intuitive interfaces for streamlined development.</li>
              <li>Collaborated with UX/UI designers, product managers, and back-end developers to deliver high-quality software.</li>
              <li>Utilized Git and GitHub for version control and collaboration with team members.</li>
              <li>Embraced Agile methodologies like Scrum to ensure high-quality software delivery.</li>
            </ul>
          </p>
        </div>

        <div className="bg-[#2D2D2D] p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-[#D4D4D4]">Front End Developer - System Engineer</h3>
          <p className="text-[#D4D4D4]">Tata Consultancy Services Limited – Indore, India</p>
          <p className="text-[#39FF14]">Aug 2019 – Nov 2021</p>
          <p className="text-[#D4D4D4]">
            <br></br>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              <li>Utilized React Native, Redux, and Material UI to develop and maintain a logistics mobile application for multiple platforms.</li>
              <li>Worked closely with the product team to plan, design, and implement new features and functionalities.</li>
              <li>Performed testing, debugging, and optimization to ensure the mobile app's optimal performance.</li>
              <li>Deployed and maintained the app on various platforms.</li>
              <li>Responded to feedback from the testing team by updating the code to address issues and enhance functionality.</li>
              <li>Conducted weekly demonstrations to showcase the app's progress and gather feedback from stakeholders.</li>
            </ul>
          </p>
        </div>
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

        <div className="bg-[#2D2D2D] p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-[#D4D4D4]">Master’s Degree - Applied Artificial Intelligence</h3>
          <p className="text-[#D4D4D4]]">Stevens Institute of Technology, Hoboken, New Jersey, United States</p>
          <p className="text-[#39FF14]">2025 - 2026(Expected)</p>
        </div>
        <div className="bg-[#2D2D2D] p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-[#D4D4D4]">Bachelor’s Degree - Computer Science Engineering</h3>
          <p className="text-[#D4D4D4]]">HMRITM, Guru Gobind Singh Indraprastha University, Delhi, India</p>
          <p className="text-[#D4D4D4]]">CGPA - 8.4</p>
          <p className="text-[#39FF14]">2015 - 2019</p>
        </div>
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
        <div>
          <h3 className="text-xl font-semibold text-[#D4D4D4]">English</h3>
          <p className="text-[#39FF14]">IELTS Score: 7.5</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#D4D4D4]">Hindi</h3>
          <p className="text-[#39FF14]">Proficient</p>
        </div>
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
        <li>Coding and exploring new technologies</li>
        <li>Photography</li>
        <li>Travelling</li>
        <li>Cycling</li>
        <li>Table Tennis</li>
      </ul>
    </div>
  </section>
);

// Contact Component with Location
const Contact = () => (
  <section id="contact" className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-[#39FF14] mb-6 code-glow">Contact</h2>
      <p className="text-[#D4D4D4] mb-6">Feel free to reach out to me for opportunities or collaborations!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center">
          <i className="fas fa-map-marker-alt text-[#39FF14] mr-2"></i>
          <span className="text-[#D4D4D4]">Hoboken, NJ, United States</span>
        </div>
        <div className="flex items-center">
          <i className="fas fa-phone-alt text-[#39FF14] mr-2"></i>
          <span className="text-[#D4D4D4]">+1 732 (500) 2147, +91 8700345478</span>
        </div>
        <div className="flex items-center">
          <i className="fas fa-envelope text-[#39FF14] mr-2"></i>
          <a target="_blank" href="mailto:emsudhanshu@gmail.com" className="text-[#D4D4D4] hover:text-[#FF6D00]">emsudhanshu@gmail.com</a>
        </div>
        <div className="flex items-center">
          <i className="fab fa-linkedin text-[#39FF14] mr-2"></i>
          <a target="_blank" href="https://www.linkedin.com/in/sudhanshu-kakkar/" className="text-[#D4D4D4] hover:text-[#FF6D00]">LinkedIn</a>
        </div>
        <div className="flex items-center">
          <i className="fab fa-instagram text-[#39FF14] mr-2"></i>
          <a target="_blank" href="https://www.instagram.com/sudhanshu.kakkar/" className="text-[#D4D4D4] hover:text-[#FF6D00]">Instagram</a>
        </div>
        <div className="flex items-center">
          <i className="fab fa-facebook text-[#39FF14] mr-2"></i>
          <a target="_blank" href="https://www.facebook.com/techanshu/" className="text-[#D4D4D4] hover:text-[#FF6D00]">Facebook</a>
        </div>
      </div>
      <a target="_blank"
        href="mailto:emsudhanshu@gmail.com"
        className="inline-block bg-[#39FF14] text-[#1E1E1E] px-6 py-3 rounded-lg btn"
      >
        Email Me
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
    <div style={{ height: '50px', width: '100vw', position: 'fixed', bottom: '-50px', boxShadow: `0 0px 100px rgba(57, 255, 20, 0.3)` }}></div>
  </div>
);

export default App;
