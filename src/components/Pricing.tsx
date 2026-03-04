import React, { useState } from 'react';
import { Check } from 'lucide-react';

export const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="precios" className="py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/clouds/1920/1080')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-gradient-to-b from-white/10 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Precios <span className="font-serif italic font-normal text-datte-purple-200">flexibles</span>
        </h2>
        <p className="text-lg text-datte-purple-100 max-w-2xl mx-auto mb-16">
          Sin letra chica. Sin comisiones. Tu facturación es 100% tuya.
        </p>

        {/* Toggle */}
        <div className="flex justify-center items-center gap-4 mb-16 bg-white/10 p-2 rounded-full w-fit mx-auto backdrop-blur-md border border-white/20">
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${isAnnual ? 'bg-white text-primary shadow-md' : 'text-white hover:bg-white/10'}`}
          >
            Anual <span className="text-xs font-medium text-emerald-500 ml-1">-16.7%</span>
          </button>
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${!isAnnual ? 'bg-white text-primary shadow-md' : 'text-white hover:bg-white/10'}`}
          >
            Mensual
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Profesional */}
          <div className="bg-white/95 backdrop-blur-xl rounded-[2.5rem] p-10 text-left border border-white/20 shadow-2xl flex flex-col">
            <h3 className="text-2xl font-bold text-dark mb-2">Profesional</h3>
            <p className="text-secondary/60 text-sm mb-8">Para profesionales que trabajan solos</p>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-dark">ARS $X</span>
              <span className="text-secondary/60">/mes</span>
            </div>
            <ul className="space-y-4 mb-12 flex-1">
              {['1 profesional', 'Turnos ilimitados', 'Página de reservas propia', 'Recordatorios por WhatsApp', 'Pagos con MercadoPago', 'Soporte por email'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-secondary/90 text-sm font-medium">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 px-6 bg-slate-100 text-secondary/90 rounded-2xl font-bold hover:bg-slate-200 transition-colors">
              Empezar gratis →
            </button>
            <p className="text-center text-xs text-secondary/40 mt-4">Sin tarjeta de crédito</p>
          </div>

          {/* Negocio */}
          <div className="bg-white rounded-[2.5rem] p-10 text-left border-4 border-datte-purple-200 shadow-2xl shadow-primary/50 flex flex-col relative transform md:-translate-y-8 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase shadow-lg whitespace-nowrap">
              ⭐ Más elegido
            </div>
            <h3 className="text-2xl font-bold text-dark mb-2">Negocio</h3>
            <p className="text-secondary/60 text-sm mb-8">Para negocios con equipo</p>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-dark">ARS $Y</span>
              <span className="text-secondary/60">/mes</span>
            </div>
            <ul className="space-y-4 mb-12 flex-1">
              {['Hasta 5 profesionales', 'Todo lo del plan anterior', 'Múltiples servicios y horarios', 'Estadísticas avanzadas', 'Soporte prioritario por WhatsApp'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-secondary/90 text-sm font-medium">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 px-6 bg-dark text-white rounded-2xl font-bold hover:bg-secondary transition-colors shadow-xl shadow-dark/20">
              Empezar gratis →
            </button>
            <p className="text-center text-xs text-secondary/40 mt-4">Sin tarjeta de crédito</p>
          </div>

          {/* Empresa */}
          <div className="bg-white/95 backdrop-blur-xl rounded-[2.5rem] p-10 text-left border border-white/20 shadow-2xl flex flex-col">
            <h3 className="text-2xl font-bold text-dark mb-2">Empresa</h3>
            <p className="text-secondary/60 text-sm mb-8">Para cadenas y franquicias</p>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-dark">Consultar</span>
            </div>
            <ul className="space-y-4 mb-12 flex-1">
              {['Profesionales ilimitados', 'Múltiples sucursales', 'API e integraciones', 'Soporte dedicado', 'Capacitación al equipo'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-secondary/90 text-sm font-medium">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 px-6 bg-slate-100 text-secondary/90 rounded-2xl font-bold hover:bg-slate-200 transition-colors">
              Agendar Llamada
            </button>
            <p className="text-center text-xs text-secondary/40 mt-4">Personalizado</p>
          </div>
        </div>

        {/* Guarantee Note */}
        <div className="mt-20 max-w-3xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-2">Garantía sin riesgo</h3>
          <p className="text-datte-purple-100 text-lg">
            Si en 15 días no te ahorra al menos 1 hora por día, cancelás con un clic.<br />
            Nuestro objetivo es que ganes tiempo, no que lo pierdas cancelando suscripciones.
          </p>
        </div>
      </div>
    </section>
  );
};
