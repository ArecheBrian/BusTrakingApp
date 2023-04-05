import { Box} from "native-base";
import { SearchCard } from "../Components/SearchComponents/Search";


export const SearchBar = () => {

  return (
    <Box flex={1} bg="blueGray.900">
          <SearchCard/>
        {/* <Box flex={3} bg={"blueGray.50"}  alignItems={"center"}>
          <GooglePlaces  renderRow />
        </Box> */}
    </Box>
  );
}