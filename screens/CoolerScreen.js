import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import { SvgUri } from "react-native-svg";
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
import Navigation from "./NavigationScreen";


const IndicationImg = (props) => {
  const min = props.min;
  const max = props.max;
  const current = props.current;

  const isTempOk = current < max && current > min;
  const [icon, setIcon] = useState(
    isTempOk ? require("../assets/v-icon.png") : require("../assets/x-icon.png")
  );

  return (
    <View style={styles.indication}>
      <Image source={icon} style={styles.indicationImg} />
    </View>
  );
};



const CoolerScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const [isItemClickd, setIsItemClickd] = useState(false);

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
      console.log(isItemClickd);
      setIsItemClickd(!isItemClickd);
    } catch (err) {
      alert(err.message);
      console.log(err.message);
    }
  };
  // const shadowOpt = {
  //   height:75,
  //   width:400,
  //   color: "#acacac",
  //   border: 2,
  //   radius: 11,
  //   opacity: 0.19,
  //   x: 0,
  //   y: 2,
  //   b: 2,

  //   style: {

  //     margin: 7,
  //     flexDirection: "row",
  //     borderColor: "#acacac",
  //   },
  // };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
     {/* <SvgUri
        style={styles.image}
        uri="https://www.linkpicture.com/q/Top-S.svg"
      ></SvgUri> */}
  
  <Image style={styles.image} source={require("../assets/TopS.png")} />
      <View style={{ right: 290 }}>
        <Text style={[styles.h_text, { lineHeight: 30 }]}>שלום,</Text>
        <Text
          style={[
            styles.h_text,
            { fontStyle: "italic", fontSize: 22, fontWeight: "600" },
          ]}
        >
          {" "}
          שלום
        </Text>
      </View>

      <View
        style={[
          styles.profileImgContainer,
          { borderColor: "#424141", borderWidth: 1 },
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
          left: 150,
          color: "#424141",
          fontSize: 12,
          lineHeight: 17,
          fontWeight: "400",
        }}
      >
        סופר קליק, יבנה
      </Text>

      <View
        style={{
          borderBottomColor: "#909093",
          borderWidth: 0.4,
          width: 360,
          top: -130,
        }}
      ></View>
      <View style={[styles.circle, { top: -120, right: -160 }]}>
        <Text
          style={{
            fontSize: 40,
            left: -9,
            bottom: 10,
            fontWeight: "100",
            color: "white",
          }}
        >
          +
        </Text>
      </View>
      <Searchbar
        style={{
          width: "62%",
          right: 60,
          top: -165,
          borderColor: "black",
          borderWidth: 1,
        }}
        placeholder="חפש..."
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <Image
        style={{ top: -213, left: 100, height: 50, width: 55 }}
        source={require("../assets/filter.png")}
      />
      {/* <Text style={styles.h_text}>שלום,</Text>
        <Text style={[styles.h_text, {fontFamily: 'Inter-Black'}]}> אליהו</Text> */}

      <View
        style={{
          top: -170,
          width: "100%",
          height: "75%",
        }}
      >
        <FlatList
          data={stores}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleClick(item)}>
              <View style={styles.item}>
                <View
                  style={[
                    styles.temperature,
                    {
                      backgroundColor:
                        item.last_temperature_update <
                          item.maximum_temperature &&
                        item.last_temperature_update > item.minimum_temperature
                          ? "#55BEF0"
                          : "#fb3b30",
                    },
                  ]}
                >
                  <Text
                    style={{
                      fontSize: 26,
                      fontWeight: "500",
                      color: "white",
                      top: 8,
                      alignContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    {Math.floor(item.last_temperature_update) + "°"}
                  </Text>

                  {/* <Text
                      style={{ fontWeight: "300", fontSize: 20}}
                      >
                      °
                    </Text> */}
                  <View
                    style={{
                      top: 3,
                      height: 20,
                      width: 20,
                      backgroundColor: "white",
                      borderRadius: 20,
                      borderWidth: 1,
                      borderColor: "#55BEF0",
                    }}
                  >
                    <Image
                      style={{
                        top: 1.5,
                        right: -5,
                      }}
                      source={require("../assets/battery-icon-s.png")}
                    />
                  </View>
                </View>
                <View style={styles.nameAndUpdate}>
                  <Text
                    style={[
                      styles.itemOfFlatList,
                      { fontSize: 22, color: "#646464", fontWeight: "600" },
                    ]}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={[styles.itemOfFlatList, { fontSize: 16, left: 5 }]}
                  >
                    עודכן לפני{" "}
                    {Math.floor(
                      (Date.now() - Date.parse(item.last_datetime_update)) /
                        1000 /
                        60
                    )}{" "}
                    דקות{" "}
                  </Text>
                </View>
                <IndicationImg
                  min={item.minimum_temperature}
                  max={item.maximum_temperature}
                  current={item.last_temperature_update}
                />
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
      </View>
    </KeyboardAvoidingView>
  );
};
export default CoolerScreen;

const styles = StyleSheet.create({
  circle: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: "#55BEF0",
  },
  item: {
    right: -8.5,
    margin: 7,
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 0.75,
    borderColor: "#acacac",
    backgroundColor: "#FFFFFF",

    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11,
    width: "92%",
    height: 70,

    // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    ...Platform.select({
      ios: {
        shadowColor: "#ffffff",
        shadowOpacity: 0.2,
      },
      android: {
        //shadowColor: "#FFFFFF",
        elevation: 4,
      },
    }),
  },
  itemOfFlatList: {
    right: 40,
    top: 10,
    alignContent: "flex-start",
  },
  indication: {
    //left: 40,
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: "auto",
    top: 18,
  },
  indicationImg: {
    height: 30,
    width: 30,
  },
  nameAndUpdate: {
    marginBottom: 10,
    alignItems: "flex-start",
    right: -10,
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 185,
  }, //left: -50 },

  temperature: {
    top: 6.5,
    right: 10,
    width: 55,
    height: 55,
    color: "#000",
    borderRadius: 14,
    backgroundColor: "#55BEF0",
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 55,
  },
  profileImgContainer: {
    marginLeft: 8,
    height: 50,
    width: 50,
    borderRadius: 33.3,
    overflow: "hidden",
    top: -140,
    left: 145,
  },
  profileImg: {
    height: 50,
    width: 50,
    borderRadius: 33.3,
  },

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 210,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    // marginTop: 35,
    // marginBottom: 60,

    height: 154,
    marginBottom: 80,
    resizeMode: "contain",
  },
  h_text: {
    fontSize: 16,
    top: -80,
    right: -150,
    lineHeight: 22,
    textAlign: "left",
  },
});
