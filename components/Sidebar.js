import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Sidebar = ({ navigation }) => {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
              <TouchableOpacity onPress={toggleSlide} style={styles.closeButton}>
                <Entypo name="squared-cross" size={24} color="black" />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Text style={styles.menuItem} >Home
                  <MaterialCommunityIcons name="home-outline" size={26} color="black" />
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("AddProduct")}>
                <Text style={styles.menuItem} >Business Page
                  <MaterialCommunityIcons name="office-building" size={26} color="black" />
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Mall")}>
                <Text style={styles.menuItem} >Mall Page
                  <MaterialCommunityIcons name="office-building" size={26} color="black" />
                </Text>
              </TouchableOpacity>

              <Text style={styles.menuItem}>Your Orders
                <MaterialCommunityIcons name="cart" size={26} color="black" />
              </Text>

              <Text style={styles.menuItem}>Signout
                <MaterialCommunityIcons name="logout" size={24} color="black" />
              </Text>
    </View>
  );
};

export default Sidebar;