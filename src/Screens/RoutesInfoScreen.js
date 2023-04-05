import { Box, Actionsheet, IconButton, Heading, HStack, StatusBar, useDisclose, Icon, Text, ScrollView, VStack, Divider, ZStack } from "native-base"
import { Feather } from '@expo/vector-icons';
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";
import StepIndicator from 'react-native-step-indicator';
import { Dimensions } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

// importante de aprender 
// Dimensions.get("screen").height

export const RoutesInfoScreen =()=> {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose()
    return (
        <Box flex={1} bg={"blueGray.500"}>
            <Box w={"full"}>
                <StatusBar bg="#3700B3" barStyle="light-content" />
                <Box safeAreaTop bg="blueGray.900"/>
                <HStack h={"16"} bg="blueGray.900" justifyContent={"space-between"} px={"3"}>
                    <Heading color="white" alignSelf={"center"}>MyBMTC</Heading>
                    <IconButton
                    icon={<Icon size={"2xl"} as={Feather} name="info" color="white" />}
                    onPress={onOpen}/>
                </HStack>
            </Box>
          <View style={styles.container}>
          <MapView style={styles.map}
            region={{
                latitude: 18.486057,
                longitude: -69.931211,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            }}>
            </MapView>
            </View>
              <Actionsheet isOpen={isOpen} onClose={onClose} disableOverlay>
                <Actionsheet.Content>
                  <Box w="100%" h={"100%"} pb={"8"}>
                    <HStack flex={1} bg={"blueGray.900"} borderRadius={"2xl"} alignItems={"center"} px={4}>
                      <Heading color={"white"}> nombre de parada</Heading>
                    </HStack>
                    <ZStack flex={5}>
                    <Box bg={"blueGray.900"} h={1000} w={2} ml={9}></Box>
                    <Box flex={1} w={"full"}>
                      <ScrollView>
                          <VStack space={12} py={4} pl={2}>
                            <HStack space={3} alignItems={"center"}>
                              <Box size={16} borderWidth={6} bg={"white"} borderRadius={"full"} alignItems={"center"} justifyContent={"center"}>
                                <MaterialCommunityIcons name="bus-marker" size={27} color="black" />
                              </Box>
                              <Heading size={"sm"}>Av. Independencia Despues C/ A</Heading>
                            </HStack>
                            <HStack space={3} alignItems={"center"}>
                              <Box size={16} borderWidth={6} bg={"white"} borderRadius={"full"} alignItems={"center"} justifyContent={"center"}>
                                <MaterialCommunityIcons name="bus-marker" size={27} color="black" />
                              </Box>
                              <Heading size={"sm"}>Av. Independencia Despues C/ A</Heading>
                            </HStack>
                            <HStack space={3} alignItems={"center"}>
                              <Box size={16} borderWidth={6} bg={"white"} borderRadius={"full"} alignItems={"center"} justifyContent={"center"}>
                                <MaterialCommunityIcons name="bus-marker" size={27} color="black" />
                              </Box>
                              <Heading size={"sm"}>Av. Independencia Despues C/ A</Heading>
                            </HStack>
                            <HStack space={3} alignItems={"center"}>
                              <Box size={16} borderWidth={6} bg={"white"} borderRadius={"full"} alignItems={"center"} justifyContent={"center"}>
                                <MaterialCommunityIcons name="bus-marker" size={27} color="black" />
                              </Box>
                              <Heading size={"sm"}>Av. Independencia Despues C/ A</Heading>
                            </HStack>
                            <HStack space={3} alignItems={"center"}>
                              <Box size={16} borderWidth={6} bg={"white"} borderRadius={"full"} alignItems={"center"} justifyContent={"center"}>
                                <MaterialCommunityIcons name="bus-marker" size={27} color="black" />
                              </Box>
                              <Heading size={"sm"}>Av. Independencia Despues C/ A</Heading>
                            </HStack>
                            <HStack space={3} alignItems={"center"}>
                              <Box size={16} borderWidth={6} bg={"white"} borderRadius={"full"} alignItems={"center"} justifyContent={"center"}>
                                <MaterialCommunityIcons name="bus-marker" size={27} color="black" />
                              </Box>
                              <Heading size={"sm"}>Av. Independencia Despues C/ A</Heading>
                            </HStack>
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
  