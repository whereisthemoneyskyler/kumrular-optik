import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://api.kumrularoptik.com';
const supabaseAnonKey = 'sb_publishable_KJ1yjvFMtoTK_3IRbQqxVQ_vRj6tM4i';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
