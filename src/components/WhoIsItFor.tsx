import React from 'react';
import { Scissors, Briefcase, HeartPulse, Stethoscope, Dumbbell, Sparkles, Syringe, Footprints } from 'lucide-react';

export const WhoIsItFor = () => {
    const professions = [
        { icon: <Scissors className="w-6 h-6" />, name: "Peluquerías" },
        { icon: <Briefcase className="w-6 h-6" />, name: "Barberías" },
        { icon: <HeartPulse className="w-6 h-6" />, name: "Psicólogos" },
        { icon: <Sparkles className="w-6 h-6" />, name: "Nutricionistas" },
        { icon: <Dumbbell className="w-6 h-6" />, name: "Personal trainers" },
        { icon: <Stethoscope className="w-6 h-6" />, name: "Odontólogos" },
        { icon: <Syringe className="w-6 h-6" />, name: "Spas / Estéticas" },
        { icon: <Footprints className="w-6 h-6" />, name: "Kinesiólogos" },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                    ¿Para quién es <span className="font-serif italic font-normal text-indigo-600">datte.me?</span>
                </h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-16">
                    Si gestionás tiempo y clientes, esta plataforma fue pensada para vos.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {professions.map((prof, i) => (
                        <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-slate-100 hover:border-slate-300 transition-colors group cursor-default">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                                {prof.icon}
                            </div>
                            <span className="font-bold text-slate-700">{prof.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
