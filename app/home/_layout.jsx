import React from 'react'
import { Stack } from 'expo-router'
const HomeLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="homeItems" options={{headerShown:false}}/>
    </Stack>
  )
}

export default HomeLayout