import { Box, Button, Heading, HStack, KeyboardAvoidingView, Stack, Text, VStack } from "native-base"
import { AntDesign } from '@expo/vector-icons';

export const LogInHeader = ({TitleH, TextC, OtherR}) => {
    return (
        <Box h={"48"} safeAreaTop={10} justifyContent={"space-between"} pb={"10"}>
            <HStack justifyContent={"space-between"} px={5}>
                <AntDesign name="arrowleft" size={24} color="black" />
                <Heading size={"sm"}>{OtherR[0]}</Heading>
            </HStack>
            <VStack px={10} space={2}>
                <Heading size={"2xl"}>{TitleH}</Heading>
                <Text fontSize={"lg"}>Welcome back, Parna. We missed you.</Text>
            </VStack>
        </Box>
    )
}
export const LogInbody = ({Form, Social, btnName, btnAction}) => {
    return (
        <Box flex={1} borderTopRadius={40} bg={"white"} px={10} pt={10} pb={5}>
            <KeyboardAvoidingView h={"full"}>
                <VStack flex={1} space={2} alignItems={"center"}>
                    {Form}
                    {Social}
                </VStack>
            </KeyboardAvoidingView>
        </Box>
    )
}

