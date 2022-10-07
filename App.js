import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CoolerScreen from "./screens/CoolerScreen";
import LoginScreen from "./screens/LoginScreen";
import NotificationScreen from "./screens/NotificationScreen";
import HomeScreen from "./screens/HomeScreen";
import ModalNotReady from "./screens/ModalNotReady";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#ffffff",
          width: 240,
        },
      }}
    >
      <Stack.Screen
        options={{ headerShown: false, title: "רישום והתחברות" }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ headerShown: false, title: "בית" }}
        name="Cooler"
        component={CoolerScreen}
      />
      <Stack.Screen
        options={{ headerShown: false, title: "התראות" }}
        name="Notification"
        component={NotificationScreen}
      />
      <Stack.Screen
        options={{  headerShown: false,  title: "בית" }}
        name="NotReady"
        component={ModalNotReady}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
