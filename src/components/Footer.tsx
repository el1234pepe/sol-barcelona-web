import { useLanguage } from '@/i18n/LanguageContext';
import { Instagram, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-3">Restaurante Sol</h3>
            <p className="text-primary-foreground/60 text-sm">{t('footer.note')}</p>
          </div>

          {/* Contact info */}
          <div className="space-y-2 text-primary-foreground/70 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>C/. Clot 123-127, 08026, Barcelona</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:932454228" className="hover:text-primary-foreground transition-colors">93 245 42 28</a>
            </div>
          </div>

          {/* Social */}
          <div className="flex md:justify-end">
            <a
              href="https://www.instagram.com/rest.solelclot/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">@rest.solelclot</span>
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center">
          <p className="text-primary-foreground/40 text-xs">{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
