import { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { Menu, X } from 'lucide-react';
import { gsap, prefersReducedMotion } from '../lib/gsap';
import { scrollToId, scrollToTop } from '../lib/scroll';
import { profile } from '../data/profile';

interface HeaderProps {
  currentSection: string;
}

const Header = ({ currentSection }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useGSAP(
    () => {
      if (!menuOpen || !menuRef.current || prefersReducedMotion()) return;
      gsap.from(menuRef.current, { opacity: 0, duration: 0.3 });
      gsap.from('.menu-item', {
        x: -28,
        opacity: 0,
        stagger: 0.06,
        delay: 0.1,
        duration: 0.5,
        ease: 'power3.out',
      });
    },
    { dependencies: [menuOpen], scope: menuRef }
  );

  const navigate = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-paper/85 backdrop-blur-md border-b border-ink/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 xl:px-20 h-16 md:h-20 flex items-center justify-between">
          <button
            onClick={scrollToTop}
            className="font-display text-xl md:text-2xl font-bold tracking-tight text-ink hover:text-accent-ink transition-colors"
          >
            OI<span className="text-accent-ink">.</span>
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {profile.nav.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`section-label transition-colors hover:text-ink ${
                  currentSection === item.id ? 'text-ink' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-2 section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-ink animate-pulse" />
              Available
            </span>

            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden p-2 text-ink"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div ref={menuRef} className="fixed inset-0 z-50 bg-paper flex flex-col">
          <div className="flex items-center justify-between px-5 h-16">
            <span className="font-display text-xl font-bold text-ink">
              OI<span className="text-accent-ink">.</span>
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 text-ink"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center px-8 gap-5">
            {profile.nav.map((item, i) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className="menu-item text-left font-display text-4xl sm:text-5xl font-medium text-ink hover:text-accent-ink transition-colors"
              >
                <span className="section-label text-accent-ink mr-4">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {item.label}
              </button>
            ))}
          </nav>

          <div className="px-8 pb-10 flex items-center gap-2 section-label">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-ink" />
            {profile.status}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
