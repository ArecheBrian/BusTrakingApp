import { Box } from "native-base";
import { Header } from "./LoginComponet";

export const HeaderArea = () => {
  return (
    <Box flex={1} safeAreaTop={8}>
      <Header/>
    </Box>
  );
};
