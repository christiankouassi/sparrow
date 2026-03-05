import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mail, ShieldCheck, Zap, Calendar, Headphones, Layout, Code, Clock, DollarSign } from 'lucide-react';

export default function Benefits() {
  const { ref, isVisible } = useScrollAnimation();

  const benefits = [
    {
      title: "Personnalisez vos campagnes",
      description: "Plus de 600 templates HTML prêts à utiliser pour créer des messages percutants en quelques clics.",
      icon: <Layout className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      span: "col-span-12 lg:col-span-8",
      visual: (
        <div className="relative h-48 bg-blue-50 dark:bg-blue-900/20 rounded-xl overflow-hidden flex items-center justify-center p-6">
          <div className="grid grid-cols-3 gap-4 w-full max-w-2xl">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white dark:bg-slate-800 rounded-lg shadow-md border border-blue-100 dark:border-blue-800/50 p-2 transform hover:scale-105 transition-transform">
                <div className="w-full h-12 bg-slate-100 dark:bg-slate-700 rounded mb-2"></div>
                <div className="space-y-1">
                  <div className="w-full h-1 bg-slate-100 dark:bg-slate-700 rounded"></div>
                  <div className="w-2/3 h-1 bg-slate-100 dark:bg-slate-700 rounded"></div>
                </div>
              </div>
            ))}
          </div>
          {/* 3D Character */}
          <div className="absolute -right-2 -bottom-2 w-20 h-20 bg-blue-500 rounded-full border-4 border-white dark:border-slate-900 shadow-xl flex items-center justify-center transform -rotate-12">
            <div className="relative w-full h-full">
              <div className="absolute top-5 left-5 w-2 h-2 bg-white rounded-full"></div>
              <div className="absolute top-5 right-5 w-2 h-2 bg-white rounded-full"></div>
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-6 h-3 bg-white rounded-b-full"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Support 24h/24h",
      description: "Nous offrons un soutien rapide et professionnel, avec le plus haut taux de satisfaction client.",
      icon: <Headphones className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      span: "col-span-12 lg:col-span-4",
      visual: (
        <div className="relative h-48 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl overflow-hidden flex items-center justify-center p-6">
          <div className="relative w-24 h-24 bg-white dark:bg-slate-800 rounded-full shadow-xl border border-emerald-100 dark:border-emerald-800/50 flex items-center justify-center">
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white">
              <Headphones className="w-8 h-8" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-slate-900 animate-pulse"></div>
          </div>
        </div>
      )
    },
    {
      title: "Obtenir un bon score de réputation",
      description: "Nos outils sont conçus pour vous garantir des scores de réputation d'envoi optimaux et une délivrabilité maximale.",
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      span: "col-span-12 lg:col-span-6",
      visual: (
        <div className="relative h-48 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl overflow-hidden flex items-center justify-center p-6">
          <div className="w-full max-w-xs bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 border border-indigo-100 dark:border-indigo-800/50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-slate-500 uppercase">Réputation</span>
              <span className="text-xs font-bold text-indigo-600">Excellent</span>
            </div>
            <div className="relative h-4 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-indigo-500 transition-all duration-1000" style={{ width: isVisible ? '98%' : '0%' }}></div>
            </div>
            <div className="mt-4 flex justify-between text-[10px] font-bold text-slate-400">
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Programmer vos campagnes emailing",
      description: "Programmez l'envoi de vos campagnes à l'heure et au jour souhaités pour toucher votre audience au moment idéal.",
      icon: <Calendar className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      span: "col-span-12 lg:col-span-6",
      visual: (
        <div className="relative h-48 bg-purple-50 dark:bg-purple-900/20 rounded-xl overflow-hidden flex items-center justify-center p-6">
          <div className="grid grid-cols-7 gap-1 w-full max-w-xs">
            {[...Array(14)].map((_, i) => (
              <div key={i} className={`h-8 rounded ${i === 10 ? 'bg-purple-500 shadow-lg shadow-purple-500/30' : 'bg-white dark:bg-slate-800'} border border-purple-100 dark:border-purple-800/50 flex items-center justify-center`}>
                {i === 10 && <Clock className="w-4 h-4 text-white" />}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Nous économisons votre temps et votre argent",
      description: "Le moins de temps et d'argent que vous dépensez - plus vous êtes proche de votre succès.",
      icon: <Zap className="w-6 h-6 text-orange-600 dark:text-orange-400" />,
      span: "col-span-12 lg:col-span-5",
      visual: (
        <div className="relative h-48 bg-orange-50 dark:bg-orange-900/20 rounded-xl overflow-hidden flex items-center justify-center p-6">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-orange-100 dark:border-orange-800/50 transform -rotate-6">
              <Clock className="w-8 h-8 text-orange-500" />
              <div className="mt-2 text-xs font-bold text-slate-400">-45%</div>
            </div>
            <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-orange-100 dark:border-orange-800/50 transform rotate-6">
              <DollarSign className="w-8 h-8 text-emerald-500" />
              <div className="mt-2 text-xs font-bold text-slate-400">-30%</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "API EMAIL & SMS MARKETING",
      description: "Notre API basée sur REST vous offre la possibilité de lier vos applications avec SPARROW en toute simplicité.",
      icon: <Code className="w-6 h-6 text-slate-600 dark:text-slate-400" />,
      span: "col-span-12 lg:col-span-7",
      visual: (
        <div className="relative h-48 bg-slate-100 dark:bg-slate-800/50 rounded-xl overflow-hidden p-4 font-mono text-[10px]">
          <div className="bg-slate-900 rounded-lg p-4 text-slate-300 h-full border border-slate-700 shadow-2xl">
            <div className="flex gap-1.5 mb-3">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-amber-500"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            </div>
            <div className="space-y-1">
              <p><span className="text-purple-400">POST</span> <span className="text-emerald-400">/api/v1/campaign</span></p>
              <p className="text-slate-500">{"{"}</p>
              <p className="pl-4"><span className="text-blue-400">"type"</span>: <span className="text-orange-400">"omnichannel"</span>,</p>
              <p className="pl-4"><span className="text-blue-400">"to"</span>: <span className="text-orange-400">"+212 6XX XXX XXX"</span>,</p>
              <p className="pl-4"><span className="text-blue-400">"template_id"</span>: <span className="text-orange-400">600</span></p>
              <p className="text-slate-500">{"}"}</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div 
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm font-bold mb-6">
            Bénéfices de SPARROW
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
            Pourquoi choisir <span className="text-gradient">Sparrow</span> pour votre business ?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Plus qu'un simple outil d'envoi, une plateforme complète conçue pour maximiser votre impact et votre croissance.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`${benefit.span} group relative bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Visual Area */}
              <div className="w-full">
                {benefit.visual}
              </div>

              {/* Content Area */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className={`mt-20 text-center transition-all duration-700 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <a href="#pricing" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5">
            Commencer l'aventure Sparrow
          </a>
        </div>

      </div>
    </section>
  );
}
