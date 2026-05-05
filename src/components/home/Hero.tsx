"use client";

import { motion } from "framer-motion";

export function HeroVisuals({ locale }: { locale: string }) {
  const isEs = locale === 'es';

  return (
    <div className="relative w-full h-[600px] lg:h-[750px] hidden lg:block font-sans">
      
      {/* CUADRO PRINCIPAL EDITORIAL */}
      <motion.div
        initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
        animate={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-10 right-0 w-[85%] h-[75%] bg-[#EFECE6] overflow-hidden"
      >
        {/* Imagen en escala de grises / Sepia suave */}
        <img 
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1000&h=800&fit=crop" 
          alt="Strategy Meeting" 
          className="w-full h-full object-cover grayscale-[50%] contrast-125 opacity-90 transition-transform duration-[20s] hover:scale-110" 
        />
      </motion.div>

      {/* CUADRO SECUNDARIO (Superpuesto con borde blanco para efecto marco) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 w-[55%] h-[45%] border-8 border-[#FAF9F6] bg-[#1A1A1A] overflow-hidden shadow-2xl"
      >
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop" 
          alt="Creative process" 
          className="w-full h-full object-cover grayscale transition-transform duration-700 hover:scale-105 opacity-80" 
        />
      </motion.div>

      {/* Texto 1: Elegante vertical a la derecha */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-20 -right-8 origin-bottom-right -rotate-90 flex items-center gap-4"
      >
        <span className="w-12 h-[1px] bg-[#1A1A1A]"></span>
        <p className="text-[#1A1A1A] uppercase tracking-[0.3em] text-[10px] font-bold">
          {isEs ? 'Estrategias Dirigidas' : 'Targeted Strategies'}
        </p>
      </motion.div>

      {/* Texto 2: Etiqueta minimalista sobre la imagen secundaria */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-[40%] -left-8 bg-[#FAF9F6] px-6 py-3 shadow-sm border border-[#E5E5E5] flex items-center gap-4"
      >
        <span className="text-xl font-serif italic text-[#1A1A1A]">01.</span>
        <p className="text-[#1A1A1A] uppercase tracking-widest text-[10px] font-bold">
          {isEs ? 'Comunicación Disruptiva' : 'Disruptive Communication'}
        </p>
      </motion.div>

      {/* Texto 3: Detalle fino en la esquina superior izquierda de la imagen principal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute top-6 right-[80%] bg-[#1A1A1A] text-[#FAF9F6] px-4 py-2"
      >
        <p className="uppercase tracking-[0.2em] text-[9px] font-bold">
          {isEs ? 'Eventos Estratégicos' : 'Strategic Events'}
        </p>
      </motion.div>

    </div>
  );
}