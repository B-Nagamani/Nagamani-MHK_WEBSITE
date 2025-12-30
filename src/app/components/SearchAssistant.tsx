import { useState, useRef, useEffect } from 'react';
import { Search, ArrowRight, Sparkles, X, Send } from 'lucide-react';

interface Suggestion {
  title: string;
  description: string;
  link: string;
}

const suggestions: Suggestion[] = [
  {
    title: 'AI Solutions',
    description: 'Drive innovation and stay ahead with cutting-edge AI technology',
    link: 'services'
  },
  {
    title: 'Cloud Solutions',
    description: 'Streamline and scale your business operations efficiently',
    link: 'services'
  },
  {
    title: 'IT Solutions',
    description: 'Boost productivity and minimize downtime with comprehensive IT services',
    link: 'services'
  },
  {
    title: 'Data Engineering',
    description: 'Manage, process and analyze your data at scale',
    link: 'services'
  },
  {
    title: 'Career Opportunities',
    description: 'Join our team and shape the future of technology',
    link: 'careers'
  },
  {
    title: 'Contact Us',
    description: 'Get in touch with our team across USA, India, and Canada',
    link: 'contact'
  }
];

export function SearchAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<Suggestion[]>(suggestions);
  const containerRef = useRef<HTMLDivElement>(null);
  // search opens AssistantPage instead of an inline chat

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchValue.trim()) {
      const filtered = suggestions.filter(
        (suggestion) =>
          suggestion.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          suggestion.description.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions(suggestions);
    }
  }, [searchValue]);

  

  const handleSuggestionClick = (link: string) => {
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      setSearchValue('');
    }
  };

  const openAssistantPage = (text: string) => {
    const q = encodeURIComponent(text || '');
    window.location.hash = `#/assistant${q ? `?q=${q}` : ''}`;
    setIsOpen(false);
    setSearchValue('');
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-3xl mx-auto">
      {/* Search Bar */}
      <div className="relative">
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setIsOpen(true)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                openAssistantPage(searchValue);
              }
            }}
            placeholder="What can we solve for you?"
            className="w-full pl-12 pr-12 py-4 bg-white rounded-full border-2 border-gray-200 focus:border-[#007bff] focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl text-gray-700 placeholder:text-gray-400"
            style={{ fontFamily: 'var(--font-body)' }}
          />
          <div
            className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#007bff] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#0056b3] transition-colors"
            onClick={() => openAssistantPage(searchValue)}
          >
            <Sparkles className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      {/* Suggestions Dropdown */}
      {isOpen && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
            <div className="p-2 max-h-96 overflow-y-auto">
              {filteredSuggestions.length > 0 ? (
                <>
                  <div className="px-4 py-2">
                    <p className="text-xs text-gray-500" style={{ fontFamily: 'var(--font-body)' }}>
                      {searchValue ? 'Search Results' : 'Popular Topics'}
                    </p>
                  </div>
                  {filteredSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion.link)}
                      className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <h4
                            className="text-gray-900 mb-1 group-hover:text-[#007bff] transition-colors"
                            style={{ fontFamily: 'var(--font-heading)' }}
                          >
                            {suggestion.title}
                          </h4>
                          <p
                            className="text-sm text-gray-600"
                            style={{ fontFamily: 'var(--font-body)' }}
                          >
                            {suggestion.description}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#007bff] flex-shrink-0" />
                      </div>
                    </button>
                  ))}
                </>
              ) : (
                <div className="px-4 py-8 text-center">
                  <p className="text-gray-500" style={{ fontFamily: 'var(--font-body)' }}>
                    No results found. Try a different search term.
                  </p>
                </div>
              )}
            </div>

        </div>
      )}

      {/* assistant opens in a separate page */}
    </div>
  );
}
