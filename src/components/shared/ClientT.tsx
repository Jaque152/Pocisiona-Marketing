"use client";

import { useEffect, useState } from 'react';
import { useLocale } from 'next-intl';
import { translateDynamicText } from '@/actions/translate';

export function ClientT({ children }: { children: string | undefined | null }) {
  const locale = useLocale();
  const [translated, setTranslated] = useState(children || "");

  useEffect(() => {
    if (!children) return;
    
    // Si es español, lo mostramos directo
    if (locale === 'es') {
      setTranslated(children);
      return;
    }

    // Si es inglés, llamamos a la Server Action de forma invisible
    translateDynamicText(children, locale).then((result) => {
      setTranslated(result);
    });
  }, [children, locale]);

  // Se muestra el texto (si aún no traduce, muestra el original sin romper el diseño)
  return <>{translated}</>;
}