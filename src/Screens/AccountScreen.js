import { Box, Heading, Avatar ,HStack, Center, useSafeArea ,Text, VStack , Button , props  } from "native-base";
import { Feather, MaterialIcons , MaterialCommunityIcons, Ionicons} from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { resetSlice } from "../Redux/Features/UserSlice";


export const AccountScreen = () => {
  const navigation = useNavigation();
  const state = useSelector((state)=> state.Users)
  const dispatch = useDispatch()
  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
  });
  const logOutHandler = async () => {
    dispatch(resetSlice());
  };
    return (
      <Box flex={1} bg={"blueGray.900"} {...safeAreaProps}>
         <Box w={"full"} h={"24"} bbg={"blueGray.900"}>
         <Box flexDirection={"row"} w={'full'} justifyContent={"space-around"}>
          <Box pt={5} >
            <Ionicons name="md-chevron-back-outline" size={24} color="white" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
          </Box>
          <Center h={20}>
            <Heading size={'md'} color={"white"}>{state.session.session.user.user_metadata.full_name}</Heading>
            <Heading size={'sm'} fontWeight={"bold"} color={"white"}>{state.session.session.user.email}</Heading>
          </Center>
          <Box pt={5}>
            <Feather name="edit-2" size={24} color="white" />
          </Box>
         </Box>
         </Box>
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
              <MaterialIcons name="logout" size={30} color="black" onPress={()=> logOutHandler()}/>
              <Text fontSize={20} color={"blueGray.800"} onPress={()=> logOutHandler()}>Logout</Text>
            </HStack>
          </VStack>
        </Center>
      </Box>
    );
  }
  