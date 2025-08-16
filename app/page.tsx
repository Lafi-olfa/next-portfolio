import About from './about/page';
import Navbar from './components/navbar';
import { ThemeProvider } from './context/theme-context';

export default function Home() {
  return (
    <div className="div">
     <ThemeProvider>
      <Navbar />
      <About/>
     </ThemeProvider>
    
    </div>
  );
}
