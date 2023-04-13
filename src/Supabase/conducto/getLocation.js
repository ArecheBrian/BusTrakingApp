import { supabase } from "../../../lib/supabase";

export const updateTable = async (busS) => {
    const { data, error } = await supabase
    .from('bus')
    .update({ coordenadas: busS})
      .match({ id: 2 })
  }