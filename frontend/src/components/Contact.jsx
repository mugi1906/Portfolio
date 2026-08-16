import { useState } from "react";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSent(true);
        e.target.reset();
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Unable to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container-mk">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">
              <span className="dot" /> Contact
            </span>
            <h2>Let's build something together</h2>
            <p>
              I'm currently open to opportunities where I can contribute, learn and grow as a
              Full-Stack Developer.
            </p>
          </div>
        </Reveal>

        <div className="contact-grid">
          <Reveal>
            <form className="mk-card contact-form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" placeholder="What's this about?" required />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Tell me a bit more…" required />
              </div>
              <button type="submit" className="btn-mk btn-primary btn-block-w">
                Send Message
              </button>
              {sent && (
                <p style={{ color: "#0a7a72", fontSize: 13.5, fontWeight: 600 }}>
                  Thanks! Your message has been sent successfully. I'll get back to you soon.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={100}>
            <div className="mk-card contact-info-card">
              <div className="contact-row">
                <span className="ico">
                  <MailIcon />
                </span>
                <div>
                  <div className="lbl">Email</div>
                  <div className="val">mukilans152@gmail.com</div>
                </div>
              </div>
              <div className="contact-row">
                <span className="ico">
                  <GithubIcon />
                </span>
                <div>
                  <div className="lbl">GitHub</div>
                  <div className="val">https://github.com/mugi1906</div>
                </div>
              </div>
              <div className="contact-row">
                <span className="ico">
                  <LinkedinIcon />
                </span>
                <div>
                  <div className="lbl">LinkedIn</div>
                  <div className="val">https://www.linkedin.com/in/mukilan-s-442420344/</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
