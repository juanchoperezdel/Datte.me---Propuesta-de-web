import React from 'react';
import { Calendar, Facebook, Instagram, Linkedin, Twitter, MessageCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white text-slate-600 py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-indigo-600">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H6C3.23858 21 1 18.7614 1 16V8C1 5.23858 3.23858 3 6 3Z" fill="currentColor" />
                  <path d="M7 12L10 15L17 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-bold text-2xl tracking-tight text-slate-900">Datte</span>
            </div>
            <p className="text-sm leading-relaxed mb-8 max-w-xs">
              Tu agenda más organizada empieza hoy. Simplificamos la gestión de tu negocio.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Plataforma</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#caracteristicas" className="hover:text-indigo-600 transition-colors">Características</a></li>
              <li><a href="#precios" className="hover:text-indigo-600 transition-colors">Precios</a></li>
              <li><a href="#faq" className="hover:text-indigo-600 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Compañía</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Sobre nosotros</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Integraciones</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">MercadoPago</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">WhatsApp</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Google Calendar</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-100 text-sm font-medium flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} datte.me. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-indigo-600 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Términos de servicio</a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a href="#" className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 hover:-translate-y-1 transition-all z-50 group">
        <MessageCircle className="w-8 h-8 fill-current" />
        <span className="absolute right-16 bg-white text-slate-800 text-sm font-bold px-4 py-2 rounded-xl shadow-xl border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          ¿Tenés dudas? ¡Escribinos!
        </span>
      </a>
    </footer>
  );
};
