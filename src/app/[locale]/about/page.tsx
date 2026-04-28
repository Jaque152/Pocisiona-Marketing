"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Array de servicios para iterarlos limpiamente en el JSX
  const services = [
    {
      title: "Marketing de Alto Rendimiento",
      description: "Impulsa tu marca hacia el siguiente nivel. Implementamos soluciones disruptivas diseñadas para que logres destacar y conectar con tu audiencia de manera auténtica y efectiva."
    },
    {
      title: "Comunicación Estratégica",
      description: "Creamos conexiones que impactan. Potenciamos tu mensaje mediante enfoques creativos que aseguran que tu voz sea escuchada con claridad por el público adecuado."
    },
    {
      title: "Estrategia y Visión de Negocio",
      description: "Diseñamos la hoja de ruta para tu éxito. Elevamos el valor de tu marca con estrategias innovadoras que garantizan un posicionamiento sólido y un impacto duradero en la industria."
    }
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-[#0F0F1A] to-[#1A1B2E]"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C87941]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-[#C87941] uppercase tracking-[0.3em] text-sm font-medium">
            Sobre Nosotros
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F0E8] max-w-3xl leading-tight">
            Marketing Recursos{" "}
            <span className="text-gradient">Elevando el Potencial de tu Negocio</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Mission */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-xl text-[#F5F0E8]/80 leading-relaxed">
              En <strong className="text-[#E8B86D] font-semibold">Marketing Recursos</strong>, nuestra misión es clara: diseñar soluciones de marketing personalizadas y de alto impacto que permitan a las empresas no solo crecer, sino dominar un mercado en constante evolución.
            </p>
          </motion.div>

          {/* Right Column - Vision */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-[#C87941] to-[#E8B86D] rounded-full" />
              <h3 className="text-3xl font-bold text-[#F5F0E8] mb-6">
                Nuestra Visión y Propósito
              </h3>
              <div className="space-y-6 text-[#F5F0E8]/70 leading-relaxed">
                <p>
                  Aspiramos a consolidarnos como el referente de confianza y éxito en el sector. Nos mueve la creatividad estratégica, la innovación constante y una búsqueda incansable de la excelencia en el servicio.
                </p>
                <p>
                 Entendemos que el éxito es un trabajo en equipo. Por ello, apostamos por una colaboración estrecha y una comunicación transparente con cada cliente, garantizando que sus objetivos de negocio no solo se alcancen, sino que se superen.
                </p>
                <p className="text-[#F5F0E8] font-medium pt-2">
                  ¿Buscas resultados reales con un enfoque creativo? Contáctanos hoy mismo y transformemos tu visión en éxito.
                </p>
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 mt-8 group cursor-pointer"
            >
              <span className="text-[#E8B86D] font-medium group-hover:text-[#C87941] transition-colors">
                Inicia tu Proyecto
              </span>
              <div className="w-10 h-10 rounded-full border border-[#E8B86D] flex items-center justify-center group-hover:bg-[#E8B86D] group-hover:border-[#E8B86D] transition-all duration-300">
                <svg
                  className="w-4 h-4 text-[#E8B86D] group-hover:text-[#0F0F1A] group-hover:translate-x-1 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.a>
          </motion.div>
        </div>

        {/* Services Section (Nueva sección integrada) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 pt-20 border-t border-[#C87941]/20"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-[#F5F0E8] mb-12 text-center">
            Nuestros Servicios Especializados
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -8 }}
                className="bg-[#0F0F1A]/40 p-8 rounded-2xl border border-[#C87941]/20 hover:border-[#C87941]/60 transition-all duration-300 shadow-lg group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#C87941]/10 flex items-center justify-center mb-6 group-hover:bg-[#C87941]/20 transition-colors">
                   <div className="w-6 h-6 bg-gradient-to-br from-[#C87941] to-[#E8B86D] rounded-sm" />
                </div>
                <h4 className="text-xl font-bold text-[#E8B86D] mb-4">
                  {service.title}
                </h4>
                <p className="text-[#F5F0E8]/70 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 relative"
        >
          <div className="grid grid-cols-3 gap-4 h-64 lg:h-80">
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A]/80 to-transparent" />
            </div>
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="Creative process"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A]/80 to-transparent" />
            </div>
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop"
                alt="Strategy meeting"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A]/80 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}