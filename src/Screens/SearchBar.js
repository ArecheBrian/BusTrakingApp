import { Box, Heading, ScrollView, VStack, Center } from "native-base";
import { SearchCard } from "../Components/SearchComponents/Search";
import { PlaceRow } from "../Components/SearchComponents/PlaceRow";
import { GooglePlaces } from './../Components/SearchComponents/GooglePlaces';

export const SearchBar = () => {

  return (
    <Box flex={1} bg={"coolGray.400"}>
        <Center flex={2}>
          <SearchCard/>
        </Center>
        {/* <Box flex={3} bg={"blueGray.50"}  alignItems={"center"}>
          <GooglePlaces  renderRow />
        </Box> */}
    </Box>
  );
}