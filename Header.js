import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Header = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.header}>Dagens Nyheter</Text>
      <MaterialCommunityIcons name="newspaper-variant-outline" size={40} color="white" style={{marginTop:"5%", marginLeft: "2%"}} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#5F9EA0",
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    header: {
        color: "white",
        fontSize: 35,
        fontWeight: "bold",
        marginTop: "5%"
    }
})