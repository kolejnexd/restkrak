import { NextResponse } from 'next/server';
import { z } from 'zod';
import { orderSchema } from '@/lib/validators';
import { supabase } from '@/lib/supabase';
import { MENU_ITEMS } from '@/lib/menu-data';

// Helper to parse price string to number
const parsePrice = (priceStr?: string): number => {
  if (!priceStr) return 0;
  const clean = priceStr.replace(/[^\d.,]/g, '').replace(',', '.');
  return parseFloat(clean) || 0;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Validate incoming data structure
    // We extend the schema to include items validation which was not in the frontend form schema
    const fullSchema = orderSchema.extend({
      items: z.array(z.object({
        id: z.string(),
        quantity: z.number().min(1),
      })).min(1, "Koszyk nie może być pusty"),
    });

    const result = fullSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Błąd walidacji danych', details: result.error.issues },
        { status: 400 }
      );
    }

    const { customer, delivery, paymentMethod, items } = result.data;

    // 2. Recalculate totals server-side (Security)
    let itemsTotal = 0;
    const orderItemsData = [];

    for (const itemRequest of items) {
      // Find item in source of truth
      // Note: MENU_ITEMS ids are numbers, request ids are strings
      const menuItem = MENU_ITEMS.find(i => i.id.toString() === itemRequest.id);

      if (!menuItem) {
        // If item doesn't exist (or was removed), we skip or error.
        // For robustness, we can skip, but better to error if order is invalid.
        return NextResponse.json(
          { error: `Produkt o ID ${itemRequest.id} nie istnieje` },
          { status: 400 }
        );
      }

      const price = parsePrice(menuItem.price);
      const lineTotal = price * itemRequest.quantity;
      itemsTotal += lineTotal;

      orderItemsData.push({
        menu_item_id: menuItem.id.toString(),
        name: menuItem.name,
        quantity: itemRequest.quantity,
        price_per_unit: price,
        total_price: lineTotal,
      });
    }

    // 3. Calculate Delivery Cost
    let deliveryCost = 0;
    if (delivery.method === 'delivery') {
      // Free delivery over 120 PLN
      if (itemsTotal < 120) {
        deliveryCost = 15;
      }
    }

    const totalAmount = itemsTotal + deliveryCost;

    // 4. Save to Supabase
    // Insert Order
    const { data: orderData, error: orderError } = await supabase
      .from('orders')
      .insert({
        status: 'new',
        delivery_method: delivery.method,
        payment_method: paymentMethod,
        customer_name: customer.fullName,
        customer_phone: customer.phoneNumber,
        customer_email: customer.email || null,
        delivery_address: delivery.method === 'delivery' ? delivery.address : null,
        delivery_postal_code: delivery.method === 'delivery' ? delivery.postalCode : null,
        delivery_city: delivery.method === 'delivery' ? delivery.city : null,
        notes: customer.notes || null,
        items_total: itemsTotal,
        delivery_cost: deliveryCost,
        total_amount: totalAmount,
      })
      .select()
      .single();

    if (orderError) {
      console.error('Supabase Order Error:', orderError);
      return NextResponse.json(
        { error: 'Błąd podczas zapisywania zamówienia' },
        { status: 500 }
      );
    }

    const orderId = orderData.id;

    // Insert Order Items
    const itemsToInsert = orderItemsData.map(item => ({
      order_id: orderId,
      ...item
    }));

    const { error: itemsError } = await supabase
      .from('order_items')
      .insert(itemsToInsert);

    if (itemsError) {
      console.error('Supabase Items Error:', itemsError);
      // Ideally we would rollback the order here, but Supabase JS doesn't support transactions easily without RPC.
      // For this scale, we log error. Admin can see empty order.
      return NextResponse.json(
        { error: 'Błąd podczas zapisywania produktów zamówienia' },
        { status: 500 }
      );
    }

    // 5. Mock Notification API
    // Here we would call the external API for the restaurant system
    console.log(`[NOTIFICATION] New Order ${orderId} for ${totalAmount} PLN sent to restaurant system.`);

    /*
    // Example implementation:
    await fetch('https://api.restaurant-pos.com/orders', {
        method: 'POST',
        body: JSON.stringify({ orderId, ... })
    });
    */

    return NextResponse.json({
      success: true,
      orderId: orderId,
      message: 'Zamówienie przyjęte'
    });

  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json(
      { error: 'Wystąpił błąd wewnętrzny serwera' },
      { status: 500 }
    );
  }
}
