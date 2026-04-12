import { useEffect, useState } from "react";
import "./App.css";
import profile from "./assets/profile.jpg";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("Backend integration ready");
  }, []);

  return (
    <div className="container">
      <header className="hero">
        <img src={profile} alt="Nishant Pokhrel" className="profile-img" />
        <h1>Nishant Pokhrel</h1>
        <p className="tagline">Cybersecurity | Policy | DFIR</p>
        <p className="intro">
          I am a cybersecurity student focused on digital forensics, incident
          response, security architecture, and policy-driven technology
          strategy.
        </p>
      </header>

      <section className="section">
        <h2>About Me</h2>
        <p>
          I am a BSc IT student specializing in cybersecurity with interests in
          DFIR, governance, security architecture, and public policy. My goal is
          to build secure systems and contribute to technology-driven reform and
          strategic cybersecurity practice.
        </p>
      </section>

      <section className="section">
        <h2>Projects</h2>

        <div className="card">
          <h3>Suspicious Link Analyzer</h3>
          <p>
            A web-based system that evaluates URLs using heuristic analysis and
            threat intelligence indicators to generate a risk score and readable
            explanation for users.
          </p>
        </div>

        <div className="card">
          <h3>DFIR Case Studies</h3>
          <p>
            Academic and lab-based digital forensics work using tools such as
            Autopsy, FTK Imager, Volatility, and Wireshark to investigate
            incidents and analyze evidence.
          </p>
        </div>

        <div className="card">
          <h3>Security Architecture Work</h3>
          <p>
            Architecture and governance-focused work involving layered defense,
            risk trade-offs, Zero Trust principles, and incident response
            planning.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <ul className="skills">
          <li>React</li>
          <li>Django</li>
          <li>Python</li>
          <li>Git & GitHub</li>
          <li>Digital Forensics</li>
          <li>Incident Response</li>
          <li>Security Architecture</li>
          <li>Cybersecurity Governance</li>
        </ul>
      </section>

      <section className="section">
        <h2>+977 9866740810</h2>
        <p>Email: nishantpokhrel001@gmail.com</p>
        <p>GitHub: github.com/NiksDaju</p>
        <p>LinkedIn: linkedin.com/in/nikspokhrel</p>
      </section>

    
    </div>
  );
}

export default App;