import { Box, HStack, VStack, Text, Center, Heading } from "native-base";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Divider } from "native-base";
import { Feather } from '@expo/vector-icons';

export const Location = () => {
  return (
    <HStack h={"32"}  w={"100%"}  bg={"blueGray.50"} borderRadius={20} shadow={5}>

      <Box flex={2}  justifyContent={"center"} >
        <VStack space={2} alignItems={"center"}>
         <Feather name="crosshair" size={24} color="black" />
         <MaterialCommunityIcons name="dots-vertical" size={24} color="black"/>
         <FontAwesome name="location-arrow" size={24} color="black" />
        </VStack>
      </Box>

      <Box justifyContent={"center"}   flex={6} >
        <VStack space={2}>
         <Box>
            <Text color={"gray.400"}>From</Text>
            <Text fontSize={16}>Current Location</Text>
         </Box>
         <Divider color={"gray.400"} h={"0.3"}/>
         <Box>
            <Text color={"gray.400"}>To</Text>
            <Text  fontSize={16} >Santo Domingo Este</Text></Box>
        </VStack>
      </Box>

      <Center flex={2} >
        <FontAwesome name="refresh" size={24} color="black" />
      </Center>

    </HStack>
  );
};
