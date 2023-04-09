import { Box } from "native-base"
import { useNavigation } from '@react-navigation/native';
import { AppBar } from "../Components/NavigationComponents/headerComponents";
import { Busdriver } from "../Components/BusDriver/BusDriverScreenComponents";
import { HomeMap } from "../Components/HomeComponents/HomeMap";

export const BusDriverScreen = () => {
    const navigation = useNavigation();
  return (
    <Box flex={1} bg={"blueGray.500"}>
   <AppBar/>
   <Busdriver/>
   
  </Box>
  );
};
