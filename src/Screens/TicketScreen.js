import { Box, Button, Center, Heading, Text } from "native-base"
import { AppBar } from "../Components/NavigationComponents/headerComponents"
import QRCode from "react-native-qrcode-svg"
import { useSelector } from "react-redux"
import { supabase } from "../../lib/supabase"
import { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"

export const TicketScreen = ()=> {
    const state = useSelector((state)=> state.profile)
    const navigation = useNavigation()
    const id = state.profileData[0].id
    const [saldo, setSaldo] = useState("0")
    const getSaldo = async()=>{
        let { data, error } = await supabase
        .from('carteras')
        .select('saldo').eq('id', id)
         setSaldo(data[0].saldo)
    }
    const updateSaldo =async () =>{
        const cartera = supabase.channel('custom-update-channel')
        .on(
            'postgres_changes',
            { event: 'UPDATE', schema: 'public', table: 'carteras', filter: `id=eq.${id}` },
            (payload) => {
                setSaldo(payload.new.saldo)
            }
        )
        .subscribe()
        }
    updateSaldo()
    useEffect(()=>{
        getSaldo()
    },[])
    return (
        <Box flex={1}>
            <AppBar/>
            <Box flex={1} alignItems={"center"} justifyContent={"space-evenly"}>
                <Heading>My QR</Heading>
                <Center size={"80"} bg={"white"} borderRadius={"2xl"} shadow={4}>
                    <QRCode
                        size={250}
                        value={`${saldo}`}
                    />
                </Center>
                <Text px={16} textAlign={"center"}>Please scan your OR Code when you got on the shuttlo.</Text>
                <Button w={"40"} bg={"blueGray.900"} onPress={()=> navigation.navigate("cards")}><Heading color={"white"} size={"sm"}>ver saldo</Heading></Button>
            </Box>
        </Box>
    )
}