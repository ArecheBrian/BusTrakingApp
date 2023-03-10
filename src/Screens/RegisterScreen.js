import { Box, Center, Heading, HStack, VStack, Text, Link } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { RegisterContainer } from "../Components/RegisterComponets/RegisterContatiner";
import { useNavigation } from "@react-navigation/native";
import { HeaderArea } from "../Components/loginAreaComponents/HeaderArea";
import { ContentAreaR } from "../Components/loginAreaComponents/ContentArea";
import { ScrollView } from "react-native-gesture-handler";


export const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    // llamar header and content
    <ScrollView>
    <Box flex={1} bg={"yellow.400"}>
      
        <HeaderArea/>
      <ContentAreaR/>
     
    </Box></ScrollView>
    



    // <Box bg={"yellow.400"} flex={1} >
    //   <Center flex={1} bg={"yellow.400"} safeAreaTop={5}>
    //   <HStack w={"90%"} justifyContent={"space-between"} bg={"yellow.400"}>
    //         <Link onPress={()=> navigation.navigate("Welcome")} ><AntDesign name="arrowleft" size={24} color="black" /></Link>
    //         <Link onPress={()=> navigation.navigate("SignIn")}><Text fontSize={"xl"} >Sing In </Text></Link>
    //       </HStack>
    //     <VStack bg={"yellow.400"} w={"90%"}  flex={1} pl={6}>
    //       <Heading size={"lg"} fontSize={"5xl"}>
    //         Registrer
    //       </Heading>
    //       <Text fontSize={"xl"} fontWeight={"bold"} >
    //         Exertation veniam consequat sunt nostrud amet.
    //       </Text>
    //     </VStack>
    //     </Center>
    //     <RegisterContainer/>
    // </Box>
  );
};
