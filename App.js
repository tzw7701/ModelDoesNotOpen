import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CoolerScreen from "./screens/CoolerScreen";
import AboutScreen from "./screens/AboutScreen";
import CoolerDetailsModal from "./screens/CoolerDetailsModal";

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
        options={{ headerShown: false, title: "מקררים" }}
        name="Home"
        component={CoolerScreen}
      />
      <Stack.Screen
        options={{ headerShown: false, title: "מקררים" }}
        name="About"
        component={AboutScreen}
      />
     
    </Stack.Navigator>
  )
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
