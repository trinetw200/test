import React from "react";
import { View, Text } from "react-native";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const HomeScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Home Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Profile Screen</Text>
  </View>
);

const App = () => (
  <NavigationContainer>
    <View style={{ flex: 1 }}>
      <AppBar
        title="首頁"
        leading={(props) => (
          <IconButton
            icon={(props) => <Icon name="menu" {...props} />}
            {...props}
          />
        )}
        trailing={(props) => (
          <HStack>
            <IconButton
              icon={(props) => <Icon name="magnify" {...props} />}
              {...props}
            />
            <IconButton
              icon={(props) => <Icon name="dots-vertical" {...props} />}
              {...props}
            />
          </HStack>
        )}
      />
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </View>
  </NavigationContainer>
);

export default App;
