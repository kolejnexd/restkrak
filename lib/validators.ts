import { z } from 'zod';

export const phoneRegex = /^(?:\+48)?\s?\d{3}\s?\d{3}\s?\d{3}$/;

export const orderSchema = z.object({
  customer: z.object({
    fullName: z.string().min(3, "Imię i nazwisko jest wymagane"),
    phoneNumber: z.string().regex(phoneRegex, "Podaj poprawny numer telefonu (np. 123 456 789)"),
    email: z.string().email("Podaj poprawny adres email").optional().or(z.literal('')),
    notes: z.string().max(500, "Uwagi mogą mieć max 500 znaków").optional(),
  }),
  delivery: z.object({
    method: z.enum(['delivery', 'pickup']),
    address: z.string().optional(),
    postalCode: z.string().optional(),
    city: z.string().optional(),
  }).refine((data) => {
    if (data.method === 'delivery') {
      return !!data.address && !!data.postalCode && !!data.city;
    }
    return true;
  }, {
    message: "Adres, kod pocztowy i miasto są wymagane przy dostawie",
    path: ["address"], // highlight address field
  }),
  paymentMethod: z.enum(['cash', 'card_on_delivery']),
});

export type OrderFormData = z.infer<typeof orderSchema>;
