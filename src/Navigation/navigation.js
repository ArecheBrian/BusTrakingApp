import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { HomeScreen } from "../Screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {SignInScreen} from "../Screens/SignInScreen"
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MapScreen } from '../Screens/MapScreen';
import { RecentTrips } from '../Screens/RecentTrips';
import { RoutesScreen } from '../Screens/RoutesScreen';
import { AccountScreen } from './../Screens/AccountScreen';
import { PaymentScreen } from './../Screens/PaymentScreen';
import { AddcardScreen } from './../Screens/AddcardScreen';
import { WelcomeScreen } from '../Screens/WelcomeScreen';
import { RegisterScreen } from '../Screens/RegisterScreen';
import { Feather,Fontisto , Octicons } from '@expo/vector-icons';
import {DrawerActions} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { supabase } from '../../lib/supabase';
import { resetSlice } from '../Redux/Features/UserSlice';


const MyTabs = () => {
  const Tabs = createMaterialBottomTabNavigator();
  return (
    <Tabs.Navigator 
      initialRouteName="Map"
      activeColor="#ff8c00"
      barStyle={{
        backgroundColor: "white",
        paddingTop:20,
        height:80,
        // borderTopLeftRadius: 28,
        // borderTopRightRadius: 28,
        overflow: "hidden",
        // position: "absolute"
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
           return <Feather name="calendar" size={24} color={color} />
          },
      }} />
      <Tabs.Screen 
        name="my account" 
        component={AccountScreen}
        options= {{
          tabBarIcon: ({color}) => {
            return <Feather name="search" size={24} color={color} />
          }
        }} />
      <Tabs.Screen 
        name="Test2" 
        component={RecentTrips}
        options={{
          tabBarIcon: ({color}) => {
            return <Fontisto name="wallet" size={24} color={color} />
          }
        }} />
      <Tabs.Screen 
        name="Routes" 
        component={RoutesScreen}
        options={{
          tabBarIcon: ({color}) => {
            return <Octicons name="gift" size={24} color={color} />
          }
        }} />
    </Tabs.Navigator>
  )
}

function CustomDrawerContent(props) {
  const dispatch = useDispatch()
  const logOutHandler = async () => {
    const {data, error} = await supabase.auth.signOut()
    dispatch(resetSlice())
  }
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Log Out" onPress={() => logOutHandler()} />
    </DrawerContentScrollView>
  );
}

const PrivateNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator 
      initialRouteName="HomeD"
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="HomeD" component={MyTabs}/>
      <Drawer.Screen options={{headerShown:false}} name="My Account" component={AccountScreen}/>
    </Drawer.Navigator>
  );
}

const PublicNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen options={{headerShown: false}} name="Welcome" component={WelcomeScreen}/>
            <Stack.Screen options={{headerShown: false}} name="SignIn" component={SignInScreen}/>
            <Stack.Screen  options={{headerShown: false}} name="Register" component={RegisterScreen}/>
        </Stack.Navigator>
    )
}

export const BusTrakingApp = () => {
  const state = useSelector((state)=> state.Users)
  const session = state.session
    return (
        <NavigationContainer>
          {
            session ? <PrivateNavigation/> : <PublicNavigation/>
          }
            
        </NavigationContainer>
    )
}