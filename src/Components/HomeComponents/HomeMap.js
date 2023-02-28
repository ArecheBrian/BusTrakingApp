import { Box, Heading, HStack } from "native-base"
import { Ionicons} from '@expo/vector-icons';
import MapView from "react-native-maps";
import theme from "../../Constans/theme";

export const HomeMap = () => {
    return (
    <Box py="2" w={"90%"} space={2} alignItems="center" flex={5}>
        <Box w="full" py={3}>
            <Heading fontSize="lg">Current Location</Heading>
            <HStack alignItems={"center"}>
                <Ionicons name="md-location-sharp" size={18} color={theme.colors.gray[400]} />
                <Heading fontSize="xs" color={"gray.400"}>Santo Domingo</Heading>
            </HStack>
        </Box>
        <Box flex={1} w="full" overflow={"hidden"} rounded="3xl">
            <MapView style={{ width:"100%", height: "100%", borderRadius: 20}} />
        </Box>
    </Box>
    )
}