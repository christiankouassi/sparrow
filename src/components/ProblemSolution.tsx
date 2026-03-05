import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProblemSolution() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="problem-solution" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
            Pourquoi changer votre façon de communiquer ?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Les méthodes traditionnelles vous font perdre du temps et de l'argent. Passez à la vitesse supérieure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content (PAS) */}
          <div className={`space-y-12 transition-all duration-700 delay-200 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            
            {/* Pain Points */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center text-sm font-bold">1</span>
                Ce qui vous freine aujourd'hui
              </h3>
              <ul className="space-y-4">
                {[
                  "Vos emails finissent dans les spams à cause d'une mauvaise délivrabilité.",
                  "La création de campagnes prend des heures sans outil adapté.",
                  "Vous n'avez aucune visibilité claire sur le ROI de vos envois."
                ].map((pain, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                    <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                    <span>{pain}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="space-y-6 relative">
              {/* Visual Separator */}
              <div className="absolute -top-8 left-4 w-0.5 h-6 bg-gradient-to-b from-red-200 to-green-200 dark:from-red-900/50 dark:to-green-900/50"></div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center text-sm font-bold">2</span>
                La solution Sparrow
              </h3>
              <ul className="space-y-4">
                {[
                  "Délivrabilité optimisée à 99% grâce à nos serveurs locaux.",
                  "Éditeur drag & drop intuitif pour des campagnes prêtes en 5 min.",
                  "Tableaux de bord en temps réel pour mesurer chaque interaction."
                ].map((solution, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Visual Content */}
          <div className={`relative transition-all duration-700 delay-400 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative w-full aspect-square max-w-md mx-auto">
              
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/10 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 transform -rotate-2 overflow-hidden flex flex-col">
                
                {/* Header */}
                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-xs font-medium text-slate-500">Workflow d'envoi</div>
                </div>

                {/* Body */}
                <div className="flex-1 p-6 flex flex-col justify-center gap-6 relative">
                  
                  {/* Step 1: Creation */}
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 flex items-center gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                      <div className="w-5 h-5 bg-blue-500 rounded-sm"></div>
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-1/2 mb-2"></div>
                      <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded w-3/4"></div>
                    </div>
                    {/* 3D Character */}
                    <div className="absolute -left-4 -top-4 w-12 h-12 bg-yellow-400 rounded-full border-2 border-white dark:border-slate-800 shadow-md flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <div className="absolute top-3 left-2.5 w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
                        <div className="absolute top-3 right-2.5 w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-2 bg-slate-900 rounded-b-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="w-0.5 h-8 bg-slate-200 dark:bg-slate-700 mx-auto relative">
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 border-r-2 border-b-2 border-slate-200 dark:border-slate-700 transform rotate-45"></div>
                  </div>

                  {/* Step 2: Sending */}
                  <div className="bg-blue-600 p-3 rounded-lg shadow-md flex items-center gap-4 relative z-10 transform scale-105">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                    <div className="flex-1">
                      <div className="text-white text-sm font-bold mb-1">Envoi en cours...</div>
                      <div className="w-full bg-black/20 rounded-full h-1.5">
                        <div className="bg-white h-1.5 rounded-full w-3/4 animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="w-0.5 h-8 bg-slate-200 dark:bg-slate-700 mx-auto relative">
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 border-r-2 border-b-2 border-slate-200 dark:border-slate-700 transform rotate-45"></div>
                  </div>

                  {/* Step 3: Results */}
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 flex items-center gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                      <div className="w-5 h-5 rounded-full border-4 border-emerald-500 border-t-transparent transform rotate-45"></div>
                    </div>
                    <div className="flex-1">
                      <div className="text-emerald-600 dark:text-emerald-400 text-sm font-bold mb-1">Campagne réussie</div>
                      <div className="text-xs text-slate-500">Taux d'ouverture: 42%</div>
                    </div>
                    {/* 3D Character */}
                    <div className="absolute -right-4 -bottom-4 w-12 h-12 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-800 shadow-md flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <div className="absolute top-3 left-2.5 w-1.5 h-1.5 bg-white rounded-full"></div>
                        <div className="absolute top-3 right-2.5 w-1.5 h-1.5 bg-white rounded-full"></div>
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-2 bg-white rounded-b-full"></div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className={`mt-16 text-center transition-all duration-700 delay-600 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <a href="#pricing" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5">
            Démarrer gratuitement
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
