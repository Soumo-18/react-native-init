import React from "react"
import { StatusBar, StyleSheet,Text,View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const HomeScreen = () => {
  const insets = useSafeAreaInsets()
  console.log(insets)
  return (
    <View
      style={{
        flex:1,
        paddingTop:insets.top,
        paddingBottom:insets.bottom,
      }}
    >
      <StatusBar barStyle={"dark-content"} />
      <Text>HomeScreen</Text>

     </View>
  )
}
export default HomeScreen
const styles= StyleSheet.create({})