import { View, Text } from 'react-native'
import React from 'react'

const HomeBody = () => {
  return (
    <View className="w-full mt-8">
      <View className="px-4 flex justify-evenly flex-row w-full">
        <Text className='bg-[#E84A28] text-white px-4 py-1 rounded-xl'>Anime</Text>
        <Text className='px-4 py-1'>Manhwa</Text>
        <Text className='px-4 py-1'>Manga</Text>
        <Text className='px-4 py-1'>Manhwa</Text>
      </View>
    </View>
  )
}

export default HomeBody