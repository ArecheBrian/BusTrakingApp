import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { PlaceRow } from "../SearchComponents/PlaceRow";
import { Box , VStack , Button , Text , HStack , Divider , Center } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { setDestination , setOrigin } from '../../Redux/Features/SearchSlice';
import { Entypo, FontAwesome, MaterialCommunityIcons, Feather , AntDesign , Ionicons } from '@expo/vector-icons';

export const GooglePlaces = () => {
    const state = useSelector((state)=> state.location)
    const {latitude, longitude} = state.userLocation
    const dispatch = useDispatch();
    return (
    <Box>

    <GooglePlacesAutocomplete
        placeholder='Pick up Location'
        nearbyPlacesAPI='GooglePlacesSearch'
        returnKeyType={'search'}
        onPress={(data, details = null) => {
            console.log(details.geometry.location)
            dispatch(
                setOrigin({
                    location: details.geometry.location,
                    description: data.description
                })
            
            )
        }} 
        enablePoweredByContainer={false}
        suppressDefaultStyles
        styles={{
            container: {
                padding: 10,
                height: '100%',
            },
            listView: {
                position: "absolute",
                top: 235,
                
            },
            separator: {
            backgroundColor: "#efefef",
            height: 2,
            },
            container: {
                position: 'absolute',
                left: 10,
                right: 10,
            },
            textInput: {
                padding: 8,
                backgroundColor: '#eee',
                marginVertical: 5,
                marginLeft: 20,
                borderRadius: 10,
                
                
            }
    }}
    fetchDetails={true}
    query={{
        key: 'AIzaSyC-T865UIZxMwsH_dySj6QQ4uXB2q4zSB4',
        language: 'en',
    }}
    renderRow={(data) => <PlaceRow data={data} /> }
    />

    </Box>
        
    )
}

export const GooglePlaces2 = () => {
    const dispatch = useDispatch();
    return (
    <Box>
    <GooglePlacesAutocomplete
        placeholder='Where to?'
        nearbyPlacesAPI='GooglePlacesSearch'
        returnKeyType={'search'}
        keyboardShouldPersistTaps="always"
        onPress={(data, details = null) => {
            dispatch(
                setDestination({
                    location: details.geometry.location,
                    description: data.description
                })
            
            )
        }} 
        enablePoweredByContainer={false}
        suppressDefaultStyles
        styles={{
            //  container: {
            // padding:7,
            // //  left: 5,
            // //  right: 10,
            // },
            listView: {
            position: "absolute",
            top: 135,
            height: 300,
            width:390,
            marginRight:300,
            marginStart:-70,
             },
            separator: {
            backgroundColor: "#efefef",
            height: 2,
            },
            // container: {
            //     position: 'absolute',
            //     // top:60,
            //     left: 5,
            //     right: 10,
            // },
            // textInput: {
            //     padding: 8,
            //     backgroundColor: '#eee',
            //     marginVertical: 5,
            //     marginLeft: 20,
            //     borderRadius: 10,
                
            // }
              }}
              fetchDetails={true}
            query={{
            key: 'AIzaSyC-T865UIZxMwsH_dySj6QQ4uXB2q4zSB4',
            language: 'en',
        }}
        renderRow={(data) => <PlaceRow data={data} /> }
        />

        </Box>
        
    )
}

export const InputCard = () => {
    return (
        <HStack w={"90%"} bg={"white"} borderRadius={18} shadow={4}>
            <VStack space={3} alignItems={"center"} flex={1} justifyContent={"center"}>
                <Feather name="crosshair" size={18} color="black" />
                <MaterialCommunityIcons name="dots-vertical" size={22} color="black"/>
                <FontAwesome name="location-arrow" size={18} color="black" />
            </VStack>
            <Box flex={4} py={2}>
                <VStack space={2}>
                    <Box>
                        <Text color={"gray.400"}>From</Text>
                        <Text fontSize={16}>Current Location</Text>
                    </Box>
                    <Divider color={"gray.400"} />
                    <Box>
                        <GooglePlaces2/>
                    </Box>
            </VStack>
            </Box>
            <Center flex={1}>
                <Feather name="repeat" size={20} color="black" />
            </Center>
        </HStack>
    )
}