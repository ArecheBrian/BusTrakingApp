import { Box, Center, Heading, VStack,useSafeArea} from 'native-base';
import { Ionicons,  MaterialCommunityIcons } from '@expo/vector-icons';

export const Scanner=()=> {

    const safeAreaProps = useSafeArea ({
        safeAreaTop: true, 
        
    });


  return (
    <Box borderBottomRadius={52} h={"80"} bg={"blueGray.900"} {...safeAreaProps} px={8}>
                <Center flexDirection={"row"} height={"10"}>
                    {/* <Center position={"absolute"} left={0} height={"10"}><Ionicons name="md-chevron-back-outline" size={29} color="white" /></Center> */}
                    <Heading color='white' size={"lg"}> Driver Scanner</Heading>
                </Center>
                <VStack height={"80%"} space={5} alignItems={"center"} justifyContent={"center"}>
                    <VStack space={1} alignItems={"center"}>
                        <Heading color='white' size={"lg"} fontWeight={"bold"}>Scan Your Tickets Now</Heading>
                    </VStack>
                    <MaterialCommunityIcons color='white' name="barcode-scan" size={54} />
                </VStack>
    </Box>
  )};

