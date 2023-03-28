import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
import 'react-native-url-polyfill/auto'

const supabaseUrl = "https://ourygbihughbvorjxqgr.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91cnlnYmlodWdoYnZvcmp4cWdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkzMzc5OTQsImV4cCI6MTk5NDkxMzk5NH0.48P3V_89ZFR9LyLzYSUcHA0edsuZ0N-x8VFOo1-kmdw"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})