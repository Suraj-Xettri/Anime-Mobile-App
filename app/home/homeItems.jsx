import { View, Text } from 'react-native'
import React from 'react'
import HomeTop from './homeTop'
import HomeBody from './homeBody'

const Home = () => {
  return (
    <View className="pt-10">
      <HomeTop/>
      <HomeBody/>
    </View>
  )
}

export default Home