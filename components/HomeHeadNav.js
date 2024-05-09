import {
    StyleSheet,
    Text,
    View,
    Animated,
    TouchableOpacity,
  } from "react-native";
  import React, { useState } from "react";
  import { Fontisto } from "@expo/vector-icons";
  import { MaterialCommunityIcons } from "@expo/vector-icons";
  import { FontAwesome5 } from "@expo/vector-icons";
  import { Entypo } from '@expo/vector-icons';
  import { AntDesign } from "@expo/vector-icons";
  import { colors } from "../globals/style";
import { useNavigation } from "@react-navigation/native";
//   import Sidebar from "./Sidebar";
  
  const HomeHeadNav = () => {
    const navigation = useNavigation();
    const [slideAnim] = useState(new Animated.Value(-200)); // Set initial value to keep the view off-screen
    const [isSlided, setIsSlided] = useState(false);
    const toggleSlide = () => {
      const toValue = isSlided ? -200 : 0; // Adjust the initial value and distance as needed
      Animated.timing(slideAnim, {
        toValue,
        duration: 300,
        useNativeDriver: false, // Make sure to set useNativeDriver to false for layout animations
      }).start();
      setIsSlided(!isSlided);
    };
    const slideStyles = {
      transform: [
        {
          translateX: slideAnim,
        },
      ],
    };
    return (
      <View style={styles.container}>
          <Animated.View style={[styles.box, slideStyles]}>
          <View style={styles.menuContainer}>
              <TouchableOpacity onPress={toggleSlide} style={styles.closeButton}>
              <Entypo name="squared-cross" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text style={styles.menuItem} >
              Home
              <MaterialCommunityIcons name="home-outline" size={26} color="black" />
              </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("RegisterBusiness")}>
              <Text style={styles.menuItem}  >
              Business Page
              <MaterialCommunityIcons name="office-building" size={26} color="black" />
              </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Mall")}>
              <Text style={styles.menuItem} >
              Mall Page
              <MaterialCommunityIcons name="office-building" size={26} color="black" />
              </Text>
              </TouchableOpacity>
              <Text style={styles.menuItem}>
              Your Orders
              <MaterialCommunityIcons name="cart" size={26} color="black" />
              </Text>
              <Text style={styles.menuItem}>Signout
              <MaterialCommunityIcons name="logout" size={24} color="black" />
              </Text>
          </View>
          </Animated.View>
  
        <TouchableOpacity onPress={toggleSlide}>
          <Fontisto
            name="nav-icon-list-a"
            size={20}
            color="black"
            style={styles.myicon}
          />
        </TouchableOpacity>
        <View style={styles.containerin}>
          <Text style={styles.mytext}>Store2Door</Text>
          <MaterialCommunityIcons
            name="door"
            size={26}
            color="black"
            style={styles.myicon}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("userprofile");
          }}
        >
          <FontAwesome5
            name="user-circle"
            size={26}
            color="black"
            style={styles.myicon}
          />
        </TouchableOpacity>
      </View>
    );
  };
  
  export default HomeHeadNav;
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
      padding: 10,
      alignItems: "center",
      backgroundColor: colors.col1,
      elevation: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    box: {
      width: 150,
      minHeight: 1600,
      backgroundColor: "lightgrey",
      justifyContent: "center",
      position: "absolute",
      zIndex: 1,
      backgroundColor: '#f7f7f7',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
    },
    containerin: {
      flexDirection: "row",
      alignItems: "center",
    },
    myicon: {
      color: colors.text1,
    },
    mytext: {
      color: colors.text1,
      fontSize: 24,
    },
    menuContainer: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      paddingLeft: 20,
      paddingTop: 160,
    },
    closeButton: {
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
      paddingLeft: 0,
      paddingBottom: 0,
      // marginBottom: 20,
      // shadowColor: '#000',
      // shadowOffset: { width: 0, height: 2 },
      // shadowOpacity: 0.3,
      // shadowRadius: 4,
      // elevation: 3, // Android shadow
    },
    
    menuItem: {
      fontSize: 15,
      color: '#333',
      marginBottom: 10,
    },
  });