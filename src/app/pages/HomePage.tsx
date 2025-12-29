import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';

export default function HomePage({ onContactClick }: { onContactClick: () => void }) {
  return (
    <div>
      <HeroSection onContactClick={onContactClick} />
      <ServicesSection />
    </div>
  );
}
