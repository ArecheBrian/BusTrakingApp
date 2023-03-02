import { Box, Heading, ScrollView, VStack, Center } from "native-base";
import { FromToCard, RecentTripsCrad } from "../Components/TiketsComponents/TiketsCardStyle";


export const RecentTrips = () => {

  return (
    <Box flex={1} bg={"yellow.400"}>
        <Center flex={2}>
          <FromToCard/>
        </Center>
        <Box flex={4} bg={"blueGray.50"} pt={4} alignItems={"center"} borderTopRadius={35}>
          <Heading size={'md'} w="90%" ml={5}>Recent Trips</Heading>
            <ScrollView w="100%">
              <VStack alignItems={"center"} space={4} pt={5}>
                <RecentTripsCrad/>
                <RecentTripsCrad/>
                <RecentTripsCrad/>
                <RecentTripsCrad/>
                <RecentTripsCrad/>
                <RecentTripsCrad/>
                <RecentTripsCrad/>
                <RecentTripsCrad/>
              </VStack>
            </ScrollView>
        </Box>
    </Box>
  );
}
