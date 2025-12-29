import { motion } from 'motion/react';
import { Brain, Cloud, Server, Database } from 'lucide-react';
import { Button } from './ui/button';

export const services = [
  {
    icon: Brain,
    title: 'AI Solutions',
    description: 'Drive innovation and stay ahead of the competition with our AI Solutions.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Streamline and scale business operations with our cloud-based solutions.',
  },
  {
    icon: Server,
    title: 'IT Solutions',
    description: 'Boost productivity, maximize growth and minimize downtime with our comprehensive IT Services.',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Manage, process and analyze your data at scale.',
  },
];

export function ServicesSection() {
  const navigateTo = (title: string) => {
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    window.location.hash = `#/service/${slug}`;
  };

  return (
    <section id="services" className="py-20 bg-white text-[#0a1a2f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            What We Do
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Comprehensive technology solutions to power your digital transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-[#007bff] hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => navigateTo(service.title)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#eef2ff] rounded-lg flex items-center justify-center group-hover:bg-[#007bff] transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#007bff] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3 text-[#0a1a2f]" style={{ fontFamily: 'var(--font-heading)' }}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-[#007bff] hover:bg-[#0056b3] text-white px-8"
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Detailed Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}