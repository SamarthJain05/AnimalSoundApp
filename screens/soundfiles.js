import React from 'react';
import { ImageBackground, StyleSheet, Text, View,Image, TextInput, TouchableOpacity } from 'react-native';
import {Header} from "react-native-elements"

export default class SoundScreen extends React.Component {
  render(){
  return (
    <ImageBackground source={require("../assets/background.jpg")} style={styles.bg}>
      
      <Header 
        backgroundColor="brown"
        centerComponent ={{
          text: "Animal Sound App",
          style:{
            fontSize: 28,
            color:"white",
            fontWeight:"bold",
            textAlign: 'center',
          }
        }}
      />

      <Image 
      source={{
        uri:  'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png'
      }} 
      style = {{width:120, height:120, alignSelf:"center"}}/>

      <TextInput style={styles.input}/>


      <TouchableOpacity
          style={styles.goButton}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>

    </ImageBackground>
  );
}
}
const styles=StyleSheet.create({
  bg:{
    flex:1,
    backgroundColor:"red",
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
    color:"black",
    fontWeight:"bold"
  },
  input:{
    marginTop: 50,
    width: '60%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    fontSize:20,
    borderWidth: 4,
    outline: 'none',
    borderRadius:20,
    backgroundColor:'whitesmoke'
  },
  goButton: {
    width: '30%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 20,
    backgroundColor: 'brown',
    borderWidth: 4,
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color:'yellow'
  },
})
