import { ArrowUpRight } from "./Icons";
import Reveal from "./Reveal";
import primg from "../../public/images/pr-7.png"

export default function FeaturedProject({ project }) {
  if (!project) return null;

  return (
    <div className="section" style={{ paddingTop: 0 }}>
      <div className="container-mk">
        <Reveal>
          <div className="featured-wrap">
            <div className="featured-screen">
              <img src={primg} alt="" />
            </div>

            <div className="featured-info">
              <span className="featured-badge">★ Featured Project</span>
              <h3>{project.title}</h3>
              <p className="desc">{project.description}</p>
              <div className="proj-stack" style={{ marginBottom: 24 }}>
                {project.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="btn-mk btn-primary"
                style={{ background: "var(--accent)" }}
              >
                View Live Project <ArrowUpRight />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
