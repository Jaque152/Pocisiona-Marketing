"use client";

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Gauge, Gem, Zap, Target, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const locale = useLocale();
  const isEs = locale === 'es';

  // Información de la imagen parafraseada y adaptada a la estética Draxen
  const pilares = [
    {
      icono: <Gauge className="w-8 h-8 text-[var(--accent-cyan)]" />,
      titulo: isEs ? "Estrategia Digital de Alto Rendimiento" : "High-Performance Digital Strategy",
      texto: isEs 
        ? "Diseñamos rutas de aceleración precisas y basadas en datos para que tu marca cruce la meta antes que la competencia. Estrategias calibradas para ganar."
        : "We design precise, data-driven acceleration routes so your brand crosses the finish line before the competition. Strategies calibrated to win.",
      gradiente: "from-[var(--accent-cyan)]/20 to-transparent"
    },
    {
      icono: <Gem className="w-8 h-8 text-[var(--accent-purple)]" />,
      titulo: isEs ? "Branding e Identidad Visual" : "Branding & Visual Identity",
      texto: isEs 
        ? "Forjamos identidades con un diseño imponente y memorable. Haz que tu marca deje una huella profunda y sea reconocida instantáneamente en cualquier pista."
        : "We forge identities with imposing and memorable design. Make your brand leave a deep mark and be instantly recognized on any track.",
      gradiente: "from-[var(--accent-purple)]/20 to-transparent"
    },
    {
      icono: <Zap className="w-8 h-8 text-[var(--accent-magenta)]" />,
      titulo: isEs ? "Marketing de Contenidos" : "Content Marketing",
      texto: isEs 
        ? "El combustible de alto octanaje para tu motor digital. Creamos narrativas ágiles que mantienen a tu audiencia enganchada, activa y leal a tu marca."
        : "The high-octane fuel for your digital engine. We create agile narratives that keep your audience hooked, active, and loyal to your brand.",
      gradiente: "from-[var(--accent-magenta)]/20 to-transparent"
    },
    {
      icono: <Target className="w-8 h-8 text-[var(--accent-cyan)]" />,
      titulo: isEs ? "Publicidad Pagada (Ads)" : "Paid Advertising (Ads)",
      texto: isEs 
        ? "Inyectamos energía directa a tus resultados. Campañas altamente innovadoras y segmentadas para maximizar tu retorno de inversión de forma inmediata."
        : "We inject direct energy into your results. Highly innovative and segmented campaigns to maximize your ROI immediately.",
      gradiente: "from-[var(--accent-cyan)]/20 to-transparent" // Reutilizamos cian para mantener equilibrio visual
    }
  ];

  return (
    <main className="min-h-screen bg-mesh overflow-hidden relative">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Texto del Hero */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-[var(--accent-cyan)]/30 mb-8">
                <span className="text-[var(--accent-cyan)] uppercase tracking-[0.2em] text-xs font-bold">
                  {isEs ? 'Bienvenidos a Draxen Digital' : 'Welcome to Draxen Digital'}
                </span>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] text-[var(--text-main)] mb-8 tracking-tight">
                {isEs ? 'Enciende el Motor de' : 'Ignite the Engine of'} <br />
                <span className="text-gradient-pop">{isEs ? 'tu Marca.' : 'your Brand.'}</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[var(--text-main)]/70 mb-10 max-w-xl leading-relaxed font-medium">
                {isEs 
                  ? 'Entendemos la publicidad como una máquina de alto rendimiento: requiere calibración exacta, combustible innovador y una ruta definida para cruzar la meta y dominar el mercado.'
                  : 'We understand advertising as a high-performance machine: it requires exact calibration, innovative fuel, and a defined route to cross the finish line and dominate the market.'}
              </p>
            </motion.div>

            {/* Elemento visual abstracto para el Hero */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block h-[600px]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-cyan)]/20 via-[var(--accent-purple)]/20 to-transparent rounded-full blur-3xl animate-pulse-slow" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 glass-panel rounded-full border-[var(--accent-cyan)]/30 flex items-center justify-center">
                 <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[var(--accent-purple)] to-[var(--accent-magenta)] opacity-20 blur-2xl" />
                 {/* Aquí puedes colocar una imagen abstracta en 3D o el logo de Draxen si lo deseas */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SECCIÓN DE PILARES (LOS 4 CILINDROS) ================= */}
      <section className="relative py-24 px-6 border-t border-[var(--text-main)]/10 bg-white/20">
        <div className="container mx-auto max-w-7xl relative z-10">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-main)] tracking-tight">
              {isEs ? 'Los 4 Cilindros de Nuestro Motor' : 'The 4 Cylinders of Our Engine'}
            </h2>
            <p className="text-lg text-[var(--text-main)]/60 max-w-2xl mx-auto font-medium">
              {isEs 
                ? 'El rendimiento perfecto no es casualidad. Es el resultado de sincronizar estrategia, identidad, contenido y distribución para que tu marca acelere sin frenos.'
                : 'Perfect performance is no accident. It is the result of synchronizing strategy, identity, content, and distribution so your brand accelerates without brakes.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pilares.map((pilar, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-panel p-8 rounded-[2rem] border border-white/60 shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 bg-gradient-to-b ${pilar.gradiente} hover:border-[var(--accent-purple)]/40`}
              >
                {/* Ícono con contenedor Glass */}
                <div className="w-16 h-16 rounded-2xl bg-white/60 flex items-center justify-center shadow-sm mb-6 border border-white group-hover:scale-110 transition-transform">
                  {pilar.icono}
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-[var(--text-main)] leading-tight">
                  {pilar.titulo}
                </h3>
                
                <p className="text-[var(--text-main)]/70 text-sm font-medium leading-relaxed">
                  {pilar.texto}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}