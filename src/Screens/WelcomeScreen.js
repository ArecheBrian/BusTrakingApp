import { Box, Center, Heading, VStack} from 'native-base';
import { Fontisto } from '@expo/vector-icons';
import { WelcomeContainer } from '../Components/WelcomeComponents/Components'

export const WelcomeScreen=()=> {
  return (
    <Box bg={"blueGray.50"} flex={1}>
      <Box flex={1} safeAreaTop={5}>
        <VStack flex={1} space={2} justifyContent={"center"} alignItems={"center"}>
          <Fontisto name="bus" size={80} color="#49494a" />
          <Heading size="2xl"  color="#33353d">
            MyBMTC
          </Heading>
        </VStack>
      </Box>
      <Center bg={"yellow.400"} flex={2} borderTopRadius={40}>
        <WelcomeContainer/>
      </Center>
    </Box>
  )};