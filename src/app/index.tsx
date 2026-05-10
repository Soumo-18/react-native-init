import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Switch, Text, View, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const themes = {
  light: {
    background: "#FFFFFF",
    card: "#F5F5F5",
    text: "#1A1A1A",
    subtext: "#666666",
    accent: "#6C63FF",
  },
  dark: {
    background: "#121212",
    card: "#1E1E1E",
    text: "#FFFFFF",
    subtext: "#AAAAAA",
    accent: "#9D97FF",
  },
};

const HomeScreen = () => {
  const systemScheme = useColorScheme(); //light \ dark
  const [manualDark, setManualDark] = useState<boolean | null>(null);

  const isDark = manualDark !== null ? manualDark : systemScheme === "dark";

  const theme = isDark ? themes.dark : themes.light;

  console.log(systemScheme);
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <StatusBar style={manualDark ? "light" : "dark"} />
      {/* Header */}
      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <Text style={[styles.title, { color: theme.text }]}>
          {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </Text>
        <Text style={[styles.subtitle, { color: theme.subtext }]}>
          System preference: {systemScheme ?? "unknown"}
        </Text>
      </View>

      {/* Toggle Row */}
      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <View style={styles.row}>
          <Text style={[styles.label, { color: theme.text }]}>
            Override system theme
          </Text>
          <Switch
            value={manualDark ?? systemScheme === "dark"}
            onValueChange={setManualDark}
            trackColor={{ false: "#ddd", true: theme.accent }}
            thumbColor="white"
          />
        </View>
      </View>

      {/* Content Card */}
      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <Text style={[styles.title, { color: theme.accent }]}>
          Themed Card 🎨
        </Text>
        <Text style={[styles.subtitle, { color: theme.subtext }]}>
          Colors adapt to dark/light mode automatically
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12 },
  card: { padding: 20, borderRadius: 16 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 20, fontWeight: "bold" },
  subtitle: { fontSize: 14, marginTop: 4 },
  label: { fontSize: 16 },
});




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
