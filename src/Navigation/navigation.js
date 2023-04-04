import {createDrawerNavigator,DrawerContentScrollView,DrawerItem,
} from "@react-navigation/drawer";
import { Box, HStack, Text, VStack, Avatar } from "native-base";
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
import { Fontisto,Octicons,Entypo,AntDesign,Feather,MaterialIcons,resetSlice,FontAwesome5  } from "@expo/vector-icons";
import { SearchBar }  from './../Screens/SearchBar';
import { AddcardScreen } from "../Screens/AddcardScreen";
import { PaymentScreen } from "../Screens/PaymentScreen";

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
        component={RoutesScreen}
        options={{
          tabBarIcon: ({color}) => {
            return <FontAwesome5 name="route" size={24} color={color} />
          }
        }} />
         <Tabs.Screen 
        name="Search" 
        component={SearchBar}
        options={{
          tabBarIcon: ({color}) => {
            return <FontAwesome5 name="route" size={24} color={color} />
          }
        }} />
         
    </Tabs.Navigator>
  );
};

function CustomDrawerContent(props) {
  const dispatch = useDispatch();
  const logOutHandler = async () => {
    const { data, error } = await supabase.auth.signOut();
    dispatch(resetSlice());
  };
  return (
    <DrawerContentScrollView {...props} >
        <VStack m={6} >
          <HStack >
              <Avatar
                size="xl"
                bg="green.500"
                source={{
                  uri: "https://media.licdn.com/dms/image/D4E03AQEAcEhwmNPgvw/profile-displayphoto-shrink_800_800/0/1670947325218?e=2147483647&v=beta&t=MfoJmHfzb9S7uNKmK9PDOSAWiqUuC5Ab98dWgvH0IDQ",
                }}
              ></Avatar>
            <Box  pl={"24"}>
              <Feather name="edit-2" size={24} color="black" />
            </Box>
          </HStack>
          <Text fontWeight="bold" fontSize="2xl">
            Elvis Emanuel
          </Text>
          <Text fontSize="lg">Elvisdeveloper@gmail.com</Text>
        </VStack>
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
        icon={() => <Feather name="sun" size={24} color="black" />}
        label="Switch Mode"
        onPress={() => {props.navigation.navigate('SwitchMode')}}
      />
      <DrawerItem
        labelStyle={{ marginLeft: -18 }}
        icon={() => <MaterialIcons name="feedback" size={24} color="black" />}
        label="Feedback"
        onPress={() => {props.navigation.navigate('Feedback')}}
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
      <DrawerContentScrollView {...props}>
        <Box mt={"20"}>
      <DrawerItem
        labelStyle={{ marginLeft: -18 }}
        icon={() => <MaterialIcons name="logout" size={24} color="black" />}
        label="Log Out"
        onPress={() => logOutHandler()}
      />
      </Box>
      </DrawerContentScrollView>
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
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#ffd42f",
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
    </Drawer.Navigator>
  );
};

const PublicNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Welcome" 
    screenOptions={{ headerStyle:
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
      {session ? <PrivateNavigation /> : <PublicNavigation />}
    </NavigationContainer>
  );
};
