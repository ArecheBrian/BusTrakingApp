import { Box, Center, HStack, VStack, Text, Heading , Avatar , useSafeArea, ScrollView, FlatList} from "native-base"
import { MaterialCommunityIcons,  AntDesign , Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { WalletsIcons } from "./dtbTest";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";


const CreditCardSession = () => {
    const navigation = useNavigation()
    return (
        <Box h={"64"}>
            <HStack h={"20"} justifyContent={"space-between"} alignItems={"center"} px={8}>
                <Text  fontWeight={"medium"}  fontSize={22} color={"blueGray.700"} >Save Cards</Text>
                <Text onPress={()=> navigation.navigate("addcards")} fontWeight={"normal"}  fontSize={18} color={"blueGray.700"} >Add Card</Text>
            </HStack>
            <Center flex={1}>
                <CreditCard/>
            </Center>
        </Box>
    )
}

const CreditCard = () => {
    return (
        <VStack bg={"darkBlue.500"} w={"72"} h={"40"} borderRadius={20} p={4} justifyContent={"space-between"}>
                <VStack space={4}>
                        <Heading italic color={"yellow.300"}  fontSize={"lg"} alignSelf={"flex-end"}>VISA</Heading>
                        <Heading color={"blueGray.50"} fontSize={"lg"} alignSelf={"center"}>**** **** **** **** 4546</Heading>
                </VStack>
                <VStack space={3}>
                        <MaterialCommunityIcons name="integrated-circuit-chip" size={24} color="orange" />
                    <HStack justifyContent={"space-between"} alignItems={"center"} px={3}>
                        <Heading color={"blueGray.50"} fontSize={"md"}>Annanya S</Heading>
                        <Heading color={"blueGray.50"} fontSize={"xs"}>28/10</Heading>
                    </HStack> 
                </VStack>
        </VStack>
    )
}

export const Wallets = () => {
    return (
        <Box px={8}>
            <Text py={4} fontWeight={"medium"} fontSize={22} color={"blueGray.700"}>Wallets</Text>
            <VStack>
                {
                    WalletsIcons.map((item, index)=> {
                        return(
                        <HStack key={index} h={"12"} justifyContent={"space-between"}>
                            <HStack space={5} alignItems={"center"}>
                                <Avatar size="sm" source={{
                                    uri: item.img
                                }} />
                                <Text fontWeight={"medium"} fontSize={18} color={"blueGray.700"}>{item.name}</Text>
                            </HStack>
                            <Text alignSelf={"center"} fontWeight={"medium"} fontSize={18} color={"blue.600"}>{item.link}</Text>
                        </HStack>
                        )
                    })
                }           
            </VStack>
        </Box>
    )
}

export const HeadingPay = () => {
    const navigation = useNavigation();
    const state = useSelector((state)=> state.profile)
    const id = state.profileData[0].id
    const [saldo, setSaldo] = useState("0")
    const getSaldo = async()=>{
        let { data, error } = await supabase
        .from('carteras')
        .select('saldo').eq('id', id)
         setSaldo(data[0].saldo)
    }
    useEffect(()=>{
        getSaldo()
    },[])
    
    const safeAreaProps = useSafeArea ({
        safeAreaTop: true, 
    });
    return (
        <Box borderBottomRadius={52} h={"80"} bg={"blueGray.900"} {...safeAreaProps} px={8}>
                <Center flexDirection={"row"} height={"10"}>
                    <Center position={"absolute"} left={0} height={"10"}><Ionicons name="md-chevron-back-outline" size={29} color="white" onPress={()=> navigation.navigate("PaymentsHome")} /></Center>
                    <Heading size={"lg"} color={"white"}>Payments</Heading>
                </Center>
                <VStack height={"80%"} space={5} alignItems={"center"} justifyContent={"center"}>
                    <VStack space={1} alignItems={"center"}>
                        <Heading size={'sm'} fontWeight={"bold"} color={"white"}>My BMTC cash</Heading>
                        <Heading size={"3xl"} fontWeight={"extrabold"} color={"white"}>${saldo}</Heading>
                    </VStack>
                    <AntDesign name="pluscircleo" size={45} color={"white"} />
                </VStack>
         </Box>
    )
}

export const BodyPay = ()=>{
    return(
        <Box flex={1} w={"full"} bg={"blueGray.50"}>
              <CreditCardSession/>
              <Wallets/>
        </Box>
    )
}