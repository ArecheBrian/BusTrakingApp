import { Box, Center, HStack, VStack, Text, Divider, Heading , Avatar} from "native-base"
import { FontAwesome5, FontAwesome, MaterialCommunityIcons, Feather , AntDesign } from '@expo/vector-icons';

export const RecentTripsCrad = () => {
    return (
        <HStack bg={"white"} w={"90%"} h={24} borderRadius={15} shadow={4}>
             <VStack flex={4} px={5} justifyContent={"center"} space={2}>
                <HStack space={2}>
                    <FontAwesome5 name="bus" size={24} color={"#2F58CD"}/>
                    <Center bg={"success.600"} w={"1/2"} h={6} borderRadius={12}>
                        <Text fontWeight={"bold"} color={"white"}>1620-MR</Text>
                    </Center>
                </HStack>
                <VStack>
                    <HStack alignItems={"center"} pl={2} space={2}>
                        <FontAwesome5 name="clock" size={12} color="#54B435"/>
                        <Text fontSize={"10"}>from <Text fontWeight={"bold"}>Santo Domingo</Text></Text>
                    </HStack>
                    <HStack alignItems={"center"} pl={2} space={2}>
                        <MaterialCommunityIcons name="arrow-left-top-bold" size={12} color="#FF1E1E"/>
                        <Text fontSize={"10"} fontWeight={"bold"}>Trip taken on 13/10/23</Text>
                    </HStack>
                </VStack>
             </VStack>
             <Center flex={2} px={5}>
               <VStack h={"full"} w={"full"} justifyContent={"center"} alignItems={"flex-end"}>
                    <Text fontSize={20} fontWeight={"bold"}>23km</Text>
                    <Text fontSize={12} fontWeight={"bold"} color={"blueGray.300"}>From you</Text>
               </VStack>
             </Center>
        </HStack>
    )
}

export const FromToCard = () => {
    return (
        <HStack w={"90%"} bg={"white"} borderRadius={18} shadow={4}>
            <VStack space={3} alignItems={"center"} flex={1} justifyContent={"center"}>
                <Feather name="crosshair" size={18} color="black" />
                <MaterialCommunityIcons name="dots-vertical" size={22} color="black"/>
                <FontAwesome name="location-arrow" size={18} color="black" />
            </VStack>
            <Box flex={4} py={2}>
                <VStack space={2}>
                    <Box>
                        <Text color={"gray.400"}>From</Text>
                        <Text fontSize={16}>Current Location</Text>
                    </Box>
                    <Divider color={"gray.400"} />
                    <Box>
                        <Text color={"gray.400"}>To</Text>
                        <Text  fontSize={16} >Santo Domingo Este</Text>
                    </Box>
            </VStack>
            </Box>
            <Center flex={1}>
                <Feather name="repeat" size={20} color="black" />
            </Center>
        </HStack>
    )
}

export const RoutesCard = ({Color, Name}) => {
    return (
        <HStack w={"90%"} h={"20"} bg={"white"} borderRadius={18} shadow={4} pl={5} alignItems={"center"} space={3}>
            <Center bg={"white"} size={58} borderRadius={100} shadow={3}>
                <FontAwesome5 name="bus" size={24} color={`${Color}`}/>
            </Center>
            <VStack>
                <Heading size={"xs"}>{Name}</Heading>
                <Text color={"blueGray.400"}>Ray street / old college</Text>
            </VStack>
        </HStack>
    )
}

export const CreditCard = () => {
    return (
        <Box bg={"darkBlue.500"} w={"70%"}  borderRadius={20}>
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
                        <Heading color={"blueGray.50"} fontSize={"lg"}>**** **** **** 4546</Heading>
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
          <VStack  w={"87%"} >
              <VStack space={4}>
              <Text fontWeight={"medium"}  fontSize={24} color={"blueGray.700"} >Wallets</Text>
                <Box>
                    <HStack justifyContent={"space-between"}>

                    <HStack justifyContent={"flex-start"} >
                         <HStack space={4}>
                         <Avatar source={{
                          uri: "https://www.nicepng.com/png/detail/360-3605153_paytm-kya-hai-hindi-me-jankari-paytm-cash.png"}} size="sm" >
                         </Avatar>
                        <Text  color={"gray.600"}  fontSize="xl" >Paytm</Text>
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
                        <Text  color={"gray.600"}  fontSize="xl" >Phonepay</Text>
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
                         uri: "https://www.nicepng.com/png/detail/769-7692873_download-google-pay-logo-png.png" }} size="sm" >
                         </Avatar>
                        <Text  color={"gray.600"}  fontSize="xl" >GPay</Text>
                         </HStack>
                    </HStack>
                    <HStack pr={5}  justifyContent={"flex-end"}>
                        <Box >
                            <Text fontSize={18} color={"blue.600"}>Link</Text>
                        </Box>
                    </HStack>

                    </HStack>
                </Box>
                <HStack>
                 <Box>
                    <HStack justifyContent={"space-between"}>

                    <HStack justifyContent={"flex-start"} >
                         <HStack space={4}>
                             <AntDesign name="plus" size={25} color="gray" />
                        <Text  color={"gray.600"}  fontSize="xl" >Other UPI</Text>
                         </HStack>
                    </HStack>
                    </HStack>
                 </Box>
                </HStack>
              </VStack>
          </VStack>
        </Center>


    )
}