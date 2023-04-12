import {createDrawerNavigator,DrawerContentScrollView,DrawerItem,
} from "@react-navigation/drawer";
import { Box, HStack, Text, VStack, Avatar, Center, Skeleton } from "native-base";
import { HomeScreen } from "../Screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignInScreen } from "../Screens/SignInScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MapScreen } from "../Screens/MapScreen";
import { RecentTrips } from "../Screens/RecentTrips";
import { RoutesScreen } from "../Screens/RoutesScreen";
import { AccountScreen } from "./../Screens/AccountScreen";
import { WelcomeScreen } from "../Screens/WelcomeScreen";
import { RegisterScreen } from "../Screens/RegisterScreen";
import { useDispatch, useSelector } from "react-redux";
import { supabase } from "../../lib/supabase";
import { MaterialCommunityIcons,Entypo,AntDesign,Feather,MaterialIcons,resetSlice,FontAwesome5  } from "@expo/vector-icons";
import { SearchBar }  from './../Screens/SearchBar';
import { AddcardScreen } from "../Screens/AddcardScreen";
import { PaymentScreen } from "../Screens/PaymentScreen";
import { RoutesInfoScreen } from "../Screens/RoutesInfoScreen";
import { SearchMap } from "../Screens/SearchMap";
import { useEffect } from "react";
import { getUserProfile } from "../Redux/Features/ProfileSlice";
import { ScannerScreen } from "../Screens/ScannerScreen"
import { DriverMapScreen } from "../Screens/DriverMapScreen";
import { TicketScreen } from "../Screens/TicketScreen";

const ConductorScreens = () =>{
  const Tabs = createMaterialBottomTabNavigator();
  return (
    <Tabs.Navigator 
      initialRouteName="HomeB"
      activeColor="#ff8c00"
      barStyle={{
        backgroundColor: "white",
        paddingTop:20,
        height:90,
        overflow: "hidden",
      }}
      screenOptions={{
        tabBarLabel: false,
      }}>
        <Tabs.Screen 
        name="Scanner" 
        component={ScannerScreen}
        options={{
          tabBarIcon: ({color}) => {
            return <MaterialIcons name="qr-code-scanner" size={24} color={color} />
          }
        }} />
        <Tabs.Screen 
        name="DriverMap" 
        component={DriverMapScreen}
        options={{
          tabBarIcon: ({color}) => {
            return <FontAwesome5 name="map-marked-alt" size={24} color={color} />
          }
        }} />
         
    </Tabs.Navigator>
  );
}

const MyTabs = () => {
  const Tabs = createMaterialBottomTabNavigator();
  return (
    <Tabs.Navigator 
      initialRouteName="HomeB"
      activeColor="#ff8c00"
      barStyle={{
        backgroundColor: "white",
        paddingTop:20,
        height:90,
        overflow: "hidden",
      }}
      screenOptions={{
        tabBarLabel: false,
      }}>
      <Tabs.Screen name="Map" component={MapScreen}
        options={{
         tabBarIcon: ({color}) => {
          return <Feather name="map" size={24} color={color} />
        }
      }} />
      <Tabs.Screen 
        name="HomeB" 
        component={HomeScreen}
        options= {{
         tabBarIcon: ({color}) => {
           return <Feather name="search" size={24} color={color} />
          },
      }} />
      <Tabs.Screen 
        name="Routes" 
        component={RoutesNavigation}
        options={{
          tabBarIcon: ({color}) => {
            return <FontAwesome5 name="route" size={24} color={color} />
          }
        }} />
        <Tabs.Screen 
        name="Ticket" 
        component={TicketScreen}
        options={{
          tabBarIcon: ({color}) => {
            return <MaterialCommunityIcons name="qrcode-scan" size={24} color={color} />
          }
        }} />
    </Tabs.Navigator>
  );
};

const RoutesNavigation = () =>{
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName="RoutesL">
      <Stack.Screen name="RoutesL" component={RoutesScreen} options={{ headerShown: false}}/>
      <Stack.Screen name="RoutesInfo" component={RoutesInfoScreen} options={{ headerShown: false}}/>
    </Stack.Navigator>
  )
}

