import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section className="section-alt" id="resume">
      <div className="container-mk">
        <Reveal>
          <div className="final-cta">
            <h2>Have a project or opportunity?</h2>
            <p className="sub">Let's build something useful.</p>
            <div className="final-cta-actions">
              <a href="#contact" className="btn-mk btn-primary">
                Contact Me
              </a>
              <a href="#projects" className="btn-mk btn-outline">
                View Projects
              </a>
              <a href="/resume-mukilan-s.pdf" target="_blank" rel="noreferrer" className="btn-mk btn-outline">
                View Resume
              </a>
              <a href="/resume-mukilan-s.pdf" download className="btn-mk btn-outline">
                Download Resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
