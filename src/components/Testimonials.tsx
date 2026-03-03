import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
          Confiado por profesionales y <span className="font-serif italic font-normal text-indigo-600">clientes</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-24">
          Lo que dicen los dueños de negocios que ya no coordinan turnos por WhatsApp.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "Antes perdía 2 horas por día coordinando turnos y respondiendo mensajes por WhatsApp. Ahora mis pacientes reservan solos y casi no tengo ausencias.",
              name: "Valentina M.",
              role: "Psicóloga, Mendoza",
              avatar: "https://picsum.photos/seed/valentina/100/100"
            },
            {
              quote: "Implementar cobros de seña por MercadoPago me salvó. Los clientes que antes me dejaban colgado ahora avisan o pierden la seña. La facturación subió un 25%.",
              name: "Martín R.",
              role: "Dueño de Barbería, CABA",
              avatar: "https://picsum.photos/seed/martin/100/100",
              featured: true
            },
            {
              quote: "La página de reservas me quedó divina. Dejé de pagarle a una recepcionista part-time y uso ese dinero para publicidad. El sistema se paga solo.",
              name: "Carolina S.",
              role: "Centro de Estética, Córdoba",
              avatar: "https://picsum.photos/seed/carolina/100/100"
            }
          ].map((item, i) => (
            <div key={i} className={`p-10 rounded-[2.5rem] relative transition-all duration-500 ${item.featured ? 'bg-indigo-50 border-2 border-indigo-100 shadow-xl shadow-indigo-100/50 -translate-y-4' : 'bg-slate-50 border border-slate-100 hover:shadow-lg hover:-translate-y-2'}`}>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden">
                <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>

              <div className="pt-8 mb-6">
                <div className="flex justify-center gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-lg leading-relaxed italic">"{item.quote}"</p>
              </div>

              <div className="border-t border-slate-200/60 pt-6">
                <div className="font-bold text-slate-900 text-lg">{item.name}</div>
                <div className="text-sm text-slate-500">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
