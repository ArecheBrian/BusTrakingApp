import { VStack, ScrollView, Text, useColorModeValue, useSafeArea, StatusBar } from "native-base"
import { HomeHeader } from "../Components/HomeComponents/HomeHeader";
import { HomeMap } from "../Components/HomeComponents/HomeMap";

const SafeArea =()=> {
    const safeAreaProps = useSafeArea({
      safeAreaTop: true,
    });
    return (
        <VStack _dark={{bg: "blueGray.900"}} _light={{bg: "blueGray.50"}} flex={1} {...safeAreaProps} alignItems="center">
          <HomeHeader/>
          <HomeMap />
        </VStack>
    );
  }
  
  
export const HomeScreen = () => {
    return <SafeArea />
  }