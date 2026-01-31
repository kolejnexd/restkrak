import { createClient } from '@supabase/supabase-js';

// These environment variables will be needed.
// We provide placeholders to prevent build-time crashes if variables are missing.
// The app will not function correctly until these are set in .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
