import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import L_HouseManagement_Insert from './screens/Landlord/L_HouseManagement/L_HouseManagement_Insert';
import ImagePickerTools from './untils/ImagePickerTools';

const Stack = createNativeStackNavigator();


function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="L_HouseManagement_Insert" component={L_HouseManagement_Insert} />
        <Stack.Screen name="ImagePickerTools" component={ImagePickerTools} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;