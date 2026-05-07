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

  // TEXTOS DEL HERO: INTERACTIVOS
  const highlights = [
    { label: isEs ? "Estrategia" : "Strategy", title: isEs ? "Planificación de Alto Nivel" : "High-Level Planning", desc: isEs ? "Diseñamos la hoja de ruta que conecta tus recursos con metas ambiciosas de mercado." : "We design the roadmap that connects your resources with ambitious market goals." },
    { label: isEs ? "Cumplimiento" : "Compliance", title: isEs ? "Blindaje Operativo" : "Operational Shielding", desc: isEs ? "Garantizamos que cada paso de tu empresa cumpla con el marco legal e institucional vigente." : "We guarantee that every step of your company complies with the current legal framework." },
    { label: isEs ? "Mercado" : "Market", title: isEs ? "Inteligencia de Datos" : "Data Intelligence", desc: isEs ? "Transformamos la incertidumbre en decisiones inteligentes mediante investigación profunda." : "We transform uncertainty into intelligent decisions through deep research." }
  ];

  // ACORDEÓN DE SERVICIOS
  const services = [
    {
      title: isEs ? "Marketing estratégico" : "Strategic Marketing",
      short: isEs ? "Conviértete en la marca que lidera tu mercado conectando tus objetivos con tu audiencia." : "Become the brand that leads your market connecting goals with your audience.",
      detail: isEs ? "El Marketing Estratégico no se trata solo de acciones aisladas, sino de un plan integral que conecta tus objetivos de negocio con las necesidades de tu audiencia. Nuestro enfoque combina análisis profundo, visión innovadora y creatividad, para diseñar estrategias que impulsan el crecimiento sostenible de tu marca.\n\nCada decisión, cada campaña y cada comunicación están pensadas para generar impacto medible, fortalecer tu posicionamiento y crear relaciones duraderas con tus clientes." : "Strategic Marketing is an integral plan connecting business goals with audience needs. We combine deep analysis, innovation, and creativity to design strategies driving sustainable growth.\n\nEvery decision is aimed at generating measurable impact and building lasting relationships."
    },
    {
      title: isEs ? "Publicidad y medios" : "Advertising & Media",
      short: isEs ? "Impulsa tu marca y amplifica tu presencia para construir conexiones duraderas." : "Boost your brand and amplify presence to build lasting connections.",
      detail: isEs ? "En un mundo donde la atención es el recurso más valioso, tu marca necesita destacar con fuerza y claridad. Nuestro enfoque en Publicidad y Medios está diseñado para amplificar tu presencia, generar impacto y construir conexiones duraderas con tu público.\n\nTransformamos la manera en que tu marca se comunica, posicionándote como un referente en tu industria y maximizando tu alcance en cada canal." : "In a world where attention is valuable, your brand must stand out. Our approach amplifies your presence, generating impact and building connections.\n\nWe transform how your brand communicates, positioning you as an industry benchmark."
    },
    {
      title: isEs ? "Investigación de mercados" : "Market Research",
      short: isEs ? "Descubre oportunidades y toma decisiones inteligentes basadas en datos reales." : "Discover opportunities and make smart decisions based on real data.",
      detail: isEs ? "La investigación de mercados es la base para decisiones estratégicas. Analizamos tendencias, comportamientos y necesidades de tu audiencia para ofrecerte información clara, precisa y accionable.\n\nCon datos confiables y análisis profundo, tu empresa puede diseñar estrategias efectivas, optimizar recursos y alcanzar resultados sostenibles." : "Market research is the foundation for strategic decisions. We analyze trends and behaviors to offer clear, actionable information.\n\nWith reliable data, your company can design effective strategies and achieve sustainable results."
    },
    {
      title: isEs ? "Asesoría en Cumplimiento" : "Compliance Consulting",
      short: isEs ? "Opera con transparencia, evita multas y protege la reputación de tu empresa." : "Operate transparently, avoid fines, and protect your company's reputation.",
      detail: isEs ? "En un entorno empresarial cada vez más regulado, cumplir con la normativa vigente protege la reputación de la empresa. Ofrecemos un servicio integral de asesoría en cumplimiento legal y administrativo, abarcando las áreas fiscal, laboral y comercial.\n\nRealizamos auditorías preventivas y capacitamos a tu equipo. Nuestro objetivo es que operes con total transparencia y seguridad." : "In a regulated environment, complying with regulations protects reputation. We offer comprehensive legal and administrative compliance consulting.\n\nWe conduct audits and train your team. Our goal is for you to operate with total transparency and security."
    },
    {
      title: isEs ? "Diseño y branding" : "Design & Branding",
      short: isEs ? "Diseña la identidad que tu marca merece. Coherencia y confianza visual." : "Design the identity your brand deserves. Visual coherence and trust.",
      detail: isEs ? "El diseño y el branding son la esencia de cómo tu marca se percibe. Creamos identidades sólidas, coherentes y memorables que reflejan la personalidad de tu empresa.\n\nDesde la conceptualización hasta la implementación, cada elemento visual trabaja para contar tu historia. Con un branding fuerte, tu marca se reconoce y se convierte en referente." : "Design and branding are the essence of perception. We create solid, memorable identities reflecting your company's personality.\n\nFrom concept to implementation, every visual element tells your story. With strong branding, your brand becomes a benchmark."
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
              ? 'No ofrecemos soluciones genéricas. Nos sumergimos en la realidad de tu negocio para entender tus objetivos, proponer tácticas a medida y convertirlas en resultados tangibles.' 
              : 'We do not offer generic solutions. We dive into your business reality to understand objectives, propose custom tactics, and turn them into tangible results.'}
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