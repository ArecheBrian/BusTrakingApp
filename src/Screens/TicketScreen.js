import { Box, Button, Center, Heading, Text } from "native-base"
import { AppBar } from "../Components/NavigationComponents/headerComponents"
import QRCode from "react-native-qrcode-svg"

export const TicketScreen = ()=> {
    return (
        <Box flex={1}>
            <AppBar/>
            <Box flex={1} alignItems={"center"} justifyContent={"space-evenly"}>
                <Heading>My QR</Heading>
                <Center size={"80"} bg={"white"} borderRadius={"2xl"} shadow={4}>
                    <QRCode
                        size={250}
                        value="100"
                    />
                </Center>
                <Text px={16} textAlign={"center"}>Please scan your OR Code when you got on the shuttlo.</Text>
                <Button w={"40"} bg={"blueGray.900"} onPress={()=> console.log("hola")}><Heading color={"white"} size={"sm"}>ver saldo</Heading></Button>
            </Box>
        </Box>
    )
}