import About from './Components/about';
import Contact from './Components/contact';
import Hero from './Components/hero';  
import Projects from './Components/project';
import Resume from './Components/resume';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </>
  );
}
