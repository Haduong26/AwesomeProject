import LoginView from './components/LoginView';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const Auth = () => {
    return (
      <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginView" component={LoginView} />
    </Stack.Navigator>
    );
}

export default Auth;