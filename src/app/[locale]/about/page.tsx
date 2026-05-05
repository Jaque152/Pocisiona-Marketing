"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const locale = useLocale();
  const isEs = locale === 'es';

  const services = [
    {
      title: isEs ? "Marketing de Alto Rendimiento" : "High-Performance Marketing",
      description: isEs 
        ? "Impulsa tu marca hacia el siguiente nivel. Implementamos soluciones disruptivas diseñadas para que logres destacar y conectar con tu audiencia de manera auténtica y efectiva."
        : "Push your brand to the next level. We implement disruptive solutions designed to help you stand out and connect with your audience authentically and effectively."
    },
    {
      title: isEs ? "Comunicación Estratégica" : "Strategic Communication",
      description: isEs 
        ? "Creamos conexiones que impactan. Potenciamos tu mensaje mediante enfoques creativos que aseguran que tu voz sea escuchada con claridad por el público adecuado."
        : "We create connections that make an impact. We empower your message through creative approaches ensuring your voice is heard clearly by the right audience."
    },
    {
      title: isEs ? "Estrategia y Visión de Negocio" : "Business Strategy & Vision",
      description: isEs 
        ? "Diseñamos la hoja de ruta para tu éxito. Elevamos el valor de tu marca con estrategias innovadoras que garantizan un posicionamiento sólido y un impacto duradero en la industria."
        : "We design the roadmap to your success. We elevate your brand's value with innovative strategies that guarantee solid positioning and a lasting impact in the industry."
    }
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 overflow-hidden bg-mesh min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-[var(--accent-purple)]/30 mb-6">
            <span className="text-[var(--accent-purple)] uppercase tracking-[0.2em] text-xs font-bold">
              {isEs ? 'Sobre Nosotros' : 'About Us'}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-main)] max-w-3xl leading-[1.1] tracking-tight">
            Ninja Creatives.{" "}
            <span className="text-gradient-pop block mt-2">
              {isEs ? 'Elevando el Potencial de tu Negocio.' : 'Elevating Your Business Potential.'}
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 glass-panel p-8 md:p-12 rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-[var(--text-main)]">
              {isEs ? 'Nuestra Misión' : 'Our Mission'}
            </h3>
            <p className="text-lg text-[var(--text-main)]/70 leading-relaxed font-medium text-justify">
              {isEs ? (
                <>En <strong className="text-[var(--accent-purple)] font-bold">Ninja Creatives</strong>, nuestra misión es clara: diseñar soluciones de marketing personalizadas y de alto impacto que permitan a las empresas no solo crecer, sino dominar un mercado en constante evolución.</>
              ) : (
                <>At <strong className="text-[var(--accent-purple)] font-bold">Ninja Creatives</strong>, our mission is clear: to design highly personalized and impactful marketing solutions that allow companies not only to grow but to dominate an ever-evolving market.</>
              )}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="relative pl-8 border-l-4 border-[var(--accent-cyan)]">
              <h3 className="text-3xl font-bold text-[var(--text-main)] mb-6 tracking-tight">
                {isEs ? 'Nuestra Visión y Propósito' : 'Our Vision & Purpose'}
              </h3>
              <div className="space-y-6 text-[var(--text-main)]/70 leading-relaxed font-medium text-justify">
                <p>
                  {isEs 
                    ? 'Aspiramos a consolidarnos como el referente de confianza y éxito en el sector. Nos mueve la creatividad estratégica, la innovación constante y una búsqueda incansable de la excelencia en el servicio.'
                    : 'We aspire to consolidate ourselves as the benchmark of trust and success in the sector. We are driven by strategic creativity, constant innovation, and an untiring search for service excellence.'}
                </p>
                <p>
                  {isEs 
                    ? 'Entendemos que el éxito es un trabajo en equipo. Por ello, apostamos por una colaboración estrecha y una comunicación transparente con cada cliente, garantizando que sus objetivos de negocio no solo se alcancen, sino que se superen.'
                    : 'We understand that success is a team effort. Therefore, we are committed to close collaboration and transparent communication with each client, ensuring their business goals are not only met but exceeded.'}
                </p>
              </div>
            </div>

            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-3 mt-8 px-8 py-4 bg-[var(--accent-dark)] text-white rounded-full font-bold hover:scale-105 hover:shadow-xl hover:shadow-[var(--accent-dark)]/20 transition-all group"
            >
              {isEs ? 'Inicia tu Proyecto' : 'Start Your Project'}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-32 pt-20 border-t border-[var(--text-main)]/10"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-[var(--text-main)] mb-12 text-center tracking-tight">
            {isEs ? 'Nuestros Servicios Especializados' : 'Our Specialized Services'}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -8 }}
                className="glass-panel p-8 rounded-3xl hover:border-[var(--accent-cyan)]/50 transition-all duration-300 shadow-xl group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[var(--accent-magenta)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--accent-magenta)]/20 transition-colors">
                   <div className="w-6 h-6 bg-gradient-to-br from-[var(--accent-purple)] to-[var(--accent-magenta)] rounded-md shadow-inner" />
                </div>
                <h4 className="text-xl font-bold text-[var(--text-main)] mb-4">
                  {service.title}
                </h4>
                <p className="text-[var(--text-main)]/60 leading-relaxed font-medium text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}