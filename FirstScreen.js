/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
var _navigator;

export default class FirstScreen extends Component {

  componentWillMount(){
    _navigator = this.props.navigator
  }
  buttonPressed(){
    _navigator({
      id:"SecondScreen"
    })
  }

  render() {
    return (
      <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
      <Text> 1st Screen </Text>

        <TouchableOpacity  onPress={this.buttonPressed.bind(this)}>
          <Text style={{color:"lightblue"}}>next</Text>
        </TouchableOpacity>
      </View>

    );
  }
}
