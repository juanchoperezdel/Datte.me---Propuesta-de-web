import React, { useState } from 'react';
import { Check } from 'lucide-react';

export const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="precios" className="py-32 bg-indigo-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/clouds/1920/1080')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-gradient-to-b from-white/10 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Precios <span className="font-serif italic font-normal text-indigo-200">flexibles</span>
        </h2>
        <p className="text-lg text-indigo-100 max-w-2xl mx-auto mb-16">
          Una plataforma amada por empleados y empleadores por igual.
        </p>

        {/* Toggle */}
        <div className="flex justify-center items-center gap-4 mb-16 bg-white/10 p-2 rounded-full w-fit mx-auto backdrop-blur-md border border-white/20">
          <button 
            onClick={() => setIsAnnual(true)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${isAnnual ? 'bg-white text-indigo-600 shadow-md' : 'text-white hover:bg-white/10'}`}
          >
            Anual <span className="text-xs font-medium text-emerald-500 ml-1">-16.7%</span>
          </button>
          <button 
            onClick={() => setIsAnnual(false)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${!isAnnual ? 'bg-white text-indigo-600 shadow-md' : 'text-white hover:bg-white/10'}`}
          >
            Mensual
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free */}
          <div className="bg-white/95 backdrop-blur-xl rounded-[2.5rem] p-10 text-left border border-white/20 shadow-2xl flex flex-col">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Gratis</h3>
            <p className="text-slate-500 text-sm mb-8">Para uso individual con necesidades básicas.</p>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-slate-900">$0</span>
              <span className="text-slate-500">/mes</span>
            </div>
            <ul className="space-y-4 mb-12 flex-1">
              {['3 profesionales / día', '3 transcripciones / día', '1 plantilla personalizada'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                  <Check className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 px-6 bg-slate-100 text-slate-700 rounded-2xl font-bold hover:bg-slate-200 transition-colors">
              Empezar Gratis
            </button>
          </div>

          {/* Pro */}
          <div className="bg-white rounded-[2.5rem] p-10 text-left border-4 border-indigo-200 shadow-2xl shadow-indigo-900/50 flex flex-col relative transform md:-translate-y-8 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase shadow-lg">
              Ahorrá $158
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Profesional</h3>
            <p className="text-slate-500 text-sm mb-8">Para doctores ocupados y prácticas en crecimiento.</p>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-slate-900">${isAnnual ? '66' : '79'}</span>
              <span className="text-slate-500">/mes</span>
            </div>
            <ul className="space-y-4 mb-12 flex-1">
              {['Profesionales ilimitados', 'Transcripciones ilimitadas', 'Personalizaciones', 'Asistente IA', 'Prácticas: $60/mes por usuario'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                  <Check className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 px-6 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-colors shadow-xl shadow-slate-900/20">
              Prueba de 2 Semanas
            </button>
            <p className="text-center text-xs text-slate-400 mt-4">No requiere tarjeta de crédito</p>
          </div>

          {/* Enterprise */}
          <div className="bg-white/95 backdrop-blur-xl rounded-[2.5rem] p-10 text-left border border-white/20 shadow-2xl flex flex-col">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Empresa</h3>
            <p className="text-slate-500 text-sm mb-8">Para clínicas, hospitales y más allá.</p>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-slate-900">Flexible</span>
            </div>
            <ul className="space-y-4 mb-12 flex-1">
              {['Precios con descuento', 'Funciones a medida', 'Soporte prioritario', 'Opciones de despliegue'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                  <Check className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 px-6 bg-slate-100 text-slate-700 rounded-2xl font-bold hover:bg-slate-200 transition-colors">
              Agendar Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
