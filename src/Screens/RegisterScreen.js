import { Box, Center, Heading, HStack, VStack, Text, Link } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { RegisterContainer } from "../Components/RegisterComponets/RegisterContatiner";
import { useNavigation } from "@react-navigation/native";


export const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <Box bg={"yellow.400"} flex={1} >
      <Center flex={1} bg={"yellow.400"} safeAreaTop={5}>
      <HStack w={"full"} justifyContent={"space-between"} bg={"yellow.400"} pl={5} pr={5}>
            <Link onPress={()=> navigation.navigate("Welcome")} ><AntDesign name="arrowleft" size={24} color="black" /></Link>
            <Link onPress={()=> navigation.navigate("SignIn")}><Text fontSize={"xl"} >Sing In </Text></Link>
          </HStack>
        <VStack bg={"yellow.400"} w={"90%"}  flex={1} pl={6}>
          <Heading size={"xl"} fontSize={"5xl"}>
            Registrer
          </Heading>
          <Text fontSize={"xl"} fontWeight={"bold"} >
            Exertation veniam consequat sunt nostrud amet.
          </Text>
        </VStack>
        </Center>
      <Center bg={"blueGray.50"} flex={4} borderTopRadius={40} >
        <RegisterContainer/>
      </Center>
    </Box>
  );
};
