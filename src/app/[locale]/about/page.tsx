"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLocale } from "next-intl";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const locale = useLocale();
  const isEs = locale === 'es';

  // El array se mueve adentro para poder leer el 'locale'
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
      className="relative py-32 overflow-hidden bg-gradient-to-b from-[#0F0F1A] to-[#1A1B2E]"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C87941]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-[#C87941] uppercase tracking-[0.3em] text-sm font-medium">
            {isEs ? 'Sobre Nosotros' : 'About Us'}
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F0E8] max-w-3xl leading-tight">
            Marketing Recursos{" "}
            <span className="text-gradient">
              {isEs ? 'Elevando el Potencial de tu Negocio' : 'Elevating Your Business Potential'}
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-xl text-[#F5F0E8]/80 leading-relaxed">
              {isEs ? (
                <>En <strong className="text-[#E8B86D] font-semibold">Marketing Recursos</strong>, nuestra misión es clara: diseñar soluciones de marketing personalizadas y de alto impacto que permitan a las empresas no solo crecer, sino dominar un mercado en constante evolución.</>
              ) : (
                <>At <strong className="text-[#E8B86D] font-semibold">Marketing Recursos</strong>, our mission is clear: to design highly personalized and impactful marketing solutions that allow companies not only to grow but to dominate an ever-evolving market.</>
              )}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-[#C87941] to-[#E8B86D] rounded-full" />
              <h3 className="text-3xl font-bold text-[#F5F0E8] mb-6">
                {isEs ? 'Nuestra Visión y Propósito' : 'Our Vision & Purpose'}
              </h3>
              <div className="space-y-6 text-[#F5F0E8]/70 leading-relaxed">
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
                <p className="text-[#F5F0E8] font-medium pt-2">
                  {isEs 
                    ? '¿Buscas resultados reales con un enfoque creativo? Contáctanos hoy mismo y transformemos tu visión en éxito.'
                    : 'Looking for real results with a creative approach? Contact us today and let\'s transform your vision into success.'}
                </p>
              </div>
            </div>

            <motion.a
              href={`/${locale}/contact`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 mt-8 group cursor-pointer"
            >
              <span className="text-[#E8B86D] font-medium group-hover:text-[#C87941] transition-colors">
                {isEs ? 'Inicia tu Proyecto' : 'Start Your Project'}
              </span>
              <div className="w-10 h-10 rounded-full border border-[#E8B86D] flex items-center justify-center group-hover:bg-[#E8B86D] group-hover:border-[#E8B86D] transition-all duration-300">
                <svg className="w-4 h-4 text-[#E8B86D] group-hover:text-[#0F0F1A] group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 pt-20 border-t border-[#C87941]/20"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-[#F5F0E8] mb-12 text-center">
            {isEs ? 'Nuestros Servicios Especializados' : 'Our Specialized Services'}
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
      </div>
    </section>
  );
}