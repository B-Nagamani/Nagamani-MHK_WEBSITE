import { motion } from 'motion/react';
import { Button } from './ui/button';
import { SearchAssistant } from './SearchAssistant';

interface HeroSectionProps {
  onContactClick: () => void;
}

export function HeroSection({ onContactClick }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1636703781908-a5e63be992a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZGlnaXRhbCUyMG5ldHdvcmt8ZW58MXx8fHwxNzY2OTg4MDA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Tech Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a2f]/90 via-[#0a1a2f]/80 to-[#007bff]/70" />
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 border-2 border-[#007bff]/30 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-5xl md:text-6xl lg:text-7xl mb-6 text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Innovating Tomorrow,
            <br />
            <span className="text-[#007bff]">Empowering Today</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Leading the way in intelligent technology solutions that transform businesses and drive innovation
          </p>

          {/* Search Assistant */}
          <div className="mb-12">
            <SearchAssistant />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#007bff] hover:bg-[#0056b3] text-white px-8 py-6"
              onClick={() => {
                  const element = document.getElementById('services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    element.classList.add('ring-4', 'ring-[#007bff]/30');
                    setTimeout(() => element.classList.remove('ring-4', 'ring-[#007bff]/30'), 1600);
                  } else {
                    window.location.hash = '#/services';
                  }
              }}
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0a1a2f] px-8 py-6"
              onClick={onContactClick}
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}