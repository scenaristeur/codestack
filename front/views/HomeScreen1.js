

import {
    StyleSheet,
    View,
    Text,
    Button,
  } from "react-native";


export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Accueil</Text>
        <Text>
          Photo
        </Text>
        <Text>Text</Text>
        <Button
          title="Reserver"
          onPress={() => navigation.navigate("ListeStages")}
        />
      </View>
    );
  }