import { useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function details() {
  const params = useLocalSearchParams<{
    name: string;
    type: string;
    color: string;
    image: string;
  }>();
  return (
    <View style={{ flex: 1, backgroundColor: params.color }}>
      <Text style={styles.name}>{params.name}</Text>
      <Text style={styles.tag}>{params.type}</Text>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Image
          source={{ uri: params.image }}
          style={{ width: 300, height: 300 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  tag: {
    fontSize: 28,
    fontWeight: "bold",
    color: "gray",
    textAlign: "center",
  },
});
