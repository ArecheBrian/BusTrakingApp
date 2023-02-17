import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RegisterScreen } from "../screens/RegisteScreen"
import {SignInScreen} from "../screens/SignInScreen"
import { WelcomeScreen } from "../screens/WelcomeScreen"
import { HomeScreen } from "../screens/HomeScreen"
// import { createDrawerNavigator } from "@react-navigation/drawer"
// import { TestScreen } from "../screens/TestScreen"
const Stack = createNativeStackNavigator()

const MyStack = () => {
    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen options={{title: "Welcome"}} name="Welcome" component={WelcomeScreen}/>
            <Stack.Screen name="SignIn" component={SignInScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
    )
}

// const Drawer = createDrawerNavigator();

// const MyDrawer = () =>{
//     return(
//         <Drawer.Navigator initialRouteName="Home">
//             <Drawer.Screen name="Home" component={HomeScreen}/>
//             <Drawer.Screen name="Test" component={TestScreen}/>
//         </Drawer.Navigator>
//     )
// }

export const Navigation = () => {
    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}

// export const DrawerNavigation = () => {
//     return ( 
//         <NavigationContainer>
//             <MyDrawer/>
//         </NavigationContainer>
//     )
// }