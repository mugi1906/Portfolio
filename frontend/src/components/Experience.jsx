import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-mk">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">
              <span className="dot" /> Experience
            </span>
            <h2>Build log</h2>
            <p>A running record of where I've applied the MERN stack in practice.</p>
          </div>
        </Reveal>

        <div className="buildlog">
          <Reveal>
            <div className="mk-card buildlog-entry">
              <span className="org">CodeAlpha</span>
              <h3 style={{ fontSize: 20, marginTop: 4 }}>MERN Stack Developer Intern</h3>
              <p style={{ color: "var(--ink-soft)", marginTop: 10, fontSize: 14.5 }}>
                During the internship, developed multiple realtime MERN Stack applications
                covering social, project-management and e-commerce use cases.
              </p>
              <ul className="proj-list">
                <li>Social Media Platform</li>
                <li>Project Management Tool</li>
                <li>E-Commerce Application</li>
              </ul>
              <div className="tag-row">
                {["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication", "CRUD operations", "Responsive UI"].map(
                  (t) => (
                    <span className="pill-tag" key={t}>
                      {t}
                    </span>
                  )
                )}
              </div>
              <div style={{ marginTop: 18, display: "flex", gap: 10 }}>
                <a href="#projects" className="btn-mk btn-outline btn-sm">
                  View Project Links
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mk-card buildlog-entry">
              <span className="org">SDLC</span>
              <h3 style={{ fontSize: 20, marginTop: 4 }}>MERN Stack Development Training</h3>
              <p style={{ color: "var(--ink-soft)", marginTop: 10, fontSize: 14.5 }}>
                Completed MERN Stack training and developed a realtime{" "}
                <strong style={{ color: "var(--ink)" }}>Project Review Management System</strong>.
              </p>
              <div className="tag-row">
                {["React", "Node.js", "Express.js", "MongoDB"].map((t) => (
                  <span className="pill-tag on" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: 18 }}>
                <a
                  href="https://prms-frontend-delta.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-mk btn-primary btn-sm"
                >
                  View Project
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
