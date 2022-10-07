import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Navigation from "./NavigationScreen";
 import { auth } from "../firebase";

const HomeScreen = () => {
  const hot = "#FF2400";
  const cold = "#035aa6";

  //const navigation = useNavigation();
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState(hot);

  
  
  const handleSignOut = () => {
    // auth
    //   .signOut()
    //   .then(() => {
    //     navigation.replace("Login");
    //   })
    //   .catch((error) => alert(error.message));
  };


  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.headerText}> שלום: {auth.currentUser?.email} </Text>
      <ScrollView>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={styles.cardText}>מקרר דגים </Text>
            <View
              style={[styles.circle, { backgroundColor: temperatureColor }]}
            >
              <Text style={styles.circleText}>{temperatureValue}&#8451;</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>מקרר דגים </Text>
            <View
              style={[styles.circle, { backgroundColor: temperatureColor }]}
            >
              <Text style={styles.circleText}>4&#8451;</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>מקרר דגים </Text>
            <View
              style={[styles.circle, { backgroundColor: temperatureColor }]}
            >
              <Text style={styles.circleText}>4&#8451;</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>מקרר דגים </Text>
            <View
              style={[styles.circle, { backgroundColor: temperatureColor }]}
            >
              <Text style={styles.circleText}>4&#8451;</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>מקרר דגים </Text>
            <View
              style={[styles.circle, { backgroundColor: temperatureColor }]}
            >
              <Text style={styles.circleText}>4&#8451;</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>מקרר דגים </Text>
            <View
              style={[styles.circle, { backgroundColor: temperatureColor }]}
            >
              <Text style={styles.circleText}>4°C</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>מקרר דגים </Text>
            <View
              style={[styles.circle, { backgroundColor: temperatureColor }]}
            >
              <Text style={styles.circleText}>4°C</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>מקרר דגים </Text>
            <View
              style={[styles.circle, { backgroundColor: temperatureColor }]}
            >
              <Text style={styles.circleText}>4°C</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>מקרר דגים </Text>
            <View
              style={[styles.circle, { backgroundColor: temperatureColor }]}
            >
              <Text style={styles.circleText}>4°C</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>מקרר דגים </Text>
            <View
              style={[styles.circle, { backgroundColor: temperatureColor }]}
            >
              <Text style={styles.circleText}>4°C</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>מקרר דגים </Text>
            <View
              style={[styles.circle, { backgroundColor: temperatureColor }]}
            >
              <Text style={styles.circleText}>4°C</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>מקרר דגים </Text>
            <View
              style={[styles.circle, { backgroundColor: temperatureColor }]}
            >
              <Text style={styles.circleText}>4°C</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>מקרר דגים </Text>
            <View
              style={[styles.circle, { backgroundColor: temperatureColor }]}
            >
              <Text style={styles.circleText}>4°C</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>מקרר בשר </Text>
            <View
              style={[styles.circle, { backgroundColor: temperatureColor }]}
            >
              <Text style={styles.circleText}>10°C</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>מקרר חלבי </Text>
            <View
              style={[styles.circle, { backgroundColor: temperatureColor }]}
            >
              <Text style={styles.circleText}>2°C</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>מקרר שתיה </Text>
            <View
              style={[styles.circle, { backgroundColor: temperatureColor }]}
            >
              <Text style={styles.circleText}>8°C</Text>
            </View>
          </View>
        </View>
      </ScrollView> 
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignOut} style={styles.buttonLogin}>
          <Text style={styles.buttonTextLogin}>התנתק</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonLogin}
        >
          <Text style={styles.buttonTextLogin}>התראות</Text>
        </TouchableOpacity>
      </View>
      <Navigation />
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    marginTop: 5,
    fontWeight: "700",
    fontSize: 20,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    marginTop: 40,
  },

  card: {
    backgroundColor: "#2b5770",
    marginBottom: 5,
    marginLeft: 5,
    width: 180,
    height: 250,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  cardText: {
    textAlign: "center",
    color: "white",
    fontSize: 25,
  },
  circle: {
    marginTop: 20,
    width: 140,
    height: 140,
    borderRadius: 140 / 2,
    backgroundColor: "blue",
    borderWidth: 2,
    borderColor: "white",
  },
  circleText: {
    marginTop: 50,
    textAlign: "center",
    color: "white",
    fontSize: 25,
  },

  buttonContainer: {
    flexDirection:'row',
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 10,
  },

  buttonLogin: {
    backgroundColor: "black",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    margin:2
  },

  buttonRegister: {
    backgroundColor: "black",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutLine: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "black",
    borderWidth: 2,
  },
  buttonTextLogin: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutLineText: {
    color: "black",
    fontWeight: "700",
    fontSize: 16,
  },
});
