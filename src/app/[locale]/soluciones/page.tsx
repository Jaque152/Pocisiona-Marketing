import Link from 'next/link';

export default async function SolucionesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';

  const soluciones = [
    {
      icono: "🏎️",
      titulo: "Estrategia Digital: Ferrari",
      texto: "Rápida, precisa y diseñada para alcanzar la meta en tiempo récord. Comenzamos analizando tu mercado..."
    },
    {
      icono: "💎",
      titulo: "Branding y Diseño: Lamborghini",
      texto: "Como un Lamborghini, tu marca debe destacar por su elegancia y poder. Creamos identidades visuales..."
    },
    // ... agrega Porsche, Tesla, Bugatti y Jeep aquí ...
  ];

  return (
    <main className="min-h-screen bg-mesh pt-32 pb-24 text-[var(--text-main)] relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gradient-pop">El Garaje De Innovación</h1>
          <p className="text-xl text-[var(--text-main)]/70 max-w-2xl mx-auto">
            Soluciones de alto rendimiento diseñadas para que tu marca tome la delantera.
          </p>
        </div>

        {/* Tarjetas de Autos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
           {soluciones.map((solucion, idx) => (
             <div key={idx} className="glass-panel p-8 rounded-3xl hover:border-[var(--accent-cyan)] transition-colors">
               <div className="text-4xl mb-4">{solucion.icono}</div>
               <h3 className="text-2xl font-bold mb-4">{solucion.titulo}</h3>
               <p className="text-[var(--text-main)]/70 text-sm leading-relaxed text-justify">{solucion.texto}</p>
             </div>
           ))}
        </div>

        {/* Cta a Pricing como solicitaste */}
        <div className="text-center glass-panel p-12 rounded-3xl max-w-4xl mx-auto bg-white/40">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas un Plan Custom Garage?</h2>
          <p className="mb-8 text-[var(--text-main)]/70">Un plan diseñado pieza por pieza para tu marca, como un auto modificado a la medida de tu estilo y desempeño.</p>
          <Link href={`/${locale}/pricing`} className="bg-[var(--accent-dark)] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform inline-block">
            Cotizar a Medida
          </Link>
        </div>

      </div>
    </main>
  );
}