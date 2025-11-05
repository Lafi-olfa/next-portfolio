import About from './components/about';
import HeroSection from './components/hero-section';
import Navbar from './components/navbar';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden box-border p-0 m-0 text-xl">
      <Navbar />
      <HeroSection/>
      <About/>
    </div>
  );
}
