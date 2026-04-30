"use client";

import { motion } from "framer-motion";

export function HeroVisuals({ locale }: { locale: string }) {
  const isEs = locale === 'es';

  return (
    <div className="relative w-full h-[500px] lg:h-[650px] hidden md:block">
      
      {/* IMAGEN 1: Principal (Estrategia) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 right-4 w-3/4 h-[70%] rounded-3xl overflow-hidden shadow-2xl border border-white/5 z-10"
      >
        <img 
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop" 
          alt="Strategy" 
          className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
        />
        {/* Filtro sutil para integrarlo a los colores de tu marca */}
        <div className="absolute inset-0 bg-[var(--navy)]/20 mix-blend-multiply pointer-events-none" />
      </motion.div>

      {/* IMAGEN 2: Secundaria superpuesta (Creatividad) */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-10 left-0 w-3/5 h-[45%] rounded-3xl overflow-hidden shadow-2xl border border-[var(--copper)]/20 z-20"
      >
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
          alt="Creative process" 
          className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
        />
      </motion.div>

      {/* IMAGEN 3: Acento flotante (Equipo) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="absolute -right-6 bottom-1/4 w-1/3 h-1/3 rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-30 hidden lg:block"
      >
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop" 
          alt="Team collaboration" 
          className="w-full h-full object-cover" 
        />
      </motion.div>

    </div>
  );
}