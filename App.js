import { StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from  '@react-navigation/stack';
import Home from './Screens/Home';
import User from './Screens/User';
const Stack = createStackNavigator();
export default function App() {
  return (
  
    <NavigationContainer>
       <Stack.Navigator initialRouteName='Home'>
         <Stack.Screen name = "Home" component={Home}/>    
         <Stack.Screen name = "User" component={User}/>   
       </Stack.Navigator>
     </NavigationContainer>
  );
}