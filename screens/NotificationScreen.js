import React, { Component, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { Searchbar } from "react-native-paper";
import { SvgUri } from "react-native-svg";

import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Navigation from "./NavigationScreen";

const NotificationScreen = () => {


  useEffect(() => {
    GetCoolersErrorsByUserId();
  }, []);
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  const [notification, setNotification] = useState([
    //   { name: "ראשון", degrees: 12, key: 1 },
    //   { name: "בשר", degrees: 10, key: 2 },
    //   { name: "יין", degrees: 20, key: 3 },
    //   { name: "חלבי", degrees: 20, key: 4 },
    //   { name: "דףךעח", degrees: 20, key: 5 },
    //   { name: "קףךעךל", degrees: 20, key: 6 },
    //   { name: "'קךעח'", degrees: 20, key: 7 },
    //   { name: "דךקעחג", degrees: 20, key: 8 },
    //   { name: "קכךלצ", degrees: 20, key: 9 },
    //   { name: "שדךלהגחהעדה", degrees: 20, key: 10 },
    //   { name: "/קכךלעמג", degrees: 20, key: 11 },
    //   { name: "tzafrir", degrees: 20, key: 12 },
    //   { name: "blu", degrees: 20, key: 13 },
    //   { name: "alti", degrees: 20, key: 14 },
    //   { name: "efg", degrees: 20, key: 15 },
    //   { name: "dsg", degrees: 20, key: 16 },
    //   { name: "fdhrt", degrees: 20, key: 17 },
    //   { name: "ewrtewr", degrees: 20, key: 18 },
    //   { name: "rtrejkhgddjhgdkjhf", degrees: 20, key: 19 },
    //   { name: "אחרון", degrees: 20, key: 20 },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const url =
    "http://Firstmoztemp-env.eba-7sfsam8j.us-east-2.elasticbeanstalk.com/";
  const GetCoolersErrorsByUserId = () => {
    fetch(`${url}Errors/GetCoolersErrorsByUserId`, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        user_id: "1309",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setNotification(data.cooler_errors);
        //console.log(data.cooler_errors);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {/* <View style={styles.centeredView}>
      <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
      >
      <View style={styles.centeredView}>
      <View style={styles.modalView}>
      <Text style={styles.modalText}>Hello World!</Text>
      <Pressable
      style={[styles.button, styles.buttonClose]}
      onPress={() => setModalVisible(!modalVisible)}
      >
      <Text style={styles.textStyle}>Hide Modal</Text>
      </Pressable>
      </View>
      </View>
      </Modal>
      <Pressable
      style={[styles.button, styles.buttonOpen]}
      onPress={() => setModalVisible(true)}
      >
      <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View> */}

      {/* <ScrollView>
        <View style={styles.scrollViewContainer}>
        {notification.map((item) => (
          <TouchableOpacity
          // onPress={()=>(Alert.alert("",`שם החדר:${item.name} | מעלות: ${item.degrees}`))}
          onPress={() => {
            Alert.alert(
              "בקרה",
              `שם החדר:${item.name} | מעלות: ${item.degrees}`,
              [{ text: "סגור", style: "cancel" }]
              );
            }}
            style={[styles.buttonRegister, styles.buttonOutLine]}
            key={item.key}
            >
            <Text style={styles.buttonOutLineText}>חדר:{item.name}</Text>
            <Text style={styles.buttonOutLineText}>
            מעלות:{item.degrees}&#8451;
            </Text>
            </TouchableOpacity>
            ))}
            </View>
          </ScrollView> */}
      <View style={[styles.container, { margin: 35 }]}>
        <SvgUri
          style={styles.image}
          uri="https://www.linkpicture.com/q/Top-S.svg"
        ></SvgUri>
        {/* <Image style={styles.image} source={require("../assets/TopS.png")} /> */}
        <Text style={styles.h_text}>שלום,</Text>
        <Text style={styles.h_text}> שלום משה</Text>

        <View
          style={[
            styles.profileImgContainer,
            { borderColor: "green", borderWidth: 1 },
          ]}
        >
          <Image
            source={require("../assets/SuperClick.png")}
            style={styles.profileImg}
          />
        </View>
        <Text
          style={{
            top: -140,
            left: -147,
            color: "#424141",
            fontSize: 14,
            lineHeight: 17,
          }}
        >
          סופר קליק
        </Text>
        <View
          style={{
            borderBottomColor: "#909093",
            borderWidth: 0.4,
            width: 360,
            top: -130,
          }}
        ></View>
        <Searchbar
          style={{ width: "60%", right: -55, top: -115 }}
          placeholder="חפש..."
          onChangeText={onChangeSearch}
          value={searchQuery}
        />

        <Image
          style={{ top: -162, left: -140, height: 55, width: 55 }}
          source={require("../assets/filter.png")}
        />
        {/* <Text style={styles.h_text}>שלום,</Text>
        <Text style={[styles.h_text, {fontFamily: 'Inter-Black'}]}> אליהו</Text> */}
        <View
          style={{
            height: "80%",
            width: "90%",
            top: -150,
          }}
        >
          <FlatList
            keyExtractor={(item) => item.key}
            data={notification}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <View style={[styles.item]}>
                  <View style={styles.indication}>
                    {/* <Image
                    source={require("../assets/v-icon.png")}
                    style={styles.indicationImg}
                  /> */}
                    <Text>{item.error_type}</Text>
                    <Text>{item.cooler_name}</Text>
                  </View>

                  <View style={styles.nameAndUpdate}>
                    {/* <Text style={[styles.itemOfFlatList]}>{item.name}</Text>
                  <Text style={[styles.itemOfFlatList]}>
                  עודכן לפני {item.update} דקות
                </Text> */}
                    <Text>זמן התראה</Text>
                    <Text>סיום תקלה</Text>
                  </View>

                  <View style={{ bottom: 5 }}>
                    <Text>{item.start_error_datetime}</Text>
                    <Text
                      style={{
                        fontWeight: "bold",
                        marginBottom: 0,
                        textAlign: "center",
                      }}
                    >
                      {Date.parse(item.end_error_time)}
                    </Text>
                  </View>

                  <View style={{ bottom: 5, right: -30 }}>
                    <Text>13.5.2022</Text>
                    <Text
                      style={{
                        fontWeight: "bold",
                        marginBottom: 0,
                        textAlign: "center",
                      }}
                    >
                      --.--.----
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          ></FlatList>
        </View>
      </View>
      <Navigation />
    </KeyboardAvoidingView>
  );
};
export default NotificationScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#ffffff",
    marginTop: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImgContainer: {
    marginLeft: 8,
    height: 60,
    width: 60,
    borderRadius: 40,
    overflow: "hidden",
    top: -140,
    left: -150,
  },
  profileImg: {
    height: 60,
    width: 60,
    borderRadius: 40,
  },
  image: {
    height: 154,
    marginBottom: 80,
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  listContainer: {
    backgroundColor: "black",
    padding: 5,
    margin: 5,
    borderRadius: 10,
    alignItems: "center",
    //width: "100%",
  },
  // item: {
  //   fontSize: 24,
  //   borderRadius: 10,
  //   marginTop: 24,
  //   padding: 15,
  //   justifyContent: "center",
  //   width: "100%",
  //   color: "white",
  //   fontWeight: "700",
  // },
  item: {
    margin: 7,
    width: "90%",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-around",
    borderBottomWidth: 1,
  },
  itemOfFlatList: {
    top: 10,
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 20,
  },
  indication: {
    bottom: 5,
  },
  indicationImg: {
    height: 40,
    width: 40,
  },
  nameAndUpdate: { bottom: 5 },
  itemOutLine: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "black",
    borderWidth: 2,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 10,
  },

  buttonLogin: {
    backgroundColor: "black",
    width: 335,
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    margin: 5,
  },
  buttonTextLogin: {
    color: "white",
    fontWeight: "700",
    fontSize: 24,
  },

  buttonRegister: {
    backgroundColor: "black",
    width: "100%",
    padding: 5,
    borderRadius: 10,
    alignItems: "flex-start",
  },
  buttonOutLine: {
    backgroundColor: "white",
    marginTop: 10,
    borderColor: "black",
    borderWidth: 2,
  },
  buttonOutLineText: {
    color: "black",
    fontWeight: "700",
    fontSize: 20,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  scrollViewContainer: {
    width: 350,
  },
});
