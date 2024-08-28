import { View, StyleSheet } from "react-native";
import React from "react";
import HomeTop from "./homeTop";
import HomeBody from "./homeBody";

const Home = () => {
  return (
    <View className="pt-10 bg-[#E6E6E6] h-full">
      <HomeTop />
      <HomeBody />
    </View>
  );
};
export default Home;
