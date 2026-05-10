import * as ScreenOrientation from "expo-screen-orientation";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { height, width } = useWindowDimensions();

  const isTablet = width >= 768;
  const isLandscape = width > height;

  const lockLanscape = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE,
    );
  };

  const lockPortrait = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT,
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: width * 0.06 }}>Responsive Text 📱</Text>

      <View
        style={{
          flexDirection: isTablet ? "row" : "column",
        }}
      >
        <View
          style={{
            width: isTablet ? width / 2 : width - 32,
            backgroundColor: "#6C63FF",
            padding: 20,
            borderRadius: 12,
            marginBottom: isTablet ? 0 : 12,
          }}
        >
          <Text style={{ color: "white" }}>Card 1</Text>
        </View>
        <View
          style={{
            width: isTablet ? width / 2 : width - 32,
            backgroundColor: "#FF6584",
            padding: 20,
            borderRadius: 12,
          }}
        >
          <Text style={{ color: "white" }}>Card 2</Text>
        </View>
      </View>

      <Text style={{ color: "#888", marginTop: 16 }}>
        Screen: {Math.round(width)} × {Math.round(height)}
        {isLandscape ? " (Landscape)" : " (Portrait)"}
      </Text>

      {/* Orientation Buttons */}
      <View style={{ flexDirection: "row", gap: 12, marginTop: 24 }}>
        <Pressable
          onPress={lockLanscape}
          style={{
            flex: 1,
            backgroundColor: "#6C63FF",
            padding: 12,
            borderRadius: 8,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>Force Landscape 🔄</Text>
        </Pressable>

        <Pressable
          onPress={lockPortrait}
          style={{
            flex: 1,
            backgroundColor: "#FF6584",
            padding: 12,
            borderRadius: 8,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>Force Portrait 📱</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

// import React from 'react'
// import { StyleSheet,Text,View,FlatList} from 'react-native';
// const USERS = [
//   { id: '1', name: 'Alice Johnson', role: 'Designer' },
//   { id: '2', name: 'Bob Smith', role: 'Developer' },
//   { id: '3', name: 'Carol White', role: 'Manager' },
//   { id: '4', name: 'David Brown', role: 'Developer' },
//   { id: '5', name: 'Eve Davis', role: 'Designer' },
// ];

// const HomeScreen = () => {
//   return (
//     <FlatList
//      data={USERS}
//       keyExtractor={(item) => item.id }
//       contentContainerStyle={{ padding: 16, backgroundColor:"green"}}
//       renderItem={( { item }) => <Text>{item.name}</Text> }
//       ItemSeparatorComponent={() => (
//         <View style={{ height:1, backgroundColor:"black"}} />
//       )}
//     />

//   )
// }

// export default HomeScreen

// import { ScrollView, StyleSheet, Text, View,Button, Switch } from 'react-native'
// import React from 'react'
// import {  } from '@react-navigation/elements';

// const HomeScreen = () => {
//   const items = Array.from({length:5}, (_,i) => `Item ${i+1}`);
//   return (
//     <ScrollView
//      style={{flex:1}} contentContainerStyle={{
//       padding:16,
//       alignItems:'center'
//      }} >
//       {
//         items.map((item)=>(
//           <View
//           key={item}
//           style={{
//             backgroundColor: 'white',
//             padding: 16,
//             borderRadius: 10,
//             marginBottom: 10,
//             shadowColor: '#000',
//             shadowOpacity: 0.05,
//             shadowRadius: 4,
//             elevation: 2,
//           }}
//         >
//           <Text style={{ fontSize: 16 }}>{item}</Text>
//         </View>

//         ))
//       }

//      <Button
//       title='Helllo'
//        color={"green"}
//         onPress={() => alert('Hello world')}
//      ></Button>

//       <Switch></Switch>
//     </ScrollView>
//   )
// }

// export default HomeScreen

// const styles = StyleSheet.create({})

// import { View,Text, TextInput, Pressable } from "react-native";
// import { useState } from "react";
// export default function HomeScreen() {
//   const [name, setName] = useState("")
//   return (
//    <View>
//       <Text numberOfLines={2}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quaerat inventore officia rerum aliquam? In cumque consectetur modi incidunt iste! Hello WOrld</Text>

//   <TextInput
//     placeholder="Enter Your Name"
//     value={name}
//     onChangeText={setName}
//     placeholderTextColor={"blue"}
//     style={{
//       borderWidth:1,
//     }}
//     />

//     <Pressable
//       onPress={() => alert("Button Pressed")}
//       style={
//         ({pressed})=>({
//           backgroundColor:pressed ? "#10cfaf" : "#3b87eb"
//         })
//       }
//     >
//       { ({ pressed }) =>
//         pressed ? <Text>Presssing..</Text> : <Text>Press Me</Text>
//       }

//     </Pressable>

//     </View>

//   )
// }

//to render text we have to use Text Component
//andriod -> andriod.view.ViewGroup
//iOS-> UIView
