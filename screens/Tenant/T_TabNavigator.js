import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, FontAwesome5, Ionicons   } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import T_Home from './T_Home';

const Tab = createBottomTabNavigator();

function HouseSearchScreen() {
    const navigation = useNavigation();
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('T_HouseSearch_View')}>
          <Text>HouseSearch!</Text>
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
        headerShown: false,tabBarActiveTintColor: '#e91e63'}}>
      <Tab.Screen name="HouseSearch" component={HouseSearchScreen} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="housesearch-edit" size={size} color={color} />
          ),
        }}/>
      <Tab.Screen name="Home" component={SettingsScreen} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home-alt" size={size} color={color} />
          ),
        }} />
        <Tab.Screen name="Feedback" component={SettingsScreen} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="feedback" size={size} color={color}/>
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