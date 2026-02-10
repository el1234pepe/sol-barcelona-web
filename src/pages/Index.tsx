import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MenuSection from '@/components/MenuSection';
import WinesSection from '@/components/WinesSection';
import ContactSection from '@/components/ContactSection';
import HoursSection from '@/components/HoursSection';
import Footer from '@/components/Footer';
import FloatingCallButton from '@/components/FloatingCallButton';

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MenuSection />
        <WinesSection />
        <ContactSection />
        <HoursSection />
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
};

export default Index;
