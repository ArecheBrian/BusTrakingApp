import { VStack, useSafeArea } from "native-base"
import { HomeHeader } from "../Components/HomeComponents/HomeHeader";
import { HomeMap } from "../Components/HomeComponents/HomeMap";

export const HomeScreen =()=> {
    return (
        <VStack _dark={{bg: "blueGray.900"}} _light={{bg: "blueGray.50"}} flex={1} alignItems="center">
          <HomeHeader/>
          <HomeMap />
        </VStack>
    );
  }