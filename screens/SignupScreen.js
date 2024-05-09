import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler';
// import { ArrowLeftIcon } from 'react-native-heroicons/solid';

const Login = ({ navigation }) => {
    // const [emailfocus, setEmailfocus] = useState(false);
    // const [passwordfocus, setPasswordfocus] = useState(false);
    // const [showpassword, setShowpassword] = useState(false);
  
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [customerror, setcustomError] = useState("");
    // const { login } = useContext(AuthContext);
  
    const handlelogin = () => {
      login(email, password);
      navigation.navigate('Home')
    };
  
    return (
        
        <View className="flex-1 bg-white">
          <SafeAreaView className="flex">
            <View className="flex-row justify-start">
              <TouchableOpacity
                onPress={()=>navigation.goBack()}
                className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
              >
                {/* <ArrowLeftIcon size="20" color="black" /> */}
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-center">
              <Image source={require('../assets/')} style={{width: 500, height: 500}} />
            </View>
          </SafeAreaView>
          <View className="flex-1 bg-white px-8 pt-8"
            style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}
          >
            <View className="form space-y-2">
              <Text className="text-gray-700 ml-4">Email Address</Text>
              <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                value="john@example.com"
                placeholder="Enter email address"
              />
              <Text className="text-gray-700 ml-4">Password</Text>
              <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                secureTextEntry
                value="test12345"
                placeholder="Enter password"
              />
              <TouchableOpacity className="flex items-end mb-5">
                <Text className="text-gray-700">Forgot Password?</Text>
              </TouchableOpacity>
              <TouchableOpacity className="py-3 bg-yellow-400 rounded-xl">
                <Text className="font-xl font-bold text-center text-gray-700">
                  Login
                </Text>
              </TouchableOpacity>
            </View>
            <Text className="text-xl text-gray-700 font-bold text-center text--uppercase py-5">
              OR
            </Text>
            <View className="flex-row justify-center space-x-12">
              <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require("expo/AppEntry")} className="w-10 h-10" />
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
  
export default Login;

const styles = StyleSheet.create({
    container : {

    },
})