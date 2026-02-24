import { z } from 'zod';
import type { TFunction } from 'i18next';

export function getContactFormSchema(t: TFunction) {
  return z.object({
    name: z
      .string()
      .min(2, t('validation.nameMin'))
      .max(100, t('validation.nameMax')),
    email: z.string().email(t('validation.emailInvalid')),
    message: z
      .string()
      .min(10, t('validation.messageMin'))
      .max(2000, t('validation.messageMax')),
  });
}

export type ContactFormData = z.infer<ReturnType<typeof getContactFormSchema>>;
