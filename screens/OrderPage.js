import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Pressable,
    TextInput,
    Alert,
  } from "react-native";
  import React from "react";
  import { useState, useEffect } from "react";
  import OrderCard from "../components/OrderCard.js";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";
  
  const OrderPage = ({route}) => {
    const [delDate, setDelDate] = useState("");
    const [orderAmt, setOrderAmt] = useState("0");
    const [totPrice, setTotPrice] = useState("0");
    const [orderIds, setOrderIds] = useState([]);
    const [customerAddr, setCustomerAddr] = useState("");
    const [product, setProduct] = useState({})
    const [orderId, setOrderId] = useState('')

    useEffect(() => {
        setProduct(route.params['product'])
        const postOrder = async () => {
            const orderRef = await addDoc(collection(db, "Orders"), product)
            console.log(orderRef.id+' order id')
            setOrderId(orderRef.id)
        }
      });
  
    return (
      <ScrollView style={{ paddingHorizontal: 30 }}>
        <View style={{ alignItems: "center", marginTop: 60, gap: 10 }}>
          <Image
            style={{ borderWidth: 1, borderRadius: 50, height: 150, width: 150 }}
            source={require("../assets/shoping_bag.png")}
          />
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Thanks for Shopping!
          </Text>
          <Text style={{ textAlign: "center", fontSize: 16, width: 300 }}>
            We have your order and are getting it ready to be shipped. We will
            notify you when its on its way!
          </Text>
          <View style={{ flexDirection: "row", marginVertical: 10 }}>
            <Text>Your order will be delivered by</Text>
            <Text style={{ fontWeight: "bold" }}>
              {" "}
              {delDate == "" ? "delivery date" : delDate}.
            </Text>
          </View>
          <View style={styles.horizontalLine} />
          <Text>You have ordered {orderAmt} products</Text>
          <View style={{ paddingHorizontal: 20, marginBottom: 50 }}>
              <OrderCard key={product['id']} orderId={product} />
          </View>
        </View>
        <View style={{ gap: 5 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text>Total MRP</Text>
            <Text>₹{product['productPrice']}</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text>Shipping Charges</Text>
            <Text>₹{parseInt(product['productPrice']) * 0.1}</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ color: "orange" }}>Discount Applied</Text>
            <Text style={{ color: "orange" }}>₹{0.05*parseInt(product['productPrice'])}</Text>
          </View>
        </View>
        <View style={styles.horizontalLine} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Total MRP</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            ₹{parseInt(product['productPrice']) + parseInt(product['productPrice']) * 0.1 - (0.05*parseInt(product['productPrice']))}
          </Text>
        </View>
        <View style={styles.horizontalLine} />
        <Text style={{ color: "gray" }}>Mode of Payment:</Text>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Credit Card </Text>
        <View style={styles.horizontalLine} />
        <Text style={{ color: "gray" }}>Delivered to:</Text>
        <TextInput
          style={{ fontSize: 16, fontWeight: "bold" }}
          value={customerAddr}
          onChangeText={(text) => setCustomerAddr(text)}
          placeholder="Enter your Address"
        />
        <View style={styles.horizontalLine} />
        <Pressable
        onPress={() => Alert.alert('Order Confirmed and placed')}
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? "gray" : "black" },
          ]}
        >
          <Text style={styles.buttonText}>Place order</Text>
        </Pressable>
        <View style={styles.horizontalLine} />
      </ScrollView>
    );
  };
  
  export default OrderPage;
  
  const styles = StyleSheet.create({
    horizontalLine: {
      borderBottomColor: "black",
      borderBottomWidth: 1,
      width: "100%",
      marginVertical: 20,
    },
    button: {
      backgroundColor: "black",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignItems: "center",
    },
    buttonText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
    },
  });