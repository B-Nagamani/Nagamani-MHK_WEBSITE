import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, X, Send } from 'lucide-react';

export default function AssistantPage() {
  const [messages, setMessages] = useState<{
    sender: 'user' | 'bot';
    text: string;
    options?: { label: string }[];
  }[]>([]);
  const [input, setInput] = useState('');
  const messagesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // read query from hash: #/assistant?q=...
    const hash = (window.location.hash || '').replace(/^#/, '');
    const qIndex = hash.indexOf('?');
    const params = qIndex >= 0 ? new URLSearchParams(hash.slice(qIndex)) : new URLSearchParams('');
    const q = params.get('q') || '';
    if (q) {
      const decoded = decodeURIComponent(q);
      setMessages([{ sender: 'user', text: decoded }]);

      // sample case: if user says 'hii', show welcome with options
      if (decoded.trim().toLowerCase() === 'hii' || decoded.trim().toLowerCase() === 'hi') {
        setTimeout(() => {
          setMessages([
            { sender: 'user', text: decoded },
            {
              sender: 'bot',
              text: `Welcome to MHKTech👋\n\nHow would you like to\nengage with us?`,
              options: [
                { label: 'Data Engineering' },
                { label: 'Cloud Solutions' },
                { label: 'Data Science AI' },
                { label: 'IT Solution' },
              ],
            },
          ]);
        }, 400);
        return;
      }

      setTimeout(() => {
        setMessages((m) => [...m, { sender: 'bot', text: `Quick summary for "${decoded}": see our products and contact pages for details.` }]);
      }, 700);
    }
  }, []);

  useEffect(() => {
    if (messagesRef.current) messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { sender: 'user', text }]);
    setTimeout(() => {
      setMessages((m) => [...m, { sender: 'bot', text: `Here's a short answer about "${text}" — visit Products or Contact for more.` }]);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-body)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-[#007bff]" />
            <h1 className="text-2xl font-semibold">Assistant</h1>
          </div>
          <button onClick={() => (window.location.hash = '#/home')} className="px-3 py-1 rounded hover:bg-gray-100">
            <X className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <div className="bg-gray-50 rounded-lg shadow-inner p-4 mb-4 h-[60vh] overflow-hidden flex flex-col">
          <div ref={messagesRef} className="flex-1 overflow-y-auto p-2 space-y-3">
            {messages.length === 0 && <div className="text-gray-500">Ask me anything about our services or products.</div>}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] px-4 py-2 rounded-lg ${m.sender === 'bot' ? 'bg-white text-gray-900' : 'bg-[#007bff] text-white'}`}>
                  <div style={{ whiteSpace: 'pre-line' }}>{m.text}</div>
                  {m.options && m.options.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {m.options.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            const q = encodeURIComponent(opt.label);
                            window.location.hash = `#/assistant?q=${q}`;
                          }}
                          className="px-3 py-1 bg-[#f3f4f6] rounded-full text-sm hover:bg-gray-100"
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  sendMessage(input);
                  setInput('');
                }
              }}
              placeholder="Type your question..."
              className="flex-1 px-4 py-2 border rounded-full border-gray-200 focus:outline-none"
            />
            <button
              onClick={() => {
                sendMessage(input);
                setInput('');
              }}
              className="w-10 h-10 bg-[#007bff] rounded-full flex items-center justify-center text-white"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
