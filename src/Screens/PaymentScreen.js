import { Box, Heading, Avatar ,HStack, Center, useSafeArea ,Text, VStack , Button , props  } from "native-base";
import { Ionicons , AntDesign , Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { CreditCard } from "../Components/CardsComponents/Cards";
import { Wallets } from '../Components/CardsComponents/Cards';



export const PaymentScreen = () => {
const navigation = useNavigation();

    const safeAreaProps = useSafeArea ({
        safeAreaTop: true, 
    });
      return (
        <Box flex={1} bg={"blueGray.50"}>
          <Box borderBottomRadius={52} flex={2/1} bg={"yellow.400"} {...safeAreaProps} >
          <Box flexDirection={"row"} pr={12}>
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
          <Box flex={3} w={"full"} >
         <Box pt={4} >
          <HStack  flexDirection={"row"}  w={'full'} justifyContent={"space-around"}>
            <Box >
                 <Text fontWeight={"medium"}  fontSize={24} color={"blueGray.700"} >Save Cards</Text>
            </Box>
          <Box>
          <Text onPress={()=> navigation.navigate("AddCard")} fontWeight={"normal"}  fontSize={18} color={"blueGray.700"} >Add Card</Text>
          </Box>
          </HStack>
         </Box>
         <Center pt={7}>
           <CreditCard/>
         </Center>
           <Wallets/>
         </Box>
        </Box>
        
      )
}      
