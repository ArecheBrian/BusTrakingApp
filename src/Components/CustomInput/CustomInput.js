import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value , setvalue , placeholder , secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput 
      value={value}
      onChangeText={setvalue}
      placeholder={placeholder}
      style={styles.input}
      secureTextEntry={secureTextEntry}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 2,
    borderRadius: 7,
    paddingHorizontal: 10,
    marginVertical: 10,


  },
  input: {},
})

export default CustomInput