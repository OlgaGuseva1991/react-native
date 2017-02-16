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
  View
} from 'react-native';
var _navigator;

export default class SecondScreen extends Component {
  componentWillMount(){
    _navigator = this.props.navigator
  }
  buttonPressed() {
    _navigator.pop()
  }

  render() {
    return (
      <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
      <Text> 2nd Screen </Text>
                <TouchableOpacity  onPress={this.buttonPressed}>
                  <Text style={{color:"lightblue"}}>next</Text>
                </TouchableOpacity>
      </View>

    );
  }
}
