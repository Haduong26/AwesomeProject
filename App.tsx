import Home from './src/modules/home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {ActionSheetProvider} from '@expo/react-native-action-sheet';
import {store} from './store';
import Auth from './src/modules/login';
const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    //create seperate file for navigation
    <Provider store={store}>
      <NavigationContainer>
        <ActionSheetProvider>
          <Stack.Navigator initialRouteName="Auth">
                <Stack.Screen
                name="Auth"
                component={Auth}
                options={{gestureEnabled: false}}
                />
                <Stack.Screen
                name="Home"
                component={Home}
                options={{gestureEnabled: false, headerLeft: () => null}}
                />
          </Stack.Navigator>
        </ActionSheetProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;