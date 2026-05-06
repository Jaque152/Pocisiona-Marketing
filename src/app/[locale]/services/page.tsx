import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { T } from '@/components/shared/T';
import { AddToCartButton } from './AddToCartButton';

export default async function ServicesCatalogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const supabase = await createClient();

  // 1. Consultamos la tabla correcta del nuevo ecosistema
  const { data: plans } = await supabase
    .from('cb_plans')
    .select('*')
    .eq('is_active', true)
    .order('price', { ascending: true });

  // 2. Filtramos el plan custom para renderizar su tarjeta especial manualmente al final
  const standardPlans = plans?.filter(plan => plan.title !== 'Plan Personalizado') || [];

  const formatPrice = (p: number) => new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(p);

  return (
    <main className="min-h-screen bg-mesh pt-32 pb-24 text-[var(--text-main)] relative">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-[var(--accent-cyan)]/30 mb-6">
            <span className="text-[var(--accent-cyan)] uppercase tracking-[0.2em] text-xs font-bold">
              Fórmulas de Éxito
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-[var(--text-main)]">
            El Garage De Opciones
          </h1>
        </div>

        {/* Grid de Planes usando la base de datos real */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {standardPlans.map((plan) => (
            <div 
              key={plan.id} 
              className="glass-panel rounded-3xl p-8 border border-white/50 shadow-xl flex flex-col bg-white/40 relative overflow-hidden group"
            >
              <div className="mb-8 relative z-10">
                <h3 className="text-2xl font-bold tracking-tight text-[var(--text-main)] mb-4 leading-tight">
                  {plan.title}
                </h3>
                {/* Se usa plan.description porque así se llama la columna en Supabase */}
                <p className="text-[var(--text-main)]/70 font-medium text-[13px] leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-[var(--text-main)]/10 flex items-end justify-between relative z-10">
                <div>
                  <span className="text-2xl font-bold text-[var(--text-main)] block mb-1 tracking-tight">
                    {formatPrice(plan.price)}
                  </span>
                  <span className="text-[10px] text-[var(--text-main)]/50 font-bold uppercase tracking-widest">
                    MXN + IVA
                  </span>
                </div>
                
                {/* Ahora plan.id envía un UUID real a tu carrito */}
                <div className="relative z-20">
                  <AddToCartButton planId={plan.id} />
                </div>
              </div>
            </div>
          ))}

          {/* Tarjeta: Plan Custom Garage (Apunta a Pricing) */}
          <div className="glass-panel rounded-3xl p-8 border border-[var(--accent-cyan)] shadow-2xl flex flex-col bg-gradient-to-br from-white/60 to-[var(--accent-cyan)]/10 relative overflow-hidden group">
            <div className="mb-8 relative z-10">
              <h3 className="text-2xl font-bold tracking-tight text-[var(--text-main)] mb-4 leading-tight">
                Plan Personalizado
              </h3>
              <p className="text-[var(--text-main)]/70 font-medium text-[13px] leading-relaxed">
                Un plan diseñado pieza por pieza para tu marca, como un auto modificado a la medida de tu estilo y desempeño.
              </p>
            </div>
            <div className="mt-auto pt-6 border-t border-[var(--text-main)]/10 flex items-center justify-between relative z-10">
              <span className="text-[11px] text-[var(--text-main)] font-bold uppercase tracking-widest">
                MXN + IVA
              </span>
              <Link href={`/${locale}/pricing`} className="bg-[var(--text-main)] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform">
                Añadir al carrito
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}