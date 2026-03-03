import React, { useState } from 'react';
import { Calendar, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">ReservaPro</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#beneficios" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Beneficios</a>
            <a href="#como-funciona" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Cómo funciona</a>
            <a href="#precios" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Precios</a>
            <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">FAQ</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              Iniciar sesión
            </button>
            <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200">
              Empezar gratis
            </button>
          </div>

          <button className="md:hidden text-slate-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              <a href="#beneficios" className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Beneficios</a>
              <a href="#como-funciona" className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Cómo funciona</a>
              <a href="#precios" className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Precios</a>
              <div className="pt-4 flex flex-col gap-2">
                <button className="w-full text-center px-4 py-2 border border-slate-200 rounded-full text-base font-medium text-slate-700 hover:bg-slate-50">
                  Iniciar sesión
                </button>
                <button className="w-full text-center px-4 py-2 bg-indigo-600 rounded-full text-base font-medium text-white hover:bg-indigo-700">
                  Empezar gratis
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
