import { Box, Input, Heading, HStack, Circle, Center, Icon } from "native-base"
import { Octicons, Ionicons } from '@expo/vector-icons';

export const HomeHeader = () => {
    return (
    <Box w={"90%"} flex={1} justifyContent={"space-evenly"}>
            <Center shadow={5} bg={"blueGray.50"}  width="96%" borderRadius="25">
                <Input placeholder="Where to?" shadow={5} fontSize={14} variant="filled" width="100%" borderRadius="25" py="1" px="2" h={"12"} bg={"gray.200"} borderColor={"gray.200"} InputLeftElement={<Icon ml="2" size="6" color="gray.800" as={<Octicons name="search"/>}/>}/>
            </Center>
    </Box>
    )
}