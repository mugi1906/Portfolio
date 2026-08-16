import { useState } from "react";
import Reveal from "./Reveal";
import CertificationModal from "./CertificationModal";

const certifications = [

  {
    title: "Full Stack Development",
    provider: "CodeAlpha",
    type: "Internship / Training",
    status: "Completed",
    description:
      "Completed Full Stack Development internship and gained practical experience in frontend and backend web development.",
    image: "/certificates/CA_Certificate.png",
  },

  {
    title: "MERN Stack Development",
    provider: "SDLC",
    type: "Training",
    status: "Certificate Pending",
    description:
      "Completed MERN Stack Development training covering MongoDB, Express.js, React.js and Node.js with practical project development.",
  },

  {
    title: "React.js Workshop",
    provider: "SDLC",
    type: "Workshop",
    status: "Completed",
    description:
      "Successfully completed a React.js Workshop at SDLC, gaining practical knowledge of React.js concepts and modern frontend development.",
    image: "/certificates/React_WrokShop.jpeg",
  },

  {
    title: "C++ Course",
    provider: "Cybernaut",
    type: "Course",
    status: "Completed",
    description:
      "Completed C++ programming course covering core programming concepts, object-oriented programming and problem-solving.",
    image: "/certificates/C++_Certificate.png",
  },

  {
    title: "COA Course",
    provider: "Bharathidasan University",
    type: "Course",
    status: "Completed",
    description:
      "Successfully completed the COA (Computer Organization and Architecture) course through Bharathidasan University.",
    image: "/certificates/COA_Certificate.jpeg",
  },
];

export default function Education() {
  const [selectedCertification, setSelectedCertification] = useState(null);

  return (
    <section id="education" className="section section-alt">
      <div className="container-mk">

        {/* Education */}
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">
              <span className="dot" /> Education
            </span>

            <h2>Academic background</h2>
          </div>
        </Reveal>

        <Reveal>
          <div
            className="mk-card edu-card"
            style={{ marginBottom: 40 }}
          >
            <span className="yr-badge">2023 — 2026</span>

            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 10,
                }}
              >
                <h3 style={{ fontSize: 19 }}>
                  BSc Computer Science
                </h3>

                <span className="status-badge done">
                  Completed
                </span>
              </div>

              <p
                style={{
                  color: "var(--ink-soft)",
                  marginTop: 8,
                  fontSize: 14.5,
                }}
              >
                Jairams Arts and Science College · Bharathiar University
              </p>
            </div>
          </div>
        </Reveal>

        {/* Certifications */}
        <Reveal delay={80}>
          <div
            className="section-head"
            style={{ marginBottom: 26 }}
          >
            <span className="eyebrow">
              <span className="dot" /> Certification &amp; Training
            </span>

            <h2 style={{ fontSize: 26 }}>
              Additional training and Certification
            </h2>
          </div>
        </Reveal>

        {/* Certification Cards */}
        <div
          className="skill-grid"
          style={{
            gridTemplateColumns:
              "repeat(auto-fill, minmax(220px, 1fr))",
          }}
        >
          {certifications.map((certification, index) => (
            <Reveal key={certification.title} delay={100 + index * 60}>
              <div
                className="mk-card"
                style={{
                  padding: 24,
                  cursor: "pointer",
                }}
                onClick={() =>
                  setSelectedCertification(certification)
                }
              >
                <div
                  className="skill-group-title"
                  style={{ marginBottom: 6 }}
                >
                  Provider
                </div>

                <h3 style={{ fontSize: 17 }}>
                  {certification.title}
                </h3>

                <p
                  style={{
                    color: "var(--ink-soft)",
                    fontSize: 14,
                    marginTop: 6,
                  }}
                >
                  {certification.provider}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <CertificationModal
        certification={selectedCertification}
        onClose={() => setSelectedCertification(null)}
      />
    </section>
  );
}