import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { AppBar } from "../Components/NavigationComponents/headerComponents";
export const MapScreen = () => {
  return (
    <View flex={1}>
      <AppBar/>
      <StatusBar />
      <MapView style={styles.map} />
    </View>
  );
};

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
