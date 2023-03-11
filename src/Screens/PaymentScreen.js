import { Box ,HStack, Center ,Text} from "native-base";
import { useNavigation } from '@react-navigation/native';
import { CreditCard } from "../Components/PaymentsComponents/Payments";
import { Wallets } from '../Components/PaymentsComponents/Payments';
import { HeadingPay } from '../Components/PaymentsComponents/Payments';



export const PaymentScreen = () => {
const navigation = useNavigation();
      return (
        <Box flex={1} bg={"blueGray.50"}>
            <HeadingPay/>
          <Box flex={3} w={"full"} >
         <Box pt={4} >
          <HStack  flexDirection={"row"}  w={'full'} justifyContent={"space-around"}>
            <Box >
                 <Text  fontWeight={"medium"}  fontSize={24} color={"blueGray.700"} >Save Cards</Text>
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
