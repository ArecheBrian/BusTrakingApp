import { Box, Heading, ScrollView, VStack, Center } from "native-base";
import { SearchCard} from "../Components/SearchComponents/Search";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export const SearchBar = () => {

  return (
    <Box flex={1} bg={"coolGray.600"}>
        <SearchCard/>
    </Box>
  );
}