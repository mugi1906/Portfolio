import { ArrowUpRight } from "./Icons";

export default function ProjectCard({ project, onOpen }) {
  return (
    <div
      className="mk-card proj-card"
      onClick={() => onOpen(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" ? onOpen(project) : null)}
    >
      <div className="proj-thumb">
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="proj-image"
          />
        )}

        <div className="proj-overlay"></div>

        <span className="thumb-mono">{project.category}</span>

        <span className="thumb-tag">
          {project.source}
        </span>
      </div>
      <div className="proj-body">
        <h3>{project.title}</h3>
        <p className="proj-tagline">{project.tagline}</p>
        <div className="proj-stack">
          {project.stack.slice(0, 4).map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        {project.storePassword && (
          <div className="proj-password">
            <span>Store Password:</span>
            <strong>{project.storePassword}</strong>
          </div>
        )}
        <div className="proj-links" onClick={(e) => e.stopPropagation()}>
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="live">
              {project.liveLabel || "Live Demo"} <ArrowUpRight />
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="code">
              GitHub <ArrowUpRight />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
