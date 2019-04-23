import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header.js';
import Footer from "./src/components/Footer";
import Albumlist from "./src/components/Albumlist";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header headerText={'Albums'} />
        <Albumlist />
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
