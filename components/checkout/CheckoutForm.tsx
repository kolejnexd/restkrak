"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { orderSchema, OrderFormData } from '../../lib/validators';
import { useCart } from '../../context/CartContext';
import { Loader2, AlertCircle } from 'lucide-react';

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

  // Simple delivery cost calc for UI display (real logic is on server)
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
          })), // Send only IDs and quantity for security
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-bold border-b pb-2">Dane kontaktowe</h3>

        <div>
          <label className="block text-sm font-medium mb-1">Imię i nazwisko</label>
          <input
            {...register('customer.fullName')}
            className="w-full p-2 border border-borderSoft rounded bg-surface"
            placeholder="Jan Kowalski"
          />
          {errors.customer?.fullName && (
            <p className="text-primaryRed text-xs mt-1">{errors.customer.fullName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Telefon</label>
          <input
            {...register('customer.phoneNumber')}
            className="w-full p-2 border border-borderSoft rounded bg-surface"
            placeholder="123 456 789"
          />
          {errors.customer?.phoneNumber && (
            <p className="text-primaryRed text-xs mt-1">{errors.customer.phoneNumber.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email (opcjonalnie)</label>
          <input
            {...register('customer.email')}
            className="w-full p-2 border border-borderSoft rounded bg-surface"
            placeholder="jan@example.com"
          />
          {errors.customer?.email && (
            <p className="text-primaryRed text-xs mt-1">{errors.customer.email.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold border-b pb-2">Dostawa</h3>

        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="delivery"
              {...register('delivery.method')}
              className="text-primaryRed focus:ring-primaryRed"
            />
            <span>Dostawa</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="pickup"
              {...register('delivery.method')}
              className="text-primaryRed focus:ring-primaryRed"
            />
            <span>Odbiór osobisty</span>
          </label>
        </div>

        {deliveryMethod === 'delivery' && (
          <div className="space-y-3 pl-4 border-l-2 border-borderSoft">
            <div>
              <label className="block text-sm font-medium mb-1">Ulica i numer</label>
              <input
                {...register('delivery.address')}
                className="w-full p-2 border border-borderSoft rounded bg-surface"
                placeholder="Długa 15/4"
              />
              {errors.delivery?.address && (
                <p className="text-primaryRed text-xs mt-1">{errors.delivery.address.message}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Kod pocztowy</label>
                <input
                  {...register('delivery.postalCode')}
                  className="w-full p-2 border border-borderSoft rounded bg-surface"
                  placeholder="31-000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Miasto</label>
                <input
                  {...register('delivery.city')}
                  className="w-full p-2 border border-borderSoft rounded bg-surface"
                />
              </div>
            </div>
            {(errors.delivery?.postalCode || errors.delivery?.city) && (
               <p className="text-primaryRed text-xs mt-1">Kod pocztowy i miasto są wymagane</p>
            )}
          </div>
        )}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold border-b pb-2">Płatność (przy odbiorze)</h3>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="cash"
              {...register('paymentMethod')}
              className="text-primaryRed focus:ring-primaryRed"
            />
            <span>Gotówka</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="card_on_delivery"
              {...register('paymentMethod')}
              className="text-primaryRed focus:ring-primaryRed"
            />
            <span>Karta</span>
          </label>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold border-b pb-2">Uwagi</h3>
        <textarea
           {...register('customer.notes')}
           className="w-full p-2 border border-borderSoft rounded bg-surface h-20"
           placeholder="Np. kod do domofonu, bez cebuli..."
        />
      </div>

      {error && (
        <div className="p-3 bg-red-100 border border-red-300 text-red-800 rounded flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            <span>{error}</span>
        </div>
      )}

      <div className="border-t pt-4 mt-6">
        <div className="flex justify-between mb-2">
            <span>Wartość koszyka:</span>
            <span>{cartTotal.toFixed(2)} zł</span>
        </div>
        <div className="flex justify-between mb-2">
            <span>Dostawa:</span>
            <span>{deliveryCost > 0 ? `${deliveryCost.toFixed(2)} zł` : '0.00 zł'}</span>
        </div>
        <div className="flex justify-between text-xl font-bold mt-2">
            <span>Do zapłaty:</span>
            <span>{total.toFixed(2)} zł</span>
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 py-3 px-4 border border-borderStrong rounded text-ink hover:bg-altBg transition-colors"
          disabled={isSubmitting}
        >
          Wróć
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 py-3 px-4 bg-primaryRed text-white rounded font-bold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
        >
          {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Zamawiam'}
        </button>
      </div>
    </form>
  );
};
