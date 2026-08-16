import { useEffect } from "react";
import { CloseIcon, ArrowUpRight } from "./Icons";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="mk-modal-backdrop" onClick={onClose}>
      <div
        className="mk-modal"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="mk-modal-close" onClick={onClose} aria-label="Close project details">
          <CloseIcon />
        </button>
        <div style={{ clear: "both" }}>
          <span className="pill-tag on">{project.category}</span>
          <h3 style={{ fontSize: 24, marginTop: 14 }}>{project.title}</h3>
          <p style={{ color: "var(--ink-soft)", marginTop: 10, fontSize: 15 }}>
            {project.description}
          </p>

          <div style={{ marginTop: 22 }}>
            <div className="skill-group-title">Key Features</div>
            <ul className="proj-list" style={{ marginTop: 10 }}>
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: 22 }}>
            <div className="skill-group-title">Technology Stack</div>
            <div className="proj-stack" style={{ marginTop: 8 }}>
              {project.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 26, display: "flex", gap: 10, flexWrap: "wrap" }}>
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="btn-mk btn-primary btn-sm">
                {project.liveLabel || "Live Demo"} <ArrowUpRight />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn-mk btn-outline btn-sm">
                Source Code <ArrowUpRight />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
