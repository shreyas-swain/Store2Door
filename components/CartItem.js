import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../globals/style";

const CartItem = ({ item, updateQuantity, deleteItem }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    const newQuantity = parseInt(quantity) + 1;
    setQuantity(newQuantity);
    updateQuantity(item, newQuantity); // Update quantity in parent component
  };

  const decreaseQuantity = () => {
    if (parseInt(quantity) > 1) {
      const newQuantity = parseInt(quantity) - 1;
      setQuantity(newQuantity);
      updateQuantity(item['id'], newQuantity); // Update quantity in parent component
    }
  };

  return (
    <View style={styles.cartcard}>
      <Image source={{ uri: item['productPfp'] }} style={styles.cartimg} />
      <View style={styles.cartcardin}>
        <View style={styles.c1}>
          <Text style={styles.txt1}>
            {quantity}×&nbsp;{item['productName']}
          </Text>
          <Text style={styles.txt2}>₹{item['productPrice']* quantity}/-</Text>
        </View>
        <View style={styles.incdecout}>
          <TouchableOpacity onPress={decreaseQuantity} style={styles.incdecbtn}>
            <Text>-</Text>
          </TouchableOpacity>

          <TextInput value={quantity.toString()} style={styles.incdecinput} />

          <TouchableOpacity onPress={increaseQuantity} style={styles.incdecbtn}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => deleteItem(item['id'])} style={styles.c4}>
          <AntDesign name="delete" size={20} color="black" style={styles.del} />
          <Text style={styles.txt1}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartcard: {
    flexDirection: "row",
    backgroundColor: colors.col1,
    marginVertical: 5,
    borderRadius: 10,
    width: "95%",
    alignSelf: "center",
    elevation: 10,
    alignItems: "center",
  },
  cartimg: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  cartcardin: {
    flexDirection: "column",
    margin: 5,
    width: "58%",
    alignItems: "center",
    justifyContent: "center",
  },
  c1: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: colors.col1,
    borderRadius: 10,
    padding: 5,
  },
  txt1: {
    fontSize: 16,
    color: colors.text1,
    width: "60%",
    fontWeight: "bold",
  },
  txt2: {
    fontSize: 16,
    color: colors.text3,
    fontWeight: "bold",
  },
  incdecout: {
    flexDirection: "row",
    alignItems: "center",
  },
  incdecbtn: {
    width: 30,
    height: 30,
    backgroundColor: colors.text1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  incdecinput: {
    width: 40,
    height: 30,
    textAlign: "center",
    marginHorizontal: 10,
  },
  c4: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    borderRadius: 10,
    borderColor: colors.text1,
    borderWidth: 1,
    marginVertical: 10,
    padding: 5,
  },
  del: {
    color: colors.text1,
  },
});