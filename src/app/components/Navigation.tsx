import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import Logo from '../../images/mhk-logo.svg';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (route: string) => {
    // set the hash to trigger route change in App
    window.location.hash = `#/${route}`;
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', route: 'home' },
    { name: 'Who We Are', route: 'about' },
    { name: 'Products', route: 'services' },
    { name: 'Join Us', route: 'careers' },
    { name: 'Contact', route: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => navigateTo('home')}
              className="flex items-center gap-3 hover:opacity-90 transition-opacity"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <img src={Logo} alt="MHK logo" className="h-12 w-auto" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.route}
                onClick={() => navigateTo(link.route)}
                className="text-[#0a1a2f] hover:text-[#007bff] transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.route}
                  onClick={() => navigateTo(link.route)}
                  className="text-[#0a1a2f] hover:text-[#007bff] text-left px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
