import { Box, HStack, StatusBar, IconButton, Icon, Heading } from "native-base";
import { MaterialIcons,Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

export function AppBar() {
    const navigation = useNavigation();
  return (
    <Box w={"full"}>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="black" />
      <HStack h={"16"} bgColor={"yellow.400"} justifyContent={"space-between"}>
        <IconButton
          icon={<Icon size="xl" as={MaterialIcons} name="menu" color="black" />}
          onPress={() => navigation.openDrawer()}
          />
        <Heading alignSelf={"center"}>MyBMTC</Heading>
        <IconButton
          icon={<Icon size="xl" as={Feather} name="user" color="black" />}
          onPress={() => navigation.navigate('MyAccount')}/>
      </HStack>
    </Box>
  );
}
