import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';

export const TestScreen =()=> {

  return (
    <View style={styles.container}>
      <Text> Test </Text>
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