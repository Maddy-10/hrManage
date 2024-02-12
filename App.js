import { StatusBar } from 'expo-status-bar';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QRSacnner from './screens/QRSacnner';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      
      {/* <Login/> */}
      {/* <Dashboard/> */}
      <NavigationContainer>
        <StatusBar style='light'/>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Dashboard}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Scanner" component={QRSacnner}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
