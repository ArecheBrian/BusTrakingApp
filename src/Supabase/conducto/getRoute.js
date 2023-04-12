import { supabase } from "../../../lib/supabase";

export async function getDRoutes(id) {
    try {  
      let { data, error} = await supabase.from("rutas").select("*").eq("id", id);
      if (data) return data;
    } catch (err) {
      console.log(err.message);
    }
}
  