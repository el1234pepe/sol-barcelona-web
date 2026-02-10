import { useLanguage } from '@/i18n/LanguageContext';
import { Clock } from 'lucide-react';
import terraceImg from '@/assets/terrace.jpg';

const hours = [
  { key: 'hours.monThu', time: '08:00 – 00:00' },
  { key: 'hours.friSat', time: '08:00 – 02:00' },
  { key: 'hours.sun', time: '09:00 – 00:00' },
];

const HoursSection = () => {
  const { t } = useLanguage();

  return (
    <section id="hours" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={terraceImg} alt="Terraza" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <span className="text-primary-foreground/80 text-sm font-medium tracking-widest uppercase">{t('nav.hours')}</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4 text-primary-foreground">{t('hours.title')}</h2>
        <div className="w-16 h-0.5 bg-primary-foreground/40 mx-auto mb-12" />

        <div className="max-w-md mx-auto space-y-6">
          {hours.map((h) => (
            <div key={h.key} className="flex items-center justify-between gap-4 text-primary-foreground">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 opacity-70" />
                <span className="font-medium">{t(h.key)}</span>
              </div>
              <span className="font-display text-lg font-semibold">{h.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HoursSection;
