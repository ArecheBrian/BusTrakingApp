import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { PlaceRow } from "../SearchComponents/PlaceRow";
import { Box , VStack , Button , Text } from 'native-base';

export const GooglePlaces = () => {
    return (
    <Box>

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
    return (
    <Box>
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
        query={{
            key: 'AIzaSyC-T865UIZxMwsH_dySj6QQ4uXB2q4zSB4',
            language: 'en',
        }}
        renderRow={(data) => <PlaceRow data={data} /> }
        />

        </Box>
        
    )
}