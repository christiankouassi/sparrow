import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Star, Quote } from 'lucide-react';

const Character3D = ({ color = 'bg-primary-500', size = 'w-16 h-16' }) => (
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

const testimonials = [
  {
    name: "Youssef El Amrani",
    role: "Directeur Marketing",
    company: "KITEA",
    text: "Sparrow a transformé notre communication client. La délivrabilité de nos SMS est exceptionnelle et l'interface est un plaisir à utiliser au quotidien.",
    color: "bg-blue-500"
  },
  {
    name: "Sanaa Bennani",
    role: "Responsable E-commerce",
    company: "Decathlon Maroc",
    text: "L'automatisation des emails nous a permis de multiplier nos ventes par deux en seulement 3 mois. Le support client est toujours disponible et très réactif.",
    color: "bg-indigo-500"
  },
  {
    name: "Karim Tazi",
    role: "Fondateur",
    company: "Startup Lab",
    text: "Une plateforme robuste et intuitive. Le meilleur rapport qualité-prix du marché pour l'envoi de campagnes omnicanales au Maroc.",
    color: "bg-emerald-500"
  }
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-3">Témoignages</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Ils nous font confiance</h3>
          <p className="text-lg text-slate-600">
            Découvrez pourquoi plus de 3800 entreprises ont choisi Sparrow pour leurs campagnes de communication.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, i) => (
            <div 
              key={i}
              className={`p-8 rounded-3xl bg-slate-50 border border-slate-100 relative group hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-primary-100 group-hover:text-primary-200 transition-colors" />
              <div className="flex items-center gap-4 mb-6">
                <Character3D color={t.color} size="w-14 h-14" />
                <div>
                  <div className="font-black text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{t.role} @ {t.company}</div>
                </div>
              </div>
              <div className="flex text-accent-500 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed italic">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Final CTA for Testimonials */}
        <div className="text-center">
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-4">Rejoignez la révolution Sparrow</p>
          <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-primary-600 transition-colors shadow-lg">
            Voir plus d'avis clients &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
