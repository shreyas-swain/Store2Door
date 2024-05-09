import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import registerBusiness from "../backend/registerBusiness";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RegisterBusiness = ({ navigation }) => {
  const [mallName, setMallName] = useState("");
  const [shopName, setShopName] = useState("");
  const [phnNum, setPhnNum] = useState("");
  const [shopAddr, setShopAddr] = useState("");
  const [pfp, setPfp] = useState(null);
  const [authCertificate, setAuthCertificate] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await AsyncStorage.getItem("urBusiness");
        //   console.log(data);
        if (data) {
          navigation.navigate("AddProduct");
        }
      } catch (error) {
        console.error("Error retrieving data:", error);
      }
    };
    getData();
  }, []);

  const pickPfp = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    //console.log(result);

    if (!result.canceled) {
      setPfp(result.assets[0].uri);
    }
  };
  const pickCertificate = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    //console.log(result);

    if (!result.canceled) {
      setAuthCertificate(result.assets[0].uri);
    }
  };
  const handleRegister = async () => {
    AsyncStorage.removeItem("urBusiness");
    try {
      // Construct business data object
      const businessData = {
        mallName,
        shopName,
        phnNum,
        pfp,
        authCertificate,
      };

      // Call registerBusiness function from FirebaseService
      await registerBusiness(businessData);

      // Navigate to success screen or home screen
      navigation.navigate("AddProduct"); // Navigate to home screen after successful registration
    } catch (error) {
      console.error("Error registering business:", error);
      // Handle error (e.g., show an error message to the user)
    }
  };
  return (
    <ScrollView contentInsetAdjustmentBehavior="never" style={{ padding: 30 }}>
      <KeyboardAvoidingView>
        <View>
          <Text style={styles.heading}>Register your Business</Text>
        </View>
        {/*Shop name*/}
        <View style={styles.inputView}>
          <MaterialIcons
            style={{ marginLeft: 8 }}
            name="store-mall-directory"
            size={24}
            color="black"
          />

          <TextInput
            value={shopName}
            onChangeText={(text) => setShopName(text)}
            style={styles.inputField}
            placeholder="Enter your Shop's name"
          />
        </View>
        {/*Mall name*/}
        <View style={styles.inputView}>
          <FontAwesome
            style={{ marginLeft: 10 }}
            name="building"
            size={24}
            color="black"
          />

          <TextInput
            value={mallName}
            onChangeText={(text) => setMallName(text)}
            style={styles.inputField}
            placeholder="Enter the mall you are affiliated with"
          />
        </View>
        <Text>Leave empty if not applicable</Text>
        {/*Phone num*/}
        <View style={styles.inputView}>
          <FontAwesome
            style={{ marginLeft: 10 }}
            name="phone"
            size={24}
            color="black"
          />

          <TextInput
            value={phnNum}
            onChangeText={(text) => setPhnNum(text)}
            style={styles.inputField}
            placeholder="Enter your Phone number"
          />
        </View>
        <View style={styles.inputView}>
          <Entypo
            style={{ marginLeft: 10 }}
            name="location"
            size={24}
            color="black"
          />

          <TextInput
            value={shopAddr}
            onChangeText={(text) => setShopAddr(text)}
            style={styles.inputField}
            placeholder="Enter your Shops's Address"
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {/*Upload Img*/}
          <View
            style={{
              ...styles.inputView,
              ...{
                minWidth: "45%",
                justifyContent: "center",
                flexDirection: "column",
              },
            }}
          >
            <Image
              style={styles.pfpImg}
              source={
                pfp == null ? require("../assets/defaultPfp.jpg") : { uri: pfp }
              }
            />
            <TouchableOpacity style={styles.uploadButton} onPress={pickPfp}>
              <AntDesign name="camera" size={24} color="black" />
              <Text>Upload an Image</Text>
            </TouchableOpacity>
          </View>
          {/*Upload certificate*/}
          <View
            style={{
              ...styles.inputView,
              ...{
                minWidth: "45%",
                justifyContent: "center",
                flexDirection: "column",
              },
            }}
          >
            <Image
              style={styles.pfpImg}
              source={
                pfp == null
                  ? require("../assets/defaultCertificate.png")
                  : { uri: authCertificate }
              }
            />
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={pickCertificate}
            >
              <AntDesign name="camera" size={24} color="black" />
              <Text>Upload a certificate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
      {/* Preview */}
      <Text style={styles.heading}>Preview</Text>
      <View style={styles.preview}>
        <View
          style={{
            minWidth: "40%",
            marginLeft: 7,
          }}
        >
          <Image
            style={styles.pfpImg}
            source={
              pfp == null ? require("../assets/defaultPfp.jpg") : { uri: pfp }
            }
          />
        </View>
        <View>
          <Text style={{ textAlign: "left", fontWeight: "bold" }}>
            {shopName == "" ? "Your Shops's name" : shopName}
          </Text>
          <Text style={{ textAlign: "left" }}>{mallName}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={handleRegister}
        activeOpacity={0.6}
        style={{
          width: 200,
          backgroundColor: "#FEBE10",
          borderRadius: 6,
          marginLeft: "auto",
          marginRight: "auto",
          padding: 15,
          marginTop: 30,
          marginBottom: 60,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Register
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RegisterBusiness;

const styles = StyleSheet.create({
  heading: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 30,
    color: "#041E42",
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#D0D0D0",
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 30,
  },
  inputField: {
    color: "gray",
    marginVertical: 10,
    width: "80%",
  },
  pfpImg: {
    width: "90%",
    height: 140,
  },
  uploadButton: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  preview: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#D0D0D0",
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 10,
  },
});
