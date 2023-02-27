import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { addApellido } from '../Redux/Features/testSlice';


export const HomeScreen = () => {
  const name = useSelector((State) => State.name.name)
  const ticket = useSelector ((State) => State.tickets)
  const Users = useSelector ((State) => State.Users)
  console.log(name)
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{fontSize: 27, fontWeight: 'bold' , padding: 40, }}> Bienvenido {Users.fullName}</Text>
      <Text>Home</Text>
      <TouchableOpacity style={{ backgroundColor: "red"}} onPress={()=> dispatch(addApellido())}>
        <Text>klk manito {name}</Text>
      </TouchableOpacity>

      <Text style={{fontSize: 17, fontWeight: 'bold' , marginTop: "5%" }}>Prueba de Tickets</Text>
      <Text>{ticket.price}</Text>
      <Text>{ticket.quantity}</Text>
      <Text>{ticket.routeName}</Text>
      <Text>{ticket.travelDate}</Text>
      <Text>{ticket.hourDate}</Text>

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
