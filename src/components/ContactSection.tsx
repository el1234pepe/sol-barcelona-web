import { useLanguage } from '@/i18n/LanguageContext';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">{t('nav.contact')}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">{t('contact.title')}</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">{t('contact.address')}</h3>
                <p className="text-muted-foreground">C/. Clot 123-127, 08026, Barcelona</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">{t('contact.phone')}</h3>
                <a href="tel:932454228" className="text-muted-foreground hover:text-primary transition-colors">
                  93 245 42 28
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">{t('contact.email')}</h3>
                <a href="mailto:soyyjm@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  soyyjm@gmail.com
                </a>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Calle+Clot+123+08026+Barcelona"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-olive-light transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              {t('contact.directions')}
            </a>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden border border-border h-80 md:h-auto min-h-[320px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.3!2d2.1879!3d41.4074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a31f6e4c5e0f%3A0x0!2sCarrer+del+Clot+123%2C+Barcelona!5e0!3m2!1ses!2ses!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Restaurante Sol"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
