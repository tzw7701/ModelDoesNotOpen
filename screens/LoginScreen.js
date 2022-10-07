import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { auth } from "../firebase";

const LoginScreen = () => {
  let userMoz;
  let userMozTemp;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
         navigation.navigate("Cooler");
      }
    });
    // setUserMozTemp("");
    console.log("useEffect", useEffect);
    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    // auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((userCredentials) => {
    //     const user = userCredentials.user;
    //     console.log("Register With:", user.email);
    //   })
    //   .catch((error) => alert(error.message));
  };

  const url =
    "http://Firstmoztemp-env.eba-7sfsam8j.us-east-2.elasticbeanstalk.com/";
  const getUserByEmail = (email) => {
    let data1;
    fetch(`${url}Users/GetUserByEmail`, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        user_email: email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        data1 = data.user_data;
      });
    return data1;
  };

  const handleLogIn = () => {
    userMozTemp = JSON.stringify(getUserByEmail(email));

    if (userMozTemp !== "null") {
      console.log("userMozTemp: ", userMozTemp);
      auth
        .signInWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          navigation.navigate("Cooler");
          console.log("Logged in With:", user.email);
        })
        .catch((error) => alert(error.message));
    } else {
      alert("שם משתמש או סיסמה לא קיימים");
    }
  };
  const [emailBorderBottomWidth, setEmailBorderBottomWidth] = useState(0.5);
  const [borderBottomWidth, setBorderBottomWidth] = useState(0.5);

  const onEmailFocus = () => {
    setEmailBorderBottomWidth(2.5);
  };

  const onEmailBlur = () => {
    setEmailBorderBottomWidth(0.5);
  };

  const onFocus = () => {
    setBorderBottomWidth(2.5);
  };

  const onBlur = () => {
    setBorderBottomWidth(0.5);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image style={styles.image} source={require("../assets/top.png")} />

      <View style={styles.inputContainer}>
        <Text style={styles.label}>אימייל</Text>

        <TextInput
        name= 'Username'
          placeholder="אימייל"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={[styles.input, { borderBottomWidth: emailBorderBottomWidth }]}
          onBlur={onEmailBlur}
          onFocus={onEmailFocus}
        />
        <Text style={[styles.label, { marginTop: 45 }]}> סיסמה</Text>

        <TextInput
        name="Password"
          placeholder="סיסמה"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={[styles.input, { borderBottomWidth: borderBottomWidth }]}
           onBlur={onBlur}
           onFocus={onFocus}
          secureTextEntry
        />
        <TouchableOpacity>
          <Text style={styles.forgetPassword}>שכחת סיסמה?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogIn} style={styles.buttonLogin}>
          <Text style={styles.buttonTextLogin}>כניסה</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -20,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginBottom: 80,
    resizeMode: "contain",
  },
  headerText: {
    color: "black",
    fontSize: 60,
    marginBottom: 100,
  },
  inputContainer: {
    width: "80%",
    marginBottom: 40,
  },
  label: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 20,
    lineHeight: 20,
    // /* or 100% */

    color: "#000000",
  },
  input: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#000113",
    // backgroundColor: "white",
    //paddingHorizontal: 15,
    // borderRadius: 10,
    textAlign: "left",
  },

  buttonContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonLogin: {
    backgroundColor: "#FFFFFF",
    borderColor: "#F7F7F7",
    borderWidth: 2,
    width: "100%",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",

    // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
    color: "black",
    // fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: 20,
  },
  buttonOutLineText: {
    color: "black",
    fontWeight: "700",
    fontSize: 16,
  },
  polygon: {
    top: -100,
    height: 250,
    width: 400,
    backgroundColor: "#D6D6D6",
    borderBottomStartRadius: 125,
    borderBottomEndRadius: 0,
  },
  forgetPassword: {
    color: "#0071E3",
    marginTop: 5,
    left: 225,
  },
});
