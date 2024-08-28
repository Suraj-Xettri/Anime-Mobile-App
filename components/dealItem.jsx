import { View, Text, Image} from 'react-native'
import React from 'react'

const DealItem = ({deal}) => {
  return (
    <View>
        <Image source={{uri: deal.image}} className="w-screen object-cover h-[250px]"/>
        <Text className="text-xl text-center">{deal.name}</Text>
        <Text className="text-xl text-center">{deal.episode}</Text>
    </View>
  )
}

export default DealItem