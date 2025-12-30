import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const milestones = [
  { year: '2015', event: 'Founded MHK TECH INC' },
  { year: '2017', event: 'Expanded to 50+ employees' },
  { year: '2019', event: 'Launched AI division' },
  { year: '2021', event: 'Opened international offices' },
  { year: '2023', event: 'Serving 500+ global clients' },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-center mb-16 text-[#0a1a2f]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          About MHK TECH INC
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="self-start"
          >
            <h3
              className="mb-6 text-[#007bff]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our Story
            </h3>
            <p className="text-gray-600 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              MHK TECH INC delivers enterprise cloud and software solutions to clients worldwide, offering industry-first, customizable products and services tailored to diverse business needs. The company specializes in application development, digital growth strategies, and consultancy services, focusing on deeply understanding each client’s core values, ethics, and operational methods to deliver efficient, scalable, and impactful solutions. With highly skilled IT teams, MHK TECH INC builds state-of-the-art applications that support business efficiency, financial planning, and end-to-end operations from initial planning to final customer service while promoting ethical growth and strong organizational culture. The company is committed to timely delivery, customer satisfaction, and responsive communication, typically addressing client inquiries within a few hours and no later than 24 hours.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <h4
                  className="text-[#007bff] mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Our Mission
                </h4>
                <p
                  className="text-gray-600"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Deliver intelligent tech solutions that scale businesses and drive sustainable growth.
                </p>
              </div>

              <div>
                <h4
                  className="text-[#007bff] mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Our Vision
                </h4>
                <p
                  className="text-gray-600"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Be the world's most trusted technology partner, known for innovation, reliability, and excellence.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative self-start"
          >
            <img
              src="https://images.unsplash.com/photo-1633457896836-f8d6025c85d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwb2ZmaWNlJTIwbWVldGluZ3xlbnwxfHx8fDE3NjY5ODY5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Our Team"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#007bff] text-white p-6 rounded-lg shadow-lg">
              <p
                className="text-4xl mb-1"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                500+
              </p>
              <p
                className="text-sm"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Successful Projects
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3
            className="text-center mb-12 text-[#0a1a2f]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Our Journey
          </h3>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#007bff]/30" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-8`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
                      <span
                        className="text-[#007bff] text-xl"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {milestone.year}
                      </span>
                      <p
                        className="text-gray-700 mt-1"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {milestone.event}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex w-8 h-8 bg-[#007bff] rounded-full items-center justify-center z-10">
                    <Check className="w-5 h-5 text-white" />
                  </div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
