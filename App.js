import 'react-native-gesture-handler';
import { BusTrakingApp } from "./src/Navigation/navigation"
import { store } from './src/Redux/Store/Store';
import { Provider } from 'react-redux';
import { NativeBaseProvider } from 'native-base';
import theme from './src/Constans/theme';

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <BusTrakingApp/>
      </NativeBaseProvider>
    </Provider>
  );
}
