import Logo from '../../images/mhk-logo.svg';

export function Footer() {
  const navigate = (route: string) => {
    window.location.hash = `#/${route}`;
  };

  const navigateService = (slug: string) => {
    window.location.hash = `#/service/${slug}`;
  };

  return (
    <footer className="bg-white text-[#0a1a2f] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo + Menu (left) */}
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <img src={Logo} alt="MHK logo" className="h-14 w-auto" />
            </div>
            <div>
              <h3 className="text-lg mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                Menu
              </h3>
              <ul className="space-y-2 text-sm text-[#0a1a2f]/80" style={{ fontFamily: 'var(--font-body)' }}>
                <li>
                  <button onClick={() => navigate('home')} className="hover:text-[#0a1a2f]">Home</button>
                </li>
                <li>
                  <button onClick={() => navigate('about')} className="hover:text-[#0a1a2f]">Who we are</button>
                </li>
                <li>
                  <button onClick={() => navigate('services')} className="hover:text-[#0a1a2f]">Products</button>
                </li>
                <li>
                  <button onClick={() => navigate('careers')} className="hover:text-[#0a1a2f]">Join Us</button>
                </li>
                <li>
                  <button onClick={() => navigate('contact')} className="hover:text-[#0a1a2f]">Contact Us</button>
                </li>
              </ul>
            </div>
          </div>

          {/* What We Do (middle) */}
          <div>
            <h3 className="text-lg mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              What We Do
            </h3>
            <ul className="space-y-2 text-sm text-[#0a1a2f]/80" style={{ fontFamily: 'var(--font-body)' }}>
              <li>
                <button onClick={() => navigateService('data-engineering')} className="hover:text-[#0a1a2f]">Data Engineering</button>
              </li>
              <li>
                <button onClick={() => navigateService('data-science-ai')} className="hover:text-[#0a1a2f]">Data Science AI</button>
              </li>
              <li>
                <button onClick={() => navigateService('it-solutions')} className="hover:text-[#0a1a2f]">IT Solutions</button>
              </li>
              <li>
                <button onClick={() => navigateService('cloud-solutions')} className="hover:text-[#0a1a2f]">Cloud Solutions</button>
              </li>
            </ul>
          </div>

          {/* Our Locations (right) */}
          <div>
            <h3 className="text-lg mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Locations
            </h3>
            <div className="text-sm text-[#0a1a2f]/80" style={{ fontFamily: 'var(--font-body)' }}>
              <div className="mb-4">
                <strong className="text-[#0a1a2f]">USA</strong>
                <div>20008 Champion Forest Dr, STE 403, Spring, TX 77379 USA</div>
              </div>

              <div className="mb-4">
                <strong className="text-[#0a1a2f]">INDIA</strong>
                <div>Road No 36 &amp; 37 Beside Madhapur Metrostation Jubilee Hills, Hyderabad, Telangana, 500033 India</div>
              </div>

              <div>
                <strong className="text-[#0a1a2f]">CANADA</strong>
                <div>132 Daylily Lane, Kitchener, Ontario, Canada, N2R 0L7</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
            © 2024 MHK Teck INC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}