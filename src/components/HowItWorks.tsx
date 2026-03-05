import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { UploadCloud, PenTool, BarChart3, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();

  const steps = [
    {
      id: 1,
      title: "Importez vos contacts",
      description: "Connectez votre CRM ou importez vos listes en un clic. Segmentation automatique incluse.",
      icon: <UploadCloud className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      visual: (
        <div className="relative h-48 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 p-4 overflow-hidden group">
          <div className="flex items-center justify-between mb-4 border-b border-slate-100 dark:border-slate-700 pb-2">
            <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">Liste: Clients VIP</div>
            <div className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">1,240 contacts</div>
          </div>
          <div className="space-y-2">
            {[
              { name: 'Youssef M.', email: 'youssef@kitea.ma', status: 'Validé' },
              { name: 'Sarah B.', email: 'sarah@ram.ma', status: 'Validé' },
              { name: 'Karim T.', email: 'karim@decathlon.ma', status: 'Validé' }
            ].map((contact, i) => (
              <div key={i} className="flex items-center justify-between text-[10px] bg-slate-50 dark:bg-slate-900/50 p-1.5 rounded border border-slate-100/50 dark:border-slate-700/50">
                <div className="font-medium text-slate-700 dark:text-slate-300">{contact.name}</div>
                <div className="text-slate-500 truncate w-24">{contact.email}</div>
                <div className="text-green-600 flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  {contact.status}
                </div>
              </div>
            ))}
          </div>
          {/* 3D Character */}
          <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-blue-500 rounded-full border-4 border-white dark:border-slate-800 shadow-lg flex items-center justify-center transform rotate-[-10deg] transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110">
            <div className="relative w-full h-full">
              <div className="absolute top-3 left-3 w-2 h-2 bg-white rounded-full"></div>
              <div className="absolute top-3 right-3 w-2 h-2 bg-white rounded-full"></div>
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-2 bg-white rounded-b-full"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Créez votre campagne",
      description: "Utilisez notre éditeur drag & drop ou nos templates optimisés pour la conversion.",
      icon: <PenTool className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />,
      visual: (
        <div className="relative h-48 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 p-4 overflow-hidden group">
          <div className="flex gap-1.5 mb-3">
            <div className="w-2 h-2 rounded-full bg-red-400"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
          </div>
          <div className="mb-3">
            <div className="text-[9px] text-slate-400 uppercase tracking-wider mb-1 font-medium">Objet de l'email</div>
            <div className="text-xs font-medium text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-900/50 p-1.5 rounded border border-slate-100 dark:border-slate-700">
              🚀 Offre exclusive : -30% sur la nouvelle collection
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded w-3/4"></div>
            <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded w-full"></div>
            <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded w-5/6"></div>
          </div>
          <div className="mt-4 inline-block bg-blue-600 text-white text-[10px] font-medium px-3 py-1.5 rounded shadow-sm">
            Envoyer la campagne
          </div>
          {/* 3D Character */}
          <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-yellow-400 rounded-full border-4 border-white dark:border-slate-800 shadow-lg flex items-center justify-center transform rotate-[10deg] transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110">
            <div className="relative w-full h-full">
              <div className="absolute top-4 left-3 w-2 h-2 bg-slate-900 rounded-full"></div>
              <div className="absolute top-4 right-3 w-2 h-2 bg-slate-900 rounded-full"></div>
              <div className="absolute top-7 left-1/2 -translate-x-1/2 w-6 h-3 bg-slate-900 rounded-b-full"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Analysez les résultats",
      description: "Suivez vos performances en temps réel avec des rapports détaillés et actionnables.",
      icon: <BarChart3 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      visual: (
        <div className="relative h-48 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 p-4 overflow-hidden group">
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded border border-blue-100 dark:border-blue-800/30">
              <div className="text-[9px] text-blue-600 dark:text-blue-400 font-medium mb-0.5">Ouvertures</div>
              <div className="text-lg font-bold text-slate-800 dark:text-slate-100">42.8%</div>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-2 rounded border border-emerald-100 dark:border-emerald-800/30">
              <div className="text-[9px] text-emerald-600 dark:text-emerald-400 font-medium mb-0.5">Clics</div>
              <div className="text-lg font-bold text-slate-800 dark:text-slate-100">18.4%</div>
            </div>
          </div>
          <div className="flex items-end gap-1.5 h-16 mt-2">
            {[30, 45, 25, 60, 80, 50, 90].map((height, i) => (
              <div key={i} className="flex-1 bg-slate-100 dark:bg-slate-700 rounded-t relative">
                <div 
                  className="absolute bottom-0 left-0 w-full bg-blue-500 rounded-t transition-all duration-1000 delay-300"
                  style={{ height: isVisible ? `${height}%` : '0%' }}
                ></div>
              </div>
            ))}
          </div>
          {/* 3D Character */}
          <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-emerald-500 rounded-full border-4 border-white dark:border-slate-800 shadow-lg flex items-center justify-center transform rotate-[-5deg] transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110">
            <div className="relative w-full h-full">
              <div className="absolute top-3 left-3 w-2 h-2 bg-white rounded-full"></div>
              <div className="absolute top-3 right-3 w-2 h-2 bg-white rounded-full"></div>
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-2 bg-white rounded-b-full"></div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Simplicité absolue
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
            Comment ça marche ?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Lancez votre première campagne en moins de 5 minutes. Aucune compétence technique requise.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className={`flex flex-col transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Step Number & Icon */}
                <div className="relative mb-8">
                  <div className="absolute -top-6 -left-4 text-8xl font-black text-slate-100 dark:text-slate-800/50 z-0 select-none">
                    {step.id}
                  </div>
                  <div className="relative z-10 w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-100 dark:border-slate-700 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Visual */}
                <div className="mt-auto">
                  {step.visual}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`mt-20 text-center transition-all duration-700 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <a href="#pricing" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5">
            Démarrer gratuitement
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 font-medium">
            Sans carte bancaire · Annulation à tout moment
          </p>
        </div>

      </div>
    </section>
  );
}
