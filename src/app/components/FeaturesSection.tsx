import { motion } from 'motion/react';
import { Lightbulb, Users, Target } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: 'Cutting-Edge Solutions',
    description: 'Leveraging the latest technologies to deliver innovative solutions that keep you ahead of the competition.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our world-class team of engineers and consultants brings decades of combined experience to every project.',
  },
  {
    icon: Target,
    title: 'Customer Focused',
    description: 'Your success is our priority. We tailor our solutions to meet your unique business needs and goals.',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 rounded-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#007bff]/10 rounded-full mb-6">
                  <Icon className="w-8 h-8 text-[#007bff]" />
                </div>
                <h3
                  className="mb-4 text-[#0a1a2f]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-gray-600"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
