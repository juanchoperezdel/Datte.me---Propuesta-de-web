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
        
        <span className="inline-block px-4 py-1.5 rounded-full bg-white text-indigo-600 text-sm font-bold mb-8 border border-indigo-100 shadow-sm uppercase tracking-wider">
          Un paso hacia una mejor atención
        </span>
        
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
          Da el siguiente paso en <br />
          <span className="font-serif italic font-normal text-indigo-600">Salud y Bienestar.</span>
        </h2>
        
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Ya seas un paciente buscando atención o un doctor gestionando turnos, nuestra plataforma lo hace simple, seguro y sin fricciones para todos.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-full text-lg font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200">
            Agendar turno
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-100 rounded-full text-lg font-bold hover:bg-indigo-50 transition-all shadow-sm">
            Empezar como profesional
          </button>
        </div>
      </div>
    </section>
  );
};
