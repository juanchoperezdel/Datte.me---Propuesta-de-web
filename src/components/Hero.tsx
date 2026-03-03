import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Calendar, Clock, CreditCard, Users, CheckCircle2 } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden relative">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-gradient-to-b from-indigo-100/50 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-slate-700 text-sm font-medium mb-8 border border-slate-200 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
            Gestión de turnos sin fricción
          </span>
          <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
            Terminá con el caos de los turnos.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            datte.me automatiza tu agenda, reduce ausencias y atiende a tus clientes por WhatsApp. Sin llamadas, sin papeles, sin dolores de cabeza.
          </p>

          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-full text-lg font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 group">
                Comenzar gratis
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-600 border border-indigo-100 rounded-full text-lg font-semibold hover:bg-indigo-50 transition-all flex items-center justify-center gap-2">
                Agendar demostración
              </button>
            </div>
            <p className="text-sm text-slate-500 font-medium">15 días gratis · Sin tarjeta · Cancelás cuando querés</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 md:mt-20 relative mx-auto max-w-5xl px-2 sm:px-0"
        >
          {/* Dashboard Mockup */}
          <div className="rounded-2xl md:rounded-3xl border border-slate-200/60 bg-white/50 p-2 md:p-3 shadow-2xl shadow-indigo-900/10 backdrop-blur-sm overflow-x-auto sm:overflow-visible">
            <div className="rounded-xl md:rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-sm min-w-[800px] sm:min-w-0">
              {/* Top bar */}
              <div className="h-14 border-b border-slate-100 flex items-center px-6 justify-between bg-slate-50/50">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-indigo-600 font-bold text-xl">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H6C3.23858 21 1 18.7614 1 16V8C1 5.23858 3.23858 3 6 3Z" fill="currentColor" />
                      <path d="M7 12L10 15L17 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Datte
                  </div>
                  <div className="hidden md:flex items-center gap-4 ml-8 text-sm font-medium text-slate-500">
                    <span className="text-slate-900 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-slate-100 flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> Dashboard
                    </span>
                    <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Horarios</span>
                    <span className="flex items-center gap-2"><CreditCard className="w-4 h-4" /> Pagos</span>
                    <span className="flex items-center gap-2"><Users className="w-4 h-4" /> Clientes</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-200 rounded-full overflow-hidden border border-slate-300">
                    <img src="https://picsum.photos/seed/avatar1/100/100" alt="Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>

              {/* Main content area */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6 bg-slate-50/30">
                {/* Left column */}
                <div className="col-span-1 space-y-6">
                  <div className="bg-indigo-600 rounded-2xl p-6 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
                    <h3 className="text-xl font-bold mb-1">¡Hola, Laura!</h3>
                    <p className="text-indigo-100 text-sm mb-4">Tenés 12 turnos hoy</p>
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map(i => (
                        <img key={i} src={`https://picsum.photos/seed/client${i}/50/50`} alt="Client" className="w-8 h-8 rounded-full border-2 border-indigo-600" referrerPolicy="no-referrer" />
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                    <h4 className="font-semibold text-slate-900 mb-4">Próximos turnos</h4>
                    <div className="space-y-4">
                      {[
                        { time: '10:00 AM', name: 'Martín Pérez', service: 'Corte de pelo' },
                        { time: '11:30 AM', name: 'Sofía Gómez', service: 'Coloración' }
                      ].map((turn, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden">
                            <img src={`https://picsum.photos/seed/user${i}/50/50`} alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900">{turn.name}</div>
                            <div className="text-xs text-slate-500 flex items-center gap-1">
                              <Clock className="w-3 h-3" /> {turn.time} - {turn.service}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Middle column */}
                <div className="col-span-2 space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: 'Turnos Hoy', value: '12', trend: '+2' },
                      { label: 'Ingresos', value: '$45k', trend: '+15%' },
                      { label: 'Nuevos Clientes', value: '4', trend: '+1' }
                    ].map((stat, i) => (
                      <div key={i} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
                        <div className="text-sm text-slate-500 mb-1">{stat.label}</div>
                        <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                        <div className="text-xs text-emerald-500 font-medium mt-1">{stat.trend} esta semana</div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm h-64 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                      <h4 className="font-semibold text-slate-900">Ingresos Mensuales</h4>
                      <div className="text-xs font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded-md">Últimos 6 meses</div>
                    </div>
                    <div className="flex-1 flex items-end justify-between gap-2">
                      {[40, 60, 45, 80, 65, 90].map((height, i) => (
                        <div key={i} className="w-full bg-indigo-100 rounded-t-md relative group">
                          <div
                            className="absolute bottom-0 w-full bg-indigo-500 rounded-t-md transition-all duration-500 group-hover:bg-indigo-600"
                            style={{ height: `${height}%` }}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right column */}
                <div className="col-span-1 space-y-6">
                  <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-3">
                      <Star className="w-8 h-8 text-amber-500 fill-amber-500" />
                    </div>
                    <div className="text-2xl font-bold text-slate-900">4.9</div>
                    <div className="text-sm text-slate-500">Calificación promedio</div>
                    <div className="flex gap-1 mt-2">
                      {[1, 2, 3, 4, 5].map(i => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                    <h4 className="font-semibold text-slate-900 mb-4">Mensajes Recientes</h4>
                    <div className="space-y-4">
                      {[
                        { name: 'Carlos R.', msg: '¿Tienen lugar hoy?' },
                        { name: 'Ana M.', msg: '¡Gracias por la atención!' }
                      ].map((msg, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0 overflow-hidden">
                            <img src={`https://picsum.photos/seed/msg${i}/50/50`} alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900">{msg.name}</div>
                            <div className="text-xs text-slate-500 truncate w-32">{msg.msg}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge (hidden on mobile to save space) */}
            <div className="hidden md:flex absolute -right-6 top-1/4 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Nuevo turno</div>
                <div className="text-sm font-bold text-slate-900">Confirmado</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Logos */}
        <div className="mt-16 md:mt-24 border-t border-slate-100 pt-10">
          <p className="text-sm font-medium text-slate-500 mb-6 uppercase tracking-wider">La herramienta perfecta para</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
            {['Peluquerías', 'Odontólogos', 'Psicólogos', 'Estéticas', 'Gimnasios'].map((text, i) => (
              <div key={i} className="text-xl font-bold text-slate-800 font-serif italic">{text}</div>
            ))}
          </div>
        </div>
      </div >
    </section >
  );
};
