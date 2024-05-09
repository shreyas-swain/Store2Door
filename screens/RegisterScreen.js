import React, { useContext, useState } from "react";
import {
    KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView
} from "react-native";
// import { titles, colors, btn1, hr80 } from '../../globals/style'
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AuthContext } from "../AuthProvider";

// import { firebase } from '../../../Firebase/firebaseConfig'

const RegisterScreen = ({ navigation }) => {
    const {register} = useContext(AuthContext)
  const [emailfocus, setEmailfocus] = useState(false);
  const [passwordfocus, setPasswordfocus] = useState(false);
  const [phonefocus, setPhonefocus] = useState(false);
  const [namefocus, setNamefocus] = useState(false);

  const [showpassword, setShowpassword] = useState(false);
  const [showcpassword, setShowcpassword] = useState(false);
  const [cpasswordfocus, setcPasswordfocus] = useState(false);

  //taking form data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  // console.log(email);

  const [customError, setCustomError] = useState("");
  const [successmsg, setSuccessmsg] = useState(null);

  // const [useruid, setUseruid] = useState('');
  const handleSignup = () => {
    if (password != cpassword) {
      // alert("Password doesn't match");
      setCustomError("Password doesn't match");
      return;
    } else if (phone.length != 10) {
      setCustomError("Phone number should be 10 digit");
      return;
    }
    register(email, password, name, phone, address);
  };
  return (
    <ScrollView>
        <KeyboardAvoidingView style={styles.container}>
          <Text style={styles.head1}>Sign Up</Text>
          {customError !== "" && (
            <Text style={styles.errormsg}>{customError}</Text>
          )}
          <View style={styles.inputout}>
            <AntDesign name="user" size={24} color={"orange"} />
            {/* color={namefocus === true ? colors.text1 : colors.text2}  */}
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              onFocus={() => {
                setEmailfocus(false);
                setPasswordfocus(false);
                setShowpassword(false);
                setNamefocus(true);
                setPhonefocus(false);
                setCustomError("");
              }}
              onChangeText={(text) => setName(text)}
            />
          </View>

          <View style={styles.inputout}>
            <Entypo name="email" size={24} color={"orange"} />
            {/* color={emailfocus === true ? colors.text1 : colors.text2}  */}
            <TextInput
              style={styles.input}
              placeholder="Email"
              onFocus={() => {
                setEmailfocus(true);
                setPasswordfocus(false);
                setShowpassword(false);
                setNamefocus(false);
                setPhonefocus(false);
                setCustomError("");
              }}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          {/*  */}

          <View style={styles.inputout}>
            <Feather name="smartphone" size={24} color={"orange"} />
            {/* color={phonefocus === true ? colors.text1 : colors.text2}  */}
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              onFocus={() => {
                setEmailfocus(false);
                setPasswordfocus(false);
                setShowpassword(false);
                setNamefocus(false);
                setPhonefocus(true);
                setCustomError("");
              }}
              onChangeText={(text) => setPhone(text)}
            />
          </View>

          {/* password start */}
          <View style={styles.inputout}>
            <MaterialCommunityIcons
              name="lock-outline"
              size={24}
              color={"orange"}
            />
            {/* color={passwordfocus == true ? colors.text1 : colors.text2}  */}
            <TextInput
              style={styles.input}
              placeholder="Password"
              onFocus={() => {
                setEmailfocus(false);
                setPasswordfocus(true);
                setShowpassword(false);
                setNamefocus(false);
                setPhonefocus(false);
                setCustomError("");
              }}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={showpassword === false ? true : false}
            />

            <Octicons
              name={showpassword == false ? "eye-closed" : "eye"}
              size={24}
              color={"orange"}
              onPress={() => setShowpassword(!showpassword)}
            />
          </View>
          {/*  */}
          <View style={styles.inputout}>
            <MaterialCommunityIcons
              name="lock-outline"
              size={24}
              color={"orange"}
            />
            {/* color={cpasswordfocus == true ? colors.text1 : colors.text2} */}
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              onFocus={() => {
                setEmailfocus(false);
                setPasswordfocus(false);
                // setShowpassword(true);
                setNamefocus(false);
                setPhonefocus(false);
                setCustomError("");
              }}
              onChangeText={(text) => setcPassword(text)}
              secureTextEntry={showcpassword === false ? true : false}
            />

            <Octicons
              name={showcpassword == false ? "eye-closed" : "eye"}
              size={24}
              color={"orange"}
              onPress={() => setShowcpassword(!showcpassword)}
            />
          </View>
          {/* password end */}

          <Text style={styles.address}>Please enter your address</Text>
          <View style={styles.inputout}>
            <TextInput
              style={styles.input}
              placeholder="Enter your Address"
              onChangeText={(text) => setAddress(text)}
              onPress={() => {
                setEmailfocus(false);
                setPasswordfocus(false);
                setShowpassword(false);
                setNamefocus(false);
                setPhonefocus(false);
                setCustomError("");
              }}
            />
          </View>

          <TouchableOpacity onPress={() => handleSignup()}>
            {/* style={btn1} */}
            <Text
              style={{
                color: "#FF5733",
                fontSize: 20,
                marginVertical: 15,
                fontWeight: "bold",
              }}
            >
              Sign up
            </Text>
            {/* style={{ color: colors.col1, fontSize: titles.btntxt, fontWeight: "bold" }} */}
          </TouchableOpacity>

          {/* <Text style={styles.forgot}>Forgot Password?</Text> */}
          {/* <Text style={styles.or}>OR</Text>
          <Text style={styles.gftxt}>Sign In With...</Text>

          <View style={styles.gf}>
            <TouchableOpacity>
              <View style={styles.gficon}>
                <AntDesign name="google" size={24} color="#EA4335" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.gficon}>
                <FontAwesome5 name="facebook-f" size={24} color="#4267B2" />
              </View>
            </TouchableOpacity>
          </View> */}
          {/* <View style={hr80}></View> */}
          <Text>
            Already have an account?
            <Text
              style={styles.signup}
              onPress={() => navigation.navigate("Login")}
            >
              {" "}
              Log In
            </Text>
          </Text>
        </KeyboardAvoidingView>
        {/* <View style={styles.container1}>
          <Text style={styles.successmessage}>{successmsg}</Text>
          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            {/* style={btn1} */}
            {/* <Text>Sign In</Text> */}
            {/* style={{ color: colors.col1, fontSize: titles.btntxt, fontWeight: "bold" }} */}
          {/* </TouchableOpacity> */}

          {/* <TouchableOpacity onPress={() => setSuccessmsg(null)}>
            {/* style={btn1} */}
            {/* // <Text>Go Back</Text> */}
            {/* style={{ color: colors.col1, fontSize: titles.btntxt, fontWeight: "bold" }} */}
          {/* </TouchableOpacity> */}
        {/* </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    // justifyContent: 'center',
    marginTop: 50,
  },
  container1: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  head1: {
    // fontSize: titles.title1,
    // color: colors.text1,
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
    // backgroundColor: colors.col1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    // alignSelf: 'center',
    elevation: 20,
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: "80%",
  },
  forgot: {
    // color: colors.text2,
    marginTop: 20,
    marginBottom: 10,
  },
  or: {
    // color: colors.text1,
    marginVertical: 10,
    fontWeight: "bold",
  },
  gftxt: {
    // color: colors.text2,
    marginBottom: 10,
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
    // color: colors.text1,
    color: "#007AFF",
  },
  address: {
    fontSize: 18,
    // color: colors.text2,
    color: "#FF5733",
    textAlign: "center",
    marginTop: 10,
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
  successmessage: {
    color: "green",
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});

export default RegisterScreen;