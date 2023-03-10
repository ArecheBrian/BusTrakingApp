import { Box, HStack, Center, Heading, VStack, Link, Text } from "native-base";
import { CircuButtoms, ImpustAreaR, LoginButtons } from "./LoginComponet";

export const ContentAreaR = () => {
  return (
    <Center bg={"blueGray.50"} flex={3} borderTopRadius={"40"}>
      <VStack w={"85%"} space={8} alignItems={"center"}>
        <ImpustAreaR />
        <Text fontSize={"xl"}>Or, Sing Up with</Text>
        <HStack space={10} justifyContent={"center"}>
          <CircuButtoms />
          <CircuButtoms />
        </HStack>
      </VStack>
    </Center>
  );
};
export const ContentAreaS = () => {
  return <Center bg={"blue.600"} flex={3}></Center>;
};
