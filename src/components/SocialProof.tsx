import React from 'react';
import { TrendingUp, Users } from 'lucide-react';

export const SocialProof = () => {
    return (
        <div className="py-16 bg-slate-50 border-b border-slate-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-datte-purple-100 text-primary rounded-full mb-6">
                    <TrendingUp className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-dark tracking-tight leading-tight">
                    <span className="text-primary">+340 negocios</span> ya automatizaron su agenda con datte.me
                </h2>
                <p className="mt-4 text-lg text-secondary/80 font-medium">
                    Únite a la plataforma que está transformando cómo los profesionales gestionan su tiempo en Argentina.
                </p>
            </div>
        </div>
    );
};
