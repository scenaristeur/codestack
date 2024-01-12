

import {
    StyleSheet,
    View,
    Text,
    Button,
  } from "react-native";
  //import ParallaxScrollView from 'react-native-parallax-scroll-view';


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

  