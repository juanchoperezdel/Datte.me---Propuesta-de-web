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
            <img src="/logo.png" alt="Datte" className="h-8 w-auto" />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#caracteristicas" className="text-sm font-medium text-secondary/80 hover:text-primary transition-colors">Características</a>
            <a href="#precios" className="text-sm font-medium text-secondary/80 hover:text-primary transition-colors">Precios</a>
            <a href="#faq" className="text-sm font-medium text-secondary/80 hover:text-primary transition-colors">FAQ</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://app.datte.me/login" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-secondary/80 hover:text-primary transition-colors">
              Iniciar sesión
            </a>
            <a href="#precios" className="inline-block bg-primary text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-primary transition-colors shadow-sm shadow-datte-purple-200">
              Comenzar gratis
            </a>
          </div>

          <button className="md:hidden text-secondary/80" onClick={() => setIsOpen(!isOpen)}>
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
              <a href="#caracteristicas" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-secondary/90 hover:bg-slate-50 rounded-md">Características</a>
              <a href="#precios" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-secondary/90 hover:bg-slate-50 rounded-md">Precios</a>
              <a href="#faq" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-secondary/90 hover:bg-slate-50 rounded-md">FAQ</a>
              <div className="pt-4 flex flex-col gap-2">
                <a href="https://app.datte.me/login" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="block w-full text-center px-4 py-2 border border-slate-200 rounded-full text-base font-medium text-secondary/90 hover:bg-slate-50">
                  Iniciar sesión
                </a>
                <a href="#precios" onClick={() => setIsOpen(false)} className="block w-full text-center px-4 py-2 bg-primary rounded-full text-base font-bold text-white hover:bg-primary">
                  Probalo gratis
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
