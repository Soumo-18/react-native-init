import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
const styleA = StyleSheet.create({ text: { color:"red", fontSize:16 }})
const styleB = StyleSheet.create({
  text:{ fontSize:24, fontWeight:"bold"},
})
const flat = StyleSheet.flatten([styleA.text, styleB.text])

const HomeScrren = () => {
  return (
    <View>
      <Text style={flat}>FLattened Style</Text>
    </View>
  )
}

export default HomeScrren

const styles = StyleSheet.create({})
