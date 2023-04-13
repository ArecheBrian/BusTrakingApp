import { Box, HStack, StatusBar, IconButton, Icon, Heading } from "native-base";
import { MaterialIcons,Feather , AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

export function Top() {
    const navigation = useNavigation();
  return (
    <Box w={"full"}>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="blueGray.900"/>
      <HStack h={"16"} bg="blueGray.900" justifyContent={"space-between"}>
        <IconButton
          icon={<Icon size="xl" as={AntDesign} name="leftcircleo" color="white" />}
          onPress={() => navigation.navigate("Search")}
          />
        <Heading color="white" alignSelf={"center"}>Route</Heading>
        <IconButton
        />
      </HStack>
    </Box>
  );
}

export function TopSearch() {
  const navigation = useNavigation();
return (
  <Box w={"full"}>
    <HStack  bg="blueGray.900" justifyContent={"space-between"}>
      <IconButton
        icon={<Icon size="xl" as={AntDesign} name="leftcircleo" color="white" />}
        onPress={() => navigation.navigate("Home")}
        />
      <IconButton
      />
    </HStack>
  </Box>
);
}

