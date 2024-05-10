import { StyleSheet, Text, View, ScrollView, ImageBackground, useWindowDimensions, TouchableOpacity} from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import ShopCard from "../components/ShopCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
  
  const MallPage = () => {
    const [mallName, setMallName] = useState("");
    const [mallAddr, setMallAddr] = useState("");
    const [shopIds, setShopIds] = useState([]);
    const navigation = useNavigation();
    const [storeData, setStoreData] = useState([]);

    // const get_id = async () => {
    //   // const response = await fetch(`${Link}/`, {
    //   //   method: "GET",
    //   // });
    //   // console.log(response);
    //   // if (response.ok) {
    //   //   const data = await response.json();
    //   //   console.log(data);
    //   //   setShopIds(data);
    //   // } else {
    //   //   const err = await response.json();
    //   //   console.log(err);
    //   // }
    //   const data = [1, 2, 3, 4, 5];
    //   setShopIds(data);
    // };
    
    // console.log('here')
    const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db, "StoreData"));
        // console.log('inside fetchData')
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setStoreData((prevData) => [...prevData, ...data.filter(item => !prevData.some(existingItem => existingItem.id === item.id))]);
      // console.log(data);
    };
    
    useEffect(() => {
        fetchData();
      }, []);


    return (
      <View className="bg-white flex-column">
        {/* bg img */}
        <View>
          <ImageBackground
            style={{ height: 250, width: "100%"}}
            source={require("../assets/defaultMall.jpg")}
          >
            <View className="flex-row justify-start pt-6">
              <TouchableOpacity
                onPress={()=>navigation.goBack()}
                className="bg-yellow-400 p-2 rounded-tr-xl rounded-bl-xl ml-4 mt-2"
              >
                <Ionicons name="ios-arrow-back" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        {/* Discount */}
        <View className="flex-row p-4 justify-between bg-yellow" style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}
        >
          <View>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              {mallName == "" ? "Mall name" : mallName}
            </Text>
            <View className="flex-row">
              <Entypo
                name="location-pin"
                size={15}
                color="gray"
                style={{ marginTop: 2 }}
              />
              <Text style={{ fontSize: 14, color: "gray" }}>
                {mallAddr == "" ? "Mall address" : mallAddr}
              </Text>
            </View>
          </View>
          <View className="justify-center mr-4">
            <View className="align-center justify-center">
              <View className="items-center justify-center rounded-full" style={{width: 70, height: 70, backgroundColor: '#1E2D4C'}}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 15, color: "white" }}
                >
                  {storeData.length}
                </Text>
                <Text style={{ color: "white" }}>shops</Text>
              </View>
            </View>
          </View>
        </View>
        <ScrollView style={{borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: 'lightgrey'}} className="bg-blue pt-2">
          <Text style={{ paddingHorizontal: 20, fontSize: 20, fontWeight: "bold" }}>
            Store List
          </Text>
          <View style={{ paddingHorizontal: 20, height: "65%" }}>
            {storeData.map((data) => (
              <ShopCard shopName={data['shopName']} review={'4'} pfp={data['pfp']} shopId={data['id']}/>
            ))}
          </View>
        </ScrollView>
        
      </View>
    );
  };
  
  export default MallPage;