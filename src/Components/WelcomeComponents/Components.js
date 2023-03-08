import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Center,
  Heading,
  Text,
  VStack,
  TouchableOpacity,
  Button,
  space,
  Link,
} from "native-base";


export const WelcomeContainer = () => {
  return (
    <VStack
      bg={"yellow.400"}
      w={"90%"}
      borderRadius={60}
      alignContent={"center"}
      space={10}
    >
      <VStack space={6}>
        <Heading size="4xl" fontSize={"5xl"} color="#33353d" alignSelf={"center"}>
          Welcome
        </Heading>
        <Text fontSize={20}>
          Come onboard, join in to experience the new MyBMTC wicht added
          features and improved funtionalities
        </Text>
      </VStack>
      <Box>
        <VStack bg={"yellow.400"} alignItems={"center"} space={3}>
          <WelcomeButtomnsSign />
          <WelcomeButtomnsRegister />
          <WelcomeButtomnsSkip />
        </VStack>
      </Box>
    </VStack>
  );
};

export const WelcomeButtomnsSign = () => {
  const navigation = useNavigation();
  return (
    <Button  onPress={()=> navigation.navigate("SignIn")} borderRadius="full" bg={"#41434b"} w={"60%"} >
      <Heading color={"white"}>Sign in</Heading>
    </Button>
  );
};

export const WelcomeButtomnsRegister = () => {
  const navigation = useNavigation();
  return (
    <Button onPress={()=> navigation.navigate("Register")} borderRadius="full" bg={"blueGray.50"} w={"60%"} >
      <Heading>Register</Heading>
    </Button>
  );
};

export const WelcomeButtomnsSkip = () => {
  const navigation = useNavigation();
  return (
    <Link onPress={()=> navigation.navigate("MyTabs")} >
    <Heading>skip</Heading>
    </Link>
  );
};
