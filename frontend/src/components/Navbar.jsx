import { useEffect, useState } from "react";
import { MenuIcon, CloseIcon } from "./Icons";
import { label } from "three/src/nodes/core/ContextNode.js";


const LINKS = [
  { number: "01", label: "Home", href: "#home" },
  { number: "02", label: "About", href: "#about" },
  { number: "03", label: "Skills", href: "#skills" },
  { number: "04", label: "Experience", href: "#experience" },
  { number: "05", label: "Projects", href: "#projects" },
  { number: "06", label: "Education", href: "#education" },
  { number: "07", label: "Resume", href: "#resume" },
  { number: "08", label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [open, setOpen] = useState(false);

  const handleMobileClick = (href) => {
    setOpen(false);

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );

    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <div className={`mk-nav-wrap ${scrolled ? "scrolled" : ""}`}>
      <div className="container-mk">

        <nav className="mk-nav" aria-label="Primary">

          {/* Logo */}
          <a href="#home" className="mk-logo">
            <span className="mark">MS</span>
            Mukilan S
          </a>

          {/* Navigation */}
          <div className="mk-links">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>

                <span className="nav-number">
                  {l.number}
                </span>

                <span className="nav-label">
                  <span className="slash">//</span>
                  {l.label}
                </span>

              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="mk-nav-actions">

            {/* Theme Button */}
            <button
              className="theme-icon-btn"
              type="button"
              aria-label={
                darkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              onClick={() => setDarkMode((prev) => !prev)}
            >
              {darkMode ? (
                <span className="sun-icon">☀</span>
              ) : (
                <span className="moon-icon">☾</span>
              )}
            </button>

            {/* Mobile Menu */}
            <button
              className="mk-burger"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>

          </div>
        </nav>

        {open && (
          <div className="mk-mobile-menu">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleMobileClick(l.href);
                }}
              >
                <span>{l.number} // </span>
                {l.label}
              </a>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}