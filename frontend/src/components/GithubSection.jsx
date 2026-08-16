import { GithubIcon, LinkedinIcon, ArrowUpRight } from "./Icons";
import Reveal from "./Reveal";

export default function GithubSection() {
  return (
    <section className="section section-alt">
      <div className="container-mk">
        <Reveal>
          <div className="github-cta">
            <h3>Code. Build. Learn. Repeat.</h3>
            <p>
              I enjoy turning ideas into working applications and continuously improving my
              development skills through practical projects.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
              <a
                href="https://github.com/mugi1906"
                target="_blank"
                rel="noreferrer"
                className="btn-mk btn-primary"
                style={{ background: "var(--accent)" }}
              >
                <GithubIcon /> GitHub <ArrowUpRight />
              </a>
              <a href="https://www.linkedin.com/in/mukilan-s-442420344/" target="_blank" rel="noreferrer" className="btn-mk btn-outline">
                <LinkedinIcon /> LinkedIn <ArrowUpRight />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
