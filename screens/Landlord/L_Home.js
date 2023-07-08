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
headerShown: false
function MyHome() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false,tabBarActiveTintColor: '#e91e63'}}>
      <Tab.Screen name="HouseEdit" component={HomeScreen} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-edit" size={size} color={color} />
          ),
        }}/>
      <Tab.Screen name="Calendar" component={SettingsScreen} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="calendar-alt" size={size} color={color} />
          ),
        }} />
        <Tab.Screen name="Home" component={SettingsScreen} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-search" size={size} color={color}/>
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

export default function L_Home() {
  return (
    <MyHome />
  );
}
