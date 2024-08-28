import { View, Text, FlatList } from "react-native";
import React from "react";
import DealItem from "./dealItem";
const DealList = ({ data }) => {
  return (
    <View className="flex-1 w-full pt-7 items-center justify-center">
      <FlatList
        data={data}
        renderItem={({ item }) => <DealItem deal={item}/>}
      />
    </View>
  );
};

export default DealList;
