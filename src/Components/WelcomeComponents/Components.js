import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  Link,
} from "native-base";


export const WelcomeContainer = () => {
  return (
    <Box
      w={"90%"}
      alignContent={"center"}
      height={"95%"}
    >
      <VStack space={7} h={"50%"} justifyContent={"center"}>
        <Heading size="4xl" fontSize={"5xl"} color="white">
          Welcome
        </Heading>
        <Text fontSize={18} color="white">
          Come onboard, join in to experience the new MyBMTC wicht added
          features and improved funtionalities
        </Text>
      </VStack>
        
      <VStack h={"50%"} alignItems={"center"} space={6} justifyContent={"center"}>
        <WelcomeButtomns bgColor={"gray.800"} text={"Sign in"} textC={"blueGray.50"} route={"SignIn"}/>
        <WelcomeButtomns bgColor={"blueGray.50"} text={"Register"} textC={"blueGray.900"} route={"Register"}/>
        <WelcomeButtomnsSkip/>
      </VStack>
    </Box>
  );
};

export const WelcomeButtomns = ({bgColor, text, textC ,route}) => {
  const navigation = useNavigation();
  return (
    <Button  onPress={()=> navigation.navigate(`${route}`)} borderRadius="full" bg={bgColor} w={"56"} h={12}>
        <Text color={textC} fontSize={"xl"} fontWeight={"bold"}>{text}</Text>
    </Button>
  );
};

export const WelcomeButtomnsSkip = () => {
  const navigation = useNavigation();
  return (
    // solucionar la navegacion de este boton 
    <Link onPress={()=> navigation.navigate("MyTabs")} >
      <Text fontSize={"2xl"}>skip</Text>
    </Link>
  );
};
