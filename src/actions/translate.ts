'use server';

import { getTranslation } from '@/lib/translator';

export async function translateDynamicText(text: string, locale: string) {
  return await getTranslation(text, locale);
}