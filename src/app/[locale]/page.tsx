import Link from 'next/link';
import { T } from "@/components/shared/T";
import { HeroVisuals } from '@/components/home/Hero';
import { Gauge, Gem, Zap, Target } from 'lucide-react';
import { AddToCartButton } from './services/AddToCartButton'; 

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';

  // 1. Datos de los pilares agregados
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
      gradiente: "from-[var(--accent-cyan)]/20 to-transparent"
    }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-mesh overflow-hidden">
      
      {/* HERO SECTION - Neobrutalismo Dinámico */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* COLUMNA IZQUIERDA: Copy Disruptivo */}
            <div className="max-w-2xl relative z-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-[var(--accent-magenta)]/30 mb-8">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-cyan)] animate-pulse" />
                <span className="text-sm font-bold text-[var(--text-main)] tracking-wider uppercase">
                  {isEs ? 'Agencia de Performance' : 'Performance Agency'}
                </span>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] text-[var(--text-main)] mb-8 tracking-tight">
                <T>Enciende el Motor de</T> <br />
                <span className="text-gradient-pop"><T>tu Marca.</T></span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[var(--text-main)]/70 mb-12 max-w-xl leading-relaxed font-medium">
                {isEs 
                  ? 'Entendemos la publicidad como una máquina de alto rendimiento: requiere calibración exacta, combustible innovador y una ruta definida para cruzar la meta y dominar el mercado.'
                  : 'We understand advertising as a high-performance machine: it requires exact calibration, innovative fuel, and a defined route to cross the finish line and dominate the market.'}
              </p>

            </div>

            {/* COLUMNA DERECHA: Visuales y Globos Flotantes */}
            <HeroVisuals locale={locale} />

          </div>
        </div>
      </section>

      {/* SECCIÓN 4 CILINDROS */}
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
              <div 
                key={index}
                // 3. Eliminamos motion.div y aplicamos clases de animación nativas de Tailwind CSS
                className={`glass-panel p-8 rounded-[2rem] border border-white/60 shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 bg-gradient-to-b ${pilar.gradiente} hover:border-[var(--accent-purple)]/40 animate-in fade-in slide-in-from-bottom-8 fill-mode-both delay-${index * 100}`}
                style={{ animationDelay: `${index * 150}ms` }}
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
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}