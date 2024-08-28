import { Text, View } from "react-native";
import DealList from "../components/dealList.jsx";
import data from "../data/data.js";
export default function Index() {
 

  return (
    <View className="flex flex-1 items-center justify-center bg-gray-200">
      {data ? (
        <DealList data={data} /> // Render DealList only if data is not null
      ) : (
        <Text>Loading...</Text> // Display a loading message or spinner while data is being fetched
      )}
    </View>
  );
}
