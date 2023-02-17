import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from "../Screens/HomeScreen";
import { TestScreen } from "../Screens/TestScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RegisterScreen } from "../Screens/RegisteScreen"
import {SignInScreen} from "../Screens/SignInScreen"
import { WelcomeScreen } from "../Screens/WelcomeScreen"
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="HomeI">
      <Drawer.Screen name="HomeI" component={HomeScreen} />
      <Drawer.Screen name="Test" component={TestScreen} />
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator()

const MyStack = () => {
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