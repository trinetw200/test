import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons,FontAwesome5,Ionicons   } from '@expo/vector-icons'; 

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
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

const Tab = createBottomTabNavigator();

function MyHome() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false,tabBarInactiveTintColor: '#77FF00',tabBarActiveTintColor: '#77FF00'}}>
      <Tab.Screen name="HouseEdit" component={HomeScreen} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-edit" size={24} color="black" />
          ),
        }}/>
      <Tab.Screen name="Calendar" component={SettingsScreen} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="calendar-alt" size={24} color="black" />
          ),
        }} />
        <Tab.Screen name="Home" component={SettingsScreen} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-search" size={24} color="black" />
          ),
        }} />
        <Tab.Screen name="PaymentRecord" component={SettingsScreen} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="text-box-check-outline" size={24} color="black" />
          ),
        }} />
        <Tab.Screen name="profile" component={SettingsScreen} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle" size={24} color="black" />
          ),
        }} />
    </Tab.Navigator>
  );
}

export default function L_Home() {
  return (
    <MyHome />
  );
}
