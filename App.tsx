import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginPage } from './src/Pages/LoginPage/LoginPage';
import { HomePage } from './src/Pages/HomePage/HomePage';
import { MapPage } from './src/Pages/MapPage/MapPage';
import { UrqlPage } from './src/Pages/UrqlPage/UrqlPage';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage}></Stack.Screen>
        <Stack.Screen name="Home" component={HomePage}></Stack.Screen>
        <Stack.Screen name="Map" component={MapPage}></Stack.Screen>
        <Stack.Screen name="Urql" component={UrqlPage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
