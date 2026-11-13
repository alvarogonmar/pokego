import { StyleSheet, Text, View } from "react-native";

const pokeAPI = "https://pokeapi.co/api/v2/pokemon?limit=20";
export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
