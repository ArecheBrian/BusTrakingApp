import { Alert } from "react-native";
import { supabase } from "../../../lib/supabase";

export async function signUpWithEmail({userEmail,userPassword,options}) {
        const { data,error } = await supabase.auth.signUp({
            email: userEmail,
            password: userPassword,
            options: options 
        })
        if(error){Alert.alert(error.message)}
        else { Alert.alert('Success', 'User created successfully')}
  }