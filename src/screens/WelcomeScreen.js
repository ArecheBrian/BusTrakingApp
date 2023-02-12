import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const WelcomeScreen=()=> {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Welcome Screen</Text>
      <TouchableOpacity
        onPress={()=> navigation.navigate("SignIn")}
        style={{
            padding: 10,
            backgroundColor: "purple",
            marginTop: "20%",
            width: "50%",
            borderRadius: 10
        }}>
            <Text
                style={{
                    fontSize: 15,
                    textAlign: "center",
                    color: "white"
                }}
            >Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=> navigation.navigate("Register")}
        style={{
            padding: 10,
            backgroundColor: "purple",
            marginTop: "20%",
            width: "50%",
            borderRadius: 10
        }}>
            <Text
                style={{
                    fontSize: 15,
                    textAlign: "center",
                    color: "white"
                }}
            >Register</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
