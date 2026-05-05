"use client";

import { useState } from "react";
import { useCart } from "@/hooks/use-cart";
import { Loader2, ShoppingBag } from "lucide-react";
import { useLocale } from "next-intl";

// 1. Tipamos explícitamente el planId
interface AddToCartButtonProps {
  planId: number;
}

export function AddToCartButton({ planId }: AddToCartButtonProps) {
  const locale = useLocale();
  // 2. Solo extraemos addToCart del contexto (el contexto ya maneja el refresh y el isOpen)
  const { addToCart } = useCart();
  
  // 3. Usamos un simple estado para el loading, ya que es una función asíncrona estándar
  const [isPending, setIsPending] = useState(false);

  const handleAdd = async () => {
    setIsPending(true);
    await addToCart(planId);
    setIsPending(false);
  };

  return (
    <button
      onClick={handleAdd}
      disabled={isPending}
      className="w-full relative overflow-hidden h-16 rounded-xl bg-gradient-to-r from-[var(--copper)] to-[var(--amber)] text-[var(--navy)] font-bold text-lg group flex items-center justify-center transition-transform active:scale-95 disabled:opacity-70"
    >
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      
      <span className="relative z-10 flex items-center gap-3 font-sans uppercase tracking-widest">
        {isPending ? (
          <Loader2 className="w-6 h-6 animate-spin" />
        ) : (
          <>
            <ShoppingBag className="w-6 h-6" />
            {locale === 'es' ? 'Añadir al carrito' : 'Add to strategy'}
          </>
        )}
      </span>
    </button>
  );
}