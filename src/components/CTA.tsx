import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CheckCircle2, ShieldCheck, Globe } from 'lucide-react';

const Character3D = ({ color = 'bg-primary-500', size = 'w-16 h-16', className = '' }) => (
  <div className={`${size} rounded-full ${color} flex items-center justify-center shadow-2xl relative ${className}`}>
    <div className="w-2/3 h-2/3 bg-white/30 rounded-full flex flex-col items-center justify-center gap-1">
      <div className="flex gap-1">
        <div className="w-1 h-1 bg-white rounded-full" />
        <div className="w-1 h-1 bg-white rounded-full" />
      </div>
      <div className="w-3 h-1 bg-white rounded-full opacity-50" />
    </div>
  </div>
);

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative rounded-[3rem] bg-gradient-to-br from-primary-600 via-primary-700 to-indigo-800 p-12 md:p-20 overflow-hidden transition-all duration-1000 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          {/* Background Blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
          </div>

          {/* Characters */}
          <Character3D color="bg-accent-400" className="absolute -top-10 -left-10 animate-float" />
          <Character3D color="bg-emerald-400" className="absolute -bottom-10 -right-10 animate-float animation-delay-2000" />

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
              <span className="text-xs font-black text-white uppercase tracking-widest">Offre limitée</span>
              <span className="text-xs font-bold text-primary-100">-25% sur votre première année</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Prêt à faire décoller <br /> vos ventes ?
            </h2>
            
            <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto font-medium">
              Rejoignez plus de 3800 entreprises qui utilisent déjà Sparrow pour automatiser leur croissance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <button className="w-full sm:w-auto px-10 py-5 bg-white text-primary-700 font-black text-lg rounded-full shadow-2xl hover:scale-105 transition-all duration-300">
                Démarrer mon essai gratuit
              </button>
              <div className="flex flex-col items-start gap-2">
                {[
                  "✓ Sans carte bancaire",
                  "✓ 7 jours d'essai complet",
                  "✓ Support inclus"
                ].map((item, i) => (
                  <span key={i} className="text-sm font-bold text-white/80">{item}</span>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-12 border-t border-white/10 flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-3 text-white/60">
                <ShieldCheck className="w-6 h-6" />
                <span className="text-xs font-bold uppercase tracking-widest">Sécurisé SSL</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <CheckCircle2 className="w-6 h-6" />
                <span className="text-xs font-bold uppercase tracking-widest">Conforme RGPD</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Globe className="w-6 h-6" />
                <span className="text-xs font-bold uppercase tracking-widest">Hébergé en France</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
