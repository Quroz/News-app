import { StyleSheet, Text, View, TextInput, FlatList, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Article from './Article'

const SearchContainer = () => {

const [search, setSearch] = useState("")
const [data, setData] = useState([])
const [loading, setLoading] = useState(false)
const [show, setShow] = useState(false)

function handleSearch(){
    setLoading(true)
      axios({
          method: "GET",
          url: `https://newsapi.org/v2/top-headlines?country=us&category=technology&q=${search}&apiKey=58d98c29c52a49acb10ee737175d81b1`
      }).then((res) => {
        setData(res.data.articles)
        if(data.length === 0){
            console.warn("No articles found!")
            setShow(false)
        }
        else
         setShow(true)
      }).catch((e) =>{
          console.log(e)
      }).finally(() => {
          setLoading(false)
      })
}
  return (
    <View style = {styles.container}>
    <TextInput
        value = {search}
        onChangeText={text => {
            setSearch(text)
            setShow(false)
        }}
        style = {styles.input}
        placeholder='Enter a category...'
        placeholderTextColor={"gray"}
        onSubmitEditing={handleSearch}
        clearButtonMode="always" 
     />
     {loading && <ActivityIndicator/>}
     {show ? (
             search !== "" && (
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
            )}/>
             )
     ) : (
        <Text></Text>
     )}
    
    </View>
  )
}

export default SearchContainer

const styles = StyleSheet.create({
    container: {
        padding: 7,
        backgroundColor: "#F5F5F5",
    },
    input: {
        padding: 10,
        backgroundColor: "white",
        borderRadius: 20,
        borderWidth: 1,
        marginBottom: 5
    }
})