import { Alert } from "native-base"
import { supabase } from "../../../lib/supabase"

export async function signInWithEmail() {
  try {
    const { data,error } = await supabase.auth.signInWithPassword({
      email: "cedehev670@necktai.com",
      password: "admin123",
    })
    return data
  } catch(error){
    Alert.alert(error)
  } 
}