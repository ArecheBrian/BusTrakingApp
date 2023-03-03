import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Box, Center, Heading } from 'native-base';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { WelcomeContainer } from '../Components/WelcomeComponents/WelcomeComponents';

export const WelcomeScreen=()=> {
  return (
    <Box bg={"blueGray.50"} flex={1}>
      <Box flex={1}>
        <Center bg={"blueGray.50"} flex={1}>
          <Fontisto name="bus" size={80} color="#49494a" />
          <Heading size="2xl" p={"2%"} color="#33353d">
            MyBMTC
          </Heading>
        </Center>
      </Box>
      <Box bg={"yellow.400"} flex={2} borderTopRadius={40}>
        <WelcomeContainer/>
      </Box>
    </Box>
  )};