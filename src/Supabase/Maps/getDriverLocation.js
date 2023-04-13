import { supabase } from "../../../lib/supabase";

export const getDriverLocation =async()=>{
  const bus = supabase.channel('custom-all-channel')
  .on(
    'postgres_changes',
    { event: '*', schema: 'public', table: 'bus' },
    (payload) => {
       const driverL = payload.new.coordenadas
       return driverL
    }
  )
  .subscribe()
}