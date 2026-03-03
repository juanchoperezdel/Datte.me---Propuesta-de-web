import React, { useState } from 'react';
import { ArrowRight, Calendar, Clock, CreditCard, Shield, Smartphone, Zap, MessageCircle, CalendarDays, Users, TrendingUp, ChevronDown } from 'lucide-react';

export const Features = () => {
  const [activeTab, setActiveTab] = useState(0);

  const featuresList = [
    {
      icon: <Clock className="w-6 h-6 text-indigo-600" />,
      title: "Reservas 24/7 sin teléfono",
      desc: "Tu página de reservas propia, activa todo el día. Tus clientes eligen horario, servicio y profesional sin llamarte."
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-indigo-600" />,
      title: "Recordatorios por WhatsApp",
      desc: "El sistema avisa a tu cliente antes del turno. Menos ausencias, más facturación, cero esfuerzo de tu parte."
    },
    {
      icon: <CreditCard className="w-6 h-6 text-indigo-600" />,
      title: "Cobrá señas al instante",
      desc: "Integrá MercadoPago y pedí una seña al reservar. Si el cliente no aparece, ya cobraste."
    },
    {
      icon: <CalendarDays className="w-6 h-6 text-indigo-600" />,
      title: "Tu agenda real",
      desc: "Calendario visual con todos tus turnos, horarios bloqueados y disponibilidad actualizada al instante."
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      title: "Ficha de cada cliente",
      desc: "Historial de visitas, preferencias y notas. Conocé a tu cliente antes de que entre por la puerta."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-indigo-600" />,
      title: "Estadísticas de tu negocio",
      desc: "Cuánto facturaste, qué servicios se piden más, cuáles son tus horas pico. Todo en un dashboard simple."
    }
  ];

  return (
    <section id="caracteristicas" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Soluciones inteligentes para <br />
            <span className="font-serif italic font-normal text-indigo-600">cada aspecto de tu negocio</span>
          </h2>
          <p className="text-lg text-slate-600">Construido para empoderar a dueños de negocios con herramientas inteligentes y a clientes con acceso fácil a reservas.</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 md:mb-32">
          {/* Left Card */}
          <div className="bg-indigo-600 rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl transition-transform duration-700 group-hover:scale-150"></div>

            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-sm font-medium mb-6 md:mb-8 border border-white/10">
                Para negocios y profesionales
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">Gestioná turnos, clientes, equipo y pagos.</h3>

              <ul className="space-y-4 mb-8 md:mb-12">
                {[
                  'Facturación y pagos integrados',
                  'Estadísticas y reportes de ingresos',
                  'Historial de clientes y notas',
                  'Gestión de agenda y equipo'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-indigo-100 text-sm md:text-base">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <button className="hidden md:flex w-12 h-12 bg-white rounded-full items-center justify-center text-indigo-600 hover:scale-110 transition-transform shadow-lg">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Mockup Image */}
            <div className="mt-8 md:mt-12 -mb-20 -mr-20 md:mr-0 md:ml-12 rounded-tl-2xl border-t-8 border-l-8 border-indigo-500/30 overflow-hidden shadow-2xl bg-white h-64">
              <div className="w-full h-full bg-slate-50 p-4">
                <div className="h-4 w-1/3 bg-slate-200 rounded mb-4"></div>
                <div className="flex gap-2">
                  <div className="h-20 w-1/2 bg-white rounded-lg shadow-sm"></div>
                  <div className="h-20 w-1/2 bg-white rounded-lg shadow-sm"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-10 text-slate-900 relative overflow-hidden border border-slate-200 group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl transition-transform duration-700 group-hover:scale-150"></div>

            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white text-slate-600 text-sm font-medium mb-6 md:mb-8 border border-slate-200 shadow-sm">
                Para tus clientes
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">Reservas en cualquier momento, fácil y rápido.</h3>

              <ul className="space-y-4 mb-8 md:mb-12">
                {[
                  'Recordatorios automáticos por WhatsApp',
                  'Reservas y pagos online 24/7',
                  'Acceso a su historial de visitas',
                  'Búsqueda de servicios y profesionales'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 text-sm md:text-base">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <button className="hidden md:flex w-12 h-12 bg-indigo-600 rounded-full items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-indigo-200">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Mockup Image */}
            <div className="mt-8 md:mt-12 -mb-20 -mr-20 md:mr-0 md:ml-12 rounded-tl-2xl border-t-8 border-l-8 border-white overflow-hidden shadow-2xl bg-white h-64">
              <div className="w-full h-full bg-slate-100 p-4">
                <div className="flex gap-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100"></div>
                  <div>
                    <div className="h-3 w-20 bg-slate-200 rounded mb-1"></div>
                    <div className="h-2 w-12 bg-slate-200 rounded"></div>
                  </div>
                </div>
                <div className="h-10 w-full bg-white rounded-lg shadow-sm border border-slate-100 mb-2"></div>
                <div className="h-10 w-full bg-white rounded-lg shadow-sm border border-slate-100"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Essential Features (Accordion Mobile / Grid Desktop) */}
        <div className="bg-indigo-600 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-12 lg:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pattern/1000/1000')] opacity-5 mix-blend-overlay pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Todo lo que necesitás, en un solo lugar</h2>

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mt-16">
              {featuresList.map((feature, i) => (
                <div key={i} className="bg-white rounded-3xl p-8 hover:-translate-y-1 transition-transform duration-300 shadow-xl shadow-indigo-900/20">
                  <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Mobile Accordion */}
            <div className="md:hidden mt-10 space-y-3 text-left">
              {featuresList.map((feature, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-indigo-900/10">
                  <button
                    onClick={() => setActiveTab(activeTab === i ? -1 : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        {feature.icon}
                      </div>
                      <span className="font-bold text-slate-900">{feature.title}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${activeTab === i ? 'rotate-180' : ''}`} />
                  </button>
                  {activeTab === i && (
                    <div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-50 mt-2">
                      {feature.desc}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
