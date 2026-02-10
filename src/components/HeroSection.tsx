import { useLanguage } from '@/i18n/LanguageContext';
import { Phone, MapPin } from 'lucide-react';
import heroImg from '@/assets/hero-restaurant.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Restaurante Sol interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 animate-fade-in">
          Restaurante Sol
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 font-light leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {t('hero.claim')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-olive-light transition-colors"
          >
            {t('hero.cta.menu')}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-primary-foreground/40 text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary-foreground/10 transition-colors"
          >
            <MapPin className="w-4 h-4" />
            {t('hero.cta.contact')}
          </a>
          <a
            href="tel:932454228"
            className="inline-flex items-center gap-2 border border-primary-foreground/40 text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary-foreground/10 transition-colors"
          >
            <Phone className="w-4 h-4" />
            {t('hero.cta.call')}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
