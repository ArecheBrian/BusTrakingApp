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

export const SearchMap = () => {


    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null);
    const navigation = useNavigation();

    // useEffect(() => {
    //     if (!origin || !destination ) return; 

    //     mapRef.current.fitToSuppliedMakers(["origin", 'destination'],{
    //         edgePadding: { top: 50, right: 50, bottom: 50 , left: 50},
    //     });
    // }, [origin, destination]);

    
 
  return (
    <Box>
        <Top/>
      <MapView 
      ref={mapRef}
      style={styles.map}
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      >

        {origin && destination && (

            <MapViewDirections
                origin={origin.description}
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
        {origin?.location && (
            <Marker
                coordinate={{
                    latitude: origin.location.lat,
                    longitude: origin.location.lng,
                }}
                title="Origin"
                description={origin.description}
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
       </MapView>
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
