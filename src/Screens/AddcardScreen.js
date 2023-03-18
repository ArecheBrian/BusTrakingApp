import { Button , Box, HStack , useSafeArea , Center , Text , VStack , Heading, Input , Image} from "native-base"
import { Ionicons, EvilIcons , AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
export const AddcardScreen = () => {
    const navigation = useNavigation();

    const safeAreaProps = useSafeArea ({
        safeAreaTop: true, 
    });
    return(
        <Box flex={1} bg={"blueGray.50"}  {...safeAreaProps}>
            <Box flexDirection={"column"}  >
                <Box pt={5} >
                  <HStack pl={5}>
                    <Ionicons name="md-chevron-back-outline" size={29} color="black" onPress={()=> navigation.navigate("Payment")}/>
                  </HStack>
                 </Box>
            </Box>
            <Center space={5} bg={"blueGray.50"} flex={1}>
          <VStack h={"100%"} w={"85%"} space={8} mt={8} >
            <HStack  alignItems={"center"}>
              <Heading fontSize={25} color={"blueGray.800"} >Add Card</Heading>
            </HStack>
            <HStack  alignItems={"center"}>  
            <Image source={{ uri:"https://www.nicepng.com/png/detail/87-870329_credit-card-icon-png-credit-card-clipart.png"}} alt="Alternate Text" size="lg" />
            </HStack>
            <HStack alignItems={"center"}>  
              <Input borderRadius={15} bg={"blueGray.200"} size="2xl" variant="OUTLINE" placeholder="Card No."  />
            </HStack>
            <HStack alignItems={"center"}>  
              <Input borderRadius={15} bg={"blueGray.200"} size="2xl" variant="OUTLINE" placeholder="Full Name"  />
            </HStack>
            <HStack justifyContent={"space-between"}  space={4} alignItems={"center"} >  
             <Box>
              <HStack space={2}>
                  <Text semibold fontSize={25} >CVV</Text>
                   <AntDesign name="questioncircleo" size={17} color="gray" />
              </HStack>
             </Box>
              <HStack  w={"18%"}>
                 <Input borderRadius={12} bg={"blueGray.200"} size="2xl" variant="outline" placeholder=""></Input>
              </HStack>
            </HStack>
            <HStack justifyContent={"space-between"} alignItems="center" space={4}>  
             <Text  fontSize={25} >Expiry</Text>
             <HStack w={"35%"}>
                 <Input borderRadius={12} bg={"blueGray.200"} size="2xl" variant="outline" placeholder="/"></Input>
              </HStack>
            </HStack>
            <Box mt={10}>
              <HStack justifyContent={"center"} space={4} >  
              <Button size={"lg"} w={"45%"} borderRadius={30} bg={"yellow.400"}>LINK</Button>
             </HStack>
            </Box>
          </VStack>
        </Center>
        </Box>
    )
}