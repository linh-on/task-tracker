import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://schmwdedperhjhjygwjz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjaG13ZGVkcGVyaGpoanlnd2p6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI0NTI3NjIsImV4cCI6MjAzODAyODc2Mn0.vr1hutnIxj2TPUc_gsrsRSJC5eZdZqQR9y7LbDnyWHg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
