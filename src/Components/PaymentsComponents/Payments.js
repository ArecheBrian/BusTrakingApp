import { Box, Center, HStack, VStack, Text, Heading , Avatar , useSafeArea , navigation} from "native-base"
import { MaterialCommunityIcons,  AntDesign , Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export const CreditCard = () => {
    return (
        <Box bg={"darkBlue.500"} w={"70%"}  borderRadius={20}>
            <VStack space={2} >
                <HStack pt={2} flexDirection={"row-reverse"}   >
                    <Box >
                        <VStack pr={5}>
                            <Heading italic color={"yellow.300"}  fontSize={"lg"} >VISA</Heading>
                        </VStack>
                    </Box>
                </HStack>
                <HStack alignItems={"center"} justifyContent={"center"}>
                <Box>
                    <VStack>
                        <Heading color={"blueGray.50"} fontSize={"lg"}>**** **** **** **** 4546</Heading>
                    </VStack>
                </Box>
                </HStack>
                <HStack >
                <Box pl={4} >
                    <VStack>
                        <Box >
                        <MaterialCommunityIcons name="integrated-circuit-chip" size={24} color="orange" />
                        </Box>
                    </VStack>
                </Box>
                </HStack>
                <HStack mb={2} alignItems={"center"} justifyContent={"center"}>
                <Box >
                    <VStack >
                        <HStack pb={4} space={120} justifyContent={"space-evenly"}>
                            <Heading color={"blueGray.50"} fontSize={"md"}>Annanya S</Heading>
                            <Box >
                            <VStack >
                                  <Heading color={"blueGray.50"} fontSize={"xs"}>28/10</Heading>
                            </VStack>
                            </Box>
                        </HStack>
                    </VStack>
                </Box>
                </HStack>
            </VStack>
        </Box>
    )
}

export const Wallets = () => {
    return (
        <Center bg={"blueGray.50"} flex={1}>
          <VStack pb={5} w={"87%"} >
              <VStack space={4}>
              <Text fontWeight={"medium"}  fontSize={24} color={"blueGray.700"} >Wallets</Text>
                <Box>
                    <HStack justifyContent={"space-between"}>

                    <HStack justifyContent={"flex-start"} >
                         <HStack space={4}>
                         <Avatar source={{
                          uri: "https://www.nicepng.com/png/detail/360-3605153_paytm-kya-hai-hindi-me-jankari-paytm-cash.png"}} size="sm" >
                         </Avatar>
                        <Text bold color={"gray.600"}  fontSize="xl" >Paytm</Text>
                         </HStack>
                    </HStack>
                    <HStack pr={5}  justifyContent={"flex-end"}>
                        <Box >
                            <Text fontSize={18} color={"blue.600"}>Link</Text>
                        </Box>
                    </HStack>

                    </HStack>
                </Box>
                <Box>
                    <HStack justifyContent={"space-between"}>

                    <HStack justifyContent={"flex-start"} >
                         <HStack space={4}>
                         <Avatar source={{
                          uri: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/43447413_1987166791348029_9209894455249731584_n.png?stp=dst-png_p320x320&_nc_cat=105&ccb=1-7&_nc_sid=7aed08&_nc_ohc=f3pDzZmhEt4AX88J1cQ&_nc_ht=scontent-sjc3-1.xx&oh=00_AfBMr9_W7VnxEL65v_Pz67sxk6trv-gV24GR6p_XUmMyFg&oe=642E2284" }} size="sm" >
                         </Avatar>
                        <Text bold  color={"gray.600"}  fontSize="xl" >Phonepay</Text>
                         </HStack>
                    </HStack>
                    <HStack pr={5}  justifyContent={"flex-end"}>
                        <Box >
                            <Text fontSize={18} color={"blue.600"}>Link</Text>
                        </Box>
                    </HStack>

                    </HStack>
                </Box>
                <Box>
                    <HStack pb={2} justifyContent={"space-between"}>

                    <HStack justifyContent={"flex-start"} >
                         <HStack space={4}>
                         <Avatar source={{
                         uri: "https://www.nicepng.com/png/detail/769-7692873_download-google-pay-logo-png.png" }} size="sm" >
                         </Avatar>
                        <Text bold  color={"gray.600"}  fontSize="xl" >GPay</Text>
                         </HStack>
                    </HStack>
                    <HStack pr={5}  justifyContent={"flex-end"}>
                        <Box >
                            <Text fontSize={18} color={"blue.600"}>Link</Text>
                        </Box>
                    </HStack>

                    </HStack>
                </Box>
                <HStack >
                 <Box>
                    <HStack justifyContent={"flex-start"} >
                         <HStack  space={4}>
                             <AntDesign name="plus" size={25} color="black" />
                        <Text  color={"gray.600"}  fontSize="xl" >Other UPI</Text>
                         </HStack>
                    </HStack>
                 </Box>
                </HStack>
              </VStack>
          </VStack>
        </Center>


    )
}

export const HeadingPay = () => {
    const navigation = useNavigation();


    const safeAreaProps = useSafeArea ({
        safeAreaTop: true, 
    });
    return (
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
                <AntDesign name="pluscircleo" size={45} color={"black"} />
            </VStack>
          </Center>
          </VStack>
         </Box>
          </Box>
    )
}