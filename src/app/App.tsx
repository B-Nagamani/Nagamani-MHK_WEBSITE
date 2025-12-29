import { Toaster } from './components/ui/sonner';
import { Navigation } from './components/Navigation';
import { useEffect, useState } from 'react';
import ServicePage from './components/ServicePage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage, { /* fallback */ } from './pages/ServicesPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import AssistantPage from './pages/AssistantPage';
import { services } from './components/ServicesSection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToContact = () => {
    // navigate to contact page
    window.location.hash = '#/contact';
  };

  const [route, setRoute] = useState<
    | { type: 'home' }
    | { type: 'about' }
    | { type: 'services' }
    | { type: 'careers' }
    | { type: 'contact' }
    | { type: 'assistant' }
    | { type: 'service'; slug: string }
  >({ type: 'home' });

  useEffect(() => {
    const parseHash = () => {
      const hash = (window.location.hash || '').toLowerCase();
      const svcMatch = hash.match(/^#\/service\/([a-z0-9\-]+)/);
      if (svcMatch) return setRoute({ type: 'service', slug: svcMatch[1] });
      if (hash === '#/about') return setRoute({ type: 'about' });
      if (hash.startsWith('#/assistant')) return setRoute({ type: 'assistant' });
      if (hash === '#/services') return setRoute({ type: 'services' });
      if (hash === '#/careers') return setRoute({ type: 'careers' });
      if (hash === '#/contact') return setRoute({ type: 'contact' });
      // default/home
      return setRoute({ type: 'home' });
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  if (route.type === 'service') {
    const svc = services.find((s) => s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === route.slug);
    if (!svc) {
      window.location.hash = '#/home';
      return null;
    }

    return (
      <div className="min-h-screen" style={{ fontFamily: 'var(--font-body)' }}>
        <Navigation />
        <ServicePage service={svc} onBack={() => (window.location.hash = '#/services')} />
        <Footer />
        <Toaster />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ fontFamily: 'var(--font-body)' }}>
      <Navigation />
      {route.type === 'home' && <HomePage onContactClick={scrollToContact} />}
      {route.type === 'about' && <AboutPage />}
      {route.type === 'services' && <ServicesPage />}
      {route.type === 'assistant' && <AssistantPage />}
      {route.type === 'careers' && <CareersPage />}
      {route.type === 'contact' && <ContactPage />}
      <Footer />
      <Toaster />
    </div>
  );
}