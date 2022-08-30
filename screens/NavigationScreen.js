import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";

const Navigation = () => {
  const navigation = useNavigation();
  const handleHomeNavigation = () => {
    navigation.navigate("Home");
  };
  const handleAboutNavigation = () => {
    navigation.navigate("About");
  };
 
  if (navigation.navigate.name != "Login") {
    return (
      <View style={styles.nevContainer}>

        <TouchableOpacity onPress={handleHomeNavigation} style={styles.nevBtn}>
          <Image
            source={require("../assets/Home-icon.png")}
            style={[styles.imgNavBtn, { right: -2 }]}
          />
          <Text>בית</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleAboutNavigation} style={styles.nevBtn}>
          <Image
            source={require("../assets/Home-icon.png")}
            style={[styles.imgNavBtn, { right: -2 }]}
          />
          <Text>אודות</Text>
        </TouchableOpacity>

      </View>
    );
  } else {
    return <View></View>;
  }
};
export default Navigation;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  nevContainer: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  nevBtn: {
    bottom: -15,
  },
  imgNavBtn: {
    marginBottom: 5,
    height: 25,
    width: 25,
  },
});
