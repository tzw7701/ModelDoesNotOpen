import React, { useState, useEffect } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

const CoolerDetailsModal = (props) => {
  const [modalVisible, setModalVisible] = useState(props.modalVisible);
  const [selectedItem, setSelectedItem] = useState(props.selectedItem);
  useEffect(() => {

  }, [modalVisible]);

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
            <View style={styles.temperature}>
              <Text style={[styles.itemOfFlatList, { fontSize: 30 }]}>{selectedItem.last_temperature_update}°</Text>
            </View>
            <Pressable
              Pressable
              style={styles.goBack}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Image source={require("../assets/go-back-icon.png")} />
            </Pressable>
            <Pressable style={styles.speaker}>
              <Image source={require("../assets/speaker.slash.png")} />
            </Pressable>
            <View style={styles.coolerName}>
              <Text style={[styles.coolerNameText, { fontSize: 23 }]}>
                {selectedItem.name}
              </Text>
            </View>
            <View style={styles.coolerName}>
              <Text style={[styles.coolerNameText, { fontSize: 16 }]}>
                טמפרטורה תקינה: בין {selectedItem.minimum_temperature}° ל {selectedItem.maximum_temperature}°
              </Text>
            </View>
            <View style={styles.coolerName}>
              <Text style={[styles.coolerNameText, { fontSize: 13 }]}>
                תאריך הפעלה {selectedItem.installation_datetime}
              </Text>
            </View>
            <View style={styles.coolerName}>
              <Text
                style={[
                  styles.coolerNameText,
                  { fontSize: 16, right: -110, top: 20 },
                ]}
              >
                {selectedItem.last_battery_update}% נותרו
              </Text>
            </View>
            <View style={styles.coolerName}>
              <Text
                style={[
                  styles.coolerNameText,
                  { fontSize: 16, right: -35, top: 20 },
                ]}
              >
                הוחלפה לאחרונה בתאריך {selectedItem.datetime_of_battery_replacement}
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.buttonLogin, { fontSize: 16, right: -30 }]}
              >
                <Text>עריכה/מחיקה</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.buttonLogin, { fontSize: 16, right: -45 }]}
              >
                <Text>תקלות אחרונות</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text
                style={[styles.coolerNameText, { fontSize: 16, right: -90 }]}
              >
               עודכן לפני{" "}
                  {Math.floor(
                    (Date.now() - Date.parse(selectedItem.last_datetime_update)) /
                      1000 /
                      60
                  )}{" "}
                  דקות
              </Text>
            </View>
            <View style={{ right: 130, top: -27, height: 0 }}>
              <Image source={require("../assets/v-icon.png")} />
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
  temperature: {
    top: -10,
    alignContent: "center",
    width: 70,
    height: 70,
    borderRadius: 70 / 4,
    backgroundColor: "#55BEF0",
  },
  itemOfFlatList: {
    top: 15,
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  goBack: {
    top: -80,
    right: -130,
  },
  speaker: { top: -108, right: 130 },
  coolerName: {
    top: -60,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    right: 25,
    top: -30,
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
