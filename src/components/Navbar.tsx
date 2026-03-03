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
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-indigo-600">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H6C3.23858 21 1 18.7614 1 16V8C1 5.23858 3.23858 3 6 3Z" fill="currentColor" />
                <path d="M7 12L10 15L17 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-bold text-2xl tracking-tight text-slate-900">Datte</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#caracteristicas" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Características</a>
            <a href="#precios" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Precios</a>
            <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">FAQ</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              Iniciar sesión
            </button>
            <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200">
              Comenzar gratis
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
              <a href="#caracteristicas" className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Características</a>
              <a href="#precios" className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Precios</a>
              <a href="#faq" className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">FAQ</a>
              <div className="pt-4 flex flex-col gap-2">
                <button className="w-full text-center px-4 py-2 border border-slate-200 rounded-full text-base font-medium text-slate-700 hover:bg-slate-50">
                  Iniciar sesión
                </button>
                <button className="w-full text-center px-4 py-2 bg-indigo-600 rounded-full text-base font-bold text-white hover:bg-indigo-700">
                  Comenzar gratis
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
