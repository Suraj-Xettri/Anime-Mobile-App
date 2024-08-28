import { Link } from "expo-router";
import { Text, View, Image} from "react-native";
export default function Index() {

  return (
    <View className="flex flex-1 pt-9 items-center bg-gray-200">
      <Image source={require('../assets/images/chainswaman.jpg')} className="w-full object-cover h-[550]"/>

      <Text className="text-xl font-medium mt-5">Chainswa Man World</Text>

      <Link href={'home'} className="mt-5 px-10 py-4 rounded-xl bg-[#E84A28] text-white font-semibold">
        Let's Go
      </Link>
    </View>
  );
}
