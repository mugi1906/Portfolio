import { GithubIcon, LinkedinIcon } from "./Icons";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="mk-footer">
      <div className="container-mk">
        <div className="footer-top">
          <div className="footer-brand">
            <h4>Mukilan S</h4>
            <p>Full-Stack / MERN Stack Developer</p>
            <p>BSc Computer Science • 2026</p>
          </div>
          <div className="footer-links">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
          <div className="footer-social">
            <a
              className="icon-chip"
              style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.16)", color: "#fff" }}
              href="https://github.com/mugi1906"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <GithubIcon />
            </a>
            <a
              className="icon-chip"
              style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.16)", color: "#fff" }}
              href="https://www.linkedin.com/in/mukilan-s-442420344/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Mukilan S. All rights reserved.</span>
          <span>Built with React &amp; Bootstrap.</span>
        </div>
      </div>
    </footer>
  );
}
