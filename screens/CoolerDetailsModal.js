import React, { useState, useEffect } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

const CoolerDetailsModal = (props) => {
  const [modalVisible, setModalVisible] = useState(props.modalVisible);
  const [selectedItem, setSelectedItem] = useState(props.selectedItem);
  const isTempOk =
    selectedItem.last_temperature_update < selectedItem.maximum_temperature &&
    selectedItem.last_temperature_update > selectedItem.minimum_temperature;
  const [icon, setIcon] = useState(
    isTempOk ? require("../assets/v-icon.png") : require("../assets/x-icon.png")
  );

  useEffect(() => {}, [modalVisible]);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={[
                styles.temperature,
                { backgroundColor: isTempOk ? "#55BEF0" : "#fb3b30" },
              ]}
            >
              <Text
                style={[
                  styles.itemOfFlatList,
                  { fontSize: 30, fontWeight: "500", color: "white" },
                ]}
              >
                {selectedItem.last_temperature_update + "°"}
              </Text>
            </View>
            <TouchableOpacity
              Pressable
              style={styles.goBack}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Image source={require("../assets/go-back-icon.png")} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.speaker}>
              <Image
                style={{
                  left: 15,
                  borderWidth: 1,
                  borderColor: "black",
                  borderRadius: 25,
                }}
                source={require("../assets/speaker.slash.png")}
              />
              <Text>מצב צליל</Text>
            </TouchableOpacity>
            <View style={styles.coolerName}>
              <Text
                style={[
                  styles.coolerNameText,
                  { fontSize: 23, fontWeight: "600" },
                ]}
              >
                {selectedItem.name}
              </Text>
            </View>
            <View style={styles.coolerName}>
              <Text
                style={[
                  styles.coolerNameText,
                  { fontSize: 16, fontWeight: "600" },
                ]}
              >
                טמפרטורה תקינה: בין {selectedItem.minimum_temperature}° ל{" "}
                {selectedItem.maximum_temperature}°
              </Text>
            </View>
            <View style={[styles.coolerName]}>
              <Text
                style={[
                  styles.coolerNameText,
                  { fontSize: 13, fontWeight: "600", color: "#a0a0a0" },
                ]}
              >
                תאריך הפעלה {selectedItem.installation_datetime}
              </Text>
            </View>
            <View style={styles.coolerName}>
              <Text
                style={[
                  styles.coolerNameText,
                  { fontSize: 18, right: 100, top: 20 },
                ]}
              >
                <View>
                  <Image source={require("../assets/battery-icon.png")} />
                </View>
                {"  "}
                {selectedItem.last_battery_update}% נותרו
              </Text>
            </View>
            <View style={styles.coolerName}>
              <Text
                style={[
                  styles.coolerNameText,
                  { fontSize: 16, right: 20, top: 22, color: "#a0a0a0" },
                ]}
              >
                הוחלפה לאחרונה בתאריך{" "}
                {selectedItem.datetime_of_battery_replacement}
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.buttonLogin, { fontSize: 16, right: -30 }]}
              >
                <Text> תקלות אחרונות</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.buttonLogin, { fontSize: 16, right: -45 }]}
              >
                <Text>עריכה/מחיקה</Text>
              </TouchableOpacity>
            </View>
            <View style={{ top: -40 }}>
              <Text
                style={[styles.coolerNameText, { fontSize: 16, right: 80 }]}
              >
                עודכן לפני{" "}
                {Math.floor(
                  (Date.now() - Date.parse(selectedItem.last_datetime_update)) /
                    1000 /
                    60
                )}{" "}
                דקות
              </Text>
              <View style={{ right: -200, top: -27, height: 0 }}>
                <Image source={icon} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    //marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    paddingBottom: 0,
    marginBottom: 0,
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
  temperature: {
    top: -25,
    alignContent: "center",
    width: 70,
    height: 70,
    borderRadius: 70 / 4,
  },
  itemOfFlatList: {
    top: 15,
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  goBack: {
    top: -95,
    right: 150,
  },
  speaker: { top: -108, right: -130 },
  coolerName: {
    top: -95,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    right: 25,
    top: -60,
  },

  buttonLogin: {
    backgroundColor: "#FFFFFF",
    borderColor: "#F7F7F7",
    borderWidth: 2,
    width: 150,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#000000",
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 4,
      },
    }),
  },
});

export default CoolerDetailsModal;
