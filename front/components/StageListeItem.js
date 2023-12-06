import {
  StyleSheet,
  View,
  Text,
  // FlatList,
  Button,
  // ActivityIndicator
} from "react-native";

export default function StageListeItem({ item, navigation }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>Le stage :{item.title}</Text>
      <Text>{item.content}</Text>
      <Button
        title="Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate("Details", {
            id: item.id,
            otherParam: "anything you want here",
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
