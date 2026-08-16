import { CheckIcon, ArrowUpRight } from "./Icons";
import Reveal from "./Reveal";
import RealisticPhone3D from "./RealisticPhone3D";

const FEATURES = [
  "Realtime transport tracking",
  "Firebase integration for live data sync",
  "Native-feeling mobile application built with Flutter",
  "User-friendly, uncluttered interface",
];

export default function MobileApp() {
  return (
    <section id="mobile" className="section">
      <div className="container-mk">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">
              <span className="dot" /> Mobile Application
            </span>
            <h2>Transport Tracking Management System</h2>
            <p>Final-year project — a Flutter mobile application built with Dart and Firebase.</p>
          </div>
        </Reveal>

        <div className="mobile-app-wrap">
          <Reveal>
            <div className="phone-stage">
              <RealisticPhone3D />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <p style={{ color: "var(--ink-soft)", fontSize: 16 }}>
                A mobile-based transport tracking management system developed as my college
                final-year project using Flutter, Dart and Firebase.
              </p>
              <ul className="feature-check-list">
                {FEATURES.map((f) => (
                  <li key={f}>
                    <span className="check">
                      <CheckIcon />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://drive.google.com/file/d/1FaI1q1fApI3ZQnpxjrZjEl9IsivNfpdM/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="btn-mk btn-primary"
                style={{ marginTop: 28 }}
              >
                View Project <ArrowUpRight />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
