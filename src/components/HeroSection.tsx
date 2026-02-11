import { useLanguage } from '@/i18n/LanguageContext';
import { Phone, MapPin, Sparkles } from 'lucide-react';
import heroImg from '@/assets/hero-restaurant.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Warm glowing orbs */}
      <div className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full bg-accent/8 blur-[150px]" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-primary/6 blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-secondary/15 blur-[100px]" />

      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(25 20% 16%) 0.5px, transparent 0)', backgroundSize: '32px 32px' }} />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-0">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-20 items-center">

          {/* Left: Content */}
          <div className="order-2 md:order-1 text-center md:text-left">
            {/* Location badge */}
            <div className="inline-flex items-center gap-3 mb-8 animate-fade-in bg-foreground/5 border border-foreground/10 rounded-full px-5 py-2">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <p className="text-foreground/60 font-medium tracking-[0.15em] uppercase text-xs">
                Barcelona · El Clot
              </p>
            </div>

            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-foreground mb-3 animate-fade-in leading-[1]">
              Restaurante
            </h1>
            <div className="flex items-center gap-5 justify-center md:justify-start mb-8 animate-fade-in">
              <span className="hidden sm:block w-16 h-[2px] bg-accent/50" />
              <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-accent leading-[1]">
                Sol
              </h1>
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-accent/60" />
            </div>

            {/* Decorative separator */}
            <div className="flex items-center gap-4 mb-8 justify-center md:justify-start animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <span className="text-accent text-lg">✦</span>
              <span className="w-20 h-px bg-gradient-to-r from-accent/40 to-transparent" />
              <span className="text-foreground/40 text-xs tracking-[0.3em] uppercase font-medium">Cocina Mediterránea</span>
              <span className="w-20 h-px bg-gradient-to-l from-accent/40 to-transparent" />
              <span className="text-accent text-lg">✦</span>
            </div>

            <p className="text-xl md:text-2xl text-foreground/50 mb-12 font-light leading-relaxed max-w-lg mx-auto md:mx-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {t('hero.claim')}
            </p>

            <div className="flex flex-col sm:flex-row items-center md:items-start gap-3 animate-fade-in" style={{ animationDelay: '0.35s' }}>
              <a
                href="#menu"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-10 py-4 rounded-lg font-semibold text-base hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20"
              >
                {t('hero.cta.menu')}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-foreground/5 border border-foreground/15 text-foreground px-8 py-4 rounded-lg font-medium hover:bg-foreground/10 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                {t('hero.cta.contact')}
              </a>
              <a
                href="tel:932454228"
                className="inline-flex items-center gap-2 bg-foreground/5 border border-foreground/15 text-foreground px-8 py-4 rounded-lg font-medium hover:bg-foreground/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {t('hero.cta.call')}
              </a>
            </div>
          </div>

          {/* Right: Image composition */}
          <div className="order-1 md:order-2 flex justify-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="relative">
              {/* Decorative ring behind image */}
              <div className="absolute -inset-8 border border-accent/20 rounded-2xl rotate-3" />
              <div className="absolute -inset-4 border border-foreground/8 rounded-xl -rotate-2" />

              {/* Glow behind image */}
              <div className="absolute -inset-6 bg-accent/10 rounded-2xl blur-2xl" />

              {/* Corner ornaments */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-accent/50 rounded-tl-lg z-20" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-accent/50 rounded-tr-lg z-20" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-accent/50 rounded-bl-lg z-20" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-accent/50 rounded-br-lg z-20" />

              {/* Main image */}
              <div className="relative w-[280px] h-[370px] sm:w-[320px] sm:h-[420px] md:w-[360px] md:h-[460px] rounded-xl overflow-hidden shadow-2xl shadow-foreground/20">
                <img
                  src={heroImg}
                  alt="Platos mediterráneos del Restaurante Sol"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-foreground/5" />
                
                {/* Overlay text on image */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="backdrop-blur-md bg-foreground/30 rounded-lg p-4 border border-background/10">
                    <p className="text-background/70 text-xs tracking-[0.2em] uppercase mb-1">Desde Barcelona</p>
                    <p className="text-background font-display text-lg font-semibold">Sabor auténtico</p>
                  </div>
                </div>
              </div>

              {/* Floating badge top-right */}
              <div className="absolute -top-5 -right-5 bg-accent text-accent-foreground px-4 py-3 rounded-xl shadow-xl z-20 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <Sparkles className="w-5 h-5 mx-auto mb-1" />
                <p className="text-[10px] font-bold tracking-wider uppercase">Menú del día</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2">
        <span className="text-foreground/30 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-foreground/15 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-accent/50 rounded-full" />
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
    </section>
  );
};

export default HeroSection;
