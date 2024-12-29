import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import LottieView from "lottie-react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";

const Loginloadscreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Main");
    }, 2000);
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LottieView
        style={{ width: 300, height: 300 }}
        source={require("../../assets/login.json")}
        autoPlay
        loop
      />
    </View>
  );
};

export default Loginloadscreen;
