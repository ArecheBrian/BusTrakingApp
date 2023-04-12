import { supabase } from "../../../lib/supabase";

export async function getProfile(num) {
    try {  
      let { data, error} = await supabase.from("profiles").select("*").eq("id", num);
      if (data) return data;
    } catch (err) {
      console.log(err.message);
    }
}
  
