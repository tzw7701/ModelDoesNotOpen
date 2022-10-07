import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/core";

const ModalNotReady = (props) => {
  const [modalVisible, setModalVisible] = useState(props.modalVisible);
  const navigation = useNavigation();
  const handleClose = () => {
    setModalVisible(!modalVisible);
    // navigation.goBack();
  };

  return (
    <View style={stylesModal.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={stylesModal.centeredView}>
          <View style={stylesModal.modalView}>
            <Text style={stylesModal.modalText}>
              פונקציה זו אינה זמינה, נתראה בקרוב
            </Text>
            <Pressable
              style={[stylesModal.button, stylesModal.buttonClose]}
              onPress={handleClose}
            >
              <Text style={stylesModal.textStyle}>סגור</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const Navigation = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleNotReady = () => {
    navigation.navigate("NotReady");
  };

  const handleNotificationsNavigation = () => {
    navigation.navigate("Notification");
  };
  const handleProfileNavigation = () => {
    navigation.navigate("Home");
  };
  const handleSettingsNavigation = () => {
    navigation.navigate("Login");
  };
  const handleHomeNavigation = () => {
    navigation.navigate("Cooler");
  };

  return (
    <View style={styles.nevContainer}>
      <TouchableOpacity onPress={handleHomeNavigation} style={styles.nevBtn}>
        <Image
          source={require("../assets/Home-icon.png")}
          style={[styles.imgNavBtn, { right: 2 }]}
        />
        <Text>בית</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleNotReady}
        style={styles.nevBtn}
      >
        <Image
          source={require("../assets/Settings-icon.png")}
          style={[styles.imgNavBtn, { right: -9 }]}
        />
        <Text>הגדרות</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNotReady} style={styles.nevBtn}>
        <Image
          source={require("../assets/Profile-icon.png")}
          style={[styles.imgNavBtn, { right: -7 }]}
        />
        <Text>פרופיל</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleNotReady}
        style={styles.nevBtn}
      >
        <Image
          source={require("../assets/Notification-icon.png")}
          style={[styles.imgNavBtn, { right: -11 }]}
        />
        <Text>התראות</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Navigation;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  nevContainer: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    height: 85,
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

const stylesModal = StyleSheet.create({
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
});
