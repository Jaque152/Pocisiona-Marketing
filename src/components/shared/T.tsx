
import { getLocale } from 'next-intl/server';
import { getTranslation } from '@/lib/translator';

export async function T({ children }: { children: string }) {
  const locale = await getLocale(); 
  
  // Si es español o está vacío, renderizamos inmediatamente
  if (!children || locale === 'es') {
    return <>{children}</>;
  }

  // El servidor espera la traducción antes de armar el HTML
  const translatedText = await getTranslation(children, locale);

  return <>{translatedText}</>;
}