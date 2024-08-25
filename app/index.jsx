import { StatusBar, Text, View } from "react-native";
import { fetchInitialDeals } from "../components/ajiax.js";
export default function Index() {
  const res = fetchInitialDeals
  console.log(res)
  return (
    <View className="flex flex-1 items-center justify-center bg-gray-200">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
