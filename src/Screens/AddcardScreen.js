import { Button , Box, HStack , useSafeArea , Center , Text , VStack , Heading, Input , Image} from "native-base"
import { Ionicons, EvilIcons , AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Imagenes } from "../Assets/images";


export const AddcardScreen = () => {
    const navigation = useNavigation();

    const safeAreaProps = useSafeArea ({
        safeAreaTop: true, 
    });
    return(
        <Box flex={1} bg={"white"}  {...safeAreaProps} pl={7} pr={9}>
            <Ionicons name="md-chevron-back-outline" size={29} color="black" onPress={()=> navigation.navigate("cards")}/>
              <VStack flex={1} space={8} mt={8} >
                  <Heading fontSize={25} color={"blueGray.800"} >Add Card</Heading>
                  <Image source={Imagenes.CardImg} alt="Alternate Text" size="lg" />
                  <Input borderRadius={15} bg={"gray.100"} h={12} variant="filled" placeholder="Card No."  />
                  <Input borderRadius={15} bg={"gray.100"} h={12} variant="filled" placeholder="Full Name"  />
                  <HStack justifyContent={"space-between"}  space={4} alignItems={"center"} >  
                    <HStack space={2}>
                      <Text semibold fontSize={25} >CVV</Text>
                      <AntDesign name="questioncircleo" size={17} color="gray" />
                    </HStack>
                      <Input w={16} h={12} borderRadius={12} bg={"gray.100"} variant="filled" placeholder=""></Input>
                  </HStack>
                  <HStack justifyContent={"space-between"} alignItems="center" space={4}>  
                    <Text  fontSize={25} >Expiry</Text>
                    <Input borderRadius={12} bg={"gray.100"} h={12} w={32} variant="filled" placeholder="/"></Input>
                  </HStack>
            <Box mt={10}>
              <HStack justifyContent={"center"} space={4} >  
              <Button size={"lg"} w={"48"} borderRadius={30} bg={"yellow.400"}><Text color={"blueGray.900"} fontSize={20}>LINK</Text></Button>
             </HStack>
            </Box>
          </VStack>
        </Box>
    )
}