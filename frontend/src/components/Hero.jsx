import { GithubIcon, LinkedinIcon, MailIcon, ArrowUpRight } from "./Icons";
import Reveal from "./Reveal";
import { useEffect, useState } from "react";

const STATS = [
  { num: "10+", label: "Realtime / working projects" },
  { num: "MERN", label: "Primary stack" },
  { num: "2026", label: "BSc Computer Science" },
  { num: "1", label: "Flutter mobile application" },
];

export default function Hero() {
  const roles = [
    "Full-Stack / MERN Stack Developer",
    "React • Node.js • Express • MongoDB",
    "Building realtime, production-ready apps",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const typingSpeed = isDeleting ? 30 : 55;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));

        if (text.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));

        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);
  return (
    <section id="home" className="hero">
      <div className="container-mk">
        <div className="hero-grid">
          <Reveal>
            <div>
              <span className="eyebrow">
                <span className="dot" /> BSc Computer Science • 2026 Graduate
              </span>
              <h1>
                Hi, I'm <span style={{ color: "var(--accent-ink)" }}>Mukilan S</span>
              </h1>
              <p className="role-line">
                {text}
                <span className="cursor"></span>
              </p>
              <p className="lede">
                I'm a BSc Computer Science graduate and Full-Stack Developer passionate about
                building responsive web applications, realtime systems and practical software
                solutions. I have hands-on experience developing multiple realtime projects using
                MERN Stack, React, JavaScript, PHP/Laravel, Flutter and Firebase.
              </p>

              <div className="hero-cta">
                <a href="#projects" className="btn-mk btn-primary">
                  View My Projects
                </a>
                <a href="/resume-mukilan-s.pdf" download className="btn-mk btn-outline">
                  Download Resume
                </a>
                <a
                  href="https://github.com/mugi1906"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-mk btn-outline"
                >
                  GitHub <ArrowUpRight />
                </a>
              </div>

              <div className="hero-social">
                <a
                  className="icon-chip"
                  href="https://github.com/mugi1906"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                >
                  <GithubIcon />
                </a>
                <a
                  className="icon-chip"
                  href="https://www.linkedin.com/in/mukilan-s-442420344/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                >
                  <LinkedinIcon />
                </a>
                
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="hero-card-wrap">
              <div className="hero-card">
                <span className="status-strip">
                  <span className="pulse" /> AVAILABLE FOR OPPORTUNITIES
                </span>
                <div className="avatar-ring">MS</div>
                <h3>Mukilan S</h3>
                <p className="sub">{text}<span className="cursor"></span></p>
                <p className="stack-line">React • Node.js • MongoDB</p>
                <div className="badges">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>JavaScript</span>
                  <span>PHP</span>
                </div>
              </div>
              <div className="hero-card-float float-a">
                <span className="dot-ok" /> 10+ builds shipped
              </div>
              <div className="hero-card-float float-b">CodeAlpha Intern</div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="stats-row">
            {STATS.map((s) => (
              <div className="stat-item" key={s.label}>
                <div className="num">{s.num}</div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
