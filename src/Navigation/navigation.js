import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { HomeScreen } from "../Screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RegisterScreen } from "../Screens/RegisteScreen"
import {SignInScreen} from "../Screens/SignInScreen"
import { WelcomeScreen } from "../Screens/WelcomeScreen"
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { MapScreen } from '../Screens/MapScreen';
import { RecentTrips } from '../Screens/RecentTrips';
import { RoutesScreen } from '../Screens/RoutesScreen';
import { AccountScreen } from './../Screens/AccountScreen';
import { TestScreen } from '../Screens/TestScreen';

const MyTabs = () => {
  const Tabs = createMaterialBottomTabNavigator();
  return (
    <Tabs.Navigator initialRouteName="HomeB">
      <Tabs.Screen name="Map" component={MapScreen}/>
      <Tabs.Screen name="HomeB" component={HomeScreen}/>
      <Tabs.Screen name="Test2" component={RecentTrips}/>
      <Tabs.Screen name="Routes" component={RoutesScreen}/>
      <Tabs.Screen name="test" component={TestScreen}/>
    </Tabs.Navigator>
  )
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Log Out" onPress={() => alert('Salir')} />
    </DrawerContentScrollView>
  );
}

const MyDrawer = () => {
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

const MyStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen options={{title: "Welcome"}} name="Welcome" component={WelcomeScreen}/>
            <Stack.Screen name="SignIn" component={SignInScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
            <Stack.Screen name="Home" component={MyDrawer} options={{
              headerShown: false
            }} />
        </Stack.Navigator>
    )
}
export const BusTrakingApp = () => {
    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}