import { Box, Heading, Avatar ,HStack, Center, useSafeArea ,Text, VStack , Button , props  } from "native-base";
import { Ionicons , AntDesign} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export const PaymentScreen = () => {
const navigation = useNavigation();

    const safeAreaProps = useSafeArea ({
        safeAreaTop: true, 
    });
      return (
        <Box flex={1} bg={"blueGray.50"}>
          <Box borderBottomRadius={52} flex={2/1} bg={"yellow.400"} {...safeAreaProps} >
          <Box flexDirection={"row"} pr={9}>
            <Box>
          <HStack space={6} pl={7} pt={6} >
                <Ionicons name="md-chevron-back-outline" size={29} color="black" onPress={()=> navigation.navigate("account")} /> 
          </HStack>
            </Box>
          <VStack space={6} flex={1}>
          <Center h={20}>
            <Heading color={"blueGray.700"} size={"lg"}>Payments</Heading>
          </Center>
          <Center>
            <VStack space={1}>
               <Heading size={'sm'} fontWeight={"bold"}  color={"blueGray.700"}>My BMTC cash</Heading>
               <Heading size={"3xl"} fontWeight={"extrabold"} color={"blueGray.700"}>₹52</Heading>
            </VStack>
            <VStack pt={6} space={3}>
                <AntDesign name="pluscircleo" size={45} color={"gray"} />
            </VStack>
          </Center>
          </VStack>
         </Box>
          </Box>
            <Center space={4}  bg={"blueGray.50"} flex={3}>
          <VStack h={"90%"}  w={"87%"} space={89} >
            <HStack space={140} alignItems={"center"}>
              <Text fontWeight={"medium"}  fontSize={24} color={"blueGray.700"} >Save Cards</Text>
              <Text fontWeight={"normal"}  fontSize={20} color={"blueGray.700"} >Add Card</Text>
            </HStack >
              <VStack space={2} w={"47%"}>
              <Text fontWeight={"medium"}  fontSize={24} color={"blueGray.700"} >Wallets</Text>
                <HStack  space={4} alignItems={"center"}>
                <Avatar source={{
                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}} size="sm" >
               <Avatar.Badge />
              </Avatar>
                 <Text fontWeight={"medium"}  fontSize={24} color={"blueGray.700"} >Paytm</Text>
                </HStack>
                <HStack  space={4} alignItems={"center"}>
                 <AntDesign name="plus" size={25} color="black" />
                 <Text fontWeight={"medium"}  fontSize={24} color={"blueGray.700"} >Phonepay</Text>
                </HStack>
                <HStack  space={4} alignItems={"center"}>
                 <AntDesign name="plus" size={25} color="black" />
                 <Text fontWeight={"medium"}  fontSize={24} color={"blueGray.700"} >Gpay</Text>
                </HStack>
                <HStack pt={5} space={4} alignItems={"center"}>
                  <AntDesign name="plus" size={25} color="black" />
                  <Text fontWeight={"medium"}  fontSize={24} color={"blueGray.700"} >Other UPI</Text>
                </HStack>
              </VStack>
          </VStack>
        </Center>
        </Box>
        
      )
}      