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
  import React from "react";
  import { useState } from "react";
  import { MaterialIcons } from "@expo/vector-icons";
  import { FontAwesome } from "@expo/vector-icons";
  import { AntDesign } from "@expo/vector-icons";
  import { Entypo } from "@expo/vector-icons";
  import { Dropdown } from "react-native-element-dropdown";
  import * as ImagePicker from "expo-image-picker";
  import { db } from "../firebase";
  import { addDoc, collection } from "firebase/firestore";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  const data = [
    { label: "Garment", value: "garment" },
    { label: "Grocery", value: "grocery" },
    { label: "Appliances", value: "appliances" },
    { label: "Miscellaneous", value: "miscellaneous" },
  ];
  
  export default function ProductReg() {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productAmt, setProductAmt] = useState(0);
    const [productImage, setProductImage] = useState(null);
    const [productDesc, setProductDesc] = useState("");
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
  
    const handleAdd = async () => {
      const data = await AsyncStorage.getItem("urBusiness");
      console.log(JSON.parse(data)["shopid"]);
      const proRef = await addDoc(collection(db, "ProductData"), {
        productName: productName,
        productPrice: productPrice,
        productAmt: productAmt,
        productDesc: productDesc,
        shopId: JSON.parse(data)["shopid"],
        productPfp: productImage
      });
      console.log("ID: ", proRef.id);
    };
    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: "blue" }]}>
            Dropdown label
          </Text>
        );
      }
      return null;
    };
  
    const pickimg = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        setProductImage(result.assets[0].uri);
      }
    };
    return (
      <ScrollView contentInsetAdjustmentBehavior="never" style={{ padding: 30 }}>
        <KeyboardAvoidingView>
          <View>
            <Text style={styles.heading}>Add a Product</Text>
          </View>
          {/*prod name*/}
          <View style={styles.inputView}>
            <AntDesign
              style={{ marginLeft: 8 }}
              name="pluscircle"
              size={24}
              color="black"
            />
  
            <TextInput
              value={productName}
              onChangeText={(text) => setProductName(text)}
              style={styles.inputField}
              placeholder="Enter your Product's name"
            />
          </View>
          {/*prod desc*/}
          <View
            style={{
              ...styles.inputView,
              ...{
                alignItems: "top",
                paddingTop: 10,
              },
            }}
          >
            <Entypo
              style={{ marginLeft: 10 }}
              name="text"
              size={24}
              color="black"
            />
  
            <TextInput
              value={productDesc}
              onChangeText={(text) => setProductDesc(text)}
              style={{ ...styles.inputField, ...{ marginTop: 0 } }}
              placeholder="Enter the Description of your Product"
              multiline={true}
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            {/*prod price*/}
            <View style={{ ...styles.inputView, ...{ width: "45%" } }}>
              <MaterialIcons
                style={{ marginLeft: 10 }}
                name="attach-money"
                size={24}
                color="black"
              />
  
              <TextInput
                value={productPrice}
                onChangeText={(text) => setProductPrice(parseInt(text))}
                style={{ ...styles.inputField, ...{ maxWidth: "70%" } }}
                placeholder="Enter Price"
                inputMode="numeric"
              />
            </View>
            {/*prod amt*/}
            <View style={{ ...styles.inputView, ...{ width: "45%" } }}>
              <FontAwesome
                style={{ marginLeft: 10 }}
                name="hashtag"
                size={15}
                color="black"
              />
  
              <TextInput
                value={productAmt}
                onChangeText={(text) => setProductAmt(parseInt(text))}
                style={{ ...styles.inputField, ...{ maxWidth: "70%" } }}
                placeholder="Enter Amount"
                inputMode="numeric"
              />
            </View>
          </View>
          <View style={styles.inputView}>
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? "Select item" : "..."}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setValue(item.value);
                setIsFocus(false);
              }}
              renderLeftIcon={() => (
                <AntDesign
                  style={{ marginLeft: 8 }}
                  color={"black"}
                  name="Safety"
                  size={20}
                />
              )}
            />
          </View>
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
                productImage == null ? require("../assets/defaultPfp.jpg") : { uri: productImage }
              }
            />
            <TouchableOpacity style={styles.uploadButton} onPress={pickimg}>
              <AntDesign name="camera" size={24} color="black" />
              <Text>Upload an Image</Text>
            </TouchableOpacity>
          </View>
  
        </KeyboardAvoidingView>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            width: 200,
            backgroundColor: "#FEBE10",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
            marginVertical: 30,
          }}
          onPress={() => handleAdd()}
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
  }
  
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
    inputViewImg: {
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
      height: 140,
      maxWidth: 140,
      width: 140,
    },
    uploadButton: {
      alignItems: "center",
      flexDirection: "row",
      marginTop: 10,
      justifyContent: "center",
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
    dropdown: {
      height: 50,
      paddingHorizontal: 8,
      width: "100%",
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
  });
  