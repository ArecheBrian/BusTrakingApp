import { LgButtom, LogInbody, LogInHeader } from "./StandardLogInComponents"
import { Input, Box ,VStack, Link, FormControl, Image, HStack, Text, Pressable, Heading, Button } from "native-base"
import { IconsImg } from "../../Assets/icons"
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSession } from "../../Redux/Features/UserSlice";

export const SignIn = ()=> {
    return(
  
        <Box flex={1} bg={"yellow.400"}>
            <LogInHeader 
                TitleH={"Sign In"} 
                TextC={"Welcome back, Parna. We missed you"}
                OtherR={["Register"]}
            />
            <LogInbody Form={<SignInForm/>} Social={<SignInSocialM/>} btnName={"Sign In"}/>
        </Box> 
    )
}

const SignInForm = () => {
    const dispatch = useDispatch()
    return (
        <VStack flex={2} space={10} w={"full"} justifyContent={"center"}>
            <Input onChangeText={value=> setEmail(value)} placeholder="Email" fontSize={"lg"} p={4} variant="rounded" bg={"coolGray.200"} borderColor={"muted.200"}/>
            <FormControl>
                <Input onChangeText={value=> setPassword(value)} placeholder="Password" fontSize={"lg"} p={4} variant="rounded" bg={"coolGray.200"} borderColor={"muted.200"}/>
                <Link _text={{
                    fontSize: "md",
                    fontWeight: "500",
                    color: 'gray.400',
                }} alignSelf="flex-end" mt="1" mr="3">
                    Forget Password
                </Link>
            </FormControl>
            <Button onPress={()=> dispatch(userSession())} alignSelf={"center"} mt={4} w={"56"} h={"12"} borderRadius={25} bg={"gray.800"}><Heading color={"white"} size={"md"}>Sign Up</Heading></Button>
        </VStack>
    )
}

const SignInSocialM = () => {
    return (
        <VStack flex={2} space={8} justifyContent={"center"} w={"full"} alignItems={"center"}>
            <Pressable shadow={"3"} w={"72"} bg={"white"} borderRadius={30}>
                <HStack p={3} alignItems={"center"} justifyContent={"space-around"}>
                    <Image source={IconsImg.Google} size={8} alt={"GoogleIcon"}/>
                    <HStack space={3} alignItems={"center"}>
                        <Text fontWeight={"bold"} fontSize={18}>Sign in with google</Text>
                        <AntDesign name="arrowright" size={24} color="black" />
                    </HStack>
                </HStack>
            </Pressable>
            <Pressable shadow={"3"} bg={"white"} borderRadius={30}>
                <HStack p={3} w={"72"} alignItems={"center"} justifyContent={"space-around"}>
                    <Image source={IconsImg.Facebook} size={8} alt={"GoogleIcon"}/>
                    <HStack space={3} alignItems={"center"}>
                        <Text fontWeight={"bold"} fontSize={18}>Sign in with Facebook</Text>
                        <AntDesign name="arrowright" size={24} color="black" />
                    </HStack>
                </HStack>
            </Pressable>
        </VStack>
    )
}