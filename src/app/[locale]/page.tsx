"use client";

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { AddToCartButton } from './services/AddToCartButton';
import { Plan } from '@/types';

export default function HomePage() {
  const locale = useLocale();
  const isEs = locale === 'es';
  const supabase = createClient();

  const [plans, setPlans] = useState<Plan[]>([]);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [featuredIdx, setFeaturedIdx] = useState(0);

  useEffect(() => {
    const fetchPlans = async () => {
      const { data } = await supabase
        .from('ar_plans') 
        .select('*')
        .eq('is_active', true)
        .order('price', { ascending: true });
      if (data) setPlans(data as Plan[]);
    };
    fetchPlans();
  }, [supabase]);

  const standardPlans = plans.filter(p => !p.title.toLowerCase().includes('personalizado'));
  const customPlan = plans.find(p => p.title.toLowerCase().includes('personalizado'));
  const formatPrice = (p: number) => new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(p);

  // TEXTOS DEL HERO: INTERACTIVOS (PARAFRASEADOS)
  const highlights = [
    { 
      label: isEs ? "Estrategia" : "Strategy", 
      title: isEs ? "Planificación de Alto Nivel" : "High-Level Planning", 
      desc: isEs 
        ? "Trazamos el camino ideal para alinear tus capacidades internas con objetivos de mercado desafiantes." 
        : "We trace the ideal path to align your internal capabilities with challenging market objectives." 
    },
    { 
      label: isEs ? "Cumplimiento" : "Compliance", 
      title: isEs ? "Blindaje Operativo" : "Operational Shielding", 
      desc: isEs 
        ? "Aseguramos que la operación diaria de tu negocio esté completamente respaldada por los lineamientos legales e institucionales vigentes." 
        : "We ensure that your business's daily operations are fully supported by current legal and institutional guidelines." 
    },
    { 
      label: isEs ? "Mercado" : "Market", 
      title: isEs ? "Inteligencia de Datos" : "Data Intelligence", 
      desc: isEs 
        ? "Disipamos la incertidumbre comercial transformando investigaciones exhaustivas en decisiones tácticas precisas." 
        : "We dispel commercial uncertainty by transforming exhaustive research into precise tactical decisions." 
    }
  ];

  // ACORDEÓN DE SERVICIOS (PARAFRASEADOS)
  const services = [
    {
      title: isEs ? "Marketing estratégico" : "Strategic Marketing",
      short: isEs 
        ? "Posiciona a tu empresa como líder del sector al vincular tus metas comerciales con lo que tu público realmente busca." 
        : "Position your company as an industry leader by linking your business goals with what your audience truly seeks.",
      detail: isEs 
        ? "Desarrollamos planes globales que fusionan la creatividad, la visión a futuro y el análisis riguroso para fomentar un avance constante.\n\nCada paso que damos busca cimentar vínculos a largo plazo y mejorar tu presencia en el mercado con resultados cuantificables." 
        : "We develop global plans merging creativity, future vision, and rigorous analysis to foster constant progress.\n\nEvery step we take aims to build long-term relationships and improve your market presence with quantifiable results."
    },
    {
      title: isEs ? "Publicidad y medios" : "Advertising & Media",
      short: isEs 
        ? "Fortalece el alcance de tu empresa y forja relaciones sólidas con tu público objetivo." 
        : "Strengthen your company's reach and forge solid relationships with your target audience.",
      detail: isEs 
        ? "En una era altamente competitiva por captar la atención, te ayudamos a sobresalir mediante enfoques publicitarios que maximizan tu visibilidad en diversos canales.\n\nEvolucionamos la forma en que transmites tu mensaje para que te conviertas en una autoridad indiscutible dentro de tu industria." 
        : "In an era highly competitive for attention, we help you stand out through advertising approaches that maximize your visibility across various channels.\n\nWe evolve the way you transmit your message so you become an indisputable authority within your industry."
    },
    {
      title: isEs ? "Investigación de mercados" : "Market Research",
      short: isEs 
        ? "Halla nuevas vías de crecimiento y fundamenta tus elecciones corporativas en información verídica y actual." 
        : "Find new growth paths and base your corporate choices on truthful and current information.",
      detail: isEs 
        ? "Estudiamos el comportamiento y las exigencias de tu mercado meta para brindarte datos estructurados, claros y útiles.\n\nEste respaldo analítico te permitirá trazar caminos más eficientes, aprovechar mejor tu inversión y lograr un éxito duradero." 
        : "We study the behavior and demands of your target market to provide structured, clear, and useful data.\n\nThis analytical backing will allow you to chart more efficient paths, better leverage your investment, and achieve lasting success."
    },
    {
      title: isEs ? "Asesoría en Cumplimiento" : "Compliance Consulting",
      short: isEs 
        ? "Salvaguarda el prestigio de tu organización operando bajo el marco de la ley y previniendo cualquier tipo de sanción." 
        : "Safeguard your organization's prestige by operating within the legal framework and preventing any type of sanction.",
      detail: isEs 
        ? "Brindamos consultoría completa en materia laboral, comercial y fiscal para asegurar tu alineación normativa.\n\nA través de la preparación técnica de tu personal y la ejecución de auditorías preventivas, garantizamos que tu negocio funcione con total claridad y seguridad jurídica." 
        : "We provide complete consulting in labor, commercial, and tax matters to ensure your regulatory alignment.\n\nThrough the technical preparation of your staff and the execution of preventive audits, we guarantee that your business operates with total clarity and legal security."
    },
    {
      title: isEs ? "Diseño y branding" : "Design & Branding",
      short: isEs 
        ? "Construye una imagen visual que transmita seguridad y sea completamente congruente con el valor de tu empresa." 
        : "Build a visual image that conveys security and is completely consistent with your company's value.",
      detail: isEs 
        ? "Moldeamos identidades únicas que proyectan fielmente el carácter de tu negocio, cuidando desde la conceptualización hasta su aplicación gráfica.\n\nUna gestión de marca sólida es clave para que tu historia resuene, seas fácilmente identificable y te erijas como un modelo a seguir en el mercado." 
        : "We shape unique identities that faithfully project the character of your business, taking care from conceptualization to graphic application.\n\nSolid brand management is key for your story to resonate, be easily identifiable, and stand as a benchmark in the market."
    }
  ];

  // METODOLOGÍA
  const processSteps = [
    { title: isEs ? "Selección" : "Selection", text: isEs ? "Eliges el servicio que mejor se acople a tus necesidades." : "Choose the service that best fits your needs." },
    { title: isEs ? "Contacto" : "Contact", text: isEs ? "Te comunicas con nosotros vía correo, formulario o teléfono." : "Contact us via email, form, or phone." },
    { title: isEs ? "Planeación" : "Planning", text: isEs ? "Armamos tu plan de trabajo de manera personalizada." : "We build your personalized work plan." },
    { title: isEs ? "Inversión" : "Investment", text: isEs ? "Realizas el pago de manera segura en nuestra página." : "Make secure payments on our page." },
    { title: isEs ? "Ejecución" : "Execution", text: isEs ? "Entregamos el servicio en el tiempo establecido." : "We deliver the service on time." }
  ];

  return (
    <main className="bg-[#fafafa] min-h-screen font-sans text-slate-900">
      
      {/* 1. HERO SECTION */}
      <section id="nosotros" className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-3xl">
          <div className="inline-block border border-slate-200 bg-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-indigo-600 mb-8 shadow-sm">
            {isEs ? 'Transformación Corporativa' : 'Corporate Transformation'}
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-slate-900 mb-8">
            {isEs ? 'Donde la' : 'Where'} <span className="text-indigo-600">{isEs ? 'estrategia' : 'strategy'}</span> <br/>
            {isEs ? 'se encuentra con la' : 'meets'} <br/>
            <span className="text-indigo-600">{isEs ? 'ejecución.' : 'execution.'}</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
            {isEs 
              ? 'Fusionamos la planeación estratégica con la implementación práctica. Evitamos las fórmulas prefabricadas; en su lugar, analizamos a fondo el contexto de tu empresa para comprender tus metas, diseñar acciones personalizadas y lograr un impacto real y medible.' 
              : 'We merge strategic planning with practical implementation. We avoid pre-made formulas; instead, we deeply analyze your company\'s context to understand your goals, design custom actions, and achieve real, measurable impact.'}
          </p>
          
          {/* Hero Quick-Reveal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-slate-200 pt-8 mt-12">
            {highlights.map((h, i) => (
              <button 
                key={i} 
                onMouseEnter={() => setFeaturedIdx(i)}
                className={`text-left transition-all p-4 rounded-xl ${featuredIdx === i ? 'bg-white shadow-md border border-slate-200 opacity-100' : 'opacity-50 hover:opacity-80'}`}
              >
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 block mb-2">{h.label}</span>
                <h4 className="text-sm font-bold text-slate-900 mb-2">{h.title}</h4>
                <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">{h.desc}</p>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 2. SOLUCIONES INTEGRALES */}
      <section id="soluciones" className="py-24 bg-white px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              {isEs ? 'Nuestros Servicios' : 'Our Services'}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              {isEs ? 'Soluciones que administran tu éxito.' : 'Solutions that manage your success.'}
            </h2>
          </div>

          <div className="space-y-4">
            {services.map((service, idx) => (
              <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden bg-[#fafafa] transition-all hover:border-indigo-200">
                <button 
                  onClick={() => setActiveService(activeService === idx ? null : idx)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between focus:outline-none"
                >
                  <div>
                    <h3 className={`text-2xl font-bold transition-colors ${activeService === idx ? 'text-indigo-600' : 'text-slate-900'}`}>
                      {service.title}
                    </h3>
                    <p className="text-slate-500 mt-2 font-medium pr-8">{service.short}</p>
                  </div>
                  <div className={`w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center transition-transform duration-300 shrink-0 ${activeService === idx ? 'rotate-180 bg-indigo-50 border-indigo-100' : ''}`}>
                    <ChevronDown className={`w-5 h-5 ${activeService === idx ? 'text-indigo-600' : 'text-slate-400'}`} />
                  </div>
                </button>
                <AnimatePresence>
                  {activeService === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 md:p-8 pt-0 border-t border-slate-100">
                        {service.detail.split('\n\n').map((para, pIdx) => (
                          <p key={pIdx} className="text-slate-600 mb-4 leading-relaxed text-justify">
                            {para}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. METODOLOGÍA */}
      <section id="metodo" className="py-24 bg-slate-900 text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4 block">
              {isEs ? 'Proceso' : 'Process'}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              {isEs ? 'Cómo trabajamos:' : 'How we work:'}
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-indigo-500 font-bold text-5xl mb-4 opacity-50">0{idx + 1}.</div>
                <h4 className="text-xl font-bold mb-3 text-white">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROGRAMAS Y COMPRAS */}
      <section id="programas" className="py-24 bg-[#fafafa] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              {isEs ? 'Programas' : 'Programs'}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight max-w-3xl mx-auto">
              {isEs ? 'Conoce todos nuestros programas o comunícate con nosotros.' : 'Know all our programs or contact us.'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standardPlans.map((plan) => {
              let parsedFeatures: string[] = [];
              try { parsedFeatures = typeof plan.features === 'string' ? JSON.parse(plan.features) : plan.features; } catch(e){}

              return (
                <div key={plan.id} className="bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all flex flex-col">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 leading-tight">{plan.title}</h3>
                  <div className="mb-8">
                    <span className="text-3xl font-extrabold text-slate-900">{formatPrice(plan.price)}</span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">MXN + IVA</span>
                  </div>
                  
                  <ul className="space-y-4 mb-10 flex-1">
                    {parsedFeatures.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Componente que conecta con el carrito */}
                  <AddToCartButton planId={plan.id} />
                </div>
              );
            })}
          </div>

          {/* PLAN PERSONALIZADO */}
          {customPlan && (
            <div className="mt-12 bg-indigo-600 rounded-[2rem] p-10 md:p-14 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
              <div className="max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{customPlan.title}</h3>
                <p className="text-indigo-100 text-lg">
                  {customPlan.description}
                </p>
              </div>
              <div className="w-full md:w-auto flex flex-col gap-4">
                <Link href={`/${locale}/contact`} className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-center hover:bg-slate-50 transition-colors">
                  {isEs ? 'Contactar Asesor' : 'Contact Advisor'}
                </Link>
                <Link href={`/${locale}/pricing`} className="bg-indigo-800 text-white border border-indigo-500 px-8 py-4 rounded-xl font-bold text-center hover:bg-indigo-900 transition-colors">
                  {isEs ? 'Pagar Folio Asignado' : 'Pay Assigned Folio'}
                </Link>
              </div>
            </div>
          )}

        </div>
      </section>

    </main>
  );
}