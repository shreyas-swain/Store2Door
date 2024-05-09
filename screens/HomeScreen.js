import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import HomeHeadNav from "../components/HomeHeadNav";
import BottomNav from "../components/BottomNav";
import Categories from "../components/Categories";
import Cardslider from "../components/Cardslider";
import OfferSlider from "../components/OfferSlider";
// import Sidebar from '../components/Sidebar'
import { colors } from "../globals/style";
// import { createDrawerNavigator } from '@react-navigation/drawer'
// import { NavigationContainer } from '@react-navigation/native'
// import firebase from 'firebase'
import { db } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";

// const Drawer = createDrawerNavigator();

const HomeScreen = ({ navigation }) => {
  const [storeData, setStoreData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredStoreData, setFilteredStoreData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  //Data Fetch
  useEffect(() => {
    console.log('home')
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "StoreData"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStoreData((prevData) => [
        ...prevData,
        ...data.filter(
          (item) =>
            !prevData.some((existingItem) => existingItem.id === item.id)
        ),
      ]);
      // console.log(data);
    };
    fetchData();
  }, [search]);

  //Search Store
  const handleSearch = (text) => {
    setSearch(text);
    const filteredData = storeData.filter((item) =>
      item.storeName.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredStoreData(filteredData);
  };

  //Filter according to Category
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category === "") {
      setFilteredStoreData([]);
    } else {
      const filteredData = storeData.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredStoreData(filteredData);
    }
  };

  return (
    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <Sidebar {...props} />}>
    //     <Drawer.Screen name="Home" component={() => (
    <View styles={styles.container}>
      <StatusBar />

<View style={{zIndex:1}}>
      <HomeHeadNav /></View>

      <ScrollView style={{marginBottom:100}}>
        <View style={styles.searchbox}>
          <AntDesign
            name="search1"
            size={24}
            color="black"
            style={styles.searchicon}
          />
          <TextInput
            style={styles.input}
            placeholder="Search"
            onChangeText={(text) => {
              handleSearch(text);
            }}
          />
        </View>

        <Categories onSelectCategory={handleCategorySelect} />

        <OfferSlider />

        {search != "" && (
          <View style={styles.seacrhresultsouter}>
            <FlatList
              style={styles.searchresultsinner}
              data={storeData}
              renderItem={({ item }) => {
                if (
                  item.storeName.toLowerCase().includes(search.toLowerCase())
                ) {
                  return (
                    <View style={styles.searchresult}>
                      <AntDesign name="arrowright" size={24} color="black" />
                      <Text style={styles.searchresulttext}>
                        {item.storeName}
                      </Text>
                    </View>
                  );
                }
              }}
            />
          </View>
        )}

        <Cardslider
          data={filteredStoreData.length > 0 ? filteredStoreData : storeData}
          navigation={navigation}
        />
      </ScrollView>

      <View style={styles.bottomnav}>
        <BottomNav navigation={navigation} />
      </View>
    </View>
    //     )} />
    //   </Drawer.Navigator>
    // </NavigationContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgcolor,
    // paddingTop: 10,
  },
  searchbox: {
    flexDirection: "row",
    width: "95%",
    backgroundColor: colors.col1,
    borderRadius: 10,
    alignItems: "center",
    padding: 10,
    margin: 20,
    elevation: 5,
    alignSelf: "center",
  },
  input: {
    marginLeft: 10,
    flex: 1,
    fontSize: 18,
    color: colors.text1,
  },
  searchicon: {
    color: colors.text1,
  },
  seacrhresultsouter: {
    flex: 1,
    backgroundColor: colors.col1,
    paddingHorizontal: 30,
  },
  searchresultsinner: {
    width: "100%",
  },
  searchresult: {
    flexDirection: "row",
    padding: 10,
  },
  searchresulttext: {
    marginLeft: 10,
    fontSize: 18,
    color: colors.text1,
  },
  bottomnav: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    backgroundColor: colors.col1,
    zIndex: 20,
  },
});
