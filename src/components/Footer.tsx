import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">SPARROW</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              La plateforme de communication omnicanale leader au Maroc. Emailing, SMS et WhatsApp réunis dans un seul outil puissant.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Produit</h4>
            <ul className="space-y-4">
              {['Email Marketing', 'SMS Marketing', 'WhatsApp Business', 'Automatisation', 'Tarifs'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-slate-500 hover:text-primary-600 text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Ressources</h4>
            <ul className="space-y-4">
              {['Blog', 'Guides PDF', 'Études de cas', 'API Documentation', 'Support'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-slate-500 hover:text-primary-600 text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Newsletter</h4>
            <p className="text-slate-500 text-sm mb-6">Recevez nos conseils marketing chaque semaine.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="votre@email.com" 
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-sm focus:ring-2 focus:ring-primary-500 outline-none transition-all"
              />
              <button className="w-full py-3 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/10">
                S'abonner
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-400 text-xs font-medium">
            © 2025 Sparrow. Tous droits réservés. Fait avec ❤️ au Maroc.
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {['Mentions Légales', 'Confidentialité', 'CGU', 'Cookies'].map((item, i) => (
              <a key={i} href="#" className="text-slate-400 hover:text-primary-600 text-xs font-medium transition-colors">{item}</a>
            ))}
          </div>
          <div className="flex gap-4 opacity-30 grayscale">
            <div className="w-10 h-6 bg-slate-400 rounded" />
            <div className="w-10 h-6 bg-slate-400 rounded" />
            <div className="w-10 h-6 bg-slate-400 rounded" />
          </div>
        </div>
      </div>
    </footer>
  );
}