function CustomDrawerContent(props) {
  const dispatch = useDispatch();
  const state = useSelector((state)=> state.Users)
  const logOutHandler = async () => {
    const { data, error } = await supabase.auth.signOut();
    dispatch(resetSlice());
  };

  return (
    <DrawerContentScrollView {...props} >
        <VStack bg={"blueGray.900"} p={6}>
          <HStack>
              <Avatar
                size="xl"
                bg="green.500"
                source={{
                  uri: "https://media.licdn.com/dms/image/D4E03AQEAcEhwmNPgvw/profile-displayphoto-shrink_800_800/0/1670947325218?e=2147483647&v=beta&t=MfoJmHfzb9S7uNKmK9PDOSAWiqUuC5Ab98dWgvH0IDQ",
                }}
              ></Avatar>
            <Box  pl={"24"}>
              <Feather name="edit-2" size={24} color="white" />
            </Box>
          </HStack>
          <Text fontWeight="bold" fontSize="2xl" color="white">
            {state.session.session.user.user_metadata.full_name}
          </Text>
          <Text color="white" fontSize="lg">{state.session.session.user.email}</Text>
        </VStack>
        <VStack bg={"white"} h={"96"} pt={8} space={4}>
        <DrawerItem
        labelStyle={{ marginLeft: -18 }}
        icon={() => <Entypo name="home" size={24} color="black" />}
        label="Home"
        onPress={() => {props.navigation.navigate('Home')}}
        
      />
      <DrawerItem
        labelStyle={{ marginLeft: -18 }}
        icon={() => <AntDesign name="user" size={24} color="black" />}
        label="MyAccount"
        onPress={() => {props.navigation.navigate('MyAccount')}}
      />
      <DrawerItem
        labelStyle={{ marginLeft: -18 }}
        icon={() => <AntDesign name="customerservice" size={24} color="black" />}
        label="Help"
        onPress={() => {props.navigation.navigate('Help')}}
      />
      <DrawerItem
        labelStyle={{ marginLeft: -18 }}
        icon={() => <Feather name="help-circle" size={24} color="black" />}
        label="About us"
        onPress={() => {props.navigation.navigate('Aboutus')}}
      />
        </VStack>
        <Box bg={"white"} h={"96"} justifyContent={"center"}>
      <DrawerItem
        labelStyle={{ marginLeft: -18 }}
        icon={() => <MaterialIcons name="logout" size={24} color="black" />}
        label="Log Out"
        onPress={() => logOutHandler()}
      />
        </Box>
    </DrawerContentScrollView>
  );
}
const PaymentsNavigation = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName="PaymentsHome">
      <Stack.Screen name="PaymentsHome" options={{ headerShown: false }} component={AccountScreen}/>
      <Stack.Screen name="cards" options={{ headerShown: false }} component={PaymentScreen}/>
      <Stack.Screen name="addcards" options={{ headerShown: false }} component={AddcardScreen}/>
    </Stack.Navigator>
  )
}


const PrivateNavigation = () => {
  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();
  const state = useSelector((state) => state.Users);
  const Pstate = useSelector((state)=> state.profile)
  const dispatch = useDispatch()
  const id = state.session.session.user.id
  useEffect(()=>{
    dispatch(getUserProfile(id))
  },[])


  return (
    <>
    {Pstate.status === "success"?
      Pstate.profileData[0].rol === "conductor"?
      <ConductorScreens/>
    :
    <Drawer.Navigator
    screenOptions={{
      drawerStyle: {
        backgroundColor: "#0f172a",
        width: "75%",
      },
    }}
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen options={{ headerShown: false }} name="Home"component={MyTabs} />
    <Drawer.Screen name="MyAccount" options={{ headerShown: false }} component={PaymentsNavigation} />
    <Drawer.Screen name="SwitchMode" options={{ headerShown: false }}component={MyTabs} />
    <Drawer.Screen name="Feedback" options={{ headerShown: false }}component={MyTabs} />
    <Drawer.Screen name="Help" options={{ headerShown: false }}component={MyTabs} />
    <Drawer.Screen name="Aboutus" options={{ headerShown: false }}component={MyTabs} />
    <Stack.Screen name="Search" options={{ headerShown: false }} component={SearchBar}/>
    <Stack.Screen name="SearchMap" options={{ headerShown: false }} component={SearchMap}/>
  </Drawer.Navigator>
    
    :
    <Center flex={1} bg={"white"}>
      <VStack flex={1} w={"full"} borderWidth="1" alignItems={"center"} space={8} overflow="hidden" rounded="md" _dark={{
        borderColor: "coolGray.500"
        }} _light={{
      borderColor: "coolGray.200"
      }}>
         <Skeleton h="32" w="full"/>
         <Skeleton px="4" my="2" rounded="sm" startColor="primary.100" />
        <Skeleton.Text px="4" />
        <Skeleton flex={1} w="90%"/>
        <Skeleton h="24" w="full"/>
      </VStack>
    </Center>
    }
    </>
  );
};

const PublicNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Welcome" 
    screenOptions={{ headerStyle:-
    {
      backgroundColor: "#ffd42f",
          width: "75%",
    } ,
    }}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Welcome"
        component={WelcomeScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignIn"
        component={SignInScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Register"
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};

export const BusTrakingApp = () => {
  const state = useSelector((state) => state.Users);
  const session = state.session;
  return (
    <NavigationContainer>
      {session ? 
      <PrivateNavigation /> 
      : <PublicNavigation />}
    </NavigationContainer>
  );
};
