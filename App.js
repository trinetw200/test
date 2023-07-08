import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import L_HouseManagement_Insert from './screens/Landlord/L_HouseManagement/L_HouseManagement_Insert';
import ImagePickerTools from './untils/ImagePickerTools';
import L_Home from './screens/Landlord/L_Home';
import Doris from './screens/Doris';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{
    headerShown: false}} initialRouteName="ImagePickerTools">
          <Stack.Screen name="LoginScreen" component={LoginScreen}/>
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="ImagePickerTools" component={ImagePickerTools} />
          <Stack.Screen name="L_Home" component={L_Home} />
          <Stack.Screen name="Doris" component={Doris} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
