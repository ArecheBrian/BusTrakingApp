import { Box,HStack,Text,VStack,Avatar,Heading ,Center } from "native-base"
import { FontAwesome } from '@expo/vector-icons';
export const Busdriver = () => {
    return (
        <Box flex={1}>
          <VStack bg={'red.500'} flex={2}>
           <HStack  justifyContent={"space-between"} m={3}>
           <VStack >
           <Avatar
                size="2xl"
                bg="green.500"
                source={{
                  uri: "https://media.licdn.com/dms/image/D4E03AQEAcEhwmNPgvw/profile-displayphoto-shrink_800_800/0/1670947325218?e=2147483647&v=beta&t=MfoJmHfzb9S7uNKmK9PDOSAWiqUuC5Ab98dWgvH0IDQ",
                }}
              ></Avatar>
           </VStack>
           <Heading  size={"xl"} alignSelf={"center"}>
                Pablo piddy
            </Heading>
           </HStack>
           <Heading bg={"blueGray.500"} borderLeftRadius={"lg"} size={"xl"} alignSelf={"flex-end"} w={"60%"}>
                <Text>#03032.         </Text><FontAwesome name="drivers-license-o" size={32} color="black"  />
            </Heading>
            
          </VStack>
          
          <Center flex={4}>
            <Center bg={'red.500'} h={"55%"} w={"65%"}>
              klk
            </Center>
          </Center>
        </Box>

    )
}