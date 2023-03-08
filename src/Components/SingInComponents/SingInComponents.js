import {
  Center,
  HStack,
  Text,
  VStack,
  Input,
  Checkbox,
  Link,
  Button,
  Heading,
  Box,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const SingInContainer = () => {
  return (
    <Center>
      <HStack bg={"blueGray.50"} w={"90%"} borderRadius={"10"}>
        <VStack space={"8"} w="90%" maxW="300px" mx="auto">
          <Input size="lg" variant="rounded" placeholder="Usename" />
          <Input
            type={"password"}
            size="lg"
            variant="rounded"
            placeholder="Password"
          />
          <Link>
            <Text fontSize={"lg"}>Forgot password</Text>
          </Link>
          <Checkbox colorScheme="green">
            <Link>
              <Text fontSize={"lg"}>Remember me</Text>
            </Link>
          </Checkbox>
          <Box alignItems={"center"}>
            <ButtomnsSingIn />
          </Box>
          <Box alignItems={"center"}>
            
          </Box>
          <VStack justifyContent={"center"} space={"2"}>
            <ButtomnsGoogle />
            <ButtomnsFacebook />
          </VStack>
        </VStack>
      </HStack>
    </Center>
  );
};
export const ButtomnsSingIn = () => {
  const navigation = useNavigation();
  return (
    <Button
      onPress={() => navigation.navigate("SingIn")}
      borderRadius="full"
      bg={"#33353d"}
      w={"75%"}
      
    >
      <Heading color={"white"}>Sing in</Heading>
    </Button>
  );
};
export const ButtomnsGoogle = () => {
  const navigation = useNavigation();
  return (
    <Button
      onPress={() => navigation.navigate("SingIn")}
      borderRadius="full"
      bg={"#33353d"}
      w={"96%"}
      
    >
      <HStack space={5} justifyContent={"center"}>
        <FontAwesome5 name="google" size={30} color="#ec4435" />
        <Text fontSize="xl" color={"white"}>Sing in with google</Text>
        <AntDesign name="arrowright" size={30} color="gray" />
      </HStack>
    </Button>
  );
};
export const ButtomnsFacebook = () => {
  const navigation = useNavigation();
  return (
    <Button
      onPress={() => navigation.navigate("SingIn")}
      borderRadius="full"
      bg={"#33353d"}
      w={"96%"}
    >
      <HStack space={3} justifyContent={"center"}>
        <FontAwesome5 name="facebook" size={30} color="#3a5997" />
        <Text color={"white"} fontSize="xl">Sing in with facebook</Text>
        <AntDesign name="arrowright" size={30} color="gray" />
      </HStack>
    </Button>
  );
};
