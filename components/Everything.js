import React from "react";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import ResultsNotFound from "./ResultsNotFound";

const Everything = ({ navigation, route }) => {
  const { articlesURI } = route.params
  const [Everything,setEverything] = useState([])

  useEffect(() => {
    fetch(articlesURI)
      .then((response) => response.json())
      .then((data) => {
       console.log(data);
        setEverything(data)

      })
      .catch((error) => {
        console.log(error);
      })
      .finally()

  }, [])

  return (
    <View style={styles.container}>
      {Everything.length ?
        <View>
          {
            Everything.map(articles => (
              <View key={articles.name} style={styles.container}>
                <Text> Description : {articles.url}</Text>

              </View>
            ))
          }
        </View>
        : <ResultsNotFound />

      }

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardview: {
    flexDirection: 'row',
    padding: 20,
    marginBottom: 10,
    margin: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 5,
    shadowRadius: 20


  }
});
export default Everything
