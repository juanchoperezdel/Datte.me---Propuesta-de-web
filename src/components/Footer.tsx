import React from 'react';
import { Calendar, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white text-slate-600 py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-md shadow-indigo-200">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">ReservaPro</span>
            </div>
            <p className="text-sm leading-relaxed mb-8 max-w-xs">
              Conectando doctores y pacientes de forma inteligente. Un camino completo para la atención médica.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Inicio</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Características</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Para pacientes</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Para doctores</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Dispositivos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Para pacientes</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Agendar turno</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Buscar doctores</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Acceder a registros</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Planes de precios</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">FAQ de pacientes</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Para doctores</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Solicitar demo</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Inicio de sesión</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Analíticas e insights</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Planes de precios</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">FAQ de doctores/hospitales</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 text-sm font-medium flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} ReservaPro. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-indigo-600 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Términos de servicio</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Contáctanos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
