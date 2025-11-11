import About from './components/about';
import Contact from './components/contact';
import HeroSection from './components/hero-section';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Skills from './components/skills';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden box-border p-0 m-0 text-xl">
      <Navbar />
      <HeroSection/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}
