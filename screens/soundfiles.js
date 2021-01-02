import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default class SoundScreen extends React.Component {
  render(){
  return (
    <ImageBackground source={require("../assets/background.jpg")} style={styles.bg}>
    <View style={styles.header}>
      <Text style={styles.textHeader}>Animal Sound</Text>
    </View>
    </ImageBackground>
  );
}
}
const styles=StyleSheet.create({
  bg:{
    alignItems:"center",
    width:"100%",
    height:"100%"
  },
  header:{
    backgroundColor: "green",
    alignItems:"center",
    justifyContent:"center"
  },
  textHeader:{
    fontSize: 28,
    color:"white",
    fontWeight:"bold"
  }
})
