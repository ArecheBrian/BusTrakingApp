import { Box, Input, Heading, HStack, Circle, Center, Icon , Button , Text} from "native-base"
import { Octicons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const HomeHeader = () => {
    const navigation = useNavigation()
    return (
    <Box w={"90%"} flex={1} justifyContent={"space-evenly"}>
            <Center shadow={5} bg={"blueGray.50"}  width="96%" borderRadius="25">
                <Button justifyContent={"flex-start"} shadow={5} fontSize={14} variant="filled" width="100%" borderRadius="25" py="1" px="2" h={"12"} bg={"gray.200"} borderColor={"gray.200"} leftIcon={<Icon ml="2" size="6" color="gray.800" as={<Octicons name="search"/>} />} onPress={()=> navigation.navigate("Search")} > <Text> Where to?</Text> </Button>
            </Center>
    </Box>
    )
}