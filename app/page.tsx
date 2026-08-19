import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import HeroSection from './components/hero-section';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Reveal from './components/reveal';
import Skills from './components/skills';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden box-border p-0 m-0 text-xl">
      <Navbar />
       <HeroSection />

            <Reveal>
                <About />
            </Reveal>

            <Reveal>
                <Skills />
            </Reveal>

            <Reveal>
                <Projects />
            </Reveal>

            <Reveal>
                <Contact />
            </Reveal>

            <Footer />
    </div>
  );
}
