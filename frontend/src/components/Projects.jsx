import { useMemo, useState } from "react";
import projects, { filterCategories } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import FeaturedProject from "./FeaturedProject";
import Reveal from "./Reveal";

const COUNTERS = [
  { num: "10+", label: "Projects" },
  { num: "4+", label: "Major full-stack projects" },
  { num: "3", label: "CodeAlpha internship projects" },
  { num: "1", label: "Flutter final-year application" },
];

export default function Projects() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const featured = useMemo(() => projects.find((p) => p.featured), []);

  const sorted = useMemo(
    () => [...projects].sort((a, b) => a.priority - b.priority),
    []
  );

  const filtered = useMemo(() => {
    if (active === "All") return sorted;
    return sorted.filter((p) => p.tags.includes(active));
  }, [active, sorted]);

  return (
    <>
      <section id="projects" className="section">
        <div className="container-mk">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">
                <span className="dot" /> Projects
              </span>
              <h2>Real applications, not just line items</h2>
              <p>
                A working set of MERN, React, PHP and Flutter builds — filter by stack to browse.
              </p>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div className="filter-row" role="tablist" aria-label="Filter projects by technology">
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${active === cat ? "active" : ""}`}
                  onClick={() => setActive(cat)}
                  role="tab"
                  aria-selected={active === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="project-grid">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 70}>
                <ProjectCard project={p} onOpen={setSelected} />
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p style={{ color: "var(--ink-soft)", marginTop: 20 }}>
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>

      <FeaturedProject project={featured} />

      <section className="section section-alt">
        <div className="container-mk">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">
                <span className="dot" /> Track Record
              </span>
              <h2>Built with practice, not just theory</h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="counter-strip">
              {COUNTERS.map((c) => (
                <div className="mk-card counter-card" key={c.label}>
                  <div className="num">{c.num}</div>
                  <div className="lbl">{c.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
