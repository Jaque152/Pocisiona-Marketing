"use client";

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Mail, MapPin, Globe } from 'lucide-react';

export function Footer() {
  const locale = useLocale();
  const isEs = locale === 'es';

  const sections = {
    empresa: [
      { name: isEs ? "Nuestra Visión" : "Our Vision", href: `/${locale}/#nosotros` },
      { name: isEs ? "Metodología" : "Methodology", href: `/${locale}/#metodo` },
      { name: isEs ? "Soluciones" : "Solutions", href: `/${locale}/#soluciones` },
    ],
    legal: [
      { name: isEs ? "Aviso de Privacidad" : "Privacy Policy", href: `/${locale}/legal/privacy` },
      { name: isEs ? "Términos y condiciones" : "Terms and conditions", href: `/${locale}/legal/terms-conditions` },
      { name: isEs ? "Política de devoluciones y reembolsos" : "Refund Policy", href: `/${locale}/legal/cancellation` },
    ]
  };

  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Marca */}
          <div className="md:col-span-1">
            <Link href={`/${locale}`} className="text-2xl font-black tracking-tighter text-slate-900 mb-6 block">
              Posiciona <span className="text-indigo-600">Marketing</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              {isEs 
                ? "Más que consultores, somos socios estratégicos sumergidos en la realidad de tu negocio para impulsar resultados tangibles." 
                : "More than consultants, we are strategic partners immersed in your business reality to drive tangible results."}
            </p>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">{isEs ? "Explorar" : "Explore"}</h4>
            <ul className="space-y-4">
              {sections.empresa.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-500 hover:text-indigo-600 transition-colors text-sm font-medium">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Legal */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-4">
              {sections.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-500 hover:text-indigo-600 transition-colors text-sm font-medium">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Contacto (Basado en Docs) */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">{isEs ? "Contacto" : "Contact"}</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-indigo-600 shrink-0" />
                <span>CALLE RÍO GUADIANA NO.23 PISO 2, COL. RENACIMIENTO, CDMX. C.P. 06500</span> 
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-600 shrink-0" />
                <span>contacto@posicionamkt.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Posiciona Marketing
          </p>
        </div>
      </div>
    </footer>
  );
}