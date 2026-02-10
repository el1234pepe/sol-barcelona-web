import { useLanguage } from '@/i18n/LanguageContext';
import { Phone, MapPin } from 'lucide-react';
import heroImg from '@/assets/hero-restaurant.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-end bg-background overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />

      {/* Image - right side on desktop, top on mobile */}
      <div className="absolute top-0 right-0 w-full h-[45vh] md:h-full md:w-[55%] overflow-hidden">
        <img
          src={heroImg}
          alt="Platos mediterráneos del Restaurante Sol"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent md:bg-gradient-to-r md:from-background md:via-background/40 md:to-transparent" />
      </div>

      {/* Content - left side */}
      <div className="relative z-10 w-full md:w-[50%] px-6 md:px-12 lg:px-20 pb-16 pt-[48vh] md:pt-0 md:pb-24 md:flex md:flex-col md:justify-center md:min-h-screen">
        <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4 animate-fade-in">
          Barcelona · El Clot
        </p>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in leading-[1.1]">
          Restaurante
          <br />
          <span className="text-primary">Sol</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 font-light leading-relaxed max-w-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {t('hero.claim')}
        </p>
        <div className="flex flex-col sm:flex-row items-start gap-3 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-olive-light transition-colors"
          >
            {t('hero.cta.menu')}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-3 rounded-md font-medium hover:bg-secondary transition-colors"
          >
            <MapPin className="w-4 h-4" />
            {t('hero.cta.contact')}
          </a>
          <a
            href="tel:932454228"
            className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-3 rounded-md font-medium hover:bg-secondary transition-colors"
          >
            <Phone className="w-4 h-4" />
            {t('hero.cta.call')}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-foreground/40 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
