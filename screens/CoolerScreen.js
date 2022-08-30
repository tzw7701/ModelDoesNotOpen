import React, { Component, useState, useEffect } from "react";
import { useFonts } from "expo-font";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
} from "react-native";
import { Searchbar } from "react-native-paper";
import CoolerDetailsModal from "./CoolerDetailsModal.js";
import Navigation from "./NavigationScreen"
const CoolerScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  // const [stores, setStores] = useState([
  //   { name: "חלבי 3#, אגף א'", id: 1, update: 5, temperature: 12 },
  //   { name: "בשרי 3#, אגף ב'", id: 2, update: 3, temperature: 10 },
  //   { name: "דגים 3#, אגף ג'", id: 3, update: 1, temperature: 2 },
  //   { name: "ירקות 3#, אגף א'", id: 4, update: 6, temperature: 8 },
  //   { name: "חלבי 3#, אגף ב'", id: 5, update: 2, temperature: 6 },
  //   { name: "חלבי 3#, אגף ב'", id: 6, update: 2, temperature: 6 },
  //   { name: "חלבי 3#, אגף ב'", id: 7, update: 2, temperature: 6 },
  //   { name: "חלבי 3#, אגף ב'", id: 8, update: 2, temperature: 6 },
  // ]);

  // const [stores, setStores] = useState(
  //  [{
  //   datetime_of_battery_replacement: "Tue, 19 Jan 2038 03:14:07 GMT",
  //   disable: 0,
  //   id: 1,
  //   installation_datetime: "Tue, 19 Jan 2038 03:14:07 GMT",
  //   last_battery_update: 99.1,
  //   last_datetime_update: "Tue, 19 Jan 2038 03:14:07 GMT",
  //   last_temperature_update: 5.2,
  //   mac_address: "10:97:BD:1B:C7:D0",
  //   maximum_temperature: 10,
  //   minimum_temperature: 1,
  //   name: "Fish",
  //   store_id: 1,
  // },
  //  {
  //   datetime_of_battery_replacement: "Tue, 19 Jan 2038 03:14:07 GMT",
  //   disable: 0,
  //   id: 2,
  //   installation_datetime: "Tue, 19 Jan 2038 03:14:07 GMT",
  //   last_battery_update: 92.4,
  //   last_datetime_update: "Tue, 19 Jan 2038 03:14:07 GMT",
  //   last_temperature_update: 7.4,
  //   mac_address: "78:25:AQ:2X:C7:D0",
  //   maximum_temperature: 15,
  //   minimum_temperature: 1,
  //   name: "Meat",
  //   store_id: 1,
  // }]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);

  const [stores, setStores] = useState("");
  useEffect(() => {
    getCoolersByStoreId(1);
  }, [modalVisible]);

  const url =
    "http://Firstmoztemp-env.eba-7sfsam8j.us-east-2.elasticbeanstalk.com/";
  const getCoolersByStoreId = (store_id) => {
    fetch(`${url}Coolers/GetCoolersByStoreId`, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        store_id: store_id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setStores(data.cooler_information);
      })
      .catch((error) => alert(error.message));
  };

  let [fontsLoaded] = useFonts({
    "Inter-Black": require("../assets/fonts/Inter-Black.ttf"),
  });
  //const navigation = useNavigation();

  const handleClick = (item) => {
    try {
      setSelectedItem(item);
      setModalVisible(!modalVisible);
    } catch (err) {
      alert(err.message);
      console.log(err.message);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image style={styles.image} source={require("../assets/TopS.png")} />
      <Text style={[styles.h_text]}>שלום,</Text>
      <Text style={[styles.h_text]}> אליהו</Text>

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
        style={{ width: "60%", right: -55, top: -120 }}
        placeholder="חפש..."
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <Image
        style={{ top: -172, left: -105, height: 55, width: 55 }}
        source={require("../assets/filter.png")}
      />
      {/* <Text style={styles.h_text}>שלום,</Text>
        <Text style={[styles.h_text, {fontFamily: 'Inter-Black'}]}> אליהו</Text> */}
      <View style={[styles.circle, { top: -225, right: 165 }]}>
        <Text style={{ fontSize: 50, left: 10, bottom: 10, fontWeight: "100" }}>
          +
        </Text>
      </View>

      <FlatList
        style={{
          top: -180,
          width: "90%",
          height: "100%",
          flex: 1,
     
        }}
        data={stores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleClick(item)}>
            <View style={[styles.item]}>
              <View style={styles.indication}>
                <Image
                  source={require("../assets/v-icon.png")}
                  style={styles.indicationImg}
                />
              </View>

              <View style={styles.nameAndUpdate}>
                <Text style={[styles.itemOfFlatList]}>{item.name}</Text>
                <Text style={[styles.itemOfFlatList]}>
                  עודכן לפני{" "}
                  {Math.floor(
                    (Date.now() - Date.parse(item.last_datetime_update)) /
                      1000 /
                      60
                  )}{" "}
                  דקות
                </Text>
              </View>

              <View style={styles.temperature}>
                <Text style={[styles.itemOfFlatList]}>
                  {item.last_temperature_update}°C
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      ></FlatList>
      {modalVisible && (
        <CoolerDetailsModal
          modalVisible={modalVisible}
          selectedItem={selectedItem}
        />
      )}
      <Navigation />
    </KeyboardAvoidingView>
  );
};
export default CoolerScreen;

const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "#55BEF0",
  },
  item: {
    margin: 7,
    flexDirection: "row",
    justifyContent: "center",
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
    right: 40,
    top: 10,
  },
  indicationImg: {
    height: 40,
    width: 40,
  },
  nameAndUpdate: { marginBottom: 10 },

  temperature: {
    right: -30,
    alignContent: "center",
    width: 50,
    height: 50,
    borderRadius: 50 / 4,
    backgroundColor: "#55BEF0",
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

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 154,
    marginBottom: 80,
    resizeMode: "contain",
  },
  h_text: {
    fontSize: 18,
    top: -80,
    right: -150,
    lineHeight: 22,
    textAlign: "right",
  },
});
