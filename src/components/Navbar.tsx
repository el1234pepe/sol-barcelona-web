import { useState, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import LanguageSelector from './LanguageSelector';
import { Menu, X } from 'lucide-react';

const navItems = ['nav.home', 'nav.menu', 'nav.wines', 'nav.contact', 'nav.hours'] as const;
const sectionIds = ['home', 'menu', 'wines', 'contact', 'hours'];

const Navbar = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <button onClick={() => scrollTo('home')} className="font-display text-xl md:text-2xl font-semibold tracking-wide">
          Restaurante Sol
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((key, i) => (
            <button
              key={key}
              onClick={() => scrollTo(sectionIds[i])}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {t(key)}
            </button>
          ))}
          <LanguageSelector />
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <LanguageSelector />
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((key, i) => (
              <button
                key={key}
                onClick={() => scrollTo(sectionIds[i])}
                className="text-left py-2 text-base font-medium hover:text-primary transition-colors"
              >
                {t(key)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
