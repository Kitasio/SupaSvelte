import { createClient } from '@supabase/supabase-js';
const anon = import.meta.env.VITE_SUPABASE_ANON
const url = import.meta.env.VITE_SUPABASE_URL

// Create a single supabase client for interacting with your database
export const supabase = createClient(url, anon);