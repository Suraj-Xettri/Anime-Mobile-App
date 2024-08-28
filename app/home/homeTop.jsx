import { View, Text, Image, TextInput } from "react-native";
import React from "react";

const HomeTop = () => {
  return (
    <View className="w-full px-4 flex items-center justify-center space-y-5">
      <View className="flex w-full flex-row items-center justify-between ">
        <Image
          source={require("../../assets/images/menu.png")}
          className="w-12 h-12 rounded-full"
        />
        <Image
          source={require("../../assets/images/luffy.jpg")}
          className="w-12 h-12 object-container rounded-full"
        />
      </View>

      <View className="w-full relative">
        <TextInput placeholder="Search" className="border border-zinc-200 px-4 py-3 rounded-xl"/>

        <Image source={require('../../assets/images/search.png')} className="absolute w-8 h-8 right-2 top-2"/>
      </View>
    </View>
  );
};

export default HomeTop;
