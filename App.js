import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import Home from './Components/Home/Home';
import Product from './Components/Home/Product';




export default function App() {
  return (
    <SafeAreaView style={styles.container}>




      <ScrollView >
        <Text>Hello From React Native</Text>
        <Home></Home>
        <Product></Product>

        <StatusBar style="auto" />
      </ScrollView>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
