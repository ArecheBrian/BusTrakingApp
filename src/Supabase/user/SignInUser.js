import { Alert } from "native-base"
import { supabase } from "../../../lib/supabase"

export async function signInWithEmail({email,password}) {
    const { data,error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    if (data) return data
    if (error) Alert.alert(error)
}

// giseje1114@momoshe.com
// admin123