import React from 'react';
import L_HouseManagement_Insert from './L_HouseManagement_Insert';
import L_HouseManagement_Update from './L_HouseManagement_Update';
import L_HouseManagement_List from './L_HouseManagement_List';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function L_HouseManagement_Navigator ({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="L_HouseManagement_List">
    <Stack.Screen name="L_HouseManagement_List" component={L_HouseManagement_List}   options={{ title: '房屋管理列表' }}/>
    <Stack.Screen name="L_HouseManagement_Insert" component={L_HouseManagement_Insert} options={{ title: '房屋管理新增' }}/>
    <Stack.Screen name="L_HouseManagement_Update" component={L_HouseManagement_Update} options={{ title: '房屋管理更新' }}/>
  </Stack.Navigator>
  );
};