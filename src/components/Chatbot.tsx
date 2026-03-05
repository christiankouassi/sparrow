import React, { useState, useEffect } from 'react';

const Character3D = ({ color = 'bg-primary-500', size = 'w-10 h-10' }) => (
  <div className={`${size} rounded-full ${color} flex items-center justify-center shadow-lg relative shrink-0`}>
    <div className="w-2/3 h-2/3 bg-white/30 rounded-full flex flex-col items-center justify-center gap-1">
      <div className="flex gap-1">
        <div className="w-1 h-1 bg-white rounded-full" />
        <div className="w-1 h-1 bg-white rounded-full" />
      </div>
      <div className="w-3 h-1 bg-white rounded-full opacity-50" />
    </div>
  </div>
);

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Bonjour ! Je suis Yanis de l\'équipe Sparrow. Comment puis-je vous aider aujourd\'hui ?' }
  ]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages([...messages, { type: 'user', text: input }]);
    setInput('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: 'Merci pour votre message ! Un de nos conseillers va vous répondre d\'ici quelques minutes. En attendant, souhaitez-vous voir nos tarifs ?' }]);
    }, 1000);
  };

  const handleSuggestion = (text: string) => {
    setMessages([...messages, { type: 'user', text }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: 'Excellente question ! Nos tarifs commencent à 29€/mois pour 10 000 emails. C\'est le plan idéal pour débuter.' }]);
    }, 1000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      <div 
        className={`mb-4 bg-white w-80 sm:w-96 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden transition-all duration-500 origin-bottom-right ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-10 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 to-indigo-600 p-6 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Character3D color="bg-white/20" size="w-12 h-12" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-primary-600 rounded-full"></div>
            </div>
            <div>
              <div className="font-black text-lg">Yanis</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-primary-100">En ligne maintenant</div>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/20 rounded-full transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Messages */}
        <div className="p-6 h-96 overflow-y-auto bg-slate-50 flex flex-col gap-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${msg.type === 'user' ? 'bg-primary-600 text-white rounded-tr-sm shadow-lg shadow-primary-500/20' : 'bg-white text-slate-700 border border-slate-100 rounded-tl-sm shadow-sm'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          
          {messages.length === 1 && (
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Suggestions</p>
              <button onClick={() => handleSuggestion("Quels sont vos tarifs ?")} className="text-xs text-left p-3 rounded-xl border border-primary-100 bg-white text-primary-700 hover:bg-primary-50 transition-colors shadow-sm">
                Quels sont vos tarifs ?
              </button>
              <button onClick={() => handleSuggestion("Comment importer mes contacts ?")} className="text-xs text-left p-3 rounded-xl border border-primary-100 bg-white text-primary-700 hover:bg-primary-50 transition-colors shadow-sm">
                Comment importer mes contacts ?
              </button>
            </div>
          )}
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-4 bg-white border-t border-slate-100 flex gap-3">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Écrivez votre message..." 
            className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border-none text-sm focus:ring-2 focus:ring-primary-500 outline-none"
          />
          <button type="submit" className="w-12 h-12 rounded-xl bg-primary-600 text-white flex items-center justify-center hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/20">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
          </button>
        </form>
      </div>

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-500 hover:scale-110 relative group ${isOpen ? 'bg-slate-900 text-white rotate-90' : 'bg-primary-600 text-white'}`}
      >
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold animate-bounce">
            1
          </div>
        )}
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <div className="relative">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
            <div className="absolute inset-0 bg-white/20 rounded-full blur-md group-hover:blur-lg transition-all" />
          </div>
        )}
      </button>
    </div>
  );
}
