import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Sidebar = ({ navigation }) => {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
      <Text>Sidebar Content</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.closeDrawer()}>
        <Text>Close Sidebar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Sidebar;