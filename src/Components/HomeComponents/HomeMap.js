import { Box, Heading, HStack, Pressable } from "native-base"
import { Ionicons} from '@expo/vector-icons';
import MapView, { Marker } from "react-native-maps";
import theme from "../../Constans/theme";
import { useEffect } from "react";
import { getLocation } from "../../Redux/Features/LocationSlice";
import { useDispatch, useSelector } from "react-redux";
import { MaterialIcons } from '@expo/vector-icons';

export const HomeMap = () => {
    const state = useSelector((state)=> state.location)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getLocation())
    },[])
    console.log(state.userLocation)
    return (
    <Box py="2" w={"90%"} space={2} alignItems="center" flex={6}>
        <Box w="full" py={3}>
            <Heading fontSize="lg">Current Location</Heading>
            <HStack alignItems={"center"}>
                <Ionicons name="md-location-sharp" size={18} color={theme.colors.gray[400]} />
                <Heading fontSize="xs" color={"gray.400"}>Santo Domingo</Heading>
            </HStack>
        </Box>
        <Box flex={1} w="full" overflow={"hidden"} rounded="3xl">
            {state.status === "success"?
        <MapView style={{ width:"100%", height: "100%", borderRadius: 20}}
        region={{
            latitude:state.userLocation.latitude,
            longitude:state.userLocation.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
        }}
        showsUserLocation={true}
        userLocationPriority={'high'}
        followsUserLocation={true}
        userLocationFastestInterval={5000}
        >
        {/* <Marker coordinate={{latitude: state.userLocation.latitude,longitude:state.userLocation.longitude}}>
            <Pressable h={"10"}  w={"10"} bg={"white"} borderRadius={"full"} alignItems={"center"} justifyContent={"center"}>
                <MaterialIcons name="location-history" size={35}
                      color="#009EFF" />
            </Pressable>
        </Marker> */}
        </MapView>: <MapView style={{ width:"100%", height: "100%", borderRadius: 20}}/>
        }
        </Box>
    </Box>
    )
}