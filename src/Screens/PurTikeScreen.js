import React from "react";
import {
  NativeBaseProvider,
  Text,
  Box,
  HStack,
  Image,
  Divider,
  VStack,
  Heading,
  ScrollView,
  useSafeArea,
  Center,
} from "native-base";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { RecentTrips } from "../Components/TiketsComponents/RecentTrips";
import { Location } from "../Components/TiketsComponents/Location"


export const PurTiketScreen = () => {
  return (
    <Box bg={"yellow.400"} flex={1}>
      <Box bg={"yellow.400"} flex={1} alignItems={"center"}>
      <Center w={"90%"} bg={ "yellow.400"} flex={1}>
          <Location/>
      </Center>
      </Box>
      <Box bg={"blueGray.50"} flex={2} borderTopRadius={"40"} alignItems={"center"}pt={7}>
        <Box w={"90%"} mb={3}>
          <Text fontSize={23} fontWeight={"bold"}>
            Recent Trips
          </Text>
        </Box>
        <Center w={"100%"} bg={'amber.300'}>
        <ScrollView >
          <VStack space={4} alignItems={'center'}>
        <RecentTrips/>
        <RecentTrips/>
        <RecentTrips/>
        <RecentTrips/>
        <RecentTrips/>
        <RecentTrips/>
        <RecentTrips/>
        <RecentTrips/>
        <RecentTrips/>
        <RecentTrips/>
          </VStack>
        </ScrollView>
        </Center>
      </Box>
    </Box>
    
  );
};
