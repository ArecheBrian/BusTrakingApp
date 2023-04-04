import { IconButton, VStack} from "native-base"
import { HomeHeader } from "../Components/HomeComponents/HomeHeader";
import { HomeMap } from "../Components/HomeComponents/HomeMap";
import { AppBar } from "../Components/NavigationComponents/headerComponents";
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

export const HomeScreen =()=> {
    return (
        <VStack _dark={{bg: "blueGray.900"}} _light={{bg: "blueGray.50"}} flex={1} alignItems="center" >
          <AppBar/>
          <HomeHeader/>
          <HomeMap />
        </VStack>
    );
  }