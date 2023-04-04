import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { PlaceRow } from "../SearchComponents/PlaceRow";
import { Box } from 'native-base';

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
                left: 5,
                right: 10,
            },
            listView: {
                position: "absolute",
                top: 105,
                flexDirection: 'column',
                
            },
            separator: {
            backgroundColor: "#efefef",
            height: 2,
        },
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
             left: 5,
            right: 10,
            },
            listView: {
            position: "absolute",
            top: 55,
             },
            separator: {
            backgroundColor: "#efefef",
            height: 2,
            },
              }}
        query={{
            key: 'AIzaSyC-T865UIZxMwsH_dySj6QQ4uXB2q4zSB4',
            language: 'en',
        }}
        renderRow={(data) => <PlaceRow data={data} /> }
        />

        
    )
}