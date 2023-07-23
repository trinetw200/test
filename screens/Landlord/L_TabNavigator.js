import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import L_Home from './L_Home';
import L_HouseManagement_Insert from './L_HouseManagement/L_HouseManagement_Insert';
import L_HouseManagement_Update from './L_HouseManagement/L_HouseManagement_Update';
import L_HouseManagement_List from './L_HouseManagement/L_HouseManagement_List';
import L_HouseManagement_Navigator from './L_HouseManagement/L_HouseManagement_Navigator';

const Tab = createBottomTabNavigator();

function HouseManagementScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('L_HouseManagement_Navigator')}>
        <Text>HouseManagement!</Text>
      </TouchableOpacity>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

export default function L_TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{
      headerShown: false, tabBarActiveTintColor: '#e91e63'
    }}>
      <Tab.Screen name="HouseManagement" component={L_HouseManagement_Navigator} options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home-edit" size={size} color={color} />
        ),
      }} />
      <Tab.Screen name="Calendar" component={SettingsScreen} options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="calendar-alt" size={size} color={color} />
        ),
      }} />
      <Tab.Screen name="Home" component={L_Home} options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home-search" size={size} color={color} />
        ),
      }} />
      <Tab.Screen name="PaymentRecord" component={SettingsScreen} options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="text-box-check-outline" size={size} color={color} />
        ),
      }} />
      <Tab.Screen name="profile" component={SettingsScreen} options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person-circle" size={size} color={color} />
        ),
      }} />
    </Tab.Navigator>
  );
}