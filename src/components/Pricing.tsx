import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Check, X, Shield, Zap, Headphones } from 'lucide-react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const { ref, isVisible } = useScrollAnimation();

  const plans = [
    {
      name: "Starter",
      price: isAnnual ? 29 : 39,
      desc: "Idéal pour les petites entreprises qui débutent.",
      features: [
        "Jusqu'à 10 000 emails / mois",
        "500 crédits SMS inclus",
        "Éditeur Drag & Drop",
        "Support par email",
        "Statistiques de base",
        "1 utilisateur"
      ],
      notIncluded: [
        "Automatisation avancée",
        "WhatsApp Business API",
        "Accès API complet"
      ],
      cta: "Commencer",
      popular: false
    },
    {
      name: "Pro",
      price: isAnnual ? 79 : 99,
      desc: "Le choix parfait pour les entreprises en croissance.",
      features: [
        "Jusqu'à 50 000 emails / mois",
        "2 500 crédits SMS inclus",
        "Tout du plan Starter",
        "Automatisation avancée",
        "Test A/B illimité",
        "Support prioritaire 24/7",
        "5 utilisateurs"
      ],
      notIncluded: [
        "WhatsApp Business API",
        "Accès API complet"
      ],
      cta: "Essayer Pro",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Sur-mesure",
      desc: "Pour les grandes entreprises aux besoins complexes.",
      features: [
        "Emails illimités",
        "Crédits SMS sur-mesure",
        "Tout du plan Pro",
        "WhatsApp Business API",
        "Accès API complet",
        "Gestionnaire de compte dédié",
        "Utilisateurs illimités"
      ],
      notIncluded: [],
      cta: "Nous contacter",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-3">Tarifs</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Des prix <span className="text-primary-600">transparents</span> pour tous
          </h3>
          <p className="text-lg text-slate-600 mb-10">
            Choisissez le plan qui correspond le mieux à vos besoins. Pas de frais cachés, pas de mauvaise surprise.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-bold ${!isAnnual ? 'text-slate-900' : 'text-slate-400'}`}>Mensuel</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 bg-slate-200 rounded-full relative p-1 transition-colors hover:bg-slate-300"
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm font-bold ${isAnnual ? 'text-slate-900' : 'text-slate-400'}`}>Annuel</span>
            <span className="px-3 py-1 bg-green-100 text-green-600 text-[10px] font-black uppercase rounded-full animate-pulse">
              -25% de réduction
            </span>
          </div>
        </div>

        {/* Pricing Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <div 
              key={i}
              className={`p-8 rounded-3xl bg-white border border-slate-200 flex flex-col relative group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-600 text-white text-xs font-black uppercase rounded-full shadow-lg">
                  Le plus populaire
                </div>
              )}
              <div className="mb-8">
                <h4 className="text-xl font-black text-slate-900 mb-2">{plan.name}</h4>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-black text-slate-900">
                    {typeof plan.price === 'number' ? `${plan.price}€` : plan.price}
                  </span>
                  {typeof plan.price === 'number' && <span className="text-slate-400 font-bold">/mois</span>}
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{plan.desc}</p>
              </div>
              <div className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <Check className="w-4 h-4 text-green-500 shrink-0" />
                    {feature}
                  </div>
                ))}
                {plan.notIncluded.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                    <X className="w-4 h-4 text-slate-200 shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
              <button className={`w-full py-4 rounded-xl font-black text-lg transition-all duration-300 ${plan.popular ? 'bg-primary-600 text-white shadow-xl shadow-primary-500/20 hover:bg-primary-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Reassurance */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Shield className="w-5 h-5" />, title: "Sans engagement", desc: "Annulez votre abonnement à tout moment." },
            { icon: <Zap className="w-5 h-5" />, title: "Mise en place rapide", desc: "Lancez votre première campagne en 5 minutes." },
            { icon: <Headphones className="w-5 h-5" />, title: "Support local", desc: "Une équipe basée au Maroc pour vous aider." }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-slate-100">
              <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">{item.title}</div>
                <div className="text-xs text-slate-500">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
