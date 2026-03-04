import React from 'react';
import { motion } from 'motion/react';
import { UserPlus, CalendarCog, Rocket } from 'lucide-react';

const steps = [
  {
    step: '1',
    title: 'Registrate en segundos',
    desc: 'Email, nombre del negocio, listo. 2 minutos.',
    icon: UserPlus,
    color: 'from-primary to-datte-purple-500',
  },
  {
    step: '2',
    title: 'Configurá tu agenda',
    desc: 'Elegí qué servicios dás, a qué hora y cuánto salen. 5 minutos.',
    icon: CalendarCog,
    color: 'from-datte-purple-500 to-primary',
  },
  {
    step: '3',
    title: 'Tus clientes reservan',
    desc: 'Mandá tu link por WhatsApp y tus clientes ya pueden reservar.',
    icon: Rocket,
    color: 'from-primary to-datte-purple-400',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const Steps = () => {
  return (
    <section className="py-28 bg-slate-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, #7c3aed15 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-extrabold text-dark mb-4 tracking-tight"
        >
          Arrancá en{' '}
          <span className="font-serif italic font-normal text-primary">10 minutos</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-secondary/80 max-w-2xl mx-auto mb-20"
        >
          3 pasos, fácil y rápido
        </motion.p>

        {/* ─── Desktop Layout ─── */}
        <div className="hidden md:block relative">
          {/* Gradient connecting line */}
          <div className="absolute top-[72px] left-[16%] right-[16%] h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-datte-purple-400 to-primary rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="grid grid-cols-3 gap-12 relative z-10">
            {steps.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Icon circle */}
                  <div className="relative mb-10">
                    <div
                      className={`w-[90px] h-[90px] rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform duration-500`}
                    >
                      <Icon className="w-9 h-9 text-white" strokeWidth={1.8} />
                    </div>

                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-white border-4 border-slate-50 shadow-md flex items-center justify-center">
                      <span className="text-sm font-extrabold text-primary">{item.step}</span>
                    </div>

                    {/* Glow ring */}
                    <div className="absolute inset-0 rounded-full bg-primary/10 scale-125 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Text content */}
                  <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                  <p className="text-secondary/70 text-base leading-relaxed max-w-[240px]">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ─── Mobile Layout: vertical timeline ─── */}
        <div className="md:hidden relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-slate-200">
            <motion.div
              className="w-full bg-gradient-to-b from-primary to-datte-purple-400 rounded-full"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>

          <div className="space-y-10 relative z-10">
            {steps.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex items-start gap-5 text-left"
                >
                  {/* Icon + step badge */}
                  <div className="relative flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg shadow-primary/20`}
                    >
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.8} />
                    </div>
                    <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-white border-2 border-slate-50 shadow-sm flex items-center justify-center">
                      <span className="text-xs font-extrabold text-primary">{item.step}</span>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="pt-2">
                    <h3 className="text-lg font-bold text-dark mb-1.5">{item.title}</h3>
                    <p className="text-secondary/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
