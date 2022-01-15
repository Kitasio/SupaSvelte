import { createClient } from '@supabase/supabase-js';

const url = 'https://wbndlzukwejbebtajlsi.supabase.co'
const anon = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyMjU2NTMxLCJleHAiOjE5NTc4MzI1MzF9.hMA0VuTHlQjncIZNYrHEv2js5lpeiC5HARoUcbt1_fI'

// Create a single supabase client for interacting with your database
export const supabase = createClient(url, anon);
