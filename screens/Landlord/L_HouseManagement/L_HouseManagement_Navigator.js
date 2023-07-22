import React from 'react';
import L_HouseManagement_Insert from './L_HouseManagement_Insert';
import L_HouseManagement_Update from './L_HouseManagement_Update';
import L_HouseManagement_View from './L_HouseManagement_View';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function L_HouseManagement_Navigator ({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="L_HouseManagement_View">
    <Stack.Screen name="L_HouseManagement_View" component={L_HouseManagement_View}  screenOptions={{
        headerShown: false
      }}/>
    <Stack.Screen name="L_HouseManagement_Insert" component={L_HouseManagement_Insert} options={{ title: '新增' }}/>
    <Stack.Screen name="L_HouseManagement_Update" component={L_HouseManagement_Update} options={{ title: '修改' }}/>
  </Stack.Navigator>
  );
};