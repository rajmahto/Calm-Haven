import React from "react";
import "../styles/AboutUs.css"; 
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

import teamImg1 from "../assets/team1.jpg";
import teamImg2 from "../assets/team2.jpg";
import teamImg3 from "../assets/team3.jpg";
import teamImg4 from "../assets/team4.jpg";

const teamMembers = [
  {
    name: "Raj Kumar Mahto",
    role: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/raj-kumar-mahto-784278230/",
    github: "https://github.com/rajmahto",
    email: "mahtoraj273@gmail.com",
    image: teamImg1,
  },
  {
    name: "Navneet Sinha",
    role: "UI/UX Designer",
    linkedin:
      "https://www.linkedin.com/in/nvnit-sinha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/nvnit-sinha",
    email: "navneet.sinha@example.com",
    image: teamImg2,
  },
  {
    name: "Sweta Singh",
    role: "Backend Developer",
    linkedin: "https://linkedin.com/in/alexbrown",
    github: "https://github.com/alexbrown",
    email: "sweta.singh@example.com",
    image: teamImg3,
  },
  {
    name: "Vishal Kumar",
    role: "Project Manager",
    linkedin: "https://linkedin.com/in/emilywhite",
    github: "https://github.com/emilywhite",
    email: "emily.white@example.com",
    image: teamImg4,
  },
];

const AboutUs = () => {
  return (
    <div className="about-page">
      <header className="about-welcome">
        <h1>🌟 Welcome to Calm Haven</h1>
        <p>
          Our mission is to bring peace and wellness through innovative
          therapies. Meet our passionate team dedicated to making a difference.
        </p>
      </header>

      <section className="team-section">
        <h2 className="section-title">👨‍💻 Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img
                src={member.image}
                alt={member.name}
                className="team-image"
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className="social-icons">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
