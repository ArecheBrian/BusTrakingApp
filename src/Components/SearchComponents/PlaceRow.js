import { Box, HStack, Text} from "native-base"
import { Entypo , Ionicons } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';


export const PlaceRow = ({data}) => {
    return (
        <Box flex={4} bg="blueGray.900" pt={2} alignItems={"flex-start"}>
            <HStack alignItems={"center"} my={2}>
                    <Box bg={"gray.400"} p={1} borderRadius={50} mr={15} >
                    <Ionicons name="location" size={15} color="white" />
                    </Box>
                    <Text color="white" >{data.description}</Text>
            </HStack>
        </Box>
    );
};