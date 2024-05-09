import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import CartItem from "../components/CartItem";
import { btn2, colors, navbtn, navbtnin } from "../globals/style";

const UserCart = ({ navigation, route }) => {
  const [items, setItems] = useState([]); // State to store cart items
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(route.params['product']);
    calculateTotalPrice();
  }, [route.params['product']]);

  // Function to update quantity for a specific item
  const updateQuantity = (itemId, newQuantity) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.itemId === itemId ? { ...item, qty: newQuantity } : item
      )
    );
    calculateTotalPrice(); // Recalculate total price after updating quantity
  };

  // Function to delete an item from the cart
  const deleteItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.itemId !== itemId));
    calculateTotalPrice(); // Recalculate total price after deleting item
  };

  const [price, setPrice] = useState(0);

  // Function to calculate total price
  const calculateTotalPrice = () => {
    const totalPrice = items.reduce((total, item) => total + (item.itemPrice * item.qty), 0);
    setPrice(totalPrice);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={navbtn}>
          <AntDesign name="back" size={24} color="black" style={navbtnin} />
        </View>
      </TouchableOpacity>
      <Text style={styles.head1}>Your Bag</Text>
      <View style={styles.cartout}>
        <CartItem
          key={product['id']}
          item={product}
          updateQuantity={updateQuantity}
          deleteItem={deleteItem}
        />
      </View>
      <View style={styles.btncont}>
        <Text style={styles.txt5}>Total:</Text>
        <Text style={styles.txt6}>₹{price}/-</Text>
        <TouchableOpacity
          style={btn2}
          onPress={() => navigation.navigate("OrderPage", {product: product})}
        >
          <Text style={styles.btntxt}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.col1,
    width: "100%",
  },
  head1: {
    fontSize: 40,
    textAlign: "center",
    marginVertical: 50,
    color: colors.text1,
  },
  cartout: {
    flex: 1,
    width: "100%",
  },
  btntxt: {
    backgroundColor: colors.text1,
    color: colors.col1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 20,
    borderRadius: 10,
    width: "90%",
    textAlign: "center",
  },
  btncont: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    flexDirection: "row",
    marginBottom: 40,
    borderTopColor: colors.text1,
    borderTopWidth: 0.2,
  },
  txt5: {
    fontSize: 20,
    color: colors.text3,
    marginHorizontal: 5,
  },
  txt6: {
    fontSize: 25,
    color: colors.text3,
    marginHorizontal: 5,
    fontWeight: "bold",
  },
});
