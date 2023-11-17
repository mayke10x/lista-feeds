import { useEffect, useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

import axios from 'axios';

import { Feed } from './components/Feed'

export default function App() {
  const [feeds, setFeeds] = useState([]);

  async function busca_feeds() {
    await axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setFeeds(response.data))
      .catch(() => console.log('erro'))
  }

  useEffect(() => {
    busca_feeds()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Listagem de Feeds </Text>
      
      <ScrollView>
        {
          feeds.map(feed => {
            return (
              <Feed title={feed.title} content={feed.body} />
            )
          })
        }
      </ScrollView>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 40,
    gap: 10,
  },

  text: {
    color: '#fff',
    fontSize: 32,
    marginBottom: 20,
    alignSelf: 'center'
  }
});
