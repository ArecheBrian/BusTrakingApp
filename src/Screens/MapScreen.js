import { Button, Pressable, Text } from "native-base";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import { fetchBusStops } from "../Redux/Features/StopsSlice";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { testRoute, testRoutes2 } from "../Supabase/Maps/test";

export const MapScreen = () => {
  const state = useSelector((state)=> state?.stops)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchBusStops())
  },[])
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
      region={{
        latitude: 18.486057,
        longitude: -69.931211,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}>
        <Button onPress={()=> testRoutes2()}><Text>dale aqui</Text></Button>
        {/* <Marker coordinate={{latitude:18.482500606238563,longitude:-69.74354570163278}}/>
        <Marker coordinate={{latitude:18.505316149113813,longitude:-70.00220559959963}}/> */}
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
    </View>
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
