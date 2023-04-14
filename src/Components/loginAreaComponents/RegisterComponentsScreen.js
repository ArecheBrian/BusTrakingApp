import { LgButtom, LogInbody, LogInHeader } from "./StandardLogInComponents"
import { KeyboardAvoidingView, Pressable, VStack, Input, HStack, Image, Text, Heading, Button, Box } from "native-base"
import { IconsImg } from "../../Assets/icons"
import { useState } from "react";
import { signUpWithEmail } from "../../Supabase/user/RegisterUser";

export const Register = ()=> {
    return(
        <KeyboardAvoidingView flex={1} bg={"blueGray.900"}>
            <LogInHeader 
                TitleH={"Register"} 
                TextC={"create new User"}
                OtherR={["Sign In", "Signin"]}
            />
            <LogInbody Form={<RegisterForm/>} Social={<RegisterSocialM/>}/>
        </KeyboardAvoidingView>
    )
}

const RegisterForm = () => {

    const [userEmail, setEmail] = useState('')
    const [userPassword, setPassword] = useState('')
    const [full_name, setFull_name] = useState('')
    return (
        <VStack flex={4} justifyContent={"space-evenly"} w={"full"}>
            <Input onChangeText={value => setFull_name(value)} placeholder="Full Name" fontSize={"lg"} p={4} variant="rounded" bg={"coolGray.200"} borderColor={"muted.200"}/>
            <Input onChangeText={value => setEmail(value)} placeholder="Email" fontSize={"lg"} p={4} variant="rounded" bg={"coolGray.200"} borderColor={"muted.200"}/>
            <Input type="password" onChangeText={value => setPassword(value)} placeholder="Password" fontSize={"lg"} p={4} variant="rounded" bg={"coolGray.200"} borderColor={"muted.200"}/>
            <Button onPress={()=> signUpWithEmail({userEmail, userPassword, options: {data: {full_name}}})} alignSelf={"center"} mt={4} w={"56"} h={"12"} borderRadius={25} bg={"gray.800"}><Heading color={"white"} size={"md"}>Sign Up</Heading></Button>
        </VStack>
    )
}

const RegisterSocialM = () => {
    return (
        <VStack w={"full"} flex={2} alignItems={"center"} justifyContent={"space-evenly"} pt={4}>
            <Heading size={"md"}>Or, Sign Up with</Heading>
            <HStack space={12}>
                <Button p={3} bg={"white"} shadow={3} borderRadius={32}>
                    <Image source={IconsImg.Google} size={"10"} alt={"Facebook icon"}/>
                </Button>
                <Button p={3} bg={"white"} shadow={3} borderRadius={32}>
                    <Image source={IconsImg.Facebook} size={"10"} alt={"Facebook icon"}/>
                </Button>
            </HStack>
        </VStack>
    )
}