import { useLanguage } from '@/i18n/LanguageContext';
import foodImg from '@/assets/food-spread.jpg';

interface MenuItem {
  name: Record<string, string>;
  desc: Record<string, string>;
  price: string;
}

interface MenuCategory {
  key: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    key: 'menu.tapas',
    items: [
      { name: { es: 'Patatas bravas', ca: 'Patates braves', en: 'Patatas bravas' }, desc: { es: 'Con salsa brava casera y alioli', ca: 'Amb salsa brava casolana i allioli', en: 'With homemade brava sauce and aioli' }, price: '5,50€' },
      { name: { es: 'Croquetas de jamón', ca: 'Croquetes de pernil', en: 'Ham croquettes' }, desc: { es: 'Cremosas, con jamón ibérico', ca: 'Cremoses, amb pernil ibèric', en: 'Creamy, with Iberian ham' }, price: '7,00€' },
      { name: { es: 'Tabla de quesos', ca: 'Taula de formatges', en: 'Cheese board' }, desc: { es: 'Selección de quesos artesanos', ca: 'Selecció de formatges artesans', en: 'Selection of artisan cheeses' }, price: '9,50€' },
      { name: { es: 'Aceitunas aliñadas', ca: 'Olives amanides', en: 'Marinated olives' }, desc: { es: 'Olivas verdes con especias', ca: 'Olives verdes amb espècies', en: 'Green olives with spices' }, price: '3,50€' },
      { name: { es: 'Pan con tomate', ca: 'Pa amb tomàquet', en: 'Bread with tomato' }, desc: { es: 'Con aceite de oliva virgen extra', ca: 'Amb oli d\'oliva verge extra', en: 'With extra virgin olive oil' }, price: '3,00€' },
    ],
  },
  {
    key: 'menu.burgers',
    items: [
      { name: { es: 'Burger Sol', ca: 'Burger Sol', en: 'Burger Sol' }, desc: { es: 'Ternera, cheddar, bacon, lechuga y tomate', ca: 'Vedella, cheddar, bacon, enciam i tomàquet', en: 'Beef, cheddar, bacon, lettuce and tomato' }, price: '11,50€' },
      { name: { es: 'Burger Mediterránea', ca: 'Burger Mediterrània', en: 'Mediterranean Burger' }, desc: { es: 'Ternera, queso de cabra, rúcula y cebolla caramelizada', ca: 'Vedella, formatge de cabra, rúcula i ceba caramel·litzada', en: 'Beef, goat cheese, arugula and caramelized onion' }, price: '12,50€' },
      { name: { es: 'Burger Veggie', ca: 'Burger Veggie', en: 'Veggie Burger' }, desc: { es: 'Hamburguesa vegetal con verduras a la parrilla', ca: 'Hamburguesa vegetal amb verdures a la graella', en: 'Plant-based burger with grilled vegetables' }, price: '11,00€' },
    ],
  },
  {
    key: 'menu.sandwiches',
    items: [
      { name: { es: 'Bocadillo de jamón ibérico', ca: 'Entrepà de pernil ibèric', en: 'Iberian ham sandwich' }, desc: { es: 'Con tomate rallado y aceite', ca: 'Amb tomàquet ratllat i oli', en: 'With grated tomato and oil' }, price: '8,50€' },
      { name: { es: 'Bocadillo de calamares', ca: 'Entrepà de calamars', en: 'Calamari sandwich' }, desc: { es: 'Calamares a la romana con alioli', ca: 'Calamars a la romana amb allioli', en: 'Roman-style calamari with aioli' }, price: '7,50€' },
      { name: { es: 'Bocadillo vegetal', ca: 'Entrepà vegetal', en: 'Veggie sandwich' }, desc: { es: 'Lechuga, tomate, huevo, atún y mayonesa', ca: 'Enciam, tomàquet, ou, tonyina i maionesa', en: 'Lettuce, tomato, egg, tuna and mayo' }, price: '6,50€' },
    ],
  },
  {
    key: 'menu.dishes',
    items: [
      { name: { es: 'Paella mixta', ca: 'Paella mixta', en: 'Mixed paella' }, desc: { es: 'Arroz con mariscos y pollo (mínimo 2 personas)', ca: 'Arròs amb marisc i pollastre (mínim 2 persones)', en: 'Rice with seafood and chicken (min. 2 people)' }, price: '14,00€/pp' },
      { name: { es: 'Entrecot a la brasa', ca: 'Entrecot a la brasa', en: 'Grilled entrecôte' }, desc: { es: 'Con patatas y pimientos del padrón', ca: 'Amb patates i pebrots del Padró', en: 'With potatoes and Padrón peppers' }, price: '16,50€' },
      { name: { es: 'Merluza al horno', ca: 'Lluç al forn', en: 'Baked hake' }, desc: { es: 'Con verduras de temporada', ca: 'Amb verdures de temporada', en: 'With seasonal vegetables' }, price: '13,50€' },
      { name: { es: 'Pollo al ajillo', ca: 'Pollastre a l\'all', en: 'Garlic chicken' }, desc: { es: 'Con guarnición de patatas', ca: 'Amb guarnició de patates', en: 'With potato side' }, price: '11,00€' },
    ],
  },
  {
    key: 'menu.salads',
    items: [
      { name: { es: 'Ensalada Sol', ca: 'Amanida Sol', en: 'Sol Salad' }, desc: { es: 'Mezclum, queso de cabra, nueces, tomates cherry y vinagreta de miel', ca: 'Mezclum, formatge de cabra, nous, tomàquets cherry i vinagreta de mel', en: 'Mixed greens, goat cheese, walnuts, cherry tomatoes and honey vinaigrette' }, price: '9,50€' },
      { name: { es: 'Ensalada César', ca: 'Amanida Cèsar', en: 'Caesar Salad' }, desc: { es: 'Lechuga romana, pollo, parmesano y croutons', ca: 'Enciam romà, pollastre, parmesà i croutons', en: 'Romaine lettuce, chicken, parmesan and croutons' }, price: '10,00€' },
    ],
  },
  {
    key: 'menu.desserts',
    items: [
      { name: { es: 'Crema catalana', ca: 'Crema catalana', en: 'Crema catalana' }, desc: { es: 'Receta tradicional', ca: 'Recepta tradicional', en: 'Traditional recipe' }, price: '5,00€' },
      { name: { es: 'Tarta de queso', ca: 'Pastís de formatge', en: 'Cheesecake' }, desc: { es: 'Con coulis de frutos rojos', ca: 'Amb coulis de fruits vermells', en: 'With red berry coulis' }, price: '5,50€' },
      { name: { es: 'Helado artesano', ca: 'Gelat artesà', en: 'Artisan ice cream' }, desc: { es: '2 bolas a elegir', ca: '2 boles a triar', en: '2 scoops of your choice' }, price: '4,50€' },
    ],
  },
  {
    key: 'menu.combos',
    items: [
      { name: { es: 'Combinado 1', ca: 'Combinat 1', en: 'Combo 1' }, desc: { es: 'Huevo frito, patatas, jamón y ensalada', ca: 'Ou fregit, patates, pernil i amanida', en: 'Fried egg, fries, ham and salad' }, price: '9,50€' },
      { name: { es: 'Combinado 2', ca: 'Combinat 2', en: 'Combo 2' }, desc: { es: 'Pechuga a la plancha, patatas y ensalada', ca: 'Pit a la planxa, patates i amanida', en: 'Grilled chicken breast, fries and salad' }, price: '10,00€' },
      { name: { es: 'Combinado 3', ca: 'Combinat 3', en: 'Combo 3' }, desc: { es: 'Calamares, patatas, ensalada y pan', ca: 'Calamars, patates, amanida i pa', en: 'Calamari, fries, salad and bread' }, price: '10,50€' },
    ],
  },
];

const MenuSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="menu" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">{t('nav.menu')}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">{t('menu.title')}</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </div>

        {/* Food image */}
        <div className="mb-16 rounded-lg overflow-hidden max-w-2xl mx-auto">
          <img src={foodImg} alt="Nuestros platos" className="w-full h-64 md:h-80 object-cover" />
        </div>

        {/* Menu categories */}
        <div className="max-w-3xl mx-auto space-y-14">
          {menuData.map((category) => (
            <div key={category.key}>
              <h3 className="font-display text-2xl md:text-3xl font-semibold mb-6 text-primary">
                {t(category.key)}
              </h3>
              <div className="space-y-5">
                {category.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start gap-4 group">
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2">
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {item.name[language] || item.name.es}
                        </h4>
                        <span className="flex-1 border-b border-dotted border-border min-w-[2rem]" />
                        <span className="font-semibold text-foreground whitespace-nowrap">{item.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.desc[language] || item.desc.es}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-14 italic">
          {t('menu.note')}
        </p>
      </div>
    </section>
  );
};

export default MenuSection;
