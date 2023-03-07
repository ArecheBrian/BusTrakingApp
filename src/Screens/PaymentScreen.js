import { Box, Heading, Avatar ,HStack, Center, useSafeArea ,Text, VStack , Button , props  } from "native-base";

export const PaymentScreen = () => {

    const safeAreaProps = useSafeArea ({
        safeAreaTop: true, 
    });
      return (
        <Box flex={1} bg={"yellow.400"} {...safeAreaProps}>
            <Center space={5} bg={"yellow.400"} flex={1}></Center>
        </Box>
        
      )
}