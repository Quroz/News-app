import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import moment from 'moment'
import * as WebBrowser from 'expo-web-browser';

const Article = ({title,description,image,author,date,source,url, index}) => {


  function source(){
    WebBrowser.openBrowserAsync(url);
  }

  return (
    <Pressable style = {[styles.container, {marginTop: index === 0 ? 0 : 20}]}
    onPress={source}
    >
        <Image
        source={{uri: image}}
        style = {styles.image}
        />
        <View style = {styles.contentContainer}>
            <View style = {styles.firstContainer}>
                <Text style = {styles.header}>{title}</Text>
                <Text style = {styles.description} numberOfLines={2}>{description}</Text>
            </View>
                <View style = {styles.secondContainer}>
            <View style = {styles.dateAuthorContainer}>
                    <Text style = {styles.authorBy}>By: 
                    <Text style = {styles.author}> {author}</Text>
                    </Text>
                    <Text style = {styles.date}>{moment(date).format("MMM Do YY")}</Text>
                </View>
                <View style = {styles.sourceContainer}>
                    <Text style = {styles.source}>Source:</Text>
                    <Text style = {styles.sourceBy}> {source}</Text>
                </View>
            </View>
        </View>
      
    </Pressable>
  )
}

export default Article

const styles = StyleSheet.create({
    container: {
       width: "100%",
       backgroundColor: "#D3D3D3",
       height: 412,
       borderRadius: 20,
    },
    image: {
        height: 200,
        width: "100%",
        resizeMode: "cover",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    contentContainer: {
        paddingHorizontal: 20,
        marginTop: 10,
        flex: 1
    },
    header: {
        fontWeight: "bold",
        fontSize: 17
    },
    description: {
        fontSize: 15,
        marginTop: 10
    },
    dateAuthorContainer: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    authorBy: {
        fontSize: 15
    },
    author: {
        fontSize: 15,
        fontWeight: "bold"
    },
    date: {
        color: "#3CB371",
        fontSize: 15,
        fontWeight: "bold"
    },
    sourceContainer: {
        marginTop: 10,
        flexDirection: "row",
    },
    source: {
        fontSize: 15
    },
    sourceBy: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#3CB371"
    },
    firstContainer: {
        flex: 2
    },
    secondContainer: {
         flex: 1.2
    }
})