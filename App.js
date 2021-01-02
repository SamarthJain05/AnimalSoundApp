import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import WelcomeScreen from './screens/welcomescreen'
import SoundScreen from './screens/soundfiles'

export default class App extends React.Component{
  render(){
  return (
    <View>
      <AppContainer/>
    </View>
  );
}
}
const switchNavigator = createSwitchNavigator({
  Welcome:{screen:WelcomeScreen},
  Sound:{screen: SoundScreen}
})

const AppContainer = createAppContainer(switchNavigator)

