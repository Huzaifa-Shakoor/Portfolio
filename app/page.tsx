import About from './Components/about';
import Contact from './Components/contact';
import Hero from './Components/hero';  
import Resume from './Components/resume';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Resume />
      <Contact />
    </>
  );
}
