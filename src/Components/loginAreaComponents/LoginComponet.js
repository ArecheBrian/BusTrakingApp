import { Box, Heading, Text, Center, HStack, Link, VStack,  Button, FormControl, Input, IconButton} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from '@expo/vector-icons';
import { color } from "react-native-reanimated";
export const Header = () => {
  return (
    <VStack
      justifyContent={"space-between"}
      bg={"yellow.400"}
      h={"full"}
      pb={5}
      alignItems={"center"}
    >
      <HStack w={"92%"} justifyContent={"space-between"}>
        <Link onPress={() => navigation.navigate("Welcome")}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </Link>
        <Link onPress={() => navigation.navigate("SignIn")}>
          <Text fontSize={"xl"}>Sing In </Text>
        </Link>
      </HStack>
      <VStack w={"85%"}>
        <Heading size={"3xl"} >
          Registrer
        </Heading>
      </VStack>
      <VStack w={"85%"}>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          Exertation veniam consequat sunt nostrud amet.
        </Text>
      </VStack>
    </VStack>
  );
};
export const LoginButtons = () => {
    const navigation = useNavigation();
    return (
      <Button
        onPress={() => navigation.navigate("Home")}
        borderRadius="full"
        bg={"#33353d"}
        w={"70%"}
      >
        <Heading color={"white"}>Sing in</Heading>
      </Button>
    );
  };
  export const ImpustAreaR = () => {
    return (
    <VStack w={"full"} space={8} alignItems={"center"}>
     <FormControl><Input variant="unstyled" placeholder="Fullname" bg={"gray.200"} borderRadius={30} h={"12"}/></FormControl>
     <FormControl><Input variant="unstyled" placeholder="Email" bg={"gray.200"} borderRadius={30} h={"12"}/></FormControl>
     <FormControl><Input variant="unstyled" placeholder="Password" bg={"gray.200"} borderRadius={30} h={"12"}/><Link 
            _text={{
            fontSize: "md",
            fontWeight: "500",
            color: "gray.500"
          }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link></FormControl>
            <LoginButtons/>
    </VStack>
    );
  };
  export const CircuButtoms = () => {
    return (
        <IconButton shadow={2} bg={"white"} variant={"solid"} h={"20"} w={"20"} borderRadius={"full"} _icon={{
            size: "5xl",
            as: FontAwesome5,
            name: "facebook",
            color: "blue.700"
          }} />
    );
  };