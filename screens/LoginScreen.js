import React, { useContext, useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
// import { TextInput } from 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons/FontAwesome'
import { Ionicons } from 'react-native-vector-icons/Ionicons'
import { Octicons } from "@expo/vector-icons"
import { AuthContext } from "../AuthProvider"

const LoginScreen = ({ navigation }) => {
  
    const [emailfocus, setEmailfocus] = useState(false);
    const [passwordfocus, setPasswordfocus] = useState(false);
    const [showpassword, setShowpassword] = useState(false);
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [customerror, setcustomError] = useState("");
    const { login } = useContext(AuthContext);
  
    const handlelogin = () => {
      login(email, password);
      navigation.navigate('Home')
    };
  
    return (
    //   <SafeAreaView className="flex-1" style={styles.container}>
    //     <View className="flex-1 flex justify-around my-4">
    //         <Text className="text-white font-bold text-4xl text-center">
    //             Let's Get Started!
    //         </Text>
    //         <View className="flex-row justify-center">
    //             <Image source={} style={{width: 350, height: 350}} />
    //         </View>
    //         <View className="space-y-4">
    //             <TouchableOpacity 
    //             onPress={()=>{()=>navigation.navigate( "SignUp")}}
    //             className="py-3 bg-yellow-400 mx-7 rounded-xl">
    //                 <Text className="text-xl font-bold text-center text-gay-700">
    //                     Sign Up
    //                 </Text>
    //             </TouchableOpacity>
    //             <View className="flex-row justify-center">
    //                 <Text className="text-white font-semibold">Already have an account?</Text>
    //                 <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
    //                     <Text className="font-semibold text-yellow-400">Log In</Text>
    //                 </TouchableOpacity>
    //             </View>
    //         </View>
    //     </View>
    //   </SafeAreaView>
        
        <View className="flex-1 bg-white" style={{backgroundColor: "#819CEF"}}>
          <SafeAreaView className="flex">
            <View className="flex-row justify-start">
              <TouchableOpacity
                onPress={()=>navigation.goBack()}
                className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mt-2"
              >
                <Ionicons name="ios-arrow-back" size={20} color="black" />
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-center">
              <Image source={require('../assets/login.jpg')} style={{margin: 20, width: 220, height: 220}} />
            </View>
          </SafeAreaView>
          <View className="flex-1 bg-white px-8 pt-8"
            style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}
          >
            <View className="form space-y-2">
              <View>
                <Text className="text-gray-700 ml-4 mb-2">Email Address</Text>
                <TextInput
                  className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-2"
                  placeholder="john@example.com"
                  onFocus={() => {
                    setEmailfocus(true);
                    setPasswordfocus(false);
                    setShowpassword(false);
                    setcustomError("");
                  }}
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
              <View>
                <Text className="text-gray-700 ml-4 mb-2">Password</Text>
                <TextInput
                  className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-2"
                  placeholder="test12345"
                  onFocus={() => {
                    setEmailfocus(false);
                    setPasswordfocus(true);
                    setcustomError("");
                  }}
                  secureTextEntry={showpassword === false ? true : false}
                  onChangeText={(text) => setPassword(text)}
                />
                <Octicons
                  name={showpassword == false ? "eye-closed" : "eye"}
                  size={24}
                  color="orange"
                  onPress={() => setShowpassword(!showpassword)}
                  style={{ position: 'absolute', top: 45, right: 14 }}
                />
                {/* <Icon name="eye-slash" size={30} color="black" /> */}
              </View>
              <TouchableOpacity className="flex items-end mb-4">
                <Text className="text-gray-700">Forgot Password?</Text>
              </TouchableOpacity>
              <TouchableOpacity className="py-3 bg-yellow-400 rounded-xl">
                <Text className="text-l font-bold text-center text-gray-700">
                  Login
                </Text>
              </TouchableOpacity>
            </View>
            <Text className="text-l text-gray-700 font-bold text-center text--uppercase py-2">
              OR
            </Text>
            <View className="flex-row justify-center space-x-12">
              <TouchableOpacity className="bg-gray-100 rounded-xl justify-center flex items-center" style={{width: 320, height: 50}}>
                <Image source={require("../assets/google.png")} className="w-14 h-12"/>
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-center mt-7">
              <Text className="text-gray-700 font-semibold">Don't have an account?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('SignupScreen')}>
                  <Text className="font-semibold text-yellow-400">Sign Up</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>

    );
};
  
export default LoginScreen;
