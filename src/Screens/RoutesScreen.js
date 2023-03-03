import { Box, ScrollView, VStack } from "native-base"
import { RoutesCard } from "../Components/CardsComponents/Cards";

export const RoutesScreen =()=> {
    return (
        <Box flex={1} bg={"blueGray.50"} pt={4}>
          <ScrollView >
            <VStack space={4} alignItems={"center"}>
              <RoutesCard Color={"#FF0032"} Name={"RED LINE"}/>
              <RoutesCard Color={"#2192FF"} Name={"BLUE LINE"}/>
              <RoutesCard Color={"#38E54D"} Name={"GREEN LINE"}/>
              <RoutesCard Color={"#FFEA20"} Name={"YELLOW LINE"}/>
            </VStack>
          </ScrollView>
        </Box>
    );
  }