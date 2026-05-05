-- ==========================================
-- 1. CREACIÓN DE TABLAS AISLADAS (CLICBLAZE)
-- ==========================================

-- Tabla de caché de traducciones exclusiva
CREATE TABLE IF NOT EXISTS cb_translations (
    id SERIAL PRIMARY KEY,
    key_text TEXT NOT NULL,
    lang TEXT NOT NULL,
    translated_text TEXT NOT NULL,
    UNIQUE(key_text, lang)
);

-- Tabla de Categorías (opcional, pero buena práctica)
CREATE TABLE IF NOT EXISTS cb_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL
);

-- Tabla de Planes/Servicios
CREATE TABLE IF NOT EXISTS cb_plans (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL,
    is_active BOOLEAN DEFAULT true,
    features JSONB DEFAULT '[]'::jsonb,
    category_id UUID REFERENCES cb_categories(id)
);

-- Tabla de Órdenes (Checkout)
CREATE TABLE IF NOT EXISTS cb_orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre TEXT NOT NULL,
    apellidos TEXT NOT NULL,
    correo_electronico TEXT NOT NULL,
    telefono TEXT,
    direccion_calle TEXT,
    localidad_ciudad TEXT,
    region_estado TEXT,
    codigo_postal TEXT,
    pais_region TEXT,
    subtotal NUMERIC(10, 2),
    impuesto NUMERIC(10, 2),
    total_estimado NUMERIC(10, 2),
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Tabla de Detalles de Orden (Items del carrito)
CREATE TABLE IF NOT EXISTS cb_order_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID REFERENCES cb_orders(id) ON DELETE CASCADE,
    plan_id UUID REFERENCES cb_plans(id),
    quantity INT NOT NULL,
    custom_price NUMERIC(10, 2),
    quote_id TEXT
);

-- ==========================================
-- 2. INSERCIÓN DEL CATÁLOGO DE SERVICIOS
-- ==========================================

INSERT INTO cb_plans (title, description, price, is_active, features) VALUES
('Fotografía Profesional', 'Realizamos sesiones fotográficas de productos y contenido corporativo para mejorar la imagen de tu marca.', 6781.00, true, '[]'::jsonb),
('Gestión De E-Commerce', 'Administramos y optimizamos tu tienda en línea para mejorar la experiencia del usuario y aumentar las ventas.', 20627.00, true, '[]'::jsonb),
('Desarrollo Web Y Landing Pages', 'Creamos sitios web y páginas de aterrizaje optimizadas para convertir visitantes en clientes.', 22346.00, true, '[]'::jsonb),
('Análisis De Métricas Y Reportes', 'Realizamos seguimiento y análisis de tus campañas para optimizar resultados y tomar decisiones informadas.', 521.00, true, '[]'::jsonb),
('Community Management', 'Administramos tus redes sociales, creando contenido relevante y gestionando la interacción con tu comunidad.', 11494.00, true, '[]'::jsonb),
('Publicidad En Redes Sociales', 'Creamos y gestionamos anuncios en plataformas como Facebook, Instagram y TikTok para aumentar tu alcance y engagement.', 4023.00, true, '[]'::jsonb),
('Campañas SEM (Google Ads)', 'Gestionamos campañas de anuncios en Google para atraer tráfico cualificado y generar conversiones inmediatas.', 3628.00, true, '[]'::jsonb),
('Marketing De Influencers', 'Gestionamos campañas con influencers que amplifican tu mensaje y llegan a audiencias específicas de manera auténtica.', 17435.00, true, '[]'::jsonb),
('SEO (Posicionamiento En Buscadores)', 'Optimizamos tu sitio web para mejorar su visibilidad en los motores de búsqueda, atrayendo tráfico orgánico cualificado.', 8652.00, true, '[]'::jsonb),
('Email Marketing', 'Diseñamos y gestionamos campañas de correo electrónico que fidelizan a tus clientes y aumentan tus conversiones.', 200.00, true, '[]'::jsonb),
('Redacción Publicitaria (Copywriting)', 'Elaboramos textos persuasivos que comunican tu mensaje de forma clara y atractiva, generando una respuesta del público.', 3447.00, true, '[]'::jsonb),
('Producción Audiovisual', 'Creamos videos y spots publicitarios que capturan la atención y transmiten tu mensaje de manera impactante.', 36650.00, true, '[]'::jsonb),
('Producción De Materiales Impresos', 'Diseñamos y producimos flyers, carteles y empaques que comunican tu mensaje de forma efectiva y profesional.', 1570.00, true, '[]'::jsonb),
('Diseño De Identidad Visual', 'Creamos logotipos, paletas de colores y tipografías que representan tu marca de manera coherente y atractiva.', 25245.00, true, '[]'::jsonb),
('Creación De Conceptos Creativos', 'Desarrollamos ideas innovadoras que reflejan la esencia de tu marca, creando una conexión emocional con tu audiencia.', 17820.00, true, '[]'::jsonb),
('Planificación De Medios Integrada', 'Elaboramos planes de medios que combinan canales tradicionales y digitales, optimizando tu inversión publicitaria para alcanzar a tu público objetivo.', 8563.00, true, '[]'::jsonb),
('Análisis De Competencia Y Mercado', 'Realizamos estudios profundos de tu industria y competidores para identificar oportunidades y amenazas, permitiéndote posicionarte de manera efectiva.', 12420.00, true, '[]'::jsonb),
('Impulso Estratégico', 'Diseñamos estrategias personalizadas que alinean tus objetivos comerciales con las tendencias del mercado digital, asegurando un crecimiento sostenible.', 20140.00, true, '[]'::jsonb);