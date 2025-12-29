import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [mapUrl, setMapUrl] = useState(
    'https://maps.google.com/maps?q=20008%20Champion%20Forest%20Dr%2C%20Spring%2C%20TX%2077379&output=embed'
  );

  const makeEmbed = (q: string) => `https://maps.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl mb-4 text-[#0a1a2f]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Let's Talk
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Have a project in mind? We'd love to hear from you. Get in touch and let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="contact-name">Name</Label>
                <Input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <Label htmlFor="contact-email">Email</Label>
                <Input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <Label htmlFor="contact-subject">Subject</Label>
                <Input
                  id="contact-subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="mt-1"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="mt-1"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#007bff] hover:bg-[#0056b3] text-white"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Office Info */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3
                className="mb-6 text-[#0a1a2f]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Our Locations
              </h3>
              
              <div className="space-y-6">
                {/* USA Office */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#007bff]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#007bff]" />
                  </div>
                  <div>
                    <button
                      onClick={() => setMapUrl(makeEmbed('20008 Champion Forest Dr, Spring, TX 77379 USA'))}
                      className="text-left"
                    >
                      <p className="text-gray-800 mb-1" style={{ fontFamily: 'var(--font-heading)' }}>USA</p>
                      <p className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                        20008 Champion Forest Dr, STE 403<br />
                        Spring, TX 77379 USA
                      </p>
                    </button>
                  </div>
                </div>

                {/* India Office */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#007bff]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#007bff]" />
                  </div>
                  <div>
                    <button
                      onClick={() => setMapUrl(makeEmbed('Road No 36 & 37 Beside Madhapur Metrostation Jubilee Hills, Hyderabad, Telangana, 500033 India'))}
                      className="text-left"
                    >
                      <p className="text-gray-800 mb-1" style={{ fontFamily: 'var(--font-heading)' }}>INDIA</p>
                      <p className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                        Road No 36 & 37 Beside Madhapur<br />
                        Metrostation Jubilee Hills, Hyderabad,<br />
                        Telangana, 500033 India
                      </p>
                    </button>
                  </div>
                </div>

                {/* Canada Office */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#007bff]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#007bff]" />
                  </div>
                  <div>
                    <button
                      onClick={() => setMapUrl(makeEmbed('132 Daylily Lane, Kitchener, Ontario, Canada, N2R 0L7'))}
                      className="text-left"
                    >
                      <p className="text-gray-800 mb-1" style={{ fontFamily: 'var(--font-heading)' }}>CANADA</p>
                      <p className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                        132 Daylily Lane, Kitchener,<br />
                        Ontario, Canada, N2R 0L7
                      </p>
                    </button>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#007bff]" />
                    <p
                      className="text-gray-600 text-sm"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      +1 (555) 123-4567
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#007bff]" />
                    <p
                      className="text-gray-600 text-sm"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      support@mhktech.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="bg-gray-200 rounded-lg overflow-hidden h-64">
              <iframe
                title="company-locations"
                src={mapUrl}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            {/* Social Media */}
            <div>
              <h4
                className="mb-4 text-[#0a1a2f]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Follow Us
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#007bff] rounded-lg flex items-center justify-center hover:bg-[#0056b3] transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#007bff] rounded-lg flex items-center justify-center hover:bg-[#0056b3] transition-colors"
                >
                  <Twitter className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}