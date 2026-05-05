import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { T } from '@/components/shared/T';
import { ArrowUpRight } from 'lucide-react';
import { AddToCartButton } from './AddToCartButton';

export default async function ServicesCatalogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const supabase = await createClient();

  // Traemos los planes activos
  const { data: plans } = await supabase
    .from('plans_nc')
    .select('*, categories_nc(name)')
    .eq('is_active', true)
    .order('price', { ascending: true });

  const formatPrice = (p: number) => new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(p);

  return (
    <main className="min-h-screen bg-mesh pt-32 pb-24 text-[var(--text-main)] relative">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Cabecera del Catálogo */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-[var(--accent-magenta)]/30 mb-6">
            <span className="text-[var(--accent-magenta)] uppercase tracking-[0.2em] text-xs font-bold">
              {isEs ? 'Nuestro Arsenal' : 'Our Arsenal'}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-[var(--text-main)]">
            <T>Soluciones diseñadas para</T> <span className="text-gradient-pop"><T>dominar.</T></span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-main)]/60 font-medium">
            {isEs 
              ? 'Elige la estrategia que mejor se adapte al nivel de disrupción que tu negocio necesita.' 
              : 'Choose the strategy that best fits the level of disruption your business needs.'}
          </p>
        </div>

        {/* Grid de Planes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans?.map((plan) => (
            <div 
              key={plan.id} 
              className="glass-panel rounded-3xl p-8 border border-white/50 shadow-xl flex flex-col bg-white/30 relative overflow-hidden group"
            >
              {/* Fondo de auto sutil como en tu imagen */}
              <div className="absolute inset-0 opacity-10 bg-[url('/ruta-a-tu-silueta-auto.png')] bg-no-repeat bg-bottom bg-contain pointer-events-none mix-blend-overlay" />

              <div className="mb-6 relative z-10">
                <h3 className="text-2xl font-bold tracking-tight text-[var(--text-main)] mb-3">
                  <T>{plan.title}</T>
                </h3>
                <p className="text-[var(--text-main)]/70 font-medium text-sm line-clamp-3">
                  <T>{plan.description}</T>
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-[var(--text-main)]/10 flex items-center justify-between relative z-10">
                <div>
                  <span className="text-2xl font-bold text-[var(--text-main)] block">
                    {formatPrice(plan.price)}
                  </span>
                  <span className="text-[10px] text-[var(--text-main)]/50 font-bold uppercase tracking-widest">
                    {isEs ? 'MXN + IVA' : 'MXN + TAX'}
                  </span>
                </div>
                
                {/* Botón directo al carrito, sin pasar por [slug] */}
                <AddToCartButton planId={plan.id} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}