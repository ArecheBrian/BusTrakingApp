import { Actionsheet, Box, Button, IconButton, Pressable, Text, useDisclose } from "native-base";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import { fetchBusStops } from "../Redux/Features/StopsSlice";
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
// import { testRoute, testRoutes2 } from "../Supabase/Maps/test";
import { AppBar } from "../Components/NavigationComponents/headerComponents";
import MapViewDirections from "react-native-maps-directions";
import axios from "axios";
import { getDrawerStatusFromState } from "@react-navigation/drawer";



function renderMarker(waypoint) {
  return (
    <Marker
      key={waypoint.key}
      coordinate={waypoint.coordinates}
      anchor={{ x: 0.5, y: 0.5 }}
    >
      <Box size={24} bg={"amber.300"}>mmh</Box>
      <Text>holaa</Text>
    </Marker>
  );
}

export const MapScreen = () => {

  const state = useSelector((state)=> state?.stops)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchBusStops())
  },[])

  // const origin27F = {latitude: 18.495509108163855, longitude: -69.9994633355392}
  // const destination27F = {latitude: 18.48148840699548, longitude: -69.77673818859738}
  
  // const originAbL = {latitude:18.495393308142795,longitude:-69.96517074691565}
  // const destinationAbL = {latitude:18.458109216399393,longitude:-69.93173969481333}

  const originIndp = {latitude:18.427645008973794,longitude:-70.00613511944744}
  const destinationIndp = {latitude:18.48160649419373,longitude:-69.77778741056987}

  // const originJFK = {latitude:18.48307052594377,longitude: -69.9743012539701}
  // const destinationJFK = {latitude:18.516268013923927,longitude:-69.84208604752574}


  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();
  return (
    <>
    <View style={styles.container}>
      <MapView style={styles.map}
      region={{
        latitude: 18.486057,
        longitude: -69.931211,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}>
        <MapViewDirections
          origin={originIndp}
          destination={destinationIndp}
          waypoints={[
            {latitude:18.426759, longitude: -70.006265},
            {latitude:18.426913, longitude: -69.994131},
          ]}
          apikey={"AIzaSyC-T865UIZxMwsH_dySj6QQ4uXB2q4zSB4"}
          strokeColor="red"
          strokeWidth={4}
          renderMarker={renderMarker}
        />

        {/* <MapViewDirections
          origin={origin27F}
          destination={destination27F}
          apikey={"AIzaSyC-T865UIZxMwsH_dySj6QQ4uXB2q4zSB4"}
          mode={"TRANSIT"}
          strokeColor={"red"}
          strokeWidth={3}
        />
        <MapViewDirections
          origin={originAbL}
          destination={destinationAbL}
          apikey={"AIzaSyC-T865UIZxMwsH_dySj6QQ4uXB2q4zSB4"}
          mode={"TRANSIT"}
          strokeColor={"hotpink"}
          strokeWidth={3}
        />
        <MapViewDirections
          origin={{latitude:18.427645008973794,longitude:-70.00613511944744}}
          destination={{latitude:18.47520493597685, longitude:-69.85764442630713}}
          apikey={"AIzaSyC-T865UIZxMwsH_dySj6QQ4uXB2q4zSB4"}
          mode={"TRANSIT"}
          strokeColor={"blue"}
          strokeWidth={3}
        />
        <MapViewDirections
          origin={{latitude:18.47520493597685, longitude:-69.85764442630713}}
          destination={{latitude: 18.48148840699548, longitude: -69.77673818859738}}
          apikey={"AIzaSyC-T865UIZxMwsH_dySj6QQ4uXB2q4zSB4"}
          mode={"TRANSIT"}
          strokeColor={"blue"}
          strokeWidth={3}
        />
        <MapViewDirections
          origin={originJFK}
          destination={destinationJFK}
          apikey={"AIzaSyC-T865UIZxMwsH_dySj6QQ4uXB2q4zSB4"}
          mode={"TRANSIT"}
          strokeColor={"yellow"}
          strokeWidth={3}
        /> */}
       {state.status === "success" &&
        state.stopsData.map((item, index)=> {
          return <Marker key={index} coordinate={{latitude: item.lat, longitude:item.lng }}>
            <Pressable h={"7"} w={"7"} bg={"white"} borderRadius={"full"} alignItems={"center"} justifyContent={"center"}>
              <MaterialCommunityIcons name="bus-stop" size={20} color="#CD0404" />
            </Pressable>
          </Marker>
        })
       }
       {state.status === "pending" && console.log("espera")}
       </MapView>
       {/* <Button onPress={onOpen}>holaaa</Button> */}
       <Actionsheet isOpen={isOpen} onClose={onClose} disableOverlay>
        <Actionsheet.Content>
          <Actionsheet.Item startIcon={<Ionicons name="options-outline" size={24} color="black" />}>Stops</Actionsheet.Item>
          <Actionsheet.Item>Routes</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </View>
    </>
  
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
