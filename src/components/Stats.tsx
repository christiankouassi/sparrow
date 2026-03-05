import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Users, Mail, MessageSquare, Headphones } from 'lucide-react';

const CountUp = ({ end, duration = 2000, isVisible }: { end: number, duration?: number, isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, isVisible]);

  return <span>{count.toLocaleString()}</span>;
};

export default function Stats() {
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: 3800,
      label: "Clients Actifs",
      suffix: "+",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      value: 99,
      label: "Délivrabilité",
      suffix: ".8%",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      value: 150,
      label: "Templates SMS",
      suffix: "+",
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      value: 24,
      label: "Support Client",
      suffix: "/7",
      color: "bg-amber-50 text-amber-600"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className={`flex flex-col items-center text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">
                <CountUp end={stat.value} isVisible={isVisible} />
                <span className="text-primary-600">{stat.suffix}</span>
              </div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
