import { motion } from 'motion/react';
import { Button } from './ui/button';

type Service = {
  icon: any;
  title: string;
  description: string;
};

export function ServicePage({ service, onBack }: { service: Service; onBack: () => void }) {
  const Icon = service.icon;

  return (
    <section className="min-h-screen py-20 bg-[#071025] text-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <Button variant="ghost" onClick={onBack} className="text-white/80">
            ← Back
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white/5 p-8 rounded-lg border border-white/10"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-[#007bff]/20 rounded-lg flex items-center justify-center">
              <Icon className="w-7 h-7 text-[#007bff]" />
            </div>
            <div>
              <h1 className="text-3xl font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{service.title}</h1>
              <p className="text-white/70" style={{ fontFamily: 'var(--font-body)' }}>{service.description}</p>
            </div>
          </div>

          <div className="mt-6 text-white/80">
            <p>
              This page is a placeholder for detailed information about {service.title}. You can extend this
              component with case studies, features, pricing, and contact CTAs specific to this service.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicePage;
