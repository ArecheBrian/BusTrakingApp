import { Box, Heading, Avatar ,HStack, Center, useSafeArea ,Text, VStack , Button , props  } from "native-base";
import { Feather, MaterialIcons , MaterialCommunityIcons, Ionicons} from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { resetSlice } from "../Redux/Features/UserSlice";



export const DriverProfileScreen =()=>{
    const navigation = useNavigation();
  const state = useSelector((state)=> state.Users)
  const dispatch = useDispatch()
  const stateP = useSelector((state)=> state.profile)
  const id = stateP.profileData[0].id
  const [saldo, setSaldo] = useState("0")
  const getSaldo = async()=>{
      let { data, error } = await supabase
      .from('carteras')
      .select('saldo').eq('id', id)
       setSaldo(data[0].saldo)
  }
  useEffect(()=>{
      getSaldo()
  },[])

  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
  });
  const logOutHandler = async () => {
    dispatch(resetSlice());
  };

    return (
        <Box flex={1} bg={"blueGray.900"} {...safeAreaProps} h={"24"}>
            <Box w={"full"} h={"24"} bbg={"blueGray.900"}>
         <Box flexDirection={"row"} w={'full'} justifyContent={"space-around"} h={"24"} bg={"blueGray.900"}>
         <Box pt={5}>
            <Feather name="edit-2" size={24} color="white" />
          </Box>
          <Center h={20}>
            <Heading size={'md'} color={"white"}>{state.session.session.user.user_metadata.full_name}</Heading>
            <Heading size={'sm'} fontWeight={"bold"} color={"white"}>{state.session.session.user.email}</Heading>
          </Center>
          <Box pt={5} >
              <MaterialIcons name="logout" size={30} color="white" onPress={()=> logOutHandler()}/>
          </Box>
         </Box>
         </Box>
         <Center space={5} bg={"blueGray.50"} flex={1}>
          <Center w={"85%"} h={"50%"} bg={"white"} shadow={3} borderRadius={"2xl"} py={5}>
            <VStack h={"35%"} alignItems={"center"}>
                <Heading size={"xl"} color={"blueGray.900"}>saldo</Heading>
                <Text fontSize={"4xl"}>-----------------</Text>
            </VStack>
            <Center h={"65%"}>
                <Heading size={"4xl"} color={"blueGray.700"}>$ {saldo}</Heading>
            </Center>
          </Center>
        </Center>
        </Box>
    )
}