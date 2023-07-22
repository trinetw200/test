import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import L_Home from './screens/Landlord/L_Home';
import L_HouseManagement_Insert from './screens/Landlord/L_HouseManagement/L_HouseManagement_Insert';
import L_HouseManagement_View from './screens/Landlord/L_HouseManagement/L_HouseManagement_List';
import ImagePickerTools from './untils/ImagePickerTools';
import L_TabNavigator from './screens/Landlord/L_TabNavigator';
import L_HouseManagement_Update from './screens/Landlord/L_HouseManagement/L_HouseManagement_Update';
import Doris from './screens/Doris';
import { useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

export default function Root() {
  const userInfoData = useSelector((state) => state.userInfoData);
  return (
      <NavigationContainer>
        {userInfoData.isLongin === true ?
        userInfoData.isLandlord === true ? (
          //房東登入
          <>
          <L_TabNavigator></L_TabNavigator>
          </>
        ) : (
          //房客登入
          <></>
        ) :
        (
          //未登入
          <>
          <Stack.Navigator screenOptions={{
            headerShown: false
          }} initialRouteName="LoginScreen">
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="ImagePickerTools" component={ImagePickerTools} />
          </Stack.Navigator>
          </>
        )
      }

        {/* <Stack.Navigator screenOptions={{
          headerShown: false
        }} initialRouteName="ImagePickerTools">
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="ImagePickerTools" component={ImagePickerTools} />
          <Stack.Screen name="L_TabNavigator" component={L_TabNavigator} />
          <Stack.Screen name="L_HouseManagement_Insert" component={L_HouseManagement_Insert} />
          <Stack.Screen name="L_HouseManagement_View" component={L_HouseManagement_View} />
          <Stack.Screen name="L_HouseManagement_Update" component={L_HouseManagement_Update} />
          <Stack.Screen name="Doris" component={Doris} />
        </Stack.Navigator> */}

      </NavigationContainer>

  );
}