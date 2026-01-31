"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { orderSchema, OrderFormData } from '../../lib/validators';
import { useCart } from '../../context/CartContext';
import { Loader2, AlertCircle, CreditCard, Banknote, Truck, Store } from 'lucide-react';
import { clsx } from 'clsx';

interface CheckoutFormProps {
  onSuccess: () => void;
  onCancel: () => void;
}

export const CheckoutForm = ({ onSuccess, onCancel }: CheckoutFormProps) => {
  const { items, cartTotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      delivery: {
        method: 'delivery',
        city: 'Kraków',
      },
      paymentMethod: 'cash',
    },
  });

  const deliveryMethod = watch('delivery.method');
  const paymentMethod = watch('paymentMethod');

  const deliveryCost = deliveryMethod === 'delivery' ? (cartTotal > 120 ? 0 : 15) : 0;
  const total = cartTotal + deliveryCost;

  const onSubmit = async (data: OrderFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          items: items.map(item => ({
            id: item.id,
            quantity: item.quantity,
          })),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Wystąpił błąd podczas składania zamówienia');
      }

      clearCart();
      onSuccess();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full p-3 border border-border-soft rounded-sm bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted/50";
  const labelClass = "block text-sm font-medium mb-1.5 text-ink";
  const sectionTitle = "text-lg font-serif font-bold text-ink border-b border-border-soft pb-2 mb-4";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">

      {/* Contact Info */}
      <div className="space-y-4">
        <h3 className={sectionTitle}>Dane kontaktowe</h3>

        <div>
          <label className={labelClass}>Imię i nazwisko</label>
          <input
            {...register('customer.fullName')}
            className={inputClass}
            placeholder="Jan Kowalski"
          />
          {errors.customer?.fullName && (
            <p className="text-primary text-xs mt-1 font-medium">{errors.customer.fullName.message}</p>
          )}
        </div>

        <div>
          <label className={labelClass}>Telefon</label>
          <input
            {...register('customer.phoneNumber')}
            className={inputClass}
            placeholder="123 456 789"
          />
          {errors.customer?.phoneNumber && (
            <p className="text-primary text-xs mt-1 font-medium">{errors.customer.phoneNumber.message}</p>
          )}
        </div>

        <div>
          <label className={labelClass}>Email (opcjonalnie)</label>
          <input
            {...register('customer.email')}
            className={inputClass}
            placeholder="jan@example.com"
          />
          {errors.customer?.email && (
            <p className="text-primary text-xs mt-1 font-medium">{errors.customer.email.message}</p>
          )}
        </div>
      </div>

      {/* Delivery Method */}
      <div className="space-y-4">
        <h3 className={sectionTitle}>Sposób odbioru</h3>

        <div className="grid grid-cols-2 gap-4">
          <label className={clsx(
            "cursor-pointer border rounded-lg p-4 flex flex-col items-center gap-2 transition-all hover:bg-background-alt",
            deliveryMethod === 'delivery' ? "border-primary bg-primary-soft/20 ring-1 ring-primary" : "border-border-soft bg-surface"
          )}>
            <input type="radio" value="delivery" {...register('delivery.method')} className="sr-only" />
            <Truck className={clsx("w-6 h-6", deliveryMethod === 'delivery' ? "text-primary" : "text-muted")} />
            <span className="font-medium text-sm">Dostawa</span>
          </label>

          <label className={clsx(
            "cursor-pointer border rounded-lg p-4 flex flex-col items-center gap-2 transition-all hover:bg-background-alt",
            deliveryMethod === 'pickup' ? "border-primary bg-primary-soft/20 ring-1 ring-primary" : "border-border-soft bg-surface"
          )}>
            <input type="radio" value="pickup" {...register('delivery.method')} className="sr-only" />
            <Store className={clsx("w-6 h-6", deliveryMethod === 'pickup' ? "text-primary" : "text-muted")} />
            <span className="font-medium text-sm">Odbiór osobisty</span>
          </label>
        </div>

        {deliveryMethod === 'delivery' && (
          <div className="space-y-3 pl-4 border-l-2 border-primary/20 animate-in slide-in-from-top-2">
            <div>
              <label className={labelClass}>Ulica i numer</label>
              <input
                {...register('delivery.address')}
                className={inputClass}
                placeholder="Długa 15/4"
              />
              {errors.delivery?.address && (
                <p className="text-primary text-xs mt-1 font-medium">{errors.delivery.address.message}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Kod pocztowy</label>
                <input
                  {...register('delivery.postalCode')}
                  className={inputClass}
                  placeholder="31-000"
                />
              </div>
              <div>
                <label className={labelClass}>Miasto</label>
                <input
                  {...register('delivery.city')}
                  className={inputClass}
                />
              </div>
            </div>
            {(errors.delivery?.postalCode || errors.delivery?.city) && (
               <p className="text-primary text-xs mt-1 font-medium">Kod pocztowy i miasto są wymagane</p>
            )}

            <div className="text-xs text-muted bg-background-alt p-2 rounded">
               {cartTotal > 120 ? "Darmowa dostawa!" : "Koszt dostawy: 15.00 zł (darmowa od 120 zł)"}
            </div>
          </div>
        )}
      </div>

      {/* Payment Method */}
      <div className="space-y-4">
        <h3 className={sectionTitle}>Płatność (przy odbiorze)</h3>
        <div className="grid grid-cols-2 gap-4">
          <label className={clsx(
            "cursor-pointer border rounded-lg p-4 flex flex-col items-center gap-2 transition-all hover:bg-background-alt",
            paymentMethod === 'cash' ? "border-primary bg-primary-soft/20 ring-1 ring-primary" : "border-border-soft bg-surface"
          )}>
            <input type="radio" value="cash" {...register('paymentMethod')} className="sr-only" />
            <Banknote className={clsx("w-6 h-6", paymentMethod === 'cash' ? "text-primary" : "text-muted")} />
            <span className="font-medium text-sm">Gotówka</span>
          </label>
          <label className={clsx(
            "cursor-pointer border rounded-lg p-4 flex flex-col items-center gap-2 transition-all hover:bg-background-alt",
            paymentMethod === 'card_on_delivery' ? "border-primary bg-primary-soft/20 ring-1 ring-primary" : "border-border-soft bg-surface"
          )}>
            <input type="radio" value="card_on_delivery" {...register('paymentMethod')} className="sr-only" />
            <CreditCard className={clsx("w-6 h-6", paymentMethod === 'card_on_delivery' ? "text-primary" : "text-muted")} />
            <span className="font-medium text-sm">Karta</span>
          </label>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className={sectionTitle}>Uwagi</h3>
        <textarea
           {...register('customer.notes')}
           className={inputClass}
           placeholder="Np. kod do domofonu, bez cebuli..."
           rows={3}
        />
      </div>

      {error && (
        <div className="p-4 bg-primary-soft/30 border border-primary/30 text-primary-hover rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <span className="text-sm font-medium">{error}</span>
        </div>
      )}

      <div className="bg-background-alt p-4 rounded-lg space-y-2">
        <div className="flex justify-between text-muted">
            <span>Wartość koszyka:</span>
            <span>{cartTotal.toFixed(2)} zł</span>
        </div>
        <div className="flex justify-between text-muted">
            <span>Dostawa:</span>
            <span>{deliveryCost > 0 ? `${deliveryCost.toFixed(2)} zł` : '0.00 zł'}</span>
        </div>
        <div className="border-t border-border-soft pt-2 mt-2 flex justify-between text-xl font-bold text-ink">
            <span>Do zapłaty:</span>
            <span>{total.toFixed(2)} zł</span>
        </div>
      </div>

      <div className="flex gap-4 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 py-3 px-4 border border-border-strong rounded-sm text-ink hover:bg-background-alt transition-colors font-medium"
          disabled={isSubmitting}
        >
          Wróć
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 py-3 px-4 bg-primary text-white rounded-sm font-bold hover:bg-primary-hover transition-colors flex items-center justify-center gap-2 shadow-lg"
        >
          {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Zamawiam'}
        </button>
      </div>
    </form>
  );
};
