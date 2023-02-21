import { Navigation } from './src/Navigation/navigation';
import 'react-native-gesture-handler';
import { store } from './src/Redux/Store/Store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}
