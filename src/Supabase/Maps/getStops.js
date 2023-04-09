import { supabase } from "../../../lib/supabase";

export async function getStops() {
    try {  
      let { data, error} = await supabase.from("stops").select("*");
      if (data) return data;
    } catch (err) {
      console.log(err.message);
    }
}
  
