"use client";

import Image from 'next/image';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from "@/hooks/use-cart";
import { ShoppingBag, Menu, X } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const locale = useLocale();
  const pathname = usePathname();
  const isEs = locale === 'es';
  const { items, setIsOpen: openCart } = useCart();

  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { name: isEs ? "Punto de Partida" : "Start Line", href: `/${locale}` },
    { name: isEs ? "Nuestra Esencia" : "Our Essence", href: `/${locale}/about` },
    { name: isEs ? "Soluciones a Tu Medida" : "Custom Solutions", href: `/${locale}/soluciones` },
    { name: isEs ? "Fórmulas de Éxito" : "Success Formulas", href: `/${locale}/services` }, 
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className={`pointer-events-auto transition-all duration-500 rounded-full ${
            scrolled ? "glass-panel px-6 py-3 w-full max-w-5xl" : "bg-transparent px-4 py-2 w-full max-w-7xl"
          } flex items-center justify-between`}
        >
          {/* LOGO */}
          <Link href={`/${locale}`} className="flex items-center gap-2 group">
             <div className="relative w-8 h-8 overflow-hidden transition-transform duration-300 group-hover:rotate-12">
                <Image src="/logo.png" alt="Logo" fill className="object-contain" priority />
             </div>
             <span className="font-bold text-lg hidden sm:block tracking-tight text-[var(--text-main)]">
               NINJA<span className="text-[var(--accent-magenta)]">.</span>
             </span>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors duration-300 ${
                    isActive ? "text-[var(--accent-purple)]" : "text-[var(--text-main)]/70 hover:text-[var(--text-main)]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* ACTIONS (Cart & Contact) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => openCart(true)}
              className="relative p-2.5 rounded-full hover:bg-black/5 transition-colors text-[var(--text-main)]"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[var(--accent-magenta)] text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            
            {/* Botón de Contacto Distinto en el Menú */}
            <Link 
              href={`/${locale}/contact`}
              className="hidden md:block bg-[var(--accent-dark)] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:scale-105 hover:shadow-lg transition-all"
            >
              {isEs ? 'Hablemos' : 'Let\'s Talk'}
            </Link>

            {/* MOBILE MENU TOGGLE */}
            <button onClick={() => setMobileMenuOpen(true)} className="md:hidden p-2 text-[var(--text-main)]">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </motion.nav>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[100] glass-panel bg-white/90 flex flex-col items-center justify-center"
          >
            <button onClick={() => setMobileMenuOpen(false)} className="absolute top-8 right-8 p-2">
              <X className="w-8 h-8 text-[var(--text-main)]" />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-bold text-[var(--text-main)] hover:text-[var(--accent-magenta)] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href={`/${locale}/contact`}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 bg-[var(--accent-dark)] text-white px-8 py-4 rounded-full text-xl font-bold"
              >
                {isEs ? 'Contactar Ahora' : 'Contact Now'}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}