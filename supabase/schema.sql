-- Create enum types for better data integrity (optional, but good practice)
-- CREATE TYPE order_status AS ENUM ('new', 'accepted', 'preparing', 'in_delivery', 'completed', 'cancelled');
-- CREATE TYPE delivery_method AS ENUM ('delivery', 'pickup');

-- Orders Table
CREATE TABLE public.orders (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    status TEXT DEFAULT 'new' NOT NULL, -- using text to be flexible
    delivery_method TEXT NOT NULL,
    payment_method TEXT NOT NULL,

    -- Customer Info
    customer_name TEXT NOT NULL,
    customer_phone TEXT NOT NULL,
    customer_email TEXT,

    -- Delivery Info
    delivery_address TEXT,
    delivery_postal_code TEXT,
    delivery_city TEXT,

    notes TEXT,

    -- Financials
    total_amount NUMERIC(10, 2) NOT NULL, -- Total including delivery
    delivery_cost NUMERIC(10, 2) DEFAULT 0 NOT NULL,
    items_total NUMERIC(10, 2) NOT NULL -- Total of items only
);

-- Order Items Table
CREATE TABLE public.order_items (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE NOT NULL,
    menu_item_id TEXT NOT NULL, -- ID from our code (e.g., 'd1')
    name TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    price_per_unit NUMERIC(10, 2) NOT NULL,
    total_price NUMERIC(10, 2) NOT NULL -- quantity * price_per_unit
);

-- Row Level Security (RLS)
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;

-- Policies
-- 1. Allow anonymous users (everyone) to CREATE orders
CREATE POLICY "Enable insert for everyone" ON public.orders
    FOR INSERT
    TO public
    WITH CHECK (true);

-- 2. Allow anonymous users to CREATE order items
CREATE POLICY "Enable insert for everyone" ON public.order_items
    FOR INSERT
    TO public
    WITH CHECK (true);

-- 3. Restrict SELECT/UPDATE/DELETE to authenticated staff (or nobody for now if no auth setup)
-- Ideally, you would have an admin role. For now, we leave it closed to public reads to ensure privacy.
-- Only someone with the service_role key (server-side) or logged in admin can read.

-- If you want to allow reading the order back to the user immediately after creation,
-- you might need more complex policies or just rely on the API response.
-- For "security" requested by user, we default to: Public can Write, only Admin can Read.
