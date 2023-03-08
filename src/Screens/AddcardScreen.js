import { Box, HStack , useSafeArea , Center , Text , VStack , Heading, Input , Image} from "native-base"
import { Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Example } from "../Components/CustomInput/CustomInput";

export const AddcardScreen = () => {
    const navigation = useNavigation();

    const safeAreaProps = useSafeArea ({
        safeAreaTop: true, 
    });
    return(
        <Box flex={1} bg={"blueGray.50"}  {...safeAreaProps}>
            <Box  flexDirection={"column"} bg={"blueGray.50"} >
                <Box w={"90%"} pt={5} bg={"amber.200"}>
                    <HStack>
                    <Ionicons name="md-chevron-back-outline" size={29} color="black" onPress={()=> navigation.navigate("Payment")}/>
                    </HStack>
                 </Box>
            </Box>
            <Center space={5} bg={"blueGray.50"} flex={1}>
          <VStack h={"100%"} w={"90%"} space={5} mt={5} >
            <HStack space={4} alignItems={"center"}>
              <Heading fontSize={25} color={"blueGray.800"} >Add Card</Heading>
            </HStack>
            <HStack space={4} alignItems={"center"}>  
            <Image source={{ uri:"https://www.nicepng.com/png/detail/14-143923_payment-card-icon-png-edwin-m-sarmiento-credit.png"}} alt="Alternate Text" size="md" />
            </HStack>
            <HStack space={4} alignItems={"center"}>  
              <Input size="xl" variant="outline" placeholder="Input"  />
            </HStack>
            <HStack space={4} alignItems={"center"}>  
              <Input size="xl" variant="outline" placeholder="Input"  />
            </HStack>
            <HStack space={4} alignItems={"center"} mt={"auto"}>  
             <Example variant="rounded" size="xs" placeholder="xs Input" />
            </HStack>
          </VStack>
        </Center>
        </Box>
    )
}