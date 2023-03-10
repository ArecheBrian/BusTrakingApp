import { Center, HStack, Text, VStack, Input, Checkbox, Link, Button , Heading, Box} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from '@expo/vector-icons';

export const RegisterContainer = () => {
  
  return (
    <Center bg={"blueGray.50"} flex={4} borderTopRadius={40} >
      <HStack bg={"blueGray.50"} w={"90%"} borderRadius={"10"}> 
        <VStack space={"8"} w="90%" maxW="300px" mx="auto">
          <Input size="lg" variant="rounded" placeholder="FullName" />
          <Input size="lg" variant="rounded" placeholder="Email" />
          <Input
            type={"password"}
            size="lg"
            variant="rounded"
            placeholder="Password"
          />
          <Checkbox colorScheme="green" >
            <Link><Text fontSize={"lg"}>Agree to terms and conditions</Text></Link>
          </Checkbox>
          <Box alignItems={"center"}><ButtomnsRegister/></Box>
          <Box alignItems={"center"}><Text fontSize={"2xl"} >Or, Sing Up with</Text></Box>
        <HStack justifyContent={"center"} space={"16"} >
          {/* add icon buttom */}
        </HStack>
        </VStack>
      </HStack>
    </Center>
  );
};

export const ButtomnsRegister = () => {
    const navigation = useNavigation();
    return (
      <Button onPress={()=> navigation.navigate("Register")} borderRadius="full" bg={"#33353d"} w={"75%"} >
        <Heading color={"white"}>Register</Heading>
      </Button>
    );
  };
  