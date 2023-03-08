import { Box, Center, Heading, HStack, VStack, Text, Link } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SingInContainer } from "../Components/SingInComponents/SingInComponents";

export const SignInScreen = () => {
  const navigation = useNavigation();
  return (
    <Box bg={"yellow.400"} flex={1}>
    
        <HStack safeArea={6} bg={"amber.400"} justifyContent={"space-between"} alignItems={"center"}>
        <Link onPress={() => navigation.navigate("Welcome")}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </Link>
          <Link onPress={() => navigation.navigate("Register")}>
            <Text fontSize={"xl"}>Registrer</Text>
          </Link>
        </HStack>
      <VStack bg={"yellow.400"} w={"90%"} alignSelf={"center"} space={3}>
        <Heading size={"xl"} fontSize={"5xl"}>
          Sign in
        </Heading>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          Welcome back, Parna. we missed you.
        </Text>
      </VStack>

      <Center bg={"blueGray.50"} flex={3} borderTopRadius={40} marginTop={"6"}>
        <SingInContainer/>
      </Center>
    </Box>
  );
};
