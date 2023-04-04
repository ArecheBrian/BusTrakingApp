import { Box, Heading, Avatar ,HStack, Center, useSafeArea ,Text, VStack , Button , props  } from "native-base";
import { Feather, MaterialIcons , MaterialCommunityIcons, Ionicons} from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';


export const AccountScreen = () => {
  const navigation = useNavigation();

  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
  });
    return (
      <Box flex={1} bg={"yellow.400"} {...safeAreaProps}>
         <Box w={"full"} h={10} bg={"yellow.400"}>
         <Box flexDirection={"row"} w={'full'} justifyContent={"space-around"}>
          <Box pt={5} >
            <Ionicons name="md-chevron-back-outline" size={24} color="black" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
          </Box>
          <Center h={20}>
            <Heading size={'md'}>Enmanuelle</Heading>
            <Heading size={'sm'} fontWeight={"bold"} color={"blueGray.700"}>EnmanuelleML@outlook.com</Heading>
          </Center>
          <Box pt={5}>
            <Feather name="edit-2" size={24} color="black" />
          </Box>
         </Box>
         </Box>
          <Avatar source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}} h={90} w={90} position={"relative"} zIndex={2} alignSelf={"center"} top={12} >
            <Avatar.Badge />
          </Avatar>
         <Center space={5} bg={"blueGray.50"} flex={1}>
          <VStack h={"70%"} w={"80%"} space={5} mt={5}>
            <HStack space={4} alignItems={"center"}>
              <Feather name="credit-card" size={30} color="black" />
              <Text fontSize={20} color={"blueGray.800"} onPress={()=> navigation.navigate("cards")} >Payments</Text>
            </HStack>
            <HStack space={4} alignItems={"center"}>  
              <Feather name="shield" size={30} color="black" />
              <Text fontSize={20} color={"blueGray.800"} >Trusted contacts</Text>
            </HStack>
            <HStack space={4} alignItems={"center"}>  
              <MaterialCommunityIcons name="format-letter-case" size={30} color="black" />
              <Text fontSize={20} color={"blueGray.800"} >Language</Text>
            </HStack>
            <HStack space={4} alignItems={"center"}>  
              <Feather name="smartphone" size={30} color="black" />
              <Text fontSize={20} color={"blueGray.800"} >Display</Text>
            </HStack>
            <HStack space={4} alignItems={"center"} mt={"auto"}>  
              <MaterialIcons name="logout" size={30} color="black" />
              <Text fontSize={20} color={"blueGray.800"} >Logout</Text>
            </HStack>
          </VStack>
        </Center>
      </Box>
    );
  }
  