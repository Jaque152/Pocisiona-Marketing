"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Globe, ShoppingCart, Menu, X, PhoneCall } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';

export function Navigation() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const { setIsOpen, items } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isEs = locale === 'es';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLocale = (newLocale: string) => {
    if (!pathname) return;
    const segments = pathname.split('/');
    segments[1] = newLocale; 
    const currentHash = typeof window !== 'undefined' ? window.location.hash : '';
    router.push(`${segments.join('/')}${currentHash}`);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: isEs ? 'Nuestra Visión' : 'Our Vision', href: `/${locale}/#nosotros` },
    { name: isEs ? 'Soluciones' : 'Solutions', href: `/${locale}/#soluciones` },
    { name: isEs ? 'Metodología' : 'Methodology', href: `/${locale}/#metodo` },
    { name: isEs ? 'Programas' : 'Programs', href: `/${locale}/#programas` },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-2 shadow-sm' : 'bg-white/50 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        <Link href={`/${locale}`} className="text-2xl font-black tracking-tighter text-slate-900 group">
          Posiciona <span className="text-indigo-600 transition-colors group-hover:text-indigo-500">Marketing</span>
        </Link>

        {/* NAVEGACIÓN DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors uppercase tracking-widest">
              {link.name}
            </Link>
          ))}
          {/* BOTÓN DE CONTACTO */}
          <Link 
            href={`/${locale}/contact`} 
            className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-indigo-600 transition-all flex items-center gap-2"
          >
            <PhoneCall className="w-3 h-3" />
            {isEs ? 'Hablemos' : 'Let\'s Talk'}
          </Link>
        </div>

        <div className="flex items-center gap-3 md:gap-5">
          {/* TRADUCTOR */}
          <div className="hidden sm:flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
            <Globe className="w-4 h-4 text-slate-400 mx-1" />
            <button onClick={() => switchLocale('es')} className={`px-2 py-1 text-xs font-bold rounded-md transition-all ${locale === 'es' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400'}`}>ES</button>
            <button onClick={() => switchLocale('en')} className={`px-2 py-1 text-xs font-bold rounded-md transition-all ${locale === 'en' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400'}`}>EN</button>
          </div>

          <button onClick={() => setIsOpen(true)} className="relative p-2 text-slate-900 hover:text-indigo-600 transition-colors">
            <ShoppingCart className="w-6 h-6" />
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-indigo-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-md">
                {items.length}
              </span>
            )}
          </button>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl animate-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col p-6 gap-5">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-900 hover:text-indigo-600 transition-colors uppercase tracking-widest">
                {link.name}
              </Link>
            ))}
            <Link href={`/${locale}/contact`} onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-indigo-600 uppercase tracking-widest flex items-center gap-2">
              <PhoneCall className="w-5 h-5" /> {isEs ? 'Hablemos' : 'Let\'s Talk'}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}