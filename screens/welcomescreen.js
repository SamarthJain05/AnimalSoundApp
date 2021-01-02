import React from 'react';
import { ImageBackground, StyleSheet, Text, View,  TouchableOpacity} from 'react-native';

export default class WelcomeScreen extends React.Component {
  render(){
  return (
    <ImageBackground source={require("../assets/background.jpg")} style={styles.bg}>
    <View style={styles.header}>
      <Text style={styles.textHeader}>Welcome to Animal World</Text>
    
      </View>
    <TouchableOpacity 
      style={styles.button} 
      onPress={()=>{
        this.props.navigation.navigate("Sound")
      }}>
        <Text style={styles.textHeader}>Click and Check it out!!</Text>
    </TouchableOpacity>
    
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
  },
  button:{
    margin:50,
    backgroundColor: "green",
    alignItems:"center",
    justifyContent:"center",
    width:"50%",
    height:60,
    borderRadius:15,
    alignSelf:"center"
  }

})
