import React, { useContext, useState } from "react";
import {
  Statusbar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AuthContext } from "../AuthProvider";
import { Button } from "@rneui/base";
// import { GoogleSigninButton } from "@react-native-google-signin/google-signin";

// import { firebase } from '../../../Firebase/firebaseConfig'

const Login = ({ navigation }) => {
  const [emailfocus, setEmailfocus] = useState(false);
  const [passwordfocus, setPasswordfocus] = useState(false);
  const [showpassword, setShowpassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [customerror, setcustomError] = useState("");
  const { login } = useContext(AuthContext);

  const handlelogin = () => {
    login(email, password);
    navigation.navigate('Home')
  };

  return (
    <View style={styles.container}>
      {/* <Statusbar /> */}
      <Text style={styles.head1}>Log In To Your Account</Text>
      {customerror !== "" && <Text style={styles.errormsg}>{customerror}</Text>}
      {/*Login Email */}
      <View style={styles.inputout}>
        <AntDesign
          name="user"
          size={24}
          color={"orange"}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onFocus={() => {
            setEmailfocus(true);
            setPasswordfocus(false);
            setShowpassword(false);
            setcustomError("");
          }}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      
      {/*Login Password */}
      <View style={styles.inputout}>
        <MaterialCommunityIcons
          name="lock-outline"
          size={24}
          color={"orange"}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onFocus={() => {
            setEmailfocus(false);
            setPasswordfocus(true);
            setcustomError("");
          }}
          secureTextEntry={showpassword === false ? true : false}
          onChangeText={(text) => setPassword(text)}
        />

        <Octicons
          name={showpassword == false ? "eye-closed" : "eye"}
          size={24}
          color="orange"
          onPress={() => setShowpassword(!showpassword)}
        />
      </View>
      {/* Login Button */}
      <TouchableOpacity onPress={() => handlelogin()}>
        <Button
          style={{
            color: "#FF5733",
            fontSize: 20,
            marginTop: 20,
            fontWeight: "bold",
          }}
        >
          Log in
        </Button>
      </TouchableOpacity>

      <Text style={styles.forgot}>Forgot Password?</Text>
      <Text>
        Don't have an account?
        <Text
          style={styles.signup}
          onPress={() => navigation.navigate("Register")}
        >
          {" "}
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  head1: {
    color: "#FF5733",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  inputout: {
    flexDirection: "row",
    width: "80%",
    marginVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    elevation: 20,
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: "80%",
  },
  forgot: {
    marginTop: 20,
    marginBottom: 10,
    color: "#000080",
  },
  or: {
    marginVertical: 10,
    fontWeight: "bold",
  },
  gftxt: {
    marginVertical: 10,
    fontSize: 25,
  },
  gf: {
    flexDirection: "row",
    marginBottom: 15,
  },
  gficon: {
    backgroundColor: "white",
    width: 50,
    margin: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    elevation: 20,
  },
  signup: {
    color: "#007AFF",
  },
  errormsg: {
    color: "red",
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});

export default Login;
