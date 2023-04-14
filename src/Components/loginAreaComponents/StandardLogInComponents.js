import { Box, Button, Heading, HStack, Icon, IconButton, KeyboardAvoidingView, Stack, Text, VStack } from "native-base"
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export const LogInHeader = ({TitleH, TextC, OtherR}) => {
    const navigation = useNavigation()
    return (
        <VStack height={"1/4"} safeAreaTop={10} space={4} pb={"10"} pt={1}>
            <HStack justifyContent={"space-between"} px={5}>
            <IconButton icon={<Icon size={"2xl"} as={AntDesign} name="arrowleft" color="white" onPress={()=> navigation.navigate("Welcome")} />}></IconButton>
                <Heading color={"white"} size={"sm"}>{OtherR[0]}</Heading>
            </HStack>
            <VStack px={10} space={2}>
                <Heading color={"white"} size={"2xl"}>{TitleH}</Heading>
                <Text color={"white"} fontSize={"lg"}>{TextC}</Text>
            </VStack>
        </VStack>
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

