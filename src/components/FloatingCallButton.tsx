import { Phone } from 'lucide-react';

const FloatingCallButton = () => {
  return (
    <a
      href="tel:932454228"
      className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:bg-olive-light transition-colors"
      aria-label="Llamar al restaurante"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};

export default FloatingCallButton;
