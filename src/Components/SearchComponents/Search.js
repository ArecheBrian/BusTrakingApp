import { Box, HStack, VStack, Text, Divider, Heading , ScrollView, Button , Center} from "native-base"
import { Entypo, FontAwesome, MaterialCommunityIcons, Feather , AntDesign , Ionicons } from '@expo/vector-icons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { PlaceRow } from "../SearchComponents/PlaceRow";
import { GooglePlaces, GooglePlaces2  } from "../SearchComponents/GooglePlaces";
import { useNavigation } from '@react-navigation/native';
import { useEffect } from "react";
import { getLocation } from "../../Redux/Features/LocationSlice";
import { useDispatch, useSelector } from "react-redux";
import { InputCard } from './GooglePlaces';

export const SearchCard = () => {

  const state = useSelector((state)=> state.location)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getLocation())
    },[])


  const navigation = useNavigation();
    return (
              <Box top={5} >
                <Box alignItems={'center'} >
                 <InputCard/>
                </Box>
                <VStack alignItems={"center"}  top={35}>
                    <Button onPress={()=> navigation.navigate("SearchMap")} size={"sm"} borderRadius={30} bg={"white"}><Text color={"blueGray.900"} fontSize={15}>Trace Route</Text></Button>
                </VStack>
                <Box top={65}>
                        <Divider  color={"gray.400"} />
                    </Box>
              </Box>
    )
}