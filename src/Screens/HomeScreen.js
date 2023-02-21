import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { addApellido } from '../Redux/Features/testSlice';


export const HomeScreen = () => {
  const name = useSelector((State) => State.name.name)
  console.log(name)
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity style={{ backgroundColor: "red"}} onPress={()=> dispatch(addApellido())}>
        <Text>klk manito {name}</Text>
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
