import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { PlaceRow } from "../SearchComponents/PlaceRow";
import { Box , VStack , Button , Text } from 'native-base';
import { useDispatch } from 'react-redux';
import { setDestination , setOrigin } from '../../Redux/Features/SearchSlice';


export const GooglePlaces = () => {

    const dispatch = useDispatch();

    return (
    <Box>

    <GooglePlacesAutocomplete
        placeholder='Pick up Location'
        nearbyPlacesAPI='GooglePlacesSearch'
        returnKeyType={'search'}
        onPress={(data, details = null) => {
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
             container: {
            padding:7,
            //  left: 5,
            //  right: 10,
            },
            listView: {
            position: "absolute",
            top: 175,
             },
            separator: {
            backgroundColor: "#efefef",
            height: 2,
            },
            container: {
                position: 'absolute',
                top:60,
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