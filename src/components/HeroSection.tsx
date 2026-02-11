import { useLanguage } from '@/i18n/LanguageContext';
import { Phone, MapPin } from 'lucide-react';
import heroImg from '@/assets/hero-restaurant.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, hsl(25 20% 14%) 0%, hsl(25 18% 20%) 50%, hsl(30 22% 26%) 100%)' }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/6 blur-[100px]" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(36 33% 97%) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-0">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Left: Content */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <div className="inline-flex items-center gap-3 mb-6 animate-fade-in">
              <span className="w-8 h-px bg-accent" />
              <p className="text-accent font-medium tracking-[0.2em] uppercase text-xs">
                Barcelona · El Clot
              </p>
              <span className="w-8 h-px bg-accent" />
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-2 animate-fade-in leading-[1.05]">
              Restaurante
            </h1>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-accent mb-8 animate-fade-in leading-[1.05]">
              Sol
            </h1>

            <div className="flex items-center gap-3 mb-8 justify-center md:justify-start animate-fade-in" style={{ animationDelay: '0.15s' }}>
              <span className="w-12 h-px bg-primary-foreground/20" />
              <span className="text-primary-foreground/30 text-xs tracking-[0.3em] uppercase font-medium">Est. Barcelona</span>
              <span className="w-12 h-px bg-primary-foreground/20" />
            </div>

            <p className="text-lg text-primary-foreground/60 mb-10 font-light leading-relaxed max-w-md mx-auto md:mx-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {t('hero.claim')}
            </p>

            <div className="flex flex-col sm:flex-row items-center md:items-start gap-3 animate-fade-in" style={{ animationDelay: '0.35s' }}>
              <a
                href="#menu"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-md font-medium hover:bg-accent/90 transition-colors"
              >
                {t('hero.cta.menu')}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-primary-foreground/15 text-primary-foreground/80 px-8 py-3 rounded-md font-medium hover:bg-primary-foreground/5 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                {t('hero.cta.contact')}
              </a>
              <a
                href="tel:932454228"
                className="inline-flex items-center gap-2 border border-primary-foreground/15 text-primary-foreground/80 px-8 py-3 rounded-md font-medium hover:bg-primary-foreground/5 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {t('hero.cta.call')}
              </a>
            </div>
          </div>

          {/* Right: Framed image with decorative accents */}
          <div className="order-1 md:order-2 flex justify-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="relative">
              {/* Decorative frame offset */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-accent/20 rounded-lg" />
              <div className="absolute -bottom-4 -left-4 w-full h-full border border-primary-foreground/10 rounded-lg" />
              
              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-accent/40 rounded-tl-sm z-20" />
              <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-accent/40 rounded-br-sm z-20" />

              {/* Main image */}
              <div className="relative w-[280px] h-[380px] sm:w-[320px] sm:h-[420px] md:w-[380px] md:h-[480px] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={heroImg}
                  alt="Platos mediterráneos del Restaurante Sol"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-foreground/10" />
              </div>

              {/* Floating accent badge */}
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground px-4 py-2 rounded-md shadow-lg z-20">
                <p className="text-xs font-medium tracking-wider uppercase">Cocina</p>
                <p className="text-sm font-display font-semibold">Mediterránea</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex">
        <div className="w-6 h-10 border-2 border-primary-foreground/15 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-primary-foreground/30 rounded-full" />
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent" />
    </section>
  );
};

export default HeroSection;
