import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { HomeScreen } from "../Screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RegisterScreen } from "../Screens/RegisteScreen"
import {SignInScreen} from "../Screens/SignInScreen"
import { WelcomeScreen } from "../Screens/WelcomeScreen"
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TestScreen2 } from '../Screens/TestScreen2';
import { MapScreen } from '../Screens/MapScreen';

const MyTabs = () => {
  const Tabs = createMaterialBottomTabNavigator();
  return (
    <Tabs.Navigator initialRouteName="HomeB">
      <Tabs.Screen name="Map" component={MapScreen}/>
      <Tabs.Screen name="HomeB" component={HomeScreen}/>
      <Tabs.Screen name="Test2" component={TestScreen2}/>
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
      <Drawer.Screen name="HomeD" component={MyTabs} />
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
            <Stack.Screen name="Home" component={MyDrawer}/>
        </Stack.Navigator>
    )
}
export const Navigation = () => {
    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}