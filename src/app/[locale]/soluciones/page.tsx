import Link from 'next/link';
import { Gauge, Gem, Zap, Target, Share2, LineChart } from 'lucide-react';

export default async function SolucionesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const soluciones = [
    {
      icono: <Gauge className="w-10 h-10 text-[var(--accent-cyan)]" />,
      titulo: "Estrategia digital: Ferrari",
      texto: "Nuestra estrategia digital es como un Ferrari: rápida, precisa y diseñada para alcanzar la meta en tiempo récord. Comenzamos analizando tu mercado, competencia y audiencia para identificar oportunidades y diseñar un plan estratégico que maximice el impacto de tu marca. Cada decisión se fundamenta en datos y análisis, asegurando que tus campañas estén siempre dirigidas al público correcto.\n\nDiseñamos estrategias multicanal que combinan redes sociales, publicidad pagada, marketing de contenidos y SEO, creando un ecosistema digital sólido. Cada acción se mide y se ajusta continuamente para garantizar eficiencia y resultados tangibles.\n\nTrabajamos con creatividad aplicada: desde la conceptualización de ideas hasta la ejecución de campañas, nos aseguramos de que tu marca destaque y genere conexiones significativas con tus clientes. Nuestro enfoque combina innovación con metodologías comprobadas, asegurando que cada paso acelere tus resultados.\n\nCon Ferrari – Estrategia Digital, tu marca no solo avanza; toma la delantera en la carrera digital, aumentando visibilidad, engagement y conversiones de manera sostenida."
    },
    {
      icono: <Gem className="w-10 h-10 text-[var(--accent-purple)]" />,
      titulo: "Branding y diseño: Lamborghini",
      texto: "Como un Lamborghini, tu marca debe destacar por su elegancia y poder. Creamos identidades visuales completas que incluyen logotipos, paletas de color, tipografía, manuales de marca y aplicaciones en diferentes formatos, todo diseñado para reflejar la esencia y personalidad de tu empresa.\n\nNuestro equipo fusiona creatividad y estrategia para construir una narrativa visual que conecte emocionalmente con tu audiencia. Cada detalle, desde el estilo gráfico hasta los elementos de comunicación, está pensado para generar confianza y profesionalismo.\n\nEl branding no es solo apariencia: es percepción. Por eso desarrollamos identidades que transmiten valores, misión y visión, asegurando coherencia en todos los puntos de contacto con tus clientes.\n\nCon Lamborghini – Branding y Diseño, tu marca se convierte en un símbolo de reconocimiento, diferenciación y recordación duradera, capaz de competir con las grandes referencias del mercado."
    },
    {
      icono: <Zap className="w-10 h-10 text-[var(--accent-magenta)]" />,
      titulo: "Marketing de contenidos: Porsche",
      texto: "El contenido es el combustible que mantiene la presencia digital de tu marca en movimiento. Como un Porsche, nuestras estrategias son ágiles, eficientes y enfocadas en resultados medibles. Creamos blogs, newsletters, videos, infografías y publicaciones en redes sociales que transmiten mensajes claros y relevantes.\n\nAplicamos storytelling y técnicas de SEO para optimizar alcance, engagement y autoridad de marca. Cada pieza de contenido está diseñada para atraer, educar y fidelizar a tu público objetivo, generando interacciones auténticas y duraderas.\n\nNuestro enfoque combina creatividad y análisis de datos. Monitoreamos métricas de rendimiento, evaluamos el comportamiento de tu audiencia y ajustamos estrategias para mejorar continuamente la eficacia de tus acciones.\n\nCon Porsche – Marketing de Contenidos, tu marca mantiene la velocidad en la comunicación digital, asegurando que cada mensaje llegue en el momento adecuado y con la mayor efectividad posible."
    },
    {
      icono: <Target className="w-10 h-10 text-[var(--accent-cyan)]" />,
      titulo: "Publicidad pagada: Tesla",
      texto: "La publicidad pagada es la energía que impulsa tus resultados. Como un Tesla, nuestras campañas son innovadoras, precisas y sostenibles, maximizando el retorno de inversión. Creamos anuncios en Google Ads, Facebook, Instagram y otras plataformas estratégicas, diseñados para atraer clientes y generar conversiones inmediatas.\n\nSegmentamos audiencias con exactitud, diseñamos creativos llamativos y analizamos el desempeño de cada campaña para optimizar resultados. Nuestro objetivo es que cada dólar invertido produzca el mayor impacto posible, aumentando ventas y visibilidad.\n\nAdemás, aplicamos pruebas A/B y estrategias de remarketing para ajustar los anuncios en tiempo real y mejorar continuamente el rendimiento de tus campañas. La combinación de creatividad, análisis y optimización garantiza que tu marca se destaque frente a la competencia.\n\nCon Tesla – Publicidad Pagada, tu marca acelera su alcance, atrayendo clientes de forma inmediata y logrando resultados medibles y sostenibles."
    },
    {
      icono: <Share2 className="w-10 h-10 text-[var(--accent-purple)]" />,
      titulo: "Gestión de redes sociales: Bugatti",
      texto: "Las redes sociales son el circuito donde tu marca compite cada día. Como un Bugatti, gestionamos tus plataformas con velocidad, precisión y estilo, creando estrategias que fomentan interacción, crecimiento de comunidad y fidelización.\n\nCreamos calendarios de contenido, publicamos material creativo y respondemos a la audiencia de manera estratégica, asegurando que cada interacción refuerce tu imagen y genere engagement real. Analizamos métricas clave y ajustamos tácticas para maximizar resultados y optimizar recursos.\n\nNuestro enfoque combina creatividad, análisis de datos y conocimiento del comportamiento del usuario. Adaptamos cada publicación al tono y personalidad de tu marca, garantizando consistencia y relevancia en todos los canales.\n\nCon Bugatti – Gestión de Redes Sociales, tu marca se mantiene activa, relevante y cercana a su audiencia, generando relaciones auténticas y duraderas."
    },
    {
      icono: <LineChart className="w-10 h-10 text-[var(--accent-magenta)]" />,
      titulo: "Análisis y optimización: Jeep",
      texto: "Como un Jeep, nos adaptamos a cualquier terreno digital, supervisando y ajustando cada acción para asegurar que tu estrategia funcione en cualquier condición. Analizamos métricas de campañas, rendimiento de contenido y resultados generales para mejorar continuamente tus acciones de marketing.\n\nNuestro enfoque estratégico permite identificar oportunidades de mejora y optimizar recursos, asegurando que cada inversión genere un retorno máximo. Entregamos reportes claros y detallados para que tengas control y visibilidad sobre tus resultados.\n\nAdemás, aplicamos estrategias de optimización en tiempo real, ajustando anuncios, publicaciones y contenidos para garantizar que la ejecución sea siempre la más eficiente. Esto asegura que tu marca avance con fuerza y mantenga un rendimiento estable.\n\nCon Jeep – Análisis y Optimización, tu estrategia digital es flexible, efectiva y resistente, lista para superar cualquier desafío y mantener tu marca en la delantera del mercado."
    }
  ];

  return (
    <main className="min-h-screen bg-mesh pt-32 pb-24 text-[var(--text-main)] relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-[var(--accent-purple)]/30 mb-6">
            <span className="text-[var(--accent-purple)] uppercase tracking-[0.2em] text-xs font-bold">Soluciones a Tu Medida</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-[var(--text-main)]">El Garaje De Innovación</h1>
          <p className="text-xl text-[var(--text-main)]/70 max-w-3xl mx-auto font-medium">
            Ingeniería de alto rendimiento diseñada para que tu marca tome la delantera.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-20">
           {soluciones.map((solucion, idx) => (
             <div key={idx} className="glass-panel p-10 rounded-3xl hover:border-[var(--accent-cyan)]/50 transition-all duration-300 shadow-xl group bg-white/40">
               <div className="mb-6 bg-white/50 w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm border border-white/60">
                 {solucion.icono}
               </div>
               <h3 className="text-3xl font-bold mb-6 text-[var(--text-main)] tracking-tight">{solucion.titulo}</h3>
               <div className="space-y-4">
                 {solucion.texto.split('\n\n').map((parrafo, i) => (
                   <p key={i} className="text-[var(--text-main)]/70 text-[15px] leading-relaxed text-justify font-medium">
                     {parrafo}
                   </p>
                 ))}
               </div>
             </div>
           ))}
        </div>

        {/* CTA al Pricing */}
        <div className="text-center glass-panel p-12 md:p-16 rounded-[2.5rem] max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-cyan)]/10 rounded-full blur-[80px] pointer-events-none" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--text-main)] relative z-10 tracking-tight">¿Necesitas un Plan Personalizado?</h2>
          <p className="mb-10 text-lg text-[var(--text-main)]/70 font-medium relative z-10 max-w-2xl mx-auto">
            Un plan diseñado pieza por pieza para tu marca, como un auto modificado a la medida de tu estilo y desempeño.
          </p>
          <Link href={`/${locale}/pricing`} className="bg-[var(--accent-dark)] text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 hover:shadow-xl hover:shadow-[var(--accent-dark)]/20 transition-all inline-flex items-center gap-3 relative z-10">
            Cotizar a Medida
          </Link>
        </div>

      </div>
    </main>
  );
}