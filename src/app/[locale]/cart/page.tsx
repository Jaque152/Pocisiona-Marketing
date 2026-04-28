"use client";

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { useCart } from '@/hooks/use-cart';
import { Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartItem } from '@/types';

export default function CartPage() {
  const { items, total, removeFromCart } = useCart();
  const locale = useLocale();

  const formatPrice = (price: number) => 
    new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(price);

  // PANTALLA DE CARRITO VACÍO
  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-background bg-grain pt-32 pb-24 flex items-center justify-center px-4 relative">
        <div className="text-center relative z-10 max-w-md mx-auto">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-10 h-10 text-muted-foreground" />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-foreground">Tu carrito está vacío</h1>
          <p className="text-muted-foreground mb-8">
            Parece que aún no has seleccionado ninguna estrategia para potenciar tu marca.
          </p>
          <Button asChild className="w-full bg-primary hover:opacity-90 text-primary-foreground h-14 rounded-lg font-bold">
            <Link href={`/${locale}/services`}>
              Explorar Servicios
            </Link>
          </Button>
        </div>
      </main>
    );
  }

  // PANTALLA CON ITEMS
  return (
    <main className="min-h-screen bg-background bg-grain pt-32 pb-24 text-foreground relative">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gradient">Tu Carrito</h1>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* LISTA DE ITEMS */}
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-card border border-border rounded-2xl shadow-lg overflow-hidden">
              {/* Encabezados (Solo visible en Desktop) */}
              <div className="hidden md:grid grid-cols-12 gap-4 p-6 border-b border-border text-sm font-bold text-muted-foreground uppercase tracking-wider">
                <div className="col-span-6">Servicio</div>
                <div className="col-span-2 text-center">Cantidad</div>
                <div className="col-span-3 text-right">Precio</div>
                <div className="col-span-1"></div>
              </div>

              {/* Items del Carrito */}
              <div className="divide-y divide-border">
                {items.map((item: CartItem) => {
                  const itemPrice = item.custom_price !== null 
                    ? Number(item.custom_price) 
                    : Number(item.plans_nc?.price || 0);

                  return (
                    <div key={item.id} className="p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                      
                      {/* Info del Plan */}
                      <div className="col-span-1 md:col-span-6">
                        <h3 className="font-bold text-lg text-foreground mb-1">
                          {item.plans_nc?.title || 'Estrategia Personalizada'}
                        </h3>
                        {item.quote_id && (
                          <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded font-mono">
                            Ref: {item.quote_id}
                          </span>
                        )}
                      </div>

                      {/* Cantidad */}
                      <div className="col-span-1 md:col-span-2 md:text-center text-muted-foreground">
                        <span className="md:hidden font-bold mr-2">Cantidad:</span> 
                        {item.quantity}
                      </div>

                      {/* Precio */}
                      <div className="col-span-1 md:col-span-3 md:text-right font-bold text-lg">
                        <span className="md:hidden font-bold text-muted-foreground font-normal mr-2">Precio:</span>
                        {formatPrice(itemPrice * item.quantity)}
                      </div>

                      {/* Botón Eliminar */}
                      <div className="col-span-1 md:col-span-1 flex md:justify-end mt-4 md:mt-0">
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors p-2 rounded-md hover:bg-destructive/10"
                          title="Eliminar del carrito"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RESUMEN DEL PEDIDO */}
          <div className="lg:col-span-4 bg-card p-8 border border-border rounded-2xl shadow-lg sticky top-32">
            <h2 className="text-xl font-bold mb-6 border-b border-border pb-4">Resumen del Pedido</h2>
            
            <div className="space-y-4 mb-6 font-sans">
              <div className="flex justify-between items-center text-muted-foreground">
                <span>Subtotal</span>
                <span className="text-foreground font-medium">{formatPrice(total / 1.16)}</span>
              </div>
              <div className="flex justify-between items-center text-muted-foreground">
                <span>Impuesto (16%)</span>
                <span className="text-foreground font-medium">{formatPrice(total - (total / 1.16))}</span>
              </div>
              <div className="border-t border-border pt-4 mt-4 flex justify-between items-center text-xl font-bold text-gradient">
                <span>Total Estimado</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
            
            <Button asChild
              className="w-full bg-primary hover:opacity-90 text-primary-foreground font-bold h-14 rounded-lg text-lg group transition-all p-0" >
              <Link href={`/${locale}/checkout`} className="flex items-center justify-center w-full h-full">
                Proceder al Pago <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <div className="mt-4 text-center">
              <Link href={`/${locale}/services`} className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4">
                Continuar explorando servicios
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}