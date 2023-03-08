import { Box, Center, Heading, HStack, VStack, Text, Link } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { RegisterContainer } from "../Components/RegisterComponets/RegisterContatiner";
import { useNavigation } from "@react-navigation/native";


export const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <Box bg={"yellow.400"} flex={1}>
      <HStack justifyContent={"flex-start"} bg={"yellow.400"} safeAreaTop={5} safeAreaX={5}>
            <Link onPress={()=> navigation.navigate("Welcome")} ><AntDesign name="arrowleft" size={24} color="black" /></Link>
          </HStack>
          <HStack justifyContent={"flex-end"} bg={"yellow.400"} safeAreaX={5} >
            <Link onPress={()=> navigation.navigate("SignIn")}><Text fontSize={"xl"} >Sing In </Text></Link>
          </HStack>
        <VStack bg={"yellow.400"} w={"90%"} alignSelf={"center"} >
          <Heading size={"xl"} fontSize={"5xl"}>
            Registrer
          </Heading>
          <Text fontSize={"xl"} fontWeight={"bold"} >
            Exertation veniam consequat sunt nostrud amet.
          </Text>
          
        </VStack>
      <Center bg={"blueGray.50"} flex={3} borderTopRadius={40} marginTop={"6"}>
        <RegisterContainer/>
      </Center>
    </Box>
  );
};
