import {Actionsheet,Box,IconButton,Pressable,useDisclose,HStack,Icon, Image, Button} from "native-base";
import { useEffect ,  useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import { fetchBusDriRouts } from "../Redux/Features/DriverRouteSlice";
import MapViewDirections from "react-native-maps-directions";
import * as Location from "expo-location"
import { IconsImg } from "../Assets/icons";
import { getLocation } from "../Redux/Features/LocationSlice";
import { fetchBusStops } from "../Redux/Features/StopsSlice";
import { updateTable } from "../Supabase/conducto/getLocation";

export const DriverMapScreen = () => {
  const state = useSelector((state)=> state.profile)
  const Rstate = useSelector((state)=> state.driverR)
  const Lstate = useSelector((state)=> state.location)
  const Sstate = useSelector((state)=> state.stops)
  const [busS, setBus] = useState(null)

  useEffect(()=>{
    updateTable(busS)
  },[busS])

    const getLocationUpdate = async ()=>{
      let {status} = await Location.requestForegroundPermissionsAsync();
      if(status !== 'granted') {
          alert('Noooo ')
          return
      }
      const location = await Location.watchPositionAsync({accuracy: Location.Accuracy.BestForNavigation, timeInterval: 3000, distanceInterval: 10}, (location)=>{
        const { latitude,longitude} = location.coords
        // console.log(latitude,longitude)
        setBus({latitude, longitude})
      })
    }
  const dispatch = useDispatch()
  const {bus, ruta} = state.profileData[0]
  useEffect(()=>{
    dispatch(fetchBusDriRouts(ruta))
    dispatch(fetchBusStops())
    dispatch(getLocation())
    getLocationUpdate()
  },[])
  return (
    <>
      <View style={styles.container}>
        {
          Lstate.status === "success"? 
          <MapView
          style={styles.map}
          region={{
            latitude:Lstate.userLocation.latitude,
            longitude:Lstate.userLocation.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
        }}
        >
          {
            Rstate.status === "success" &&
            <>
            <MapViewDirections
              origin={Rstate.routesData.origen}
              destination={{latitude:18.473404974511556, longitude:-69.8522651741123}}
              strokeWidth={3}
              strokeColor="hotpink"
              apikey={"AIzaSyC-T865UIZxMwsH_dySj6QQ4uXB2q4zSB4"}
              mode={"TRANSIT"}
            />
            <MapViewDirections
              origin={{latitude:18.473404974511556, longitude:-69.8522651741123}}
              destination={Rstate.routesData.destino}
              strokeWidth={3}
              strokeColor="hotpink"
              apikey={"AIzaSyC-T865UIZxMwsH_dySj6QQ4uXB2q4zSB4"}
              mode={"TRANSIT"}
            />
            </>
          }
            <Marker coordinate={busS}>
              <Image source={IconsImg.BusIcon} alt="Alternate Text"
              resizeMode="contain"
              width={12}
              height={12}/>
            </Marker>
            {
              Sstate.status === "success" &&
                Sstate.stopsData.map((item,index)=>{
                  if(item.ruta_id === ruta){
                    return (
                      <Marker
                          key={index}
                          title={item.name}
                          coordinate={{ latitude: item.lat, longitude: item.lng}}
                          >
                          <Pressable
                            h={"3"}
                            w={"3"}
                            bg={"hotpink"}
                            borderRadius={"full"}
                          >
                          </Pressable>
                        </Marker>
                    )
                  }
                })
            }
        </MapView>:
        <MapView
        style={styles.map}/>
        }
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
