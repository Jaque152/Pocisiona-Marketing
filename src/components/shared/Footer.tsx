"use client";

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Mail, MapPin, Phone } from 'lucide-react';

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

          {/* Columna 4: Contacto  */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">{isEs ? "Contacto" : "Contact"}</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-indigo-600 shrink-0" />
                <span>AVENIDA INSURGENTES SUR 933, INTERIOR 102 PISO 1, COLONIA NÁPOLES, ALCALDÍA BENITO JUÁREZ, C.P. 03810, CIUDAD DE MÉXICO</span> 
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-600 shrink-0" />
                <span>contacto@posicionamkt.com</span>
              </li>
              {/* Teléfono añadido */}
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-indigo-600 shrink-0" />
                <span>+52 1 55 9136 2019</span>
              </li>
            </ul>
          </div>
        </div>
        {/* Payment Icons */}
        <div className="flex gap-2">
          <div className="px-3 py-1.5 bg-white rounded flex items-center justify-center">
            <svg className="h-4" viewBox="0 0 780 500" fill="none"><rect width="780" height="500" rx="40" fill="white"/><path fill="#1434CB" d="M293.2 348.7l33.3-190.4h53.3l-33.3 190.4h-53.3zM500.8 163c-10.5-3.9-27-8.1-47.6-8.1-52.4 0-89.3 26.4-89.6 64.2-.3 28 26.5 43.6 46.7 52.9 20.7 9.5 27.7 15.6 27.6 24.1-.1 13-16.6 19-31.9 19-21.3 0-32.6-3-50.1-10.3l-6.9-3.1-7.5 43.8c12.4 5.4 35.5 10.1 59.4 10.4 55.7 0 91.9-26.1 92.3-66.5.2-22.2-14-39.1-44.6-53-18.6-9-30-15-29.9-24.1 0-8.1 9.6-16.7 30.5-16.7 17.4-.3 30 3.5 39.8 7.5l4.8 2.3 7.2-42.4h.8zM581.8 158.3h-41c-12.7 0-22.2 3.5-27.8 16.2l-78.8 178.2h55.7l11.1-29.1h68.1l6.5 29.1H624l-42.2-194.4zm-65.6 125.2c4.4-11.2 21.3-54.4 21.3-54.4-.3.5 4.4-11.4 7.1-18.7l3.6 16.9s10.2 46.6 12.4 56.2h-44.4z"/><path fill="#1434CB" d="M239.5 158.3L187.4 289l-5.5-26.8c-9.6-30.7-39.5-64-73-80.6l47.5 166.9h56l83.2-190.2h-56.1z"/><path fill="#F7B600" d="M146.9 158.3H61.3l-.6 3.5c66.4 16 110.3 54.7 128.5 101.2l-18.5-88.8c-3.2-12.1-12.5-15.5-23.8-15.9z"/></svg>
          </div>
          <div className="px-3 py-1.5 bg-white rounded flex items-center justify-center">
            <svg className="h-4" viewBox="0 0 152 100" fill="none"><rect width="152" height="100" rx="8" fill="white"/><circle cx="55" cy="50" r="30" fill="#EB001B"/><circle cx="97" cy="50" r="30" fill="#F79E1B"/><path d="M76 27.5C82.6 32.8 87 40.8 87 50C87 59.2 82.6 67.2 76 72.5C69.4 67.2 65 59.2 65 50C65 40.8 69.4 32.8 76 27.5Z" fill="#FF5F00"/></svg>
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