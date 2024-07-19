import HomeView from './components/HomeView';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const Home = () => {
    return (
      <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeView" component={HomeView} />
    </Stack.Navigator>
    );
}

export default Home;