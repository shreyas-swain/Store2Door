import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import { Entypo } from "@expo/vector-icons";

const OrderCard = ({ orderId }) => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [price, setPrice] = useState("0");
  const [pfp, setPfp] = useState(null);
  useEffect(()=>{
    setProductName(orderId['productName'])
    setPfp(orderId['productPfp'])
    setPrice(orderId['productPrice'])
  })
  return (
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
          {productName == "" ? "Poduct's name" : productName}
        </Text>
        <Text style={{ textAlign: "left" }}>Qty: {quantity}</Text>
        <Text style={{ textAlign: "left" }}>Price: ₹{price}</Text>
      </View>
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  pfpImg: {
    width: 100,
    height: 100,
  },
  preview: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "lightgrey",
    paddingVertical: 5,
    borderRadius: 5,
    marginVertical: 5,
  },
});