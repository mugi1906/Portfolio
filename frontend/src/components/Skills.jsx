import skills from "../data/skills";
import Reveal from "./Reveal";

function initials(name) {
  const clean = name.replace(/\.js|\.css|\.dart/gi, (m) => m[0].toUpperCase());
  const parts = clean.split(/[\s+]/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container-mk">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">
              <span className="dot" /> Technical Skills
            </span>
            <h2>Tools I reach for when building</h2>
            <p>Grouped by where they sit in the stack — from interface to database.</p>
          </div>
        </Reveal>

        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 60}>
            <div className="skills-col">
              <div className="skill-group-title">{group.category}</div>
              <div className="skill-grid">
                {group.items.map((item) => (
                  <div key={item.name} className="mk-card skill-chip">
                    <span
                      className="ico"
                      style={{
                        color: item.color,
                        background: item.bg,
                      }}
                    >
                      {initials(item.name)}
                    </span>

                    <span style={{ color: item.color }}>
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
