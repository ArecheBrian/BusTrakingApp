
import { Center , Box, Container, HStack , VStack, Stack, ScrollView } from 'native-base';
import { View , Text } from 'react-native';
export const TestScreen = () => {
    return (
        <View style={{backgroundColor: "red" , flex: 1 }} >
            <View style={{backgroundColor: "yellow" , flex: 1  }}>
                
            <ScrollView>
                <VStack space={2}>
                    <Box bg={"blue.600"} h={"24"} w={"24"}>Caja 1</Box>
                    <Box bg={"danger.700"} h={"24"} w={"24"} >Caja 1</Box>
                    <Stack direction={"row"} space={2}>
                        <Box bg={"blue.600"} h={"24"} w={"24"}>Caja 1</Box>
                        <Box bg={"danger.700"} h={"24"} w={"24"} >Caja 1</Box>
                    </Stack>
                    <Box bg={"blue.600"} h={"24"} w={"24"}>Caja 1</Box>
                    <Box bg={"danger.700"} h={"24"} w={"24"} >Caja 1</Box>
                </VStack>
             </ScrollView>

            </View>
            <View  style={{backgroundColor: "green" , flex: 1 , flexDirection: "row"}}>
                <View style = {{backgroundColor: "blue" , flex: 1}}>
                    <Text>1</Text>
                </View>

                <View style = {{backgroundColor: "white" , flex: 1}}>
                    <Text>1</Text>
                </View>

                <View style = {{backgroundColor: "red" , flex: 1}}>
                    <Text>1</Text>
                </View>

            </View>
            {/* <View  style={{backgroundColor: "blue" , flex: 2 }}>
                <Text>Caja 3</Text>
            </View> */}
        </View>
        
    )
}