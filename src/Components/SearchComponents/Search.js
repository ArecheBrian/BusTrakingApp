import { Box, Center, HStack, VStack, Text, Divider, Heading , Avatar , safeAreaProps , useSafeArea} from "native-base"
import { Entypo, FontAwesome, MaterialCommunityIcons, Feather , AntDesign , Ionicons } from '@expo/vector-icons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { PlaceRow } from "../SearchComponents/PlaceRow";
import { GooglePlaces, GooglePlaces2 } from "../SearchComponents/GooglePlaces";

export const SearchCard = () => {
    return (
    <Box>
      <HStack w={"90%"} bg={"white"} borderRadius={18} shadow={4}>
      <VStack space={3} alignItems={"center"} flex={1} justifyContent={"center"}>
          <Ionicons name="location" size={24} color="black" />
          <MaterialCommunityIcons name="dots-vertical" size={22} color="black"/>
          <FontAwesome name="location-arrow" size={18} color="black" />
      </VStack>
      <Box flex={4} py={2}>
          <VStack space={2}>
              <Box>
                  <Text color={"gray.400"}>From</Text>
                  <GooglePlaces/>
              </Box>
              <Divider color={"gray.400"} />
              <Box>
                <Text color={"gray.400"}>To</Text>
                <GooglePlaces2/>
              </Box>
      </VStack>
      </Box>
      <Center flex={1}>
          <Feather name="repeat" size={20} color="black" />
      </Center>
  </HStack>
  </Box>
    )
}