import { Box, Center, Heading, HStack, VStack, Text, Link } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { SingInContainer } from "../Components/SingInComponents/SingInComponents";
import { useNavigation } from "@react-navigation/native";
import { Header } from "react-native/Libraries/NewAppScreen";
import { HeaderArea } from "../Components/loginAreaComponents/HeaderArea";
import { ContentAreaS } from "../Components/loginAreaComponents/ContentArea";
export const SignInScreen = () => {
  const navigation = useNavigation();
  return (
    <Box bg={"yellow.400"} flex={1}>
    <HeaderArea/>
    <ContentAreaS/>
    </Box>
  );
};
