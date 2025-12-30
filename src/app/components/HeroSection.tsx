import { motion } from 'motion/react';
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

          {/* Action buttons removed per request */}
        </motion.div>
      </div>

      {/* Scroll Indicator removed per request */}
    </section>
  );
}