import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Comment fonctionne la facturation ?",
    answer: "Nous proposons des abonnements mensuels ou annuels. Vous pouvez payer par carte bancaire, virement ou chèque (pour les entreprises marocaines). L'abonnement annuel vous permet de bénéficier de 2 mois gratuits."
  },
  {
    question: "Mes données sont-elles en sécurité ?",
    answer: "Absolument. Vos données sont hébergées sur des serveurs sécurisés et nous sommes en totale conformité avec la CNDP au Maroc et le RGPD en Europe. Nous ne partageons jamais vos listes de contacts."
  },
  {
    question: "Puis-je importer mes propres listes de contacts ?",
    answer: "Oui, vous pouvez importer vos contacts via des fichiers CSV, Excel ou directement via notre API. Notre système nettoie automatiquement les doublons et les adresses invalides."
  },
  {
    question: "Quelle est la différence entre Email et SMS ?",
    answer: "L'email est idéal pour les newsletters et le contenu riche, tandis que le SMS est parfait pour les alertes urgentes et les promotions flash grâce à son taux d'ouverture de 98%."
  },
  {
    question: "Proposez-vous un accompagnement personnalisé ?",
    answer: "Oui, pour les plans Pro et Enterprise, un expert Sparrow vous accompagne dans la mise en place de vos premières campagnes et l'optimisation de vos taux de conversion."
  },
  {
    question: "Puis-je changer de plan à tout moment ?",
    answer: "Bien sûr. Vous pouvez passer au plan supérieur ou inférieur à tout moment depuis votre tableau de bord. La différence sera calculée au prorata."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-3">FAQ</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Des réponses à vos questions</h3>
          <p className="text-lg text-slate-600">
            Tout ce que vous devez savoir sur Sparrow pour bien démarrer.
          </p>
        </div>

        {/* Accordion */}
        <div ref={ref} className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className={`border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === i ? 'bg-slate-50 shadow-lg' : 'bg-white hover:bg-slate-50'} transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-4">
                  <HelpCircle className={`w-5 h-5 transition-colors ${openIndex === i ? 'text-primary-600' : 'text-slate-400'}`} />
                  <span className={`text-lg font-bold transition-colors ${openIndex === i ? 'text-slate-900' : 'text-slate-700'}`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === i ? 'bg-primary-600 text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
                  {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-8 pb-8 pl-16 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA for FAQ */}
        <div className="mt-16 text-center p-8 rounded-3xl bg-primary-50 border border-primary-100">
          <p className="text-slate-900 font-bold mb-4">Vous n'avez pas trouvé votre réponse ?</p>
          <button className="px-8 py-3 bg-primary-600 text-white font-bold rounded-full hover:bg-primary-700 transition-colors shadow-lg">
            Contacter notre support 24/7
          </button>
        </div>
      </div>
    </section>
  );
}
