import React from 'react';
import { motion } from 'motion/react';
import { Star, Calendar, Clock, CreditCard, Users, CheckCircle2, Zap } from 'lucide-react';

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">

      {/* ── Background: dot grid ── */}
      <div
        className="absolute inset-0 -z-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #7c3aed40 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* ── Background: glowing blobs ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-gradient-to-b from-datte-purple-100/60 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* ── Floating particles ── */}
      {[
        { size: 'w-3 h-3', top: '12%', left: '8%', delay: '0s', dur: '6s', opacity: 'opacity-30' },
        { size: 'w-5 h-5', top: '20%', left: '88%', delay: '1.5s', dur: '8s', opacity: 'opacity-20' },
        { size: 'w-2 h-2', top: '65%', left: '92%', delay: '0.8s', dur: '7s', opacity: 'opacity-40' },
        { size: 'w-4 h-4', top: '75%', left: '5%', delay: '2s', dur: '9s', opacity: 'opacity-25' },
        { size: 'w-3 h-3', top: '40%', left: '94%', delay: '3s', dur: '6.5s', opacity: 'opacity-30' },
        { size: 'w-2 h-2', top: '55%', left: '3%', delay: '0.5s', dur: '7.5s', opacity: 'opacity-35' },
      ].map((p, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-primary ${p.size} ${p.opacity} pointer-events-none -z-10`}
          style={{
            top: p.top,
            left: p.left,
            animation: `float ${p.dur} ease-in-out infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}

      {/* ── Main text block ── */}
      <motion.div
        className="text-center max-w-4xl mx-auto"
        variants={stagger}
        initial="hidden"
        animate="show"
      >

        {/* Badge */}
        <motion.div variants={fadeUp}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-secondary text-sm font-semibold mb-8 border border-primary/20 shadow-md shadow-primary/10">
            <Zap className="w-3.5 h-3.5 text-primary fill-primary" />
            Tu agenda, en piloto automático
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-8xl font-extrabold text-primary tracking-tight mb-6 leading-[1.1] overflow-visible"
        >
          Dejá de perder clientes por turnos mal{' '}
          <span className="relative inline-block">
            <span className="relative" style={{ zIndex: 1 }}>gestionados.</span>
            {/* Animated highlight behind the word */}
            <motion.span
              className="absolute rounded-md"
              style={{ bottom: '2px', left: '-4px', right: '-4px', height: '45%', background: 'rgba(124,58,237,0.18)', zIndex: 0 }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-secondary mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Tus clientes reservan solos por WhatsApp, pagan con MercadoPago y vos no tocás el celular. En 10 minutos lo tenés andando.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="flex flex-col items-center justify-center gap-3">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full text-lg font-semibold hover:bg-datte-purple-500 transition-all duration-300 shadow-lg shadow-datte-purple-200 flex items-center justify-center gap-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Probalo gratis 15 días
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-primary/20 text-primary text-lg font-semibold hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm rounded-full">
              Ver cómo funciona →
            </button>
          </div>
          <p className="text-sm text-secondary opacity-70 font-medium">Sin tarjeta · Setup en 10 min · Cancelás cuando quieras</p>
        </motion.div>
      </motion.div>

      {/* ── Dashboard / media mockup ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-16 md:mt-20 relative mx-auto max-w-5xl px-2 sm:px-0"
      >
        {/* Dashboard Mockup */}
        <div className="rounded-2xl md:rounded-3xl border border-datte-purple-200/60 bg-white/50 p-2 md:p-4 shadow-2xl shadow-primary/10 backdrop-blur-sm transition-all duration-300">

          {/* Mobile Video Placeholder */}
          <div className="block md:hidden rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[9/16] relative flex flex-col items-center justify-center">
            <svg className="w-12 h-12 text-slate-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm font-medium text-slate-500">Video / GIF Demostración (Mobile)</p>
            <p className="text-xs text-slate-400 mt-1 max-w-[200px] text-center">Espacio reservado para agregar el iframe luego</p>
          </div>

          {/* Desktop UI */}
          <div className="hidden md:block rounded-xl md:rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-sm">
            {/* Top bar */}
            <div className="h-14 border-b border-slate-100 flex items-center px-6 justify-between bg-white">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-secondary font-bold text-xl">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                    <path d="M6 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H6C3.23858 21 1 18.7614 1 16V8C1 5.23858 3.23858 3 6 3Z" fill="currentColor" />
                    <path d="M7 12L10 15L17 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Datte
                </div>
                <div className="hidden md:flex items-center gap-4 ml-8 text-sm font-medium text-secondary opacity-80">
                  <span className="text-primary bg-datte-purple-100/50 px-3 py-1.5 rounded-lg shadow-sm border border-datte-purple-100 flex items-center gap-2 cursor-pointer hover:bg-datte-purple-100 transition-colors duration-200">
                    <Calendar className="w-4 h-4" /> Dashboard
                  </span>
                  <span className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors duration-200"><Clock className="w-4 h-4" /> Horarios</span>
                  <span className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors duration-200"><CreditCard className="w-4 h-4" /> Pagos</span>
                  <span className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors duration-200"><Users className="w-4 h-4" /> Clientes</span>
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
                <div className="bg-primary rounded-2xl p-6 text-white relative overflow-hidden shadow-lg shadow-primary/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
                  <h3 className="text-xl font-bold mb-1">¡Hola, Laura!</h3>
                  <p className="text-datte-purple-100 text-sm mb-4">Tenés 12 turnos hoy</p>
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(i => (
                      <img key={i} src={`https://picsum.photos/seed/client${i}/50/50`} alt="Client" className="w-8 h-8 rounded-full border-2 border-primary" referrerPolicy="no-referrer" />
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm transition-shadow duration-300 hover:shadow-md hover:border-datte-purple-100 cursor-pointer">
                  <h4 className="font-semibold text-secondary mb-4">Próximos turnos</h4>
                  <div className="space-y-4">
                    {[
                      { time: '10:00 AM', name: 'Martín Pérez', service: 'Corte de pelo' },
                      { time: '11:30 AM', name: 'Sofía Gómez', service: 'Coloración' }
                    ].map((turn, i) => (
                      <div key={i} className="flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-slate-50 transition-colors duration-200">
                        <div className="w-10 h-10 rounded-full bg-datte-purple-100 overflow-hidden">
                          <img src={`https://picsum.photos/seed/user${i}/50/50`} alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-secondary">{turn.name}</div>
                          <div className="text-xs text-secondary opacity-70 flex items-center gap-1">
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
                    <div key={i} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer">
                      <div className="text-sm text-secondary opacity-70 mb-1">{stat.label}</div>
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-emerald-500 font-medium mt-1">{stat.trend} esta semana</div>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm h-64 flex flex-col transition-shadow duration-300 hover:shadow-md cursor-pointer">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="font-semibold text-secondary">Ingresos Mensuales</h4>
                    <div className="text-xs font-medium bg-datte-purple-100 text-primary px-2 py-1 rounded-md">Últimos 6 meses</div>
                  </div>
                  <div className="flex-1 flex items-end justify-between gap-2">
                    {[40, 60, 45, 80, 65, 90].map((height, i) => (
                      <div key={i} className="w-full bg-datte-purple-100 rounded-t-md relative group overflow-hidden">
                        <div
                          className="absolute bottom-0 w-full bg-primary rounded-t-md transition-all duration-300 group-hover:bg-datte-purple-500 group-hover:opacity-90"
                          style={{ height: `${height}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="col-span-1 space-y-6">
                <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-3">
                    <Star className="w-8 h-8 text-amber-500 fill-amber-500" />
                  </div>
                  <div className="text-2xl font-bold text-secondary">4.9</div>
                  <div className="text-sm text-secondary opacity-70">Calificación promedio</div>
                  <div className="flex gap-1 mt-2">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm transition-shadow duration-300 hover:shadow-md cursor-pointer">
                  <h4 className="font-semibold text-secondary mb-4">Mensajes Recientes</h4>
                  <div className="space-y-4">
                    {[
                      { name: 'Carlos R.', msg: '¿Tienen lugar hoy?' },
                      { name: 'Ana M.', msg: '¡Gracias por la atención!' }
                    ].map((msg, i) => (
                      <div key={i} className="flex items-start gap-3 p-2 -mx-2 rounded-lg hover:bg-slate-50 transition-colors duration-200">
                        <div className="w-8 h-8 rounded-full bg-datte-purple-100 flex-shrink-0 overflow-hidden">
                          <img src={`https://picsum.photos/seed/msg${i}/50/50`} alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-secondary">{msg.name}</div>
                          <div className="text-xs text-secondary opacity-70 truncate w-32">{msg.msg}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="hidden md:flex absolute -right-6 top-1/4 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 items-center gap-3 animate-bounce cursor-default transition-transform duration-300 hover:scale-105" style={{ animationDuration: '3s' }}>
            <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <div className="text-xs text-secondary opacity-70 font-medium">Nuevo turno</div>
              <div className="text-sm font-bold text-secondary">Confirmado</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Float animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
      `}</style>
    </section>
  );
};
