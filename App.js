import React, { useState } from "react";
import { StyleSheet, Image, View, TextInput } from "react-native";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image source={require("./assets/Header.jpg")} style={styles.image} />
      <TextInput
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        style={styles.input}
        secureTextEntry={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  input: {
    width:300,
    margin:12,
    padding:3,
    borderbottomwidth:1,
  },
});
