import { View, Text, FlatList } from "react-native";
import React from "react";

const Feedback = () => {
  const feedbackData = [
    {
      id: "1",
      text: "Great app, very user-friendly!",
      author: "John Doe",
    },
    {
      id: "2",
      text: "Could use more features, but overall nice.",
      author: "Jane Smith",
    },
    {
        id: "3",
        text: "Great app, very user-friendly!",
        author: "John Doe",
      },
      {
        id: "4",
        text: "Could use more features, but overall nice.",
        author: "Jane Smith",
      },
  ];
  return (
    <View className='mt-5 mb-20'>
      <Text className="pb-2 px-4 text-lg tracking-tighter font-medium">
        Feedbacks
      </Text>
      {feedbackData.map((item, i) => (
        <View key={i} className="p-4">
          <Text className="text-base text-gray-800">{item.text}</Text>

          <Text className="text-sm text-gray-500 mt-2">{item.author}</Text>
        </View>
      ))}
    </View>
  );
};

export default Feedback;
