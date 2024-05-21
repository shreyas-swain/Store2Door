import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, } from "react-native";
import React, { useEffect, useState } from "react";
import { btn2, colors, hr80, navbtn, navbtnin, navbtnout, } from "../globals/style";
import { AntDesign } from "@expo/vector-icons";  
// import { firebase } from "../../Firebase/firebaseConfig";
import { incdecbtn, incdecinput, incdecout } from "../globals/style";
  
const ProductPage = ({ navigation, route }) => {  
    
    // const [product, setProduct] = useState({})
    
    const product = 
      { 
        productName: 'Kissan Ketchup',
        productPfp: require('../assets/Products/kissan.jpeg'),
        productPrice: 100,
        productDesc: "Thi is a ketchup"
      };
      // Add more dummy data as needed


    // useEffect(()=>{
    //     setProduct(route.params['product'])
    //     // console.log(product)
    // })

    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={navbtnout}
        >
          <View style={navbtn}>
            <AntDesign name="back" size={24} color="black" style={navbtnin} />
          </View>
        </TouchableOpacity>
  
        <View style={styles.container1}>
          {/* product image */}
          <View style={styles.s1}>
            <Image
              source={product['productPfp']}
              style={styles.cardimgin}
            />
          </View>
  
          <View style={styles.s2}>
            {/* product name and price */}
            <View style={styles.s2in}>
              {/* <Text style={styles.head1}>{data.foodName}</Text>
              <Text style={styles.head2}>₹{data.foodPrice}/-</Text> */}
              <Text style={styles.head1}>{product['productName']}</Text>
              <Text style={styles.head2}>₹{product['productPrice']}/-</Text>
            </View>
  
            {/* about */}
            <View style={styles.s3}>
              <Text style={styles.head3}>About Product</Text>
              {/* <Text style={styles.head4}>{data.foodDescription}</Text> */}
              {/* <View style={styles.s3in}>
                {data.foodType == "veg" ? (
                  <Text style={veg}></Text>
                ) : (
                  <Text style={nonveg}></Text>
                )}
                <Text style={styles.head5}>{data.foodType}</Text>
              </View> */}
              <Text style={styles.head4}>{product['productDesc']}</Text>
            </View>
  
            {/* location container */}
            {/* <View style={styles.container2}>
              <Text style={styles.txt1}>Location</Text>
              <Text style={styles.txt2}>Maqsad ammunition</Text>
              <Text style={styles.txt2}>{data.restaurantName}</Text>
              <View style={styles.container2in}>
                <Text style={styles.txt3}>Tower 9/11</Text>
                <Text style={styles.txt3}>{data.restrauntAddressBuilding}</Text>
                <View style={styles.dash}></View>
                <Text style={styles.txt3}>Punjab trade center</Text>
                <Text style={styles.txt3}>{data.restrauntAddressStreet}</Text>
                <View style={styles.dash}></View>
                <Text style={styles.txt3}>Jalandhar</Text>
                <Text style={styles.txt3}>{data.restrauntAddressCity}</Text>
              </View>
            </View> */}

            {/* add to bag and buy now */}
            <View style={styles.btncont}>
              <TouchableOpacity
                style={btn2}
                onPress={() => {
                  navigation.navigate("UserCart", {product: product})
                }}
              >
                <Text style={styles.btntxt}>Add to Bag</Text>
              </TouchableOpacity>
              <TouchableOpacity style={btn2}>
                <Text
                  style={styles.btntxt}
                  onPress={() => navigation.navigate("Order", {product: product})}
                >
                  Buy Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
};
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      width: "100%",
    },
    container1: {
      flex: 1,
      backgroundColor: "#fff",
    },
    s1: {
      width: "100%",
      height: 300,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    cardimgin: {
      width: "100%",
      height: "100%",
    },
    s2: {
      width: "100%",
      padding: 20,
      position: "relative",
      top: -30,
      backgroundColor: colors.col1,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    s2in: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10,
    },
    head1: {
      fontSize: 30,
      fontWeight: "500",
      color: colors.text1,
      width: 220,
      marginRight: 10,
    },
    head2: {
      fontSize: 40,
      fontWeight: "200",
      color: colors.text3,
    },
    s3: {
      backgroundColor: colors.text1,
      padding: 20,
      borderRadius: 20,
    },
    head3: {
      fontSize: 30,
      fontWeight: "200",
      color: colors.col1,
    },
    head4: {
      marginVertical: 10,
      fontSize: 20,
      fontWeight: "400",
      color: colors.col1,
    },
    s3in: {
      backgroundColor: colors.col1,
      padding: 10,
      borderRadius: 10,
      width: 130,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    head5: {
      color: colors.text3,
      fontSize: 20,
      fontWeight: "200",
      marginLeft: 10,
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
    },
    container2: {
      width: "100%",
      backgroundColor: colors.col1,
      padding: 20,
      borderRadius: 20,
      alignSelf: "center",
      marginVertical: 10,
      elevation: 10,
      alignItems: "center",
    },
    txt1: {
      color: colors.text1,
      fontSize: 20,
      fontWeight: "200",
    },
    txt2: {
      color: colors.text3,
      fontSize: 30,
      fontWeight: "200",
      marginVertical: 10,
    },
    container2in: {
      flexDirection: "row",
      alignItems: "center",
    },
    txt3: {
      color: colors.text1,
      fontSize: 18,
    },
    txt3_total: {
      color: colors.text1,
      fontSize: 30,
    },
    dash: {
      width: 1,
      height: 20,
      backgroundColor: colors.text1,
      marginHorizontal: 10,
    },
    c3in: {
      flexDirection: "row",
      justifyContent: "center",
      width: "100%",
    },
    container3: {
      width: "90%",
      alignSelf: "center",
      alignItems: "center",
    },
    text4: {
      color: colors.text3,
      fontSize: 20,
      marginHorizontal: 10,
    },
    c4in: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    },
});
  
export default ProductPage;