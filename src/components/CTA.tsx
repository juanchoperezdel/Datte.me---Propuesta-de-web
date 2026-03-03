import React from 'react';
import { Calendar } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-32 bg-indigo-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pattern2/1000/1000')] opacity-5 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-gradient-to-b from-indigo-200/50 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-indigo-200">
          <Calendar className="w-8 h-8 text-white" />
        </div>

        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight mt-4">
          Tu agenda más organizada <br />
          <span className="font-serif italic font-normal text-indigo-600">empieza hoy.</span>
        </h2>

        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Probá datte.me 15 días gratis, sin tarjeta y sin compromiso.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white rounded-full text-xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200">
            Crear mi cuenta gratis
          </button>
        </div>
      </div>
    </section>
  );
};
