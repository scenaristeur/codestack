
import {
    StyleSheet,
    View,
    Text,
    Button,
  } from "react-native";


export default function DetailsScreen({ route, navigation }) {
    const { id, otherParam } = route.params;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Text>id: {JSON.stringify(id)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button title="Accueil" onPress={() => navigation.navigate("Home")} />
        <Button
          title="Back to liste des stages"
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  }