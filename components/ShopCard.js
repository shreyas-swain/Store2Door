import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import StarRating from "./StarRating";

const ShopCard = ({ shopName, review, pfp,shopId }) => {
  
  const navigation=useNavigation();
  const shopClick=()=>{
    console.log(shopId)
    navigation.navigate("Business");
  };


  return (
    <TouchableOpacity style={styles.preview} onPress={shopClick}>
      <View style={{ minWidth: "40%", marginLeft: 7, }}>
        <Image
          style={styles.pfpImg}
          source={ pfp == null ? require("../assets/defaultPfp.jpg") : { uri: pfp } }
        />
      </View>
      <View>
        <Text style={{ textAlign: "left", fontWeight: "bold", paddingBottom: 10 }}>
          {shopName == "" ? "Shop's name" : shopName}
        </Text>
        <View style={{ flexDirection: "row" }}>
          {/* <Entypo name="star" size={14} color="gray" style={{ marginTop: 2 }} /> */}
          <StarRating rating={parseInt(review)} />
          {/* <Text style={{ textAlign: "left" }}>{review}</Text> */}
        </View>
      </View>
    </TouchableOpacity>
  );

};

export default ShopCard;

const styles = StyleSheet.create({
  pfpImg: {
    width: "90%",
    height: 140,
  },
  preview: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#ACBDAA",
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 10,
  },
});