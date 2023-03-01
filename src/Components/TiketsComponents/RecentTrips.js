import { Box, HStack, VStack, Text, Center} from "native-base";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";


export const RecentTrips = () => {
  return (
    <HStack h={24} bg={"blueGray.50"} borderRadius={20} shadow={5} w={"90%"}>
      <Box  w={"70%"}  justifyContent={"center"} m={2}>
        <HStack space={2}>
        <FontAwesome5 name="bus-alt" size={25} color="blue" /><Center bg={"green.300"} borderRadius={10} px={4} >1680-MR </Center>
        </HStack>
        <HStack space={2} >
        <AntDesign name="wifi" size={19} color="green" /><Center > 7km Away From you  </Center>
        </HStack>
        <HStack space={2}>
        <AntDesign name="back" size={17} color="red" /><Center > 7km Away From you  </Center>
        </HStack>
      </Box>
      <Center w={"25%"} borderRightRadius={15}>
        <Text fontWeight={"bold"} fontSize={19}>
            22 min
        </Text>From you 
      </Center>
    </HStack>
  );
};
