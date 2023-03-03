import {
  Box,
  Center,
  Heading,
  Text,
  VStack,
  TouchableOpacity,
  Button
} from "native-base";

export const WelcomeContainer = () => {
  return (
    <Box alignItems={"center"}>
      <Box bg={"yellow.400"} w={"90%"}  borderRadius={60}>
        <VStack bg={"yellow.400"} py={"10%"}  borderRadius={60}>
          <Heading size="2xl" fontSize={45} color="#33353d">
            {" "}
            Welcome
          </Heading>
        </VStack>
        <VStack py={"10%"}>
          <Text fontSize={20}>
            Come onboard, join in to experience the new MyBMTC wicht added
            features and improved funtionalities
          </Text>
        </VStack>
        <Box>
          <VStack bg={"yellow.400"} alignItems={"center"} p={"3%"}>
            <WelcomeButtomnsSign />
            <WelcomeButtomnsRegister />
            <WelcomeButtomnsSkip />
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export const WelcomeButtomnsSign = () => {
  return (
    <Button borderRadius="full" bg={"#41434b"} w={"60%"}>
      <Heading color={"white"}>Sign in</Heading>
    </Button>
  );
};
export const WelcomeButtomnsRegister = () => {
  return (
    <Button borderRadius="full" bg={"blueGray.50"} w={"60%"}  m={"5%"}>
      <Heading >Register</Heading>
    </Button>
  );
};
export const WelcomeButtomnsSkip = () => {
  return (
    <Button borderRadius="full" variant="outline" colorScheme="black" w={"60%"}>
       <Text fontSize="2xl">Skip</Text>
    </Button>
  );
};
