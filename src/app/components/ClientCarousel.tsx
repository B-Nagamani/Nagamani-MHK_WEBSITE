import { motion } from 'motion/react';

const clients = [
  'TechCorp',
  'InnovateLab',
  'DataFlow Inc',
  'CloudSystems',
  'DigitalEdge',
  'FutureTech',
];

export function ClientCarousel() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3
          className="text-center mb-12 text-gray-600"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Trusted by Leading Companies
        </h3>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-12 items-center"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-8 py-4 bg-white rounded-lg shadow-sm min-w-[200px] text-center"
              >
                <span
                  className="text-xl text-[#0a1a2f]/70"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {client}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
