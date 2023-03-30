import { supabase } from "../../../lib/supabase";

export async function getStops() {
    try {  
      let { data, error} = await supabase.from("bus_Stops").select("*");
      if (data) return data;
    } catch (err) {
      console.log(err.message);
    }
}
  
