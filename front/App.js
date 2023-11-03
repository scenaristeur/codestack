import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Button,
  ActivityIndicator,
} from "react-native";

// import Button from "./components/Button";
import ImageViewer from "./components/ImageViewer";

const Item = ({ item, navigation }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
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

let api = "http://localhost:8000/api/";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Accueil</Text>
      <Button
        title="Reserver"
        onPress={() => navigation.navigate("ListeStages")}
      />
    </View>
  );
}

function ListeStagesScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(api + "notes");
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>ListeStagesScreen</Text>

      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <Item item={item} navigation={navigation} />
            )}
          />
        )}
      </View>

      <View style={styles.footerContainer}>
        {/* <Button
            theme="primary"
            label="Choose a photo"
            onPress={pickImageAsync}
          />
          <Button label="Use this photo" /> */}
      </View>
      <StatusBar style="auto" />

      <Button title="Accueil" onPress={() => navigation.navigate("Home")} />
      {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Code 'n Surf" }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen
          name="ListeStages"
          component={ListeStagesScreen}
          options={{ title: "Liste des stages" }}
        />
      </Stack.Navigator>
      {/* <View style={styles.container}>

      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <Item item={item} />
            )}
          />
        )}
      </View>

      <View style={styles.footerContainer}>
        <Button
          theme="primary"
          label="Choose a photo"
          onPress={pickImageAsync}
        />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View> */}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#25292e",
    alignItems: "center",
    // height: "760px",
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1,
    alignItems: "center",
  },
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
