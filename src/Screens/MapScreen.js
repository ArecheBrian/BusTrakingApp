import {Actionsheet,Box,IconButton,Pressable,useDisclose,HStack,Icon} from "native-base";
import { useEffect ,  useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import { fetchBusStops } from "../Redux/Features/StopsSlice";
import MapViewDirections from "react-native-maps-directions";
import {FontAwesome5,FontAwesome,MaterialCommunityIcons,MaterialIcons,Ionicons} from "@expo/vector-icons";

export const MapScreen = () => {
  const state = useSelector((state) => state?.stops);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBusStops());
  }, []);
  const origin27F = {
    latitude: 18.495509108163855,
    longitude: -69.9994633355392,
  };
  const destination27F = {
    latitude: 18.48148840699548,
    longitude: -69.77673818859738,
  };
  const originAbL = {
    latitude: 18.495393308142795,
    longitude: -69.96517074691565,
  };
  const destinationAbL = {
    latitude: 18.458109216399393,
    longitude: -69.93173969481333,
  };

  const originIndp = {latitude:18.427645008973794,longitude:-70.00613511944744}
  const destinationIndp = {latitude:18.48160649419373,longitude:-69.77778741056987}

  const originJFK = {
    latitude: 18.48307052594377,
    longitude: -69.9743012539701,
  };
  const destinationJFK = {
    latitude: 18.516268013923927,
    longitude: -69.84208604752574,
  };
  const [showDirections, setShowDirections] = useState(false);
  const [showMarker, setShowMarker] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <View style={styles.container}>
      <Box safeAreaTop bg="blueGray.900" w={"full"}>
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
          {showDirections && (
          <><MapViewDirections
              origin={origin27F}
              destination={destination27F}
              apikey={"AIzaSyC-T865UIZxMwsH_dySj6QQ4uXB2q4zSB4"}
              mode={"TRANSIT"}
              strokeColor={"red"}
              strokeWidth={3} /><MapViewDirections
                origin={originAbL}
                destination={destinationAbL}
                apikey={"AIzaSyC-T865UIZxMwsH_dySj6QQ4uXB2q4zSB4"}
                mode={"TRANSIT"}
                strokeColor={"hotpink"}
                strokeWidth={3} /><MapViewDirections
                origin={{
                  latitude: 18.427645008973794,
                  longitude: -70.00613511944744,
                }}
                destination={{
                  latitude: 18.47520493597685,
                  longitude: -69.85764442630713,
                }}
                apikey={"AIzaSyC-T865UIZxMwsH_dySj6QQ4uXB2q4zSB4"}
                mode={"TRANSIT"}
                strokeColor={"blue"}
                strokeWidth={3} /><MapViewDirections
                origin={{
                  latitude: 18.47520493597685,
                  longitude: -69.85764442630713,
                }}
                destination={{
                  latitude: 18.48148840699548,
                  longitude: -69.77673818859738,
                }}
                apikey={"AIzaSyC-T865UIZxMwsH_dySj6QQ4uXB2q4zSB4"}
                mode={"TRANSIT"}
                strokeColor={"blue"}
                strokeWidth={3} />
                <MapViewDirections
                origin={originJFK}
                destination={destinationJFK}
                apikey={"AIzaSyC-T865UIZxMwsH_dySj6QQ4uXB2q4zSB4"}
                mode={"TRANSIT"}
                strokeColor={"yellow"}
                strokeWidth={3} />
                </> 
          )}
          {showMarker && (
            <>
            {state.status === "success" &&
            state.stopsData.map((item, index) => {
              return (
                <Marker
                  key={index}
                  coordinate={{ latitude: item.lat, longitude: item.lng }}
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
          })}
            </>
          )
          }
          {state.status === "pending" && console.log("espera")}
        </MapView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
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
