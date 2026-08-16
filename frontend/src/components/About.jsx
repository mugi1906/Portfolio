import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-mk">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">
              <span className="dot" /> About Me
            </span>
            <h2>Building practical software, one project at a time</h2>
          </div>
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <div className="about-copy">
              <p>
                I'm <strong>Mukilan S</strong>, a BSc Computer Science graduate from Jairams Arts
                and Science College under Bharathiar University, graduating in 2026.
              </p>
              <p>
                I am a <strong>Full-Stack / MERN Stack Developer</strong> with practical
                experience building realtime web applications. During my CodeAlpha internship, I
                worked on multiple MERN-based projects including a Social Media Platform, Project
                Management Tool and E-Commerce application.
              </p>
              <p>
                I also completed MERN Stack training through SDLC and developed a{" "}
                <strong>Project Review Management System</strong> as a realtime project.
              </p>
              <p>
                Beyond MERN Stack, I have experience with React, JavaScript, PHP, Laravel, MySQL,
                Flutter, Dart, Firebase and C++.
              </p>
              <p>
                My goal is to continuously improve my problem-solving and development skills while
                building scalable, user-friendly and real-world software applications.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mk-card info-card">
              <div className="info-row">
                <span className="k">Education</span>
                <span className="v">BSc Computer Science</span>
              </div>
              <div className="info-row">
                <span className="k">Graduation</span>
                <span className="v">2026</span>
              </div>
              <div className="info-row">
                <span className="k">Primary Stack</span>
                <span className="v">MERN</span>
              </div>
              <div className="info-row">
                <span className="k">Current Project</span>
                <span className="v">Employee Management System</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
