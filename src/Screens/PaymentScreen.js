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
          <VStack h={"90%"}  w={"87%"} space={116} >
            <HStack space={140} alignItems={"center"}>
              <Text fontWeight={"medium"}  fontSize={24} color={"blueGray.700"} >Save Cards</Text>
              <Text onPress={()=> navigation.navigate("AddCard")} fontWeight={"normal"}  fontSize={20} color={"blueGray.700"} >Add Card</Text>
            </HStack >
              <VStack space={3} w={"47%"}>
              <Text fontWeight={"medium"}  fontSize={24} color={"blueGray.700"} >Wallets</Text>
                <HStack  space={4} alignItems={"center"}>
                <Avatar source={{
                    uri: "https://www.nicepng.com/png/detail/360-3605153_paytm-kya-hai-hindi-me-jankari-paytm-cash.png"}} size="sm" >
              </Avatar>
                  <HStack space={170}>
                  <Text fontWeight={"medium"}  fontSize={24} color={"blueGray.700"} >Paytm</Text>
                  <Text fontWeight={"medium"}  fontSize={20} color={"blue.500"} >Link</Text>
                  </HStack>
                </HStack>
                <HStack  space={4} alignItems={"center"}>
                 <Avatar source={{
                    uri: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/43447413_1987166791348029_9209894455249731584_n.png?stp=dst-png_p320x320&_nc_cat=105&ccb=1-7&_nc_sid=7aed08&_nc_ohc=f3pDzZmhEt4AX88J1cQ&_nc_ht=scontent-sjc3-1.xx&oh=00_AfBMr9_W7VnxEL65v_Pz67sxk6trv-gV24GR6p_XUmMyFg&oe=642E2284" }} size="sm" >
                 </Avatar>
                 <HStack space={130}>
                  <Text fontWeight={"medium"}  fontSize={24} color={"blueGray.700"} >Phonepay</Text>
                  <Text fontWeight={"medium"}  fontSize={20} color={"blue.500"} >Link</Text>
                  </HStack>
                </HStack>
                <HStack  space={4} alignItems={"center"}>
                 <Avatar source={{
                    uri: "https://www.nicepng.com/png/detail/769-7692873_download-google-pay-logo-png.png" }} size="sm" >
                 </Avatar>
                 <HStack space={180}>
                  <Text fontWeight={"medium"}  fontSize={24} color={"blueGray.700"} >GPay</Text>
                  <Text fontWeight={"medium"}  fontSize={20} color={"blue.500"} >Link</Text>
                  </HStack>
                </HStack>
                <HStack pt={8} space={4} alignItems={"center"}>
                  <AntDesign name="plus" size={25} color="black" />
                  <Text fontWeight={"medium"}  fontSize={24} color={"blueGray.700"} >Other UPI</Text>
                </HStack>
              </VStack>
          </VStack>
        </Center>
        </Box>
        
      )
}      
