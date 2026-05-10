//window dimensions
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  const { height, width } = useWindowDimensions()
  console.log({
    height,
    width,
  })
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
