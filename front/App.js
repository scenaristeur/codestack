
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";


import {
  StyleSheet,
  View,

  Text,
  Button,
  } from "react-native";

// import Button from "./components/Button";
// import ImageViewer from "./components/ImageViewer";
import HomeScreen from "./views/HomeScreen"

import DetailsScreen from "./views/DetailsScreen";
import ListeStagesScreen from "./views/ListeStagesScreen";

import {AppContext} from './app-context';



const appContext = {
  api : "http://localhost:8000/api/"
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppContext.Provider value={appContext}>
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
          options={{ title: "Liste des stages"}}
          // api={api}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
    </AppContext.Provider >
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
