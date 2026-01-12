import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://ihlkxidqctvbrxbbkhzj.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlobGt4aWRxY3R2YnJ4YmJraHpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc5NDgwMTUsImV4cCI6MjA4MzUyNDAxNX0.TcGvwGn7gpZV3TFuv2zvkyUeqOdtuk3Cc0zF5FPaTe4';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
