import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

export const BeforeAndAfter = () => {
    const painPoints = [
        "Coordinás por WhatsApp todo el día",
        "Clientes que no aparecen sin aviso",
        "No sabés cuánto facturaste este mes",
        "Agenda en papel o en la cabeza",
        "Recordás los turnos a mano"
    ];

    const solutions = [
        "Tus clientes reservan solos 24/7",
        "Señas que aseguran el turno",
        "Dashboard con tus números en tiempo real",
        "Calendario digital siempre actualizado",
        "WhatsApp automático para cada cliente"
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        La diferencia es <span className="text-indigo-600 font-serif italic font-normal">inmediata</span>
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                    {/* Before */}
                    <div className="flex-1 bg-slate-50 border border-slate-200 rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
                        <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                                <XCircle className="w-5 h-5 text-red-600" />
                            </div>
                            Sin datte.me
                        </h3>
                        <ul className="space-y-6 relative z-10">
                            {painPoints.map((text, i) => (
                                <li key={i} className="flex items-start gap-4 text-slate-600">
                                    <XCircle className="w-6 h-6 text-slate-300 flex-shrink-0 mt-0.5" />
                                    <span className="text-lg leading-snug">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* After */}
                    <div className="flex-1 bg-indigo-600 rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden shadow-2xl shadow-indigo-900/20 transform md:-translate-y-4">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
                        <h3 className="text-xl font-bold mb-8 flex items-center gap-3 relative z-10">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                <CheckCircle className="w-5 h-5 text-white" />
                            </div>
                            Con datte.me
                        </h3>
                        <ul className="space-y-6 relative z-10">
                            {solutions.map((text, i) => (
                                <li key={i} className="flex items-start gap-4 text-indigo-100 font-medium">
                                    <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-lg leading-snug text-white">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
