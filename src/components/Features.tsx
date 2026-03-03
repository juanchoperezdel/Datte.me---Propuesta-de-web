import React from 'react';
import { ArrowRight, Calendar, Clock, CreditCard, Shield, Smartphone, Zap, MessageCircle, CalendarDays, Users, TrendingUp } from 'lucide-react';

export const Features = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Soluciones inteligentes para <br />
            <span className="font-serif italic font-normal text-indigo-600">cada aspecto de tu negocio</span>
          </h2>
          <p className="text-lg text-slate-600">Construido para empoderar a dueños de negocios con herramientas inteligentes y a clientes con acceso fácil a reservas.</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {/* Left Card */}
          <div className="bg-indigo-600 rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl transition-transform duration-700 group-hover:scale-150"></div>

            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-sm font-medium mb-8 border border-white/10">
                Para negocios y profesionales
              </span>
              <h3 className="text-3xl font-bold mb-6 leading-tight">Gestioná turnos, clientes, equipo y pagos.</h3>

              <ul className="space-y-4 mb-12">
                {[
                  'Facturación y pagos integrados',
                  'Estadísticas y reportes de ingresos',
                  'Historial de clientes y notas',
                  'Gestión de agenda y equipo'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-indigo-100">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-indigo-600 hover:scale-110 transition-transform shadow-lg">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Mockup Image */}
            <div className="mt-12 -mb-20 -mr-20 rounded-tl-2xl border-t-8 border-l-8 border-indigo-500/30 overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/dashboard1/600/400" alt="Dashboard" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-slate-50 rounded-[2.5rem] p-10 text-slate-900 relative overflow-hidden border border-slate-200 group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl transition-transform duration-700 group-hover:scale-150"></div>

            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white text-slate-600 text-sm font-medium mb-8 border border-slate-200 shadow-sm">
                Para tus clientes
              </span>
              <h3 className="text-3xl font-bold mb-6 leading-tight">Reservas en cualquier momento, acceso a su historial.</h3>

              <ul className="space-y-4 mb-12">
                {[
                  'Recordatorios automáticos por WhatsApp',
                  'Reservas y pagos online 24/7',
                  'Acceso a su historial de visitas',
                  'Búsqueda de servicios y profesionales'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <button className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-indigo-200">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Mockup Image */}
            <div className="mt-12 -mb-20 -mr-20 rounded-tl-2xl border-t-8 border-l-8 border-white overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/clientapp/600/400" alt="Client App" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>

        {/* Why choose us */}
        <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pattern/1000/1000')] opacity-5 mix-blend-overlay pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">¿Por qué elegir nuestra plataforma?</h2>
            <p className="text-indigo-100 text-lg max-w-2xl mx-auto mb-16">
              Simplificamos la gestión de tu negocio con reservas sin esfuerzo, registros seguros y administración inteligente.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {[
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
                  title: "Tu agenda en tiempo real",
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
              ].map((feature, i) => (
                <div key={i} className="bg-white rounded-3xl p-8 hover:-translate-y-1 transition-transform duration-300 shadow-xl shadow-indigo-900/20">
                  <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
