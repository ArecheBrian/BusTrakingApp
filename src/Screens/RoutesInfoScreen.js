import { Box, Actionsheet, IconButton, Heading, HStack, StatusBar, useDisclose, Icon, Text, ScrollView, VStack, Divider, ZStack, Pressable, Image } from "native-base"
import { Feather } from '@expo/vector-icons';
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MapViewDirections from "react-native-maps-directions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBusStops } from "../Redux/Features/StopsSlice";
import { supabase } from "../../lib/supabase";
import { IconsImg } from "../Assets/icons";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export const RoutesInfoScreen =({route})=> {
  const navigation = useNavigation()
  const { origen, destino, id, name } = route.params;
  const state = useSelector((state)=> state.stops)
  const dispatch = useDispatch()
  const [driver, setDriver] = useState(origen)
  const getDriverLocation =async()=>{
    const bus = supabase.channel('custom-all-channel')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'bus' },
      (payload) => {
         const driverL = payload.new.coordenadas
         setDriver(driverL)
      }
    )
    .subscribe()
  }
  const getFLocation =async() =>{
    let { data, error } = await supabase
    .from('bus')
    .select('coordenadas').eq("id", id)
    setDriver(data[0].coordenadas)
  }
  getDriverLocation()
  useEffect(()=>{
    dispatch(fetchBusStops())
    getFLocation()
  },[])

  const { isOpen, onOpen, onClose} = useDisclose()
  const waypoints = {latitude:18.4732594673046 , longitude: -69.852133474418}
    return (
        <Box flex={1} bg={"blueGray.500"}>
            <Box w={"full"}>
                <StatusBar bg="#3700B3" barStyle="light-content" />
                <Box safeAreaTop bg="blueGray.900"/>
                <HStack h={"16"} bg="blueGray.900" justifyContent={"space-between"} px={"3"}>
                    <IconButton
                    icon={<Icon size={"2xl"} as={Ionicons} name="ios-chevron-back-outline" color="white" />}
                    onPress={()=> navigation.navigate("RoutesL")}/>
                    <IconButton
                    icon={<Icon size={"2xl"} as={Feather} name="info" color="white" />}
                    onPress={onOpen}/>
                </HStack>
            </Box>
          <View style={styles.container}>
          <MapView style={styles.map}
            region={{
                latitude: driver?.latitude,
                longitude: driver?.longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            }}>
               <MapViewDirections
                  origin={origen}
                  destination={waypoints}
                  strokeWidth={3}
                  strokeColor="#2F58CD"
                  apikey={"AIzaSyC-T865UIZxMwsH_dySj6QQ4uXB2q4zSB4"}
                  mode={"TRANSIT"}
                />
                <MapViewDirections
                  origin={waypoints}
                  destination={destino}
                  strokeWidth={3}
                  strokeColor="#2F58CD"
                  apikey={"AIzaSyC-T865UIZxMwsH_dySj6QQ4uXB2q4zSB4"}
                  mode={"TRANSIT"}
                />
                
                {
                  state.status === "success" && 
                    state.stopsData.map((item,index)=>{
                      if (item.ruta_id === id){
                        return(
                          <Marker
                          key={index}
                          title={item.name}
                          coordinate={{ latitude: item.lat, longitude: item.lng}}
                          >
                          <Pressable
                            h={"3"}
                            w={"3"}
                            bg={"#2F58CD"}
                            borderRadius={"full"}
                          >
                          </Pressable>
                        </Marker>
                        )
                      }
                    })
                }
                  <Marker coordinate={driver}>
                    <Image source={IconsImg.BusIcon} alt="Alternate Text"
                    resizeMode="contain"
                    width={12}
                    height={12}/>
                  </Marker>
            </MapView>
            </View>
              <Actionsheet isOpen={isOpen} onClose={onClose} disableOverlay>
                <Actionsheet.Content>
                  <Box w="100%" h={"100%"} pb={"8"}>
                    <HStack flex={1} bg={"blueGray.900"} borderRadius={"2xl"} alignItems={"center"} px={4}>
                      <Heading color={"white"}>{name}</Heading>
                    </HStack>
                    <ZStack flex={5}>
                    <Box bg={"blueGray.900"} h={1000} w={2} ml={9}></Box>
                    <Box flex={1} w={"full"}>
                      <ScrollView>
                          <VStack space={12} py={4} pl={2}>
                            {
                              state.status === "success" && 
                                state.stopsData.map((item,index)=>{
                                  if (item.ruta_id === id){
                                    return(
                                      <HStack space={3} alignItems={"center"} key={index}>
                                        <Box size={16} borderWidth={6} bg={"white"} borderRadius={"full"} alignItems={"center"} justifyContent={"center"}>
                                          <MaterialCommunityIcons name="bus-marker" size={27} color="black" />
                                        </Box>
                                        <Heading size={"xs"}>{item.name}</Heading>
                                        
                                      </HStack>                    
                                    )
                                  }
                                })
                            }
                          </VStack>
                      </ScrollView>
                    </Box>
                    </ZStack>
                  </Box>
                </Actionsheet.Content>
              </Actionsheet>
        </Box>
    );
  }

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
  