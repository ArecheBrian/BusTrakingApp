import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet , View, Text , SafeAreaView , TouchableOpacity} from 'react-native';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton/CustomButton';
import { HomeScreen } from './HomeScreen';


export const SignInScreen =()=> {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSignInPressed = () => {
        console.warn("Sign in");
    }

    const onForgotPasswordPressed = () => {
      console.warn("onForgotPasswordPressed");
  }

    const onSignInFacebook = () => {
      console.warn("onSignInFacebook");
  }

  const onSignInGoogle = () => {
    console.warn("onSignInGoogle");
  }

  const onSignUpPress = () => {
    console.warn("onSignUpPress");
  }

    const navigation = useNavigation();
  return (
   
   <View style={styles.container}>

        <View>

        <Text style={{fontSize: 37, fontWeight: 'bold' , marginTop: "5%" }}>Sign In</Text>

        </View>

      <View style ={styles.root}>

      <CustomInput placeholder="Username" value={username} setvalue={setUsername}/>
      <CustomInput placeholder="Password" value={password} setvalue={setPassword} secureTextEntry/>

      <CustomButton text="Sign In" onPress={()=> navigation.navigate("Home")} />

      <CustomButton text="Forgot Password?" onPress={()=> navigation.navigate("Home")} type="TERTIARY" />

      <CustomButton text="Sign In with Facebook" bgColor ="#E7EAF4" fgColor= "#4765A9" />
      <CustomButton text="Sign In with Google" bgColor ="#FAE9EA" fgColor= "#DD4D44" />
      <CustomButton text="Sign In with Apple"  bgColor ="#e3e3e3" fgColor= "#363636" />
      <CustomButton text="Dont have an account? create one" type="TERTIARY" onPress={()=> navigation.navigate("Register")} />
        
      </View> 

      <StatusBar style="auto" />
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    alignItems: "center",
  },
  root: {

    padding: 10,
    marginTop: "10%",
    width: "100%",
    borderRadius: 10

  }


});
