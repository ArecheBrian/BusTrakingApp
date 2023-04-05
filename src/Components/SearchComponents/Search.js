import { Box, Center, HStack, VStack, Text, Divider, Heading , Avatar , safeAreaProps , useSafeArea , Button} from "native-base"
import { Entypo, FontAwesome, MaterialCommunityIcons, Feather , AntDesign , Ionicons } from '@expo/vector-icons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { PlaceRow } from "../SearchComponents/PlaceRow";
import { GooglePlaces, GooglePlaces2 } from "../SearchComponents/GooglePlaces";

export const SearchCard = () => {
    return (
              <Box py={5} >
                <VStack>
                    <GooglePlaces/>
                    <GooglePlaces2/>
                </VStack>
                <Box w={2} h={2} backgroundColor={'white'} position={'absolute'} top={10} left={2.5} borderRadius={5} ></Box>
                <Box w={0.5} h={10} backgroundColor={'white'} position={'absolute'} top={55} left={3} ></Box>
                <Box w={2} h={2} backgroundColor={'white'} position={'absolute'} top={105} left={2.5}></Box>
            
                <VStack pl={2} justifyContent={'flex-start'}  top={125} >
                  <HStack alignItems={"center"} >
                       <VStack bg={"gray.400"} p={1} borderRadius={50} mr={15} >
                         <Entypo name="location-pin" size={24} color="white" />
                       </VStack>
                       <Text color={"white"} bold fontSize={15}>Current Location</Text>
                  </HStack>
                </VStack>
                <VStack alignItems={"center"}  top={135}>
                    <Button size={"sm"} borderRadius={30} bg={"white"}><Text color={"blueGray.900"} fontSize={15}>Trazar Ruta</Text></Button>
                </VStack>
                <Box top={165}>
                        <Divider  color={"gray.400"} />
                    </Box>
              </Box>
    )
}