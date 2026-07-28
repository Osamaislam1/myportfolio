import { useState, useEffect } from 'react';
import { useLenis } from './hooks/useLenis';
import { gsap, prefersReducedMotion } from './lib/gsap';
import Preloader from './components/Preloader';
import CustomCursor from './components/ui/CustomCursor';
import Marquee from './components/ui/Marquee';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
// import Testimonials from './components/Testimonials';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const marqueeItems = [
  'PHP',
  'Laravel',
  'MySQL',
  'React',
  'Next.js',
  'Vue',
  'Node.js',
  'Inertia',
  'Livewire',
  'REST APIs',
  'SaaS',
  'Full Stack',
];

function App() {
  const [loading, setLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('home');

  useLenis();

  // As the curtain lifts, the page scales in from slightly below rest
  const handleReveal = () => {
    if (prefersReducedMotion()) return;
    gsap.fromTo(
      'main',
      { scale: 0.96, y: 28, transformOrigin: 'center top' },
      { scale: 1, y: 0, duration: 1.1, ease: 'power3.out', clearProps: 'transform' }
    );
  };

  // Lock scroll while the preloader plays
  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  useEffect(() => {
    const sections = [
      'home',
      'about',
      'experience',
      'projects',
      'skills',
      'education',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-paper relative grain overflow-x-hidden">
      {loading && <Preloader onReveal={handleReveal} onComplete={() => setLoading(false)} />}
      <CustomCursor />
      <Header currentSection={currentSection} />
      <main>
        <Hero start={!loading} />
        <Marquee items={marqueeItems} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        {/* <Testimonials /> */}
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
