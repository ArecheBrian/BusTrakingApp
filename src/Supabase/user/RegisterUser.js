import { Alert } from "native-base";
import { supabase } from "../../../lib/supabase";

export async function signUpWithEmail({userEmail,userPassword}) {
    try{
        const { data,error } = await supabase.auth.signUp({
            email: userEmail,
            password: userPassword,
        })
    }catch(error){
        Alert.alert(error.message)
    }
  }