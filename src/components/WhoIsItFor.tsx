import React from 'react';
import { Scissors, HeartPulse, Dumbbell, Activity, Brain, Apple, SmilePlus, Flower2 } from 'lucide-react';

export const WhoIsItFor = () => {
    const professions = [
        { icon: <Scissors className="w-6 h-6" />, name: "Peluquerías" },
        { icon: <Scissors className="w-6 h-6" />, name: "Barberías" },
        { icon: <Brain className="w-6 h-6" />, name: "Psicólogos" },
        { icon: <Apple className="w-6 h-6" />, name: "Nutricionistas" },
        { icon: <Dumbbell className="w-6 h-6" />, name: "Personal trainers" },
        { icon: <SmilePlus className="w-6 h-6" />, name: "Odontólogos" },
        { icon: <Flower2 className="w-6 h-6" />, name: "Spas / Estéticas" },
        { icon: <Activity className="w-6 h-6" />, name: "Kinesiólogos" },
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold text-dark mb-6 tracking-tight">
                    ¿Para quién es <span className="font-serif italic font-normal text-primary">datte.me?</span>
                </h2>
                <p className="text-xl text-secondary/80 max-w-2xl mx-auto mb-16">
                    Si tu negocio depende de una agenda con turnos, datte.me es para vos.
                </p>
            </div>

            {/* Fallback CSS animation for perfect seamless looping */}
            <style>{`
                .slider-track {
                    display: flex;
                    width: max-content;
                    animation: slide 30s linear infinite;
                }
                .slider-track:hover {
                    animation-play-state: paused;
                }
                @keyframes slide {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>

            {/* CSS-based Infinite Slider */}
            <div className="w-full relative flex items-center bg-white">
                {/* Gradient Masks for smooth fade out at edges */}
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                <div className="flex overflow-hidden w-full pb-8">
                    <div className="slider-track gap-4 md:gap-6 px-2">
                        {/* We need multiple sets guarantees there's always content filling the screen as it translates 50% */}
                        {[...professions, ...professions, ...professions, ...professions].map((prof, i) => (
                            <div
                                key={i}
                                className="min-w-[150px] md:min-w-[200px] flex-shrink-0 bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-white hover:border-primary/30 transition-all duration-300 group cursor-default shadow-sm hover:shadow-md"
                            >
                                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    {prof.icon}
                                </div>
                                <span className="font-bold text-secondary/90 text-center">{prof.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
