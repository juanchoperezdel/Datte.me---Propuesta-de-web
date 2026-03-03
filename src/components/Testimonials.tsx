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
          Una plataforma amada tanto por empleados como por empleadores.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "He usado ReservaPro en nuestra clínica para todos nuestros especialistas. Tenemos 3 sucursales y cada miembro del equipo lo encuentra invaluable.",
              name: "Esther Howard",
              role: "Dermatóloga",
              avatar: "https://picsum.photos/seed/esther/100/100"
            },
            {
              quote: "Llevamos usando ReservaPro en nuestro hospital por más de un año. Manejamos 8 departamentos y todo el equipo está contento. Simple de navegar y el soporte es fantástico.",
              name: "Dr. Alisha Kapoor",
              role: "Cardióloga",
              avatar: "https://picsum.photos/seed/alisha/100/100",
              featured: true
            },
            {
              quote: "Agendé mi turno a través de la app. Tomó menos de dos minutos y recibí confirmación instantánea. Los recordatorios son súper útiles.",
              name: "Kathryn Murphy",
              role: "Paciente",
              avatar: "https://picsum.photos/seed/kathryn/100/100"
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
