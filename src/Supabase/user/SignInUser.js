import { Alert } from "native-base"
import { supabase } from "../../../lib/supabase"

export async function signInWithEmail() {
    const { data,error } = await supabase.auth.signInWithPassword({
      email: "giseje1114@momoshe.com",
      password: "admin123",
    })
    if (data) return data
    if (error) Alert.alert(error)
}