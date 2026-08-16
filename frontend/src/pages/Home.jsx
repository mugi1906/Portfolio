import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import MobileApp from "../components/MobileApp";
import Education from "../components/Education";
import GithubSection from "../components/GithubSection";
import Contact from "../components/Contact";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <MobileApp />
        <Education />
        <GithubSection />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}