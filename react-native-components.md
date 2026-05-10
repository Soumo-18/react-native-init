// import { useState } from "react";
// import { Image, Pressable, Text, TextInput, View } from "react-native";

// export default function HomeScreen() {
// const [name, setName] = useState("");
// return (
// <View>
// <Text numberOfLines={2}>
// oribus autem officia provident fugit consequuntur. Cum, suscipit!
// </Text>

// {/_ Remote image from internet _/}
// {/_ <Image
// source={{
//           uri: "https://chaicode.com/assets/hitesh-suraj-dark-CKHA9jfT.webp",
//         }}
// width={200}
// height={200}
// /> _/}

// {/_ Local image _/}
// <Image
// source={require("@/assets/images/icon.png")}
// style={{
//           height: 100,
//           width: 100,
//         }}
// blurRadius={30}
// />

// <TextInput
// placeholder="enter your name"
// value={name}
// onChangeText={setName}
// placeholderTextColor={"blue"}
// style={{
//           borderWidth: 1,
//           borderColor: "#ddd",
//           marginTop: 10,
//           fontSize: 24,
//         }}
// />

// <Pressable
// onPress={() => alert("Button Pressed")}
// style={({ pressed }) => ({
// backgroundColor: pressed ? "#4a42d4" : "#6C63FF",
// })}
// hitSlop={{
//           top: 10,
//           bottom: 10,
//           left: 20,
//           right: 20,
//         }}
// >
// {({ pressed }) =>
// pressed ? <Text>Presssing...</Text> : <Text>Press me</Text>
// }
// </Pressable>
// </View>
// );
// }

import React, { useState } from "react";
import {
Button,
ScrollView,
StyleSheet,
Switch,
Text,
View,
} from "react-native";

const HomeScreen = () => {
const items = Array.from({ length: 5 }, (\_, i) => `Item ${i + 1}`);
const [isDarkMode, setIsDarkMode] = useState(false);

console.log("hello");
return (
<ScrollView
style={{ flex: 1 }}
contentContainerStyle={{
        padding: 16,
        alignItems: "center",
      }} >
{items.map((item) => (
<View
key={item}
style={{
            backgroundColor: "white",
            padding: 16,
            borderRadius: 10,
            marginBottom: 10,
            shadowColor: "#000",
            shadowOpacity: 0.05,
            shadowRadius: 4,
            elevation: 2,
          }} >
<Text style={{ fontSize: 16 }}>{item}</Text>
</View>
))}

      <Button
        title="Hello i am button"
        color={"green"}
        onPress={() => alert("Hello world")}
      />
      <Switch
        value={isDarkMode}
        onValueChange={setIsDarkMode}
        trackColor={{ false: "#ddd", true: "#6c63ff" }}
        thumbColor={"yellow"}
      />
    </ScrollView>

);
};

export default HomeScreen;

const styles = StyleSheet.create({});

import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const USERS = [
{ id: "1", name: "Alice Johnson", role: "Designer" },
{ id: "2", name: "Bob Smith", role: "Developer" },
{ id: "3", name: "Carol White", role: "Manager" },
{ id: "4", name: "David Brown", role: "Developer" },
{ id: "5", name: "Eve Davis", role: "Designer" },
];

const HomeScreen = () => {
return (
<FlatList
style={{
        backgroundColor: "red",
      }}
data={USERS}
horizontal
keyExtractor={(item) => item.id}
contentContainerStyle={{ padding: 16, backgroundColor: "green" }}
renderItem={({ item }) => <Text>{item.name}</Text>}
ItemSeparatorComponent={() => (
<View style={{ height: 1, backgroundColor: "black" }} />
)}
/>
);
};

export default HomeScreen;

const styles = StyleSheet.create({});