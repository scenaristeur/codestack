
import { useState, useEffect, useContext } from "react";
import {AppContext} from '../app-context';

import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Button,
    ActivityIndicator
  } from "react-native";
  import StageListeItem from "../components/StageListeItem";


export default function ListeStagesScreen({ navigation}) {
  const appContext = useContext(AppContext);
  // console.log("app context", appContext)
   const api = appContext.api
  // console.log("API", api)
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
      <View style={styles.container}>
  
        <View style={styles.container}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={data}
              keyExtractor={({ id }) => id}
              renderItem={({ item }) => (
                <StageListeItem item={item} navigation={navigation} />
              )}
            />
          )}
        </View>
  
        <Button title="Accueil" onPress={() => navigation.navigate("Home")} />
        {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: "#25292e",
      alignItems: "center",
      // height: "760px",
    },
    // image: {
    //   width: 320,
    //   height: 440,
    //   borderRadius: 18,
    // },
    // footerContainer: {
    //   flex: 1,
    //   alignItems: "center",
    // },
    // item: {
    //   backgroundColor: "#f9c2ff",
    //   padding: 20,
    //   marginVertical: 8,
    //   marginHorizontal: 16,
    // },
    // title: {
    //   fontSize: 32,
    // },
  });