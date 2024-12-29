import { View, Text } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Productscreen from "../screens/Productscreen";
import Scanscreen from "../screens/Scanscreen";
import Productitemscreen from "../screens/Productitemscreen";
import Shoppingcart from "../screens/Shoppingcart";
import Personinfo from "../screens/Personinfo";
import LoginScreen from "../screens/authe_screens/LoginScreen";
import RegisterScreen from "../screens/authe_screens/RegisterScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import SellScreen from "../screens/SellScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { productupdate } from "../helper/productUpdate";
import AddAddressScreen from "../screens/addresses/AddAddressScreen";
import AddressScreen from "../screens/addresses/AddressScreen";
import { UserType } from "../UserContext";
import ConfirmationScreen from "../screens/ConfirmationScreen";
import OrderScreen from "../screens/animationscreens/OrderScreen";
import Saveanimescreen from "../screens/animationscreens/Saveanimescreen";
import Addressloadscreen from "../screens/animationscreens/Addressloadscreen";
import Loginloadscreen from "../screens/animationscreens/Loginloadscreen";
import Logoutloadscreen from "../screens/animationscreens/Logoutloadscreen";
import Scanbackscreen from "../screens/animationscreens/Scanbackscreen";
import DeliveryScreen from "../screens/DeliveryScreen";
const Navigater = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const [productdata, setproductdata] = useState([]);
  const [userId, setUserId] = useState([]);
  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Productscreen}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "#008E97" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#008E97" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Personinfo}
          options={{
            tabBarLabel: "Profile",
            tabBarLabelStyle: { color: "#008E97" },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person" size={24} color="#008E97" />
              ) : (
                <Ionicons name="person-outline" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="Cart"
          component={Shoppingcart}
          options={{
            tabBarLabel: "Cart",
            tabBarLabelStyle: { color: "#008E97" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="shoppingcart" size={24} color="#008E97" />
              ) : (
                <AntDesign name="shoppingcart" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="sell"
          component={SellScreen}
          options={{
            tabBarLabel: "Sell",
            tabBarLabelStyle: { color: "#008E97" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialIcons name="attach-money" size={24} color="#008E97" />
              ) : (
                <MaterialIcons name="attach-money" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <UserType.Provider value={{ userId, setUserId }}>
      <productupdate.Provider value={{ productdata, setproductdata }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Order"
              component={OrderScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="saveload"
              component={Saveanimescreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Main"
              component={BottomTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Address"
              component={AddAddressScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Delivery"
              component={DeliveryScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="login"
              component={Loginloadscreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="scanload"
              component={Scanbackscreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="logout"
              component={Logoutloadscreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Addload"
              component={Addressloadscreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Add"
              component={AddressScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Confirm"
              component={ConfirmationScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen name="scan" component={Scanscreen} />
            <Stack.Screen name="item" component={Productitemscreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </productupdate.Provider>
    </UserType.Provider>
  );
};

export default Navigater;
