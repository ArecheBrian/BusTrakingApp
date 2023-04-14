import { supabase } from "../../../lib/supabase"


export const updateSaldo = async (saldo,id) => {
    console.log(saldo, id)
    const { data, error } = await supabase
    .from('carteras')
    .update({ saldo: saldo})
      .match({ id: id })
    console.log(data)
}