import { Box, Center, HStack, VStack, Text, Divider, Heading , Avatar , safeAreaProps , useSafeArea} from "native-base"
import { FontAwesome5, FontAwesome, MaterialCommunityIcons, Feather , AntDesign , Ionicons } from '@expo/vector-icons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { PlaceRow } from "../SearchComponents/PlaceRow";

export const SearchCard = () => {
    return (
    <Box flex={1} bg={"blueGray.50"}>
        <GooglePlacesAutocomplete
      placeholder='Pick up Location'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      enablePoweredByContainer={false}
      suppressDefaultStyles
      styles={{
        container: {
          position: "absolute",
          left: 10,
          right: 10,
        },
        listView: {
          position: "absolute",
          top: 105,
        },
        separator: {
            backgroundColor: "#efefef",
            height: 2,
        },
        textInput: {
            padding: 5,
            borderRadius: 4,
            backgroundColor: '#eee',
            marginVertical: 5,
            marginLeft: 20,
          },
      }}
      query={{
        key: 'AIzaSyC-T865UIZxMwsH_dySj6QQ4uXB2q4zSB4',
        language: 'en',
      }}
      renderRow={(data) => <PlaceRow data={data} /> }
    />
    <GooglePlacesAutocomplete
      placeholder='Where to?'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      enablePoweredByContainer={false}
      suppressDefaultStyles
      styles={{
        container: {
          position: "absolute",
          top: 55,
          left: 10,
          right: 10,
        },
        separator: {
            backgroundColor: "#efefef",
            height: 2,
        },
        textInput: {
            padding: 5,
            borderRadius: 4,
            backgroundColor: '#eee',
            marginVertical: 5,
            marginLeft: 20,
          },
      }}
      query={{
        key: 'AIzaSyC-T865UIZxMwsH_dySj6QQ4uXB2q4zSB4',
        language: 'en',
      }}

      renderRow={(data) => <PlaceRow data={data} /> }
    />

    <Box w={2} h={2} bg="black" position={"absolute"} top={5} left={3} borderRadius={5}></Box>
    <Box w={0.5} h={35} bg="grey" position={"absolute"} top={34} left={4}></Box>
    <Box w={2} h={2} bg="black" position={"absolute"} top={75} left={3}></Box>


    </Box>
    )
}