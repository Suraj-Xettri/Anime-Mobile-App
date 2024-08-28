import { View, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import HomeTop from "./homeTop";
import HomeBody from "./homeBody";
import HomeSecond from "./HomeSecond";
import Feedback from "./feedback";

const Home = () => {
  return (
    <SafeAreaView className='flex-1'>
      <ScrollView className="pt-10 bg-[#d7d5d5] h-full">
        <HomeTop />
        <HomeBody />
        <HomeSecond/>
        <Feedback/>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
