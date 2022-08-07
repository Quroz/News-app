import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import Article from "./Article"
import axios from 'axios';

const ArticleContainer = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    axios({
      method: "GET",
      url: "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=58d98c29c52a49acb10ee737175d81b1"
    }).then((res) => {
      setData(res.data.articles)
    }).catch((e) => {
      console.log(e)
    }).finally(() =>{
      setLoading(false)
    })
  }, [])

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator/>}
      <FlatList
      data = {data}
      renderItem={({item, index}) => (
         <Article
          title = {item.title}
          description = {item.description}
          image =  {item.urlToImage}
          author = {item.author}
          date = {item.publishedAt}
          source = {item.source.name}
          url = {item.url}
          index = {index}
         />
      )}
      />
    </View>
  )
}

export default ArticleContainer

const styles = StyleSheet.create({
    container: {
        flex: 7,
        padding: 7,
        backgroundColor: "#F5F5F5"
    }
})