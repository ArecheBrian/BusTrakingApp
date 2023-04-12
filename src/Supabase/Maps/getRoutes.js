import { supabase } from "../../../lib/supabase";

export async function getRoutes() {
    try {  
      let { data, error} = await supabase.from("rutas").select("*");
      if (data) return data;
    } catch (err) {
      console.log(err.message);
    }
}
  
