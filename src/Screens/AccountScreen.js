import { Box, Heading, Avatar , service, HStack, Center, useSafeArea ,Text, Stack ,  Select  } from "native-base";
import { Feather, MaterialIcons , AntDesign , MaterialCommunityIcons , CheckIcon } from '@expo/vector-icons'; 

export const AccountScreen = () => {

  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
    pt: 5
  });
    return (
      <Box flex={2} bg={"blueGray.60"}>
        <Box bg={"yellow.400"} h= {"48"} {...safeAreaProps}>
          <Box ml="370">
          <Feather name="edit-2" size={24} color="black" />
          </Box>

        <Center mb="4">
        <Heading size={'md'}>Enmanuelle</Heading>
        <Heading mb="4" size={'sm'} fontWeight={"bold"} color={"blueGray.700"}>EnmanuelleML@outlook.com</Heading>

        <HStack justifyContent="center">
        <Avatar source={{
         uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}} size="xl">
        <Avatar.Badge />
        </Avatar>
        </HStack>

        </Center>

        </Box>
      <Stack mt="70" ml="12" space={6} >

      <HStack mt="70" space={4}>   
        <Feather name="credit-card" size={35} color="black" />
        <Text fontSize={25} color={"blueGray.600"} >Payments</Text>
        </HStack>
        <HStack space={4}>  
        <Feather name="shield" size={35} color="black" />
        <Text fontSize={25} color={"blueGray.600"} >Trusted contacts</Text>
        </HStack>
        <HStack space={4}>  
        <MaterialCommunityIcons name="format-letter-case" size={35} color="black" />
        <Text fontSize={25} color={"blueGray.600"} >Language</Text>
        </HStack>
        <HStack space={4}>  
        <Feather name="smartphone" size={35} color="black" />
        <Text fontSize={25} color={"blueGray.600"} >Display</Text>
        </HStack>

      </Stack >

      <HStack mt="225" ml="12" mb="1.5" space={4}>  
        <MaterialIcons name="logout" size={35} color="black" />
        <Text fontSize={25} color={"blueGray.600"} >Logout</Text>
        </HStack>

      </Box>
    );
  }
  