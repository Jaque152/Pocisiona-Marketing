import Link from 'next/link';
import { T } from "@/components/shared/T";
import { ArrowUpRight } from 'lucide-react';
import { HeroVisuals } from '@/components/home/Hero';
import { AddToCartButton } from './services/AddToCartButton'; 
export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';

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
                <T>Hackeamos tu</T> <br />
                <span className="text-gradient-pop"><T>crecimiento.</T></span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[var(--text-main)]/70 mb-12 max-w-xl leading-relaxed font-medium">
                {isEs 
                  ? 'No hacemos marketing tradicional. Diseñamos sistemas de adquisición implacables, creatividades que detienen el scroll y estrategias basadas en datos puros.'
                  : 'We don\'t do traditional marketing. We design relentless acquisition systems, scroll-stopping creatives, and pure data-driven strategies.'}
              </p>
            </div>

            {/* COLUMNA DERECHA: Visuales y Globos Flotantes */}
            <HeroVisuals locale={locale} />

          </div>
        </div>
      </section>

    </main>
  );
}