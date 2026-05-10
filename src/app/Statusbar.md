import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'react-native'
const HomeScreen = () => {
  return (
    <SafeAreaView>
    <View style={styles.card} >
      <StatusBar style="dar" />
      <Text style={styles.title}>HomeScreen</Text>
      <Text style={styles.subtitle}>HomeScreen</Text>
    </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  card:{
    backgroundColor:"white",
    borderRadius:16,
    padding:20,
    margin:16,
    elevation:4,
    shadowColor:"#000",
    shadowOpacity:0.1,
    shadowRadius:8,

  },
  title:{

  },
  subtitle:{
    
  }
})