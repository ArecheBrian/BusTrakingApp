import { Box, Heading, Avatar ,HStack, Center, useSafeArea ,Text, VStack , Button , props  } from "native-base";
import { Ionicons , AntDesign} from '@expo/vector-icons';

export const Wallets = () => {
    return (
        <Center space={4}  bg={"blueGray.50"} flex={3}>
          <VStack w={"87%"} space={116} >
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


    )
}


export const CreditCard = () => {
    return (
        <Box bg={"darkBlue.500"} w={"80%"}  borderRadius={20}>
            <VStack space={3} >
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
