import { StyleSheet, View , useSafeArea } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
// import { testRoute, testRoutes2 } from "../Supabase/Maps/test";
import MapViewDirections from "react-native-maps-directions";
import { useState, useRef } from "react";
import { useNavigation } from '@react-navigation/native';
import { SearchCard } from './../Components/SearchComponents/Search';
import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin } from './../Redux/Features/SearchSlice';
import { Ionicons } from '@expo/vector-icons';
import { useEffect } from "react-native"
import { Top } from "../Components/SearchComponents/TopComponent";
import { Box, } from "native-base"
import { getLocation } from "../Redux/Features/LocationSlice";
import { useDispatch } from "react-redux";


export const SearchMap = () => {

  const state = useSelector((state)=> state.location)
  const {latitude, longitude} = state.userLocation
  const dispatch = useDispatch();

    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null);
    const navigation = useNavigation();

  return (

    <Box flex={1} w="full" overflow={"hidden"} rounded="3xl">
        {state.status === "success"?
    <MapView ref={mapRef} style={styles.map}
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

{state.userLocation && destination && (

        <MapViewDirections
        ma
            origin={state.userLocation}
            destination={destination.description}
            apikey={"AIzaSyC-T865UIZxMwsH_dySj6QQ4uXB2q4zSB4"}
            mode={"TRANSIT"}
            strokeColor={"red"}
            strokeWidth={4}
            optimizeWaypoints={true}
            onReady={result => {
                mapRef.current.fitToCoordinates(result.coordinates, {
                    edgePadding: {
                        right: 30,
                        bottom: 300,
                        left: 30,
                        top:100

                    }
                })
              }}
            
        />
    )}
    {state.userLocation?.location && (
        <Marker
            coordinate={{
                latitude: state.userLocation.latitude,
                longitude: state.userLocation.longitude,
            }}
            title="Origin"
            description={state.userLocation.description}
            identifier="origin"

        />
    )}
    {destination?.location && (
        <Marker
            coordinate={{
                latitude: destination.location.lat,
                longitude: destination.location.lng,
            }}
            title="destination"
            description={destination.description}
            identifier="destination"

        />
    )}
    </MapView>: <MapView style={{ width:"100%", height: "100%"}}/>
    }
    </Box>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
