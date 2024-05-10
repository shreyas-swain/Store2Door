import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native'
// Import your screens
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
// import B from './screens/B'
// import HomeScreen from './HomeScreen';
// import MallScreen from './MallScreen';
// import ShopScreen from './ShopScreen';
// import ProductScreen from './ProductScreen';
// import CartScreen from './CartScreen';
// import OrderTrackScreen from './OrderTrackScreen';
// // import RegisterBusinessScreen from './RegisterBusinessScreen';
// import AddProductScreen from './AddProductScreen';
// import BusinessDashboard from './BusinessDashboard';
import RegisterBusiness from './screens/RegisterBusiness'
import { AuthContext } from './AuthProvider';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductReg from './screens/ProductReg';
// import ProductCrud from './screens/ProductCrud';
import MallPage from './screens/MallPage';
import Business from './screens/Business'
import ProductPage from './screens/ProductPage';
import UserCart from './screens/UserCart';
import OrderPage from './screens/OrderPage';
import OnboardingScreen from './screens/OnboardScreen';
import {createDrawerNavigator} from '@react-navigation/drawer'


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const LogoTitle = () => {
  return (
    <Image
      source={require('./assets/icon.png')} // Replace this with the path to your logo image
      style={{ width: 120, height: 40 }} // Adjust the width and height of the logo as needed
    />
  );
};

const AppNavigator = () => {
  // const DrawerNav = () => {
  //   return(
     
  //   )
  // }
  
  const {user} = useContext(AuthContext);
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName={user ? 'Home' : 'Login'}> */}
      {/* <Stack.Screen name="Onboard" component={OnboardingScreen} options={{headerShown: false}} /> */}
        {/* <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} /> */}
        {/* <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}} /> */}
        {/* <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} /> */}
        {/* <Stack.Screen name='RegisterBusiness' component={RegisterBusiness} options={{headerShown:false}} /> */}
        {/* <Stack.Screen name="Mall" component={MallPage} options={{headerShown: false}} /> */}
        {/* <Stack.Screen name='Business' component={Business} options={{headerShown:false}} /> */}
        {/* <Stack.Screen name='Drawer' component={DrawerNav} options={{headerShown:false}} /> */}
        {/* <Stack.Screen name="Shop" component={ShopScreen} /> */}
        {/* <Stack.Screen name="Product" component={ProductScreen} /> */}
        {/* <Stack.Screen name="Cart" component={CartScreen} /> */}
        {/* <Stack.Screen name="OrderTrack" component={OrderTrackScreen} /> */}
        {/* <Stack.Screen name="RegisterBusiness" component={RegisterBusiness} /> */}
        {/* <Stack.Screen name="AddProduct" component={ProductReg} options={{headerShown: false}} /> */}
        {/* <Stack.Screen name="BusinessDashboard" component={BusinessDashboard} /> */}
        {/* <Stack.Screen name="ProductPage" component={ProductPage} options={{headerShown: false}} /> */}
        {/* <Stack.Screen name="UserCart" component={UserCart} options={{headerShown: false}} /> */}
        {/* <Stack.Screen name="OrderPage" component={OrderPage} options={{headerShown: false}} /> */}
      {/* </Stack.Navigator> */}
      <Drawer.Navigator initialRouteName='Home'  screenOptions={{
        drawerStyle: {
          backgroundColor: 'white',
          zIndex: 100
        },
        drawerPosition: 'left',
        headerTitle: () => <LogoTitle />,
        headerTitleAlign: 'center',
        headerStyle:{backgroundColor: 'lightyellow'},
        headerTitleStyle:{color: 'red', fontWeight: 'bold', fontFamily: 'consolas'},
        headerTintColor:'red'
      }}>
        {/* <Drawer.Screen name="profile" component={} */}
        <Drawer.Screen name='Home'  component={HomeScreen} />
        <Drawer.Screen name='Mall' component={MallPage}/>
        <Drawer.Screen name='Business' component={Business} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
