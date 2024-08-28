import { View, Text, Image } from "react-native";
import React from "react";

const HomeSecond = () => {
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
      title: "One Piece",
      image: require("../../assets/images/three.jpg"),
      genre: "Action, Superhero, Adventure",
    },
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
        title: "One Piece",
        image: require("../../assets/images/three.jpg"),
        genre: "Action, Superhero, Adventure",
      },
    
  ];
  return (
    <View className="mt-5">
      <Text className="pb-2 px-4 text-lg tracking-tighter font-medium">New Episode Release</Text>

      <View className="flex  flex-row space-y-3 flex-wrap mt-2">
        {data.map((item, index) => (
          <View
            key={index}
            className="rounded-xl bg-white mx-2 py-2 overflow-hidden"
            style={{ width: 174 }}
          >
            <Image source={item.image} className="w-full h-[200] rounded-xl" />
            <View className="flex justify-center items-center mt-3">
              <Text className="text-sm font-medium">{item.title}</Text>
              <Text className="text-zinc-400 tracking-tighter text-[12px] whitespace-wrap">
                {item.genre}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default HomeSecond;
