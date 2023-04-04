import { Box, HStack, Text} from "native-base"
import { Entypo } from '@expo/vector-icons';


export const PlaceRow = ({data}) => {
    return (
    <HStack alignItems={"center"} my={2}>
        <Box bg={"gray.400"} borderRadius={50} mr={15} >
            <Entypo name="location-pin" size={18} color="white" />
        </Box>
        <Text>{data.description}</Text>
    </HStack>
    );
};