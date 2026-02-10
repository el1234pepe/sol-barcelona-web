import { useLanguage } from '@/i18n/LanguageContext';
import cocktailImg from '@/assets/cocktails-bar.jpg';

interface WineItem {
  name: string;
  origin?: string;
  grape?: string;
  bottle?: string;
  glass?: string;
  price?: string;
  desc?: Record<string, string>;
}

interface WineCategory {
  key: string;
  items: WineItem[];
}

const wineData: WineCategory[] = [
  {
    key: 'wines.red',
    items: [
      { name: 'Coto de Imaz Reserva', origin: 'D.O. Rioja', grape: 'Tempranillo', bottle: '16,00€', glass: '4,00€' },
      { name: 'Ramón Bilbao Crianza', origin: 'D.O. Rioja', grape: 'Tempranillo', bottle: '14,50€', glass: '3,50€' },
      { name: 'Celeste Crianza', origin: 'D.O. Ribera del Duero', grape: 'Tinto Fino', bottle: '18,00€', glass: '4,50€' },
      { name: 'Torres Coronas', origin: 'D.O. Catalunya', grape: 'Tempranillo, Cabernet Sauvignon', bottle: '12,00€', glass: '3,00€' },
    ],
  },
  {
    key: 'wines.white',
    items: [
      { name: 'Mar de Frades', origin: 'D.O. Rías Baixas', grape: 'Albariño', bottle: '17,00€', glass: '4,50€' },
      { name: 'Viña Sol', origin: 'D.O. Catalunya', grape: 'Parellada', bottle: '10,50€', glass: '3,00€' },
      { name: 'Martín Códax', origin: 'D.O. Rías Baixas', grape: 'Albariño', bottle: '15,00€', glass: '4,00€' },
    ],
  },
  {
    key: 'wines.rose',
    items: [
      { name: 'Torres De Casta', origin: 'D.O. Catalunya', grape: 'Garnacha', bottle: '10,00€', glass: '3,00€' },
      { name: 'Muga Rosado', origin: 'D.O. Rioja', grape: 'Garnacha, Viura', bottle: '13,00€', glass: '3,50€' },
    ],
  },
  {
    key: 'wines.sparkling',
    items: [
      { name: 'Freixenet Carta Nevada', origin: 'D.O. Cava', grape: 'Macabeo, Xarel·lo, Parellada', bottle: '9,00€' },
      { name: 'Codorníu Anna', origin: 'D.O. Cava', grape: 'Chardonnay, Parellada', bottle: '12,50€' },
    ],
  },
];

const cocktails: { name: string; desc: Record<string, string>; price: string }[] = [
  { name: 'Mojito', desc: { es: 'Ron, lima, menta, azúcar y soda', ca: 'Rom, llima, menta, sucre i soda', en: 'Rum, lime, mint, sugar and soda' }, price: '8,00€' },
  { name: 'Gin Tonic Premium', desc: { es: 'Gin selección con tónica premium y botánicos', ca: 'Gin selecció amb tònica premium i botànics', en: 'Premium gin with premium tonic and botanicals' }, price: '9,50€' },
  { name: 'Aperol Spritz', desc: { es: 'Aperol, prosecco y soda', ca: 'Aperol, prosecco i soda', en: 'Aperol, prosecco and soda' }, price: '8,50€' },
  { name: 'Margarita', desc: { es: 'Tequila, triple seco y lima', ca: 'Tequila, triple sec i llima', en: 'Tequila, triple sec and lime' }, price: '8,50€' },
  { name: 'Sangría Sol', desc: { es: 'Vino tinto, frutas de temporada y un toque de brandy', ca: 'Vi negre, fruites de temporada i un toc de brandi', en: 'Red wine, seasonal fruits and a touch of brandy' }, price: '6,00€/copa' },
  { name: 'Negroni', desc: { es: 'Gin, vermut rojo y Campari', ca: 'Gin, vermut vermell i Campari', en: 'Gin, red vermouth and Campari' }, price: '9,00€' },
];

const WinesSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="wines" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">{t('nav.wines')}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">{t('wines.title')}</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </div>

        {/* Image */}
        <div className="mb-16 rounded-lg overflow-hidden max-w-2xl mx-auto">
          <img src={cocktailImg} alt="Bar y cócteles" className="w-full h-64 md:h-80 object-cover" />
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Wines */}
          <div className="space-y-12 mb-16">
            {wineData.map((cat) => (
              <div key={cat.key}>
                <h3 className="font-display text-2xl md:text-3xl font-semibold mb-6 text-primary">
                  {t(cat.key)}
                </h3>
                <div className="space-y-4">
                  {cat.items.map((wine, idx) => (
                    <div key={idx} className="group">
                      <div className="flex items-baseline gap-2">
                        <h4 className="font-medium group-hover:text-primary transition-colors">{wine.name}</h4>
                        <span className="flex-1 border-b border-dotted border-border min-w-[2rem]" />
                        <div className="flex gap-3 text-sm whitespace-nowrap">
                          {wine.glass && <span>{t('wines.glass')}: {wine.glass}</span>}
                          {wine.bottle && <span className="font-semibold">{t('wines.bottle')}: {wine.bottle}</span>}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {wine.origin} · {wine.grape}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Cocktails */}
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold mb-6 text-primary">
              {t('wines.cocktails')}
            </h3>
            <div className="space-y-5">
              {cocktails.map((c, idx) => (
                <div key={idx} className="flex justify-between items-start gap-4 group">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2">
                      <h4 className="font-medium group-hover:text-primary transition-colors">{c.name}</h4>
                      <span className="flex-1 border-b border-dotted border-border min-w-[2rem]" />
                      <span className="font-semibold whitespace-nowrap">{c.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{c.desc[language] || c.desc.es}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinesSection;
