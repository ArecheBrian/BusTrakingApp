import { Box, ScrollView } from "native-base";
import { useNavigation } from '@react-navigation/native';
import { BodyPay } from "../Components/PaymentsComponents/Payments";
import { HeadingPay } from '../Components/PaymentsComponents/Payments';



export const PaymentScreen = () => {
const navigation = useNavigation();
      return (
        <Box flex={1} bg={"blueGray.50"}>
          <ScrollView>
            <HeadingPay/>
            <BodyPay/>
          </ScrollView>
        </Box>
        
      )
}      
