import {Actionsheet,Box,IconButton,Pressable,useDisclose,HStack,Icon, VStack, Text, Divider} from "native-base";
import { useEffect ,  useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import { fetchBusStops } from "../Redux/Features/StopsSlice";
import MapViewDirections from "react-native-maps-directions";
import {FontAwesome5,FontAwesome,MaterialCommunityIcons,MaterialIcons,Ionicons} from "@expo/vector-icons";
import { fetchBusRoutes } from "../Redux/Features/RouteSlice";

export const MapScreen = () => {
  const state = useSelector((state) => state.stops);
  const Rstate = useSelector((state)=> state.routes);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchBusStops())
    dispatch(fetchBusRoutes())
  },[showMarker, showDirections])

  const [showDirections, setShowDirections] = useState(false);
  const [showMarker, setShowMarker] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <Box flex={1}>
      <Box pt={10} bg="blueGray.900" w={"full"}>
      <HStack bg="blueGray.900" justifyContent={"flex-end"}>
        <IconButton 
          onPress={onOpen}
          icon={
            <Icon size="xl"as={MaterialCommunityIcons}name="router"color="white"/>}/>
        <Actionsheet isOpen={isOpen} onClose={onClose} disableOverlay>
          <Actionsheet.Content>
            <Actionsheet.Item onPress={() => setShowMarker(!showMarker)}
              startIcon={<FontAwesome name="bus" size={24} color="black" />}>
              Stops
            </Actionsheet.Item>
            <Actionsheet.Item onPress={() => setShowDirections(!showDirections)}
              startIcon={<FontAwesome5 name="route" size={24} color="black" />}>
              Routes
            </Actionsheet.Item>
            <Actionsheet.Item onPress={onClose}
              startIcon={
                <MaterialIcons name="cancel" size={24} color="black" />}>
              cancel
            </Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>
      </HStack>
    </Box>
        <MapView
          style={styles.map}
          region={{
            latitude: 18.486057,
            longitude: -69.931211,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          {/* {showDirections && 
          <HStack bg={"white"} p={3} space={3} alignItems={"center"} justifyContent={"center"} w={"48"} mt={2} ml={2}>
          <Text fontWeight={"bold"}>Independencia</Text>
          <Divider w={8} h={1} _light={{
                    bg: "hotpink"
                  }} _dark={{
                bg: "hotpink"
          }} />
        </HStack>} */}
          {showDirections &&(
            Rstate.routesData.map((item, index)=> {
              return (
                <MapViewDirections
                  origin={item.origen}
                  destination={item.destino}
                  strokeWidth={3}
                  strokeColor="hotpink"
                  apikey={"AIzaSyC-T865UIZxMwsH_dySj6QQ4uXB2q4zSB4"}
                  mode={"TRANSIT"}
                  key={index}
                />
              )
            })
          )}

            {showMarker && (
            state.stopsData.map((item, index) => {
              return (
                <Marker
                  key={index}
                  coordinate={{ latitude: item.lat, longitude: item.lng }}
                  title={item.name}
                >
                  <Pressable
                    h={"7"}
                    w={"7"}
                    bg={"white"}
                    borderRadius={"full"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <MaterialCommunityIcons
                      name="bus-stop"
                      size={20}
                      color="#CD0404"
                    />
                  </Pressable>
                </Marker>
              );
          })
        )
        }
           
        </MapView>
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
