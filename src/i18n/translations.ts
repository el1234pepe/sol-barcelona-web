export type Language = 'es' | 'ca' | 'en';

export const translations: Record<string, Record<Language, string>> = {
  // Nav
  'nav.home': { es: 'Inicio', ca: 'Inici', en: 'Home' },
  'nav.menu': { es: 'Carta', ca: 'Carta', en: 'Menu' },
  'nav.wines': { es: 'Vinos & Cócteles', ca: 'Vins & Còctels', en: 'Wines & Cocktails' },
  'nav.contact': { es: 'Contacto', ca: 'Contacte', en: 'Contact' },
  'nav.hours': { es: 'Horarios', ca: 'Horaris', en: 'Hours' },

  // Hero
  'hero.claim': {
    es: 'Cocina mediterránea, ambiente cercano y sabor de barrio',
    ca: 'Cuina mediterrània, ambient proper i sabor de barri',
    en: 'Mediterranean cuisine, warm atmosphere and neighborhood flavor',
  },
  'hero.cta.menu': { es: 'Ver carta', ca: 'Veure carta', en: 'View menu' },
  'hero.cta.contact': { es: 'Cómo llegar', ca: 'Com arribar', en: 'How to get here' },
  'hero.cta.call': { es: 'Llamar', ca: 'Trucar', en: 'Call us' },

  // Menu sections
  'menu.title': { es: 'Nuestra Carta', ca: 'La Nostra Carta', en: 'Our Menu' },
  'menu.tapas': { es: 'Para picar', ca: 'Per picar', en: 'Tapas' },
  'menu.burgers': { es: 'Hamburguesas', ca: 'Hamburgueses', en: 'Burgers' },
  'menu.sandwiches': { es: 'Bocadillos', ca: 'Entrepans', en: 'Sandwiches' },
  'menu.dishes': { es: 'Platos', ca: 'Plats', en: 'Dishes' },
  'menu.salads': { es: 'Ensaladas', ca: 'Amanides', en: 'Salads' },
  'menu.desserts': { es: 'Postres', ca: 'Postres', en: 'Desserts' },
  'menu.combos': { es: 'Platos combinados', ca: 'Plats combinats', en: 'Combo plates' },
  'menu.note': {
    es: 'IVA incluido · Suplemento servicio terraza +0,10€',
    ca: 'IVA inclòs · Suplement servei terrassa +0,10€',
    en: 'VAT included · Terrace service surcharge +€0.10',
  },

  // Wines & Cocktails
  'wines.title': { es: 'Vinos & Cócteles', ca: 'Vins & Còctels', en: 'Wines & Cocktails' },
  'wines.red': { es: 'Tintos', ca: 'Negres', en: 'Red wines' },
  'wines.white': { es: 'Blancos', ca: 'Blancs', en: 'White wines' },
  'wines.rose': { es: 'Rosados', ca: 'Rosats', en: 'Rosé wines' },
  'wines.sparkling': { es: 'Espumosos', ca: 'Escumosos', en: 'Sparkling' },
  'wines.cocktails': { es: 'Cócteles', ca: 'Còctels', en: 'Cocktails' },
  'wines.bottle': { es: 'Botella', ca: 'Ampolla', en: 'Bottle' },
  'wines.glass': { es: 'Copa', ca: 'Copa', en: 'Glass' },

  // Contact
  'contact.title': { es: 'Ubicación & Contacto', ca: 'Ubicació & Contacte', en: 'Location & Contact' },
  'contact.address': { es: 'Dirección', ca: 'Adreça', en: 'Address' },
  'contact.phone': { es: 'Teléfono', ca: 'Telèfon', en: 'Phone' },
  'contact.email': { es: 'Email', ca: 'Email', en: 'Email' },
  'contact.directions': { es: 'Cómo llegar', ca: 'Com arribar', en: 'Get directions' },

  // Hours
  'hours.title': { es: 'Horarios', ca: 'Horaris', en: 'Hours' },
  'hours.monThu': { es: 'Lunes a jueves', ca: 'Dilluns a dijous', en: 'Monday to Thursday' },
  'hours.friSat': { es: 'Viernes y sábado', ca: 'Divendres i dissabte', en: 'Friday & Saturday' },
  'hours.sun': { es: 'Domingo', ca: 'Diumenge', en: 'Sunday' },

  // Footer
  'footer.rights': { es: '© 2025 Restaurante Sol. Todos los derechos reservados.', ca: '© 2025 Restaurant Sol. Tots els drets reservats.', en: '© 2025 Restaurante Sol. All rights reserved.' },
  'footer.note': {
    es: 'IVA incluido · Suplemento servicio terraza +0,10€',
    ca: 'IVA inclòs · Suplement servei terrassa +0,10€',
    en: 'VAT included · Terrace service surcharge +€0.10',
  },
};
