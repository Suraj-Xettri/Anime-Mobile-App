import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

const HomeBody = () => {
    const data = [
        {
          title: "Chainsaw Man",
          image: require("../../assets/images/one.jpg"),
          genre: "Action, Comedy, Dark Fantasy",
        },
        {
          title: "Attack on Titan",
          image: require("../../assets/images/two.jpg"),
          genre: "Action, Fantasy, Drama",
        },
        {
          title: "My Hero Academia",
          image: require("../../assets/images/three.jpg"),
          genre: "Action, Superhero, Adventure",
        },
      ];
  return (
    <View className="w-full mt-8">
      <View className="px-4 flex justify-evenly flex-row w-full">
        <Text className="bg-[#E84A28] text-white px-4 py-1 rounded-xl">
          Anime
        </Text>
        <Text className="px-4 py-1">Manhwa</Text>
        <Text className="px-4 py-1">Manga</Text>
        <Text className="px-4 py-1">Manhwa</Text>
      </View>

      <View className="p-2 mt-3">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {data.map((item, index) => (
            <View
              key={index}
              className="p-4 rounded-3xl bg-white mx-2"
              style={{ width: 250 }}
            >
              <Image
                source={item.image}
                className="w-[220] h-[300] rounded-xl"
              />
              <View className="flex justify-center items-center mt-3">
                <Text className="text-lg font-medium">{item.title}</Text>
                <Text className="text-zinc-400 tracking-tighter">{item.genre}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

    </View>
  );
};

export default HomeBody;
