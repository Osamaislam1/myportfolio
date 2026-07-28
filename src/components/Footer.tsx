import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { scrollToTop } from '../lib/scroll';

const Footer = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      );
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="hairline px-5 sm:px-8 lg:px-12 xl:px-20 py-10 md:py-12">
      <div className="max-w-content mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-sm text-ink-dim">
            © {new Date().getFullYear()} Osama Islam. All rights reserved.
          </p>
          <p className="section-label mt-1">Local time · IST {time}</p>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 section-label hover:text-accent-ink transition-colors"
        >
          Back to top
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
