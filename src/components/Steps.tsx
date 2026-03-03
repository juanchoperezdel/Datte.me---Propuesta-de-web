import React from 'react';
import { Calendar, CheckCircle2, Search, Video } from 'lucide-react';

export const Steps = () => {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
          De la reserva a la <span className="font-serif italic font-normal text-indigo-600">atención</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-24">
          Conseguir un turno nunca fue tan simple — solo seguí estos rápidos pasos.
        </p>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-1 bg-slate-200 -translate-y-1/2 rounded-full">
            <div className="absolute top-0 left-0 h-full bg-indigo-600 w-1/3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {[
              {
                step: "1",
                title: "Registrate en segundos",
                desc: "Creá tu cuenta gratis y accedé a tu panel de control.",
                icon: <Search className="w-6 h-6 text-indigo-600" />,
                active: true
              },
              {
                step: "2",
                title: "Configurá tu agenda",
                desc: "Definí tus servicios, precios y horarios de atención.",
                icon: <Calendar className="w-6 h-6 text-slate-400" />,
                active: false
              },
              {
                step: "3",
                title: "Tus clientes reservan",
                desc: "Compartí tu link y empezá a recibir reservas automáticamente.",
                icon: <CheckCircle2 className="w-6 h-6 text-slate-400" />,
                active: false
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-8 relative transition-all duration-500 ${item.active ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200 scale-110' : 'bg-white text-slate-400 border-2 border-slate-100 group-hover:border-indigo-200'}`}>
                  <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-4 border-slate-50 ${item.active ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-500'}`}>
                    {item.step}
                  </div>
                  {item.active ? React.cloneElement(item.icon, { className: 'w-8 h-8 text-white' }) : item.icon}
                </div>

                {/* Mockup card for step */}
                <div className={`w-full max-w-[240px] bg-white rounded-2xl p-5 shadow-lg mb-6 transition-all duration-500 ${item.active ? 'border-2 border-indigo-100 -translate-y-2' : 'border border-slate-100 opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100'}`}>
                  <div className="w-12 h-12 bg-slate-100 rounded-full mx-auto mb-4 overflow-hidden">
                    <img src={`https://picsum.photos/seed/step${i}/100/100`} alt="Step" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="h-3 w-24 bg-slate-200 rounded mx-auto mb-2"></div>
                  <div className="h-2 w-32 bg-slate-100 rounded mx-auto"></div>
                  {item.active && (
                    <div className="mt-4 bg-indigo-50 text-indigo-700 text-xs font-bold py-2 px-4 rounded-full">
                      Panel Activo
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-[200px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
