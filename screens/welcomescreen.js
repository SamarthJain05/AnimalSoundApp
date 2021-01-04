import React from 'react';
import { ImageBackground, StyleSheet, Text, View,  TouchableOpacity} from 'react-native';

export default class WelcomeScreen extends React.Component {
  render(){
  return (
    <ImageBackground source={require("../assets/background.jpg")} style={styles.bg}>
        <View style = {{alignItems:'center',marginTop:60}}>
       
          <Text style={styles.textHeader}>Welcome to Animal World</Text>
        
        <View style={{marginTop:200}}>
      
          <TouchableOpacity 
            style={styles.button} 
            onPress={()=>{
              this.props.navigation.navigate("Sound")
            }}>
              <Text style={{fontSize: 28,color:"green",fontWeight:"bold"}}>Click and Check it out!!</Text>



          </TouchableOpacity>

        </View>

          <View style={{marginTop:200}}>

          </View>
      </View>
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
    color:"white",
    fontWeight:"bold"
  },
  button:{
    margin:50,
    backgroundColor: "white",
    alignItems:"center",
    justifyContent:"center",
    width:"90%",
    height:70,
    borderRadius:15,
    alignSelf:"center"
  }

})
