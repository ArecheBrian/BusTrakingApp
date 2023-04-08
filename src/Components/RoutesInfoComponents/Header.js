import { HStack, Box, StatusBar, IconButton, Icon, Heading, useDisclose } from "native-base"


export const HeaderInfo = () => {
    const {
        isOpen,
        onOpen,
        onClose
      } = useDisclose()
    return (
        <Box w={"full"}>
            <StatusBar bg="#3700B3" barStyle="light-content" />
            <Box safeAreaTop bg="blueGray.900"/>
            <HStack h={"16"} bg="blueGray.900" justifyContent={"space-between"} px={"3"}>
                <Heading color="white" alignSelf={"center"}>MyBMTC</Heading>
                <IconButton
                icon={<Icon size={"2xl"} as={Feather} name="info" color="white" />}
                onPress={() => navigation.navigate('MyAccount')}/>
            </HStack>
        </Box>
    )
}