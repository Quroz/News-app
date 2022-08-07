import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import ArticleContainer from './ArticleContainer';
import Header from './Header';
import SearchContainer from './SearchContainer';
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator()

export default function App() {

  return (
    <View style={styles.container}>
      <Header/>
        <NavigationContainer>
     <Tab.Navigator screenOptions={{
       tabBarActiveTintColor: "green",
       headerShown: false   
}}>
       <Tab.Screen name = "Home" component = {ArticleContainer} options={{
         tabBarIcon: () => <Entypo name="home" size={24} color="black" />
       }}/>
        <Tab.Screen name = "Search" component = {SearchContainer} options={{
         tabBarIcon: () => <FontAwesome name="search" size={24} color="black" />
       }}/>
     </Tab.Navigator>
   </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
