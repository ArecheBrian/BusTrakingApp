import { Box, Center, HStack, VStack, Text, Divider, Heading} from "native-base"
import { FontAwesome5, FontAwesome, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

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