import {View , Text , StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const SearchBar  = () => {
    return (
    <View style={{flex: 1 }}>

<GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyC-T865UIZxMwsH_dySj6QQ4uXB2q4zSB4',
        language: 'en',
      }}
    /> 

    </View>
    );
};

export default SearchBar
