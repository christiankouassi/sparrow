import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/20">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary-400/20 dark:bg-primary-600/10 blur-3xl animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-400/20 dark:bg-indigo-600/10 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-accent-400/10 dark:bg-accent-600/5 blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.02]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div 
          ref={ref}
          className={`text-center max-w-4xl mx-auto transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-slate-800/50 border border-primary-100 dark:border-primary-900/30 backdrop-blur-sm mb-8 animate-pulse-glow">
            <span className="flex h-2 w-2 rounded-full bg-accent-500"></span>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Plateforme de communication omnicanale</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            Boostez vos campagnes <br className="hidden md:block" />
            <span className="text-gradient">emailing & SMS</span> en un clic
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Créez, personnalisez et envoyez vos campagnes avec un taux de délivrabilité exceptionnel. Plus de 3800 entreprises marocaines et internationales nous font confiance.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#demo" className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-primary-600 to-indigo-600 rounded-full hover:shadow-xl hover:shadow-primary-500/25 hover:scale-105 transition-all duration-300">
              Démarrer gratuitement &rarr;
            </a>
            <a href="#features" className="w-full sm:w-auto px-8 py-4 text-base font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              Voir une démo
            </a>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center bg-gradient-to-br ${i%2===0 ? 'from-primary-400 to-primary-600' : 'from-indigo-400 to-indigo-600'} shadow-sm`}>
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M6 21V19C6 16.7909 7.79086 15 10 15H14C16.2091 15 18 16.7909 18 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex text-accent-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                <strong className="text-slate-900 dark:text-white">4.9/5</strong> par plus de 3800 clients
              </span>
            </div>
          </div>
        </div>

        {/* Mockup Dashboard */}
        <div className={`mt-20 relative max-w-5xl mx-auto transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-2xl blur opacity-20 dark:opacity-40"></div>
          <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-float">
            {/* Browser Header */}
            <div className="h-12 border-b border-slate-100 dark:border-slate-800 flex items-center px-4 gap-2 bg-slate-50/50 dark:bg-slate-900/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-accent-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="mx-auto px-4 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center gap-2">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                app.sparrowmessage.com
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sidebar */}
              <div className="hidden md:flex flex-col gap-4 border-r border-slate-100 dark:border-slate-800 pr-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-sm">Y</div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">Yanis</div>
                    <div className="text-xs text-slate-500">Admin</div>
                  </div>
                </div>
                <div className="space-y-1">
                  {['Tableau de bord', 'Campagnes', 'Contacts', 'Rapports'].map((item, i) => (
                    <div key={i} className={`px-3 py-2 rounded-lg text-sm font-medium ${i === 0 ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Content */}
              <div className="md:col-span-2 space-y-6">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Campagne Ramadan 2025</h3>
                    <p className="text-sm text-slate-500">Envoyée le 12 Mars à 10:00</p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-bold">
                    Terminée
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                    <div className="text-xs text-slate-500 mb-1">Destinataires</div>
                    <div className="text-xl font-bold text-slate-900 dark:text-white">12 450</div>
                  </div>
                  <div className="p-4 rounded-xl bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-900/30">
                    <div className="text-xs text-primary-600 dark:text-primary-400 mb-1">Ouvertures</div>
                    <div className="text-xl font-bold text-primary-700 dark:text-primary-300">42.8%</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                    <div className="text-xs text-slate-500 mb-1">Clics</div>
                    <div className="text-xl font-bold text-slate-900 dark:text-white">18.2%</div>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="h-40 w-full rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 p-4 flex items-end gap-2">
                  {[40, 60, 45, 80, 55, 90, 75, 100, 85].map((height, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t-sm" style={{ height: `${height}%`, opacity: i === 8 ? 1 : 0.6 }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating Metric Card */}
          <div className="absolute -right-6 top-1/4 glass-card p-4 rounded-xl animate-float animation-delay-2000 hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Délivrabilité</div>
                <div className="text-lg font-black text-slate-900 dark:text-white">99.8%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className={`mt-24 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-center text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-10">
            Ils nous font confiance
          </p>
          <div className="relative overflow-hidden">
            {/* Fade Mask */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-primary-50 via-transparent to-indigo-50 dark:from-slate-950 dark:via-transparent dark:to-indigo-950/20 opacity-100"></div>
            
            <div className="flex animate-marquee whitespace-nowrap gap-12 items-center py-4">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-12 items-center">
                  {/* Partner 1: Kitea */}
                  <div className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-black text-xs">K</div>
                    <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white">KITEA</span>
                  </div>
                  {/* Partner 2: RAM */}
                  <div className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-white rounded-full"></div>
                    </div>
                    <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white">ROYAL AIR MAROC</span>
                  </div>
                  {/* Partner 3: Decathlon */}
                  <div className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    <div className="w-8 h-8 bg-blue-500 flex items-center justify-center">
                      <div className="w-5 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white">DECATHLON</span>
                  </div>
                  {/* Partner 4: Marjane */}
                  <div className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">M</div>
                    <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white">MARJANE</span>
                  </div>
                  {/* Partner 5: Inwi */}
                  <div className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    <div className="w-8 h-8 bg-purple-600 rounded-xl flex items-center justify-center text-white font-black">i</div>
                    <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white">INWI</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
