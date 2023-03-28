import { Box, HStack, StatusBar, IconButton, Text } from "native-base";

export function AppBar() {
  return (
    <Box w={"full"}>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="yellow.400" />
      <HStack h={"16"} bgColor={"yellow.400"}>

      </HStack>
    </Box>
  );
}
