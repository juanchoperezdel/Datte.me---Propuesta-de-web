import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';

export const DedicatedPage = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pattern/1000/1000')] opacity-5 mix-blend-overlay pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-indigo-600 text-sm font-bold mb-8 border border-indigo-100 shadow-sm uppercase tracking-wider">
                            <Globe className="w-4 h-4" /> Presencia Digital
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                            Tu negocio tiene su propia <br className="hidden lg:block" />
                            <span className="font-serif italic font-normal text-indigo-600">página de reservas en segundos</span>
                        </h2>

                        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                            No necesitás contratar diseñadores ni programadores. Al crear tu cuenta te damos un link único (datte.me/tu-negocio) que podés poner en tu Instagram o mandar por WhatsApp para que tus clientes reserven directo.
                        </p>

                        <ul className="space-y-4 mb-10 text-left w-fit mx-auto lg:mx-0">
                            {['Diseño optimizado para celulares', 'Tu logo y colores de marca', 'Listado de servicios y precios', 'Elección de profesional y horario'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                                        <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-full text-lg font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 inline-flex items-center justify-center gap-2">
                            Ver una página de ejemplo <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Mobile Mockup */}
                    <div className="flex-1 flex justify-center lg:justify-end relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-200/50 rounded-full blur-3xl -z-10"></div>

                        <div className="w-[300px] h-[600px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl relative border-8 border-slate-900 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                            {/* Mobile Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl z-20"></div>

                            {/* Screen */}
                            <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                                {/* Header */}
                                <div className="h-48 bg-indigo-600 relative">
                                    <img src="https://picsum.photos/seed/saloncover/400/200" alt="Cover" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
                                    <div className="absolute -bottom-8 left-6 w-20 h-20 bg-white rounded-2xl p-1 shadow-lg">
                                        <img src="https://picsum.photos/seed/salonlogo/100/100" alt="Logo" className="w-full h-full object-cover rounded-xl" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="pt-12 px-6 pb-6 bg-slate-50 h-full">
                                    <h4 className="text-xl font-bold text-slate-900 mb-1">Estudio Mística</h4>
                                    <p className="text-sm text-slate-500 mb-6">Peluquería & Estética en Palermo</p>

                                    <div className="space-y-3">
                                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="font-bold text-slate-900">Corte de Pelo</span>
                                                <span className="font-bold text-indigo-600">$8.000</span>
                                            </div>
                                            <p className="text-xs text-slate-500 mb-3">45 min • Incluye lavado</p>
                                            <button className="w-full py-2 bg-indigo-50 text-indigo-700 rounded-xl text-sm font-bold">
                                                Elegir horario
                                            </button>
                                        </div>

                                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="font-bold text-slate-900">Coloración</span>
                                                <span className="font-bold text-indigo-600">$25.000</span>
                                            </div>
                                            <p className="text-xs text-slate-500 mb-3">120 min • Con diagnóstico</p>
                                            <button className="w-full py-2 bg-indigo-50 text-indigo-700 rounded-xl text-sm font-bold">
                                                Elegir horario
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
