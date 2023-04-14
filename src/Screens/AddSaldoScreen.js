import { Box, Button, Center, Heading, Input } from "native-base"
import { updateSaldo } from "../Supabase/saldo/updateSaldo"
import { useSelector } from "react-redux"
import { useState } from "react"

export const AddSaldoScreen = ()=> {
    const state = useSelector((state)=> state.profile)
    const [saldo, setSaldo] = useState()
    const id = state.profileData[0].id

    return (
        <Box flex={1} bg={"blueGray.900"}>
            <Center flex={1} bg={"blueGray.50"}>
                <Box w={"85%"} h={"48"} bg={"white"} borderRadius={"2xl"} shadow={3} justifyContent={"space-evenly"} px={4}>
                    <Heading>Agregar Saldo</Heading>
                    <Input onChangeText={value => setSaldo(value)}></Input>
                    <Button onPress={()=> updateSaldo(saldo, id)}>Agregar</Button>
                </Box>
            </Center>
        </Box>
    )
}